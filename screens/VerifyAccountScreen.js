import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,ImageBackground,Image,StatusBar} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast,Card,CardItem,Left,Right,Icon,Title,Body} from 'native-base';
 //light green :#88B76F
 import firebase from 'firebase';
class MainScreen extends Component{
  static navigationOptions = {
    header: null}

//This Function is triggered after render method


  //var interval;

  componentDidMount() {
    var interval = setInterval(() => {
      global.user.reload();
      global.user=firebase.auth().currentUser;
       this.checkIfEmailVerified();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

    checkIfEmailVerified= () => {
        firebase.auth().onAuthStateChanged(user =>{
            if(user.emailVerified){
                this.props.navigation.navigate('LoginScreen')
            }
            else{
                this.props.navigation.navigate('VerifyAccountScreen')
            }
        })
    }

    render(){ 
        return(
        
          <Container  style={styles.container}> 
         
          <StatusBar hidden />
          
          
        <Content style={{alignContent:'center'}}>
          <Card>
            <CardItem >

              <Body>
              <Image
                        style={styles.logo}
                        source={require('./Images/logo.png')}
                      /> 
                  <Text style={{color:'#707070',fontSize:30,fontWeight:"bold"}}>Check Your Inbox</Text>
        <Text style={{color:'#707070',fontSize:20,fontWeight:"bold"}}>We sent a verification link.Please check your email for the next step</Text>
            
              </Body>
            </CardItem>
          </Card>
          </Content>

           </Container> 
           
           );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
      
    
    },
   
    btn:{
      marginTop:350,
      width: 270, 
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#88B76F'
    },
    logo:{
      height:150,
      width:150,
      marginTop:50
    }
  });

