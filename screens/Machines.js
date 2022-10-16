import React,{Component} from 'react';
import { StyleSheet, Text, View,Animated,ActivityIndicator,ImageBackground,Image,StatusBar,BackHandler} from 'react-native';
import firebase from 'firebase';
import { Chip } from 'react-native-paper';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast,Left,Icon,Body,Card,CardItem,Right,Title} from 'native-base';
 //light green :#88B76F


class MainScreen extends Component{
  static navigationOptions = {
    header: null}

   

    render(){ 
        return(
         
        
    
         <Container>
            <Header style={{backgroundColor:'#88B76F',height:60}}>
          <Left>
            <Icon style={{color:'white'}} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
          <Body>
          <Text style={{color:'#ffffff',fontSize:20,alignContent:'center'}}>Machines</Text>
            {/* <Title style={{color:'#707070',fontSize:32}}>Business Intelligence And Visual Data Analytics</Title> */}
          </Body>
         
        </Header>
          <Text style={{color:'#ffffff',fontSize:20,alignContent:'center'}}>Machines</Text>
          <Chip icon="aperture" style={{color:'#88B76F',alignItems:'center'}}>Lathe Machine</Chip>
          <Chip icon="anchor" style={{color:'#88B76F',alignItems:'center',marginTop:5}}>Milling Machine</Chip>
         
          <StatusBar hidden />      
            <Text style={{color:'#88B76F',fontWeight: "bold",fontSize:30}}>Machine Specific Charts</Text>      
            </Container>
      
       
           );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
      
      
      
    
    },
   
    btn:{
      marginTop:350,
      width: 270, 
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#88B76F',
      borderRadius:15
    },
    logo:{
      height:150,
      width:150,
      marginTop:50
    }
  });

