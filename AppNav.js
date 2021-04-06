import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import Homepage from './views/Homepage';
import EventPage from './views/EventPage';
import Loading from './views/Loading';
import Profile from './views/Profile';
import SearchPage from './views/SearchPage';
import Notifications from './views/Notifications';
import FriendsList from './views/FriendsList';
import Messages from './views/Messages';
import UserProfile from './views/UserProfile';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
      component={Homepage} />
    <Main.Screen
      name="Events"
      component={EventPage} />
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

function AppNav({ isLoading, isLoggedIn }) {

  if (isLoading) {
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
        isLoading : state.Auth.loading,
        isLoggedIn : state.Auth.loggedIn
    }
}

export default connect(mapStateToProps) (AppNav)
