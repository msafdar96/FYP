import React,{Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View,Alert,ImageBackground,Image,ToastAndroid} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button,Body,Title,Left,Toast,Root} from 'native-base';
import firebase from 'firebase';
import { TextInput } from 'react-native-paper';


class ForgotpasswordScreen extends Component{

  static navigationOptions = {
    header: null}

    constructor(props) {
        super(props);
    
        this.state=({
          email:'',
          onPress:false
          //authenticating:false
        })
      }    
      
      verifyEmail =(email) => {
        firebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        global.user=firebase.auth().currentUser.reload();
        var email=firebase.auth().currentUser.email;
        ToastAndroid.show('Check your Email to reset your Password at '+email, ToastAndroid.LONG);
      }).catch(function (e) {
        ToastAndroid.show("Error: There is no user record corresponding to this identifier.", ToastAndroid.LONG);
        console.log(e)
      })
      }
  

    render(){
      return (
      
      <Container style={styles.container}>
      
      
          <Image
              style={styles.logo}
              source={require('./Images/forgot.png')}
            />

<Text style={{color:'#707070',fontSize:30,fontWeight:"bold",marginTop:10}}>
                Yo! Forgot Your Password?
              </Text>
              <Text style={{color:'#707070',fontSize:15}}>
                No worries! Enter your email and we will send you a reset
              </Text>


            <Item 
            rounded 
            floatingLabel
            style={styles.textBox}>
            <Label 
            style={styles.textContent}>Email</Label>
            <Input 
            style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=> this.setState({email})}
              />    
            </Item>
            

            <Button 
            style={styles.btn}
            rounded
            bordered light
            mode="contained"
            onPress={()=>this.verifyEmail(this.state.email)}
            
            >
            <Text style={{color:'#88B76F'}}>SEND REQUEST</Text>
            </Button>

            {/* <ActivityIndicator size='large'/> */}        
  

  </Container>
  
      );
    }
  }

export default ForgotpasswordScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white'
    },
    logo:{
      width: 100,
       height: 100
      },
      textBox:{
        marginTop:50,
        backgroundColor: "#B8B8B830",
        color:'#707070',
        width: 300, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btn:{
        marginTop:30,
        
        width: 200,
         height: 50,
         backgroundColor: "white",
         alignContent:'center',
         justifyContent:'center',
         borderColor:'#88B76F'
        },
        textContent:{
          color:'#707070',
          marginLeft:30
        }

  });