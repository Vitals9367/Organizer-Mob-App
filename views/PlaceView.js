import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, DeviceEventEmitter, Text, View,ScrollView , TouchableOpacity, addons, Linking } from 'react-native';
import {GetPhoto,GetPlaceDetails} from "../services/mapService";
import StarRate from "../components/StarRate";
import PriceRate from "../components/PriceRate";
import Loading from './Loading';
import { Map } from "react-native-feather";

export default function PlaceView({route, navigation}) {

    let place = route.params.place;
    
    const [imageUrl,setImageUrl] = useState(require('../assets/default-image.jpg'));
    const [detailInfo,setDetailInfo] = useState(null);
    const [reviewAmount,setReviewAmount] = useState(1);

    useEffect(()=>{

      let isMounted = true;

      (async () => {

        if(place.photos){
            await GetPhoto(place.photos[0].photo_reference,400).then(res =>{
            if(isMounted)
              setImageUrl({uri:res});
          });
          }
      })();
     
      GetPlaceDetails(place.place_id).then(res =>{
        setDetailInfo(res);
      })

      return () => { isMounted = false };

    },[])
    
    const openWebsite = (url) => {
      Linking.openURL(url);
    }
    const openPhone = (phone) => {
      Linking.openURL(`tel:${phone}`);
    }
    const openAuthor = (url) => {
      Linking.openURL(url);
    }
    const viewOnMap = () => {

      const location = {
        coords:{
          latitude:place.geometry.location.lat,
          longitude:place.geometry.location.lng,
        }
      }
      navigation.navigate("Map");
      DeviceEventEmitter.emit('event.viewOnMap', location);
    }

    const onLoadMore = () => {
      setReviewAmount(reviewAmount+5);
    }

  return (
    <View>

      <ScrollView style={styles.container}>

          <View>
            <Image style={{...styles.image,width: '100%', height: 200}} source={imageUrl}/>
          </View>
        <View style={{padding: 20, paddingTop: 5}}>
          <Header place={place}/>

          {detailInfo
          ? 
          <>
          <View style={styles.infoBox}>
            <Text style={styles.titles}>Working Hours</Text>
            {detailInfo.opening_hours
            ? <Text>{detailInfo.opening_hours.weekday_text.join(',\n')}</Text>
            : <Text>No Info</Text>}
          </View>
          
          <View style={styles.infoBox}>
            <Text style={styles.titles}>Contacts</Text>
            <View style={styles.flexRow}>

              {detailInfo.website
              && <TouchableOpacity
              onPress={() => openWebsite(detailInfo.website)}
              >
                <Text style={{color:'#00BEB3',fontSize:16, marginBottom:5}}>Click to go to website</Text>
              </TouchableOpacity>}

              {detailInfo.formatted_phone_number
              && <TouchableOpacity
              onPress={() => openPhone(detailInfo.formatted_phone_number)}
              >
              <Text style={{fontSize:16, marginBottom:5}}>{detailInfo.formatted_phone_number}</Text>
              </TouchableOpacity>}
            </View>
          </View>
          </>
          : <Text>Loading Info...</Text>}
          
          <View style={styles.infoBox}>
            <Text style={styles.titles}>Ratings</Text>
            <Ratings place={place} />
          </View>

          {detailInfo &&
           <View style={styles.review_view}>
              <Text style={styles.titles}>Reviews:</Text>
                {detailInfo.reviews 
                ? <View style={styles.reviews_wrapper}>
                    <Reviews openAuthor={openAuthor} reviews={detailInfo.reviews} reviewAmount={reviewAmount}/>
                    {reviewAmount < detailInfo.reviews.length
                     ? (<TouchableOpacity style={styles.btn} onPress={() => onLoadMore()}>
                          <Text style={styles.btn_txt}>Load more...</Text>
                        </TouchableOpacity>)
                      :(<Text style={{alignSelf:'center', marginTop:10}}>No more reviews!</Text>)
                    }
                  </View>
                : <Text>No reviews</Text>
                }
            </View>
          }
        </View>
      </ScrollView>
        <Directions viewOnMap={viewOnMap}/>
    </View>
  );
}
const Reviews = ({reviews,reviewAmount,openAuthor}) => {
  return(
    <View style={styles.reviews_list}>
      {reviews.slice(0, reviewAmount).map((review,index) => (
        <TouchableOpacity style={styles.review} key={index} onPress={()=> openAuthor(review.author_url)}>
          <View>
            <View style={styles.review_info_header}>
              <Image style={styles.review_image} source={{uri:review.profile_photo_url}}/>
              <View style={{flex:1,marginLeft:10, width:'100%'}}> 
                <Text>{review.author_name.length >= 12 ? review.author_name.slice(0, 9)+"..." : review.author_name}</Text>
                <Ratings place={review} size={16} totalRatings={false}/>
              </View>  
              <Text style={{color:"#b0b0b0"}}>{review.relative_time_description}</Text>
            <View/>
          </View>
          <View style={styles.review_text}>
            <Text>{review.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
      ))}
    </View>
  )
}
const Ratings = ({place, margin=5, size=26, totalRatings=true}) => {

  if(place.rating){
    return(
      <View style={styles.ratingBox}>

        <StarRate style={styles.rating} rating={place.rating} size={size} margin={margin} />
        {totalRatings&& <Text>Total Ratings: {place.user_ratings_total}</Text>}

      </View>
    )
  }else{
    return(<Text>No ratings</Text>)
  }
}
const Header = ({place}) => { 

  return(
    <>
    <Text style={styles.name}>{place.name}</Text>

    <Text>{place.vicinity}</Text>

    <View style={styles.flexRow,styles.header}> 
      {place.opening_hours
        ? (place.opening_hours.open_now ? <Text style={{...styles.open,color:'green'}}>OPEN</Text> : <Text style={{...styles.open,color:'red'}}>CLOSED</Text>)
        : (<Text style={{...styles.open,color:'#bdbdbd'}}>open?</Text>)
      }
      {place.price_level && <PriceRate  rating={place.price_level} size={22} />}
    </View>
    </>
  )
}
const Directions = ({viewOnMap}) => {
  return(
  <TouchableOpacity style={styles.DirectionsSection}
  onPress={viewOnMap}
  >
    <Map stroke="#fff" strokeWidth={2} width={24} height={24} />
    <Text style={styles.DirectionsText}>View On Map</Text>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
    height:'92%',
  },
  header:{
    marginBottom:20,
  },
  infoBox:{
    marginBottom:15
  },
  flexRow:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
  },
  open:{
    fontSize:18,
    fontWeight:'bold',
  },
  image:{
    marginTop:5,
  },
  imageLoad:{
    backgroundColor:'grey',
    display:'flex',
    justifyContent:'center',
    width: '100%',
    height: 200,
  },
  DirectionsSection:{
    padding: 20,
    backgroundColor:'#00BEB3',
    height:'8%',
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  ratingBox:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  DirectionsText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginLeft:10,
  },
  reviews_wrapper:{
    marginTop:10,
  },
  review_view:{
    marginTop:10,
    display:'flex',
  },
  review_text:{

  },
  reviews_list:{
    width:'100%',
  },
  titles:{
    fontSize:18,
    fontWeight:'bold',
  },
  review:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:4,
    padding:20,
    borderRadius:10,
    shadowColor: "#b5b5b5",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,

    elevation: 4,
  },
  review_image:{
    width:40,
    height:40,
    borderRadius:60,
  },
  review_info_header:{
    display:'flex',
    flexDirection:'row',
    marginBottom:10,
  },
  btn: {
    alignSelf:'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 25,
    borderWidth:2,
    borderColor:'#00BEB3',
  },
  btn_txt: {
    color: '#00BEB3',
    fontSize:16,
    fontWeight:'bold',
  },
});
