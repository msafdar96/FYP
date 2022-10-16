import {createAppContainer} from 'react-navigation';
import React,{Component} from 'react';
import {SafeAreaView,ScrollView,Image,View,Text,TouchableOpacity,Icon,Button} from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import Machines from './screens/Machines';
import SignupScreen from './screens/SignupScreen';
import EDA from './screens/EDA';
import VerifyAccountScreen from './screens/VerifyAccountScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';





firebase.initializeApp(firebaseConfig);



const CustomDrawerContentComponent = props => (


  <SafeAreaView style={{flex:1}}>
   
    <View style={{height:170,backgroundColor:'#88B76F',alignItems:'center',justifyContent:'center'}}>
    <Image
            style={{height:100,width:100}}
            source={require('./screens/Images/logo(white).png')}
          />
          <Text style={{color:'white',fontSize:18}}>{firebase.auth().currentUser.displayName} </Text>
     <Text style={{color:'white',fontSize:18}}>{firebase.auth().currentUser.email} </Text>
     

    </View>
    <ScrollView>
    <DrawerItems {...props} activeTintColor='#2196f3' activeBackgroundColor='#A8A8A8' inactiveTintColor='#808080' inactiveBackgroundColor='transparent' style={{backgroundColor: '#E0E0E0'}} labelStyle={{color: '#484848'}}/>
     {/* <TouchableOpacity onPress={()=>this.props.navigationProps('LoginScreen').bind(this)}>
   <View style={{ flex: 1,height:300}}> 
     <Text bold style={{marginLeft:19}}>Logout</Text>
    </View>
    </TouchableOpacity>  */}
    </ScrollView>
    </SafeAreaView>
);

    
 

const AppDrawerNavigator = createDrawerNavigator({
  DashboardScreen: {screen:DashboardScreen,
    navigationOptions: {
      header: null,
      drawerLabel: 'Home',
      
    }
},
  EDA :{screen:EDA,
    navigationOptions: {
    header:null,
    drawerLabel:'EDA Charts'
  }},
  Machines:{screen:Machines,
    header:null,
    drawerLabel:'Machines'
  }

}
,{
  
  contentComponent:CustomDrawerContentComponent,
});



const AppNavigator=createStackNavigator({
  
  MainScreen: {screen:MainScreen},
  LoginScreen: {screen:LoginScreen},
  DashboardScreen: {screen:AppDrawerNavigator,navigationOptions: {
    header: null}},
  SignupScreen:{screen:SignupScreen},
  VerifyAccountScreen:{screen:VerifyAccountScreen},
  ForgotpasswordScreen:{screen:ForgotpasswordScreen},
  EDA:{screen:AppDrawerNavigator,navigationOptions: {
    header: null}},
    Machines:{screen:AppDrawerNavigator,navigationOptions: {
      header: null}}
  

});

export default createAppContainer(AppNavigator);



