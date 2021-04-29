import React from 'react';

import {Login,
Register,
Homepage,
EventPage,
Loading,
Profile,
SearchPage,
Notifications,
FriendsList,
Messages,
UserProfile,
MapPage,
PlaceView,
PlaceList
} from './views/index';

import Header from './components/Header';
import SearchHeader from './components/SearchHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createDrawerNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const Main = createStackNavigator();
const MainScreen = () => (
  <Main.Navigator initialRouteName="Home"
  screenOptions={{
    headerTitle: () => <Header/>,
    headerTintColor: '#00BEB3',
    headerHideShadow: true,
    headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        }
    }
  }}
  >
    <Main.Screen
      name="Home"
      component={Homepage}/>
    <Main.Screen
      name="Events"
      component={EventPage} />
    <Main.Screen
      name="Place"
      component={PlaceView} />
    <Main.Screen
      name="Profile"
      component={Profile} />
    <Main.Screen
      name="Search"
      component={SearchPage} />
    <Main.Screen
      name="Notifications"
      component={Notifications} />
    <Main.Screen
      name="Friends"
      component={FriendsList} />
    <Main.Screen
      name="Messages"
      component={Messages} />
    <Main.Screen
      name="UserProfile"
      component={UserProfile} />
    <Main.Screen
      name="PlaceList"
      component={PlaceList} />
    <Main.Screen
      name="Map"
      component={MapPage}
      options={{ headerTitle: () => <SearchHeader/> }} />
  </Main.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ isLoggedIn }) => (
  <RootStack.Navigator headerMode="none">
    {isLoggedIn ? (
      <RootStack.Screen
        name="App"
        component={MainScreen}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
      />
    )}
  </RootStack.Navigator>
);

function AppNav({ isLoadingAuth,isLoadingMap, isLoggedIn }) {

  if (isLoadingAuth) {
    return <Loading />;
  }

    return (
      <NavigationContainer>
        <RootStackScreen isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    )
}

const mapStateToProps = state => {

    return{
        isLoadingAuth : state.Auth.loading,
        isLoadingMap : state.Map.loading,
        isLoggedIn : state.Auth.loggedIn
    }
}

export default connect(mapStateToProps) (AppNav)
