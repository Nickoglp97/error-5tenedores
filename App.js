import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import HomeScreen from './app/screens/Home'
import UserNavigation from '../pro4/app/navigations/User'

//para firebase
import firebaseConfig from './app/utils/FireBase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <UserNavigation/>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
