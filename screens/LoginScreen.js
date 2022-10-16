import React,{Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, View,Image,ToastAndroid,BackHandler} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button} from 'native-base';
import firebase from 'firebase';

// componentDidMount(){
//   global.user=firebase.auth().currentUser; 
//   global.user.reload();
//   global.user=firebase.auth().currentUser;
// }

class LoginScreen extends Component{
  
    static navigationOptions = {
      header: null}

    constructor(props) {
        super(props);
    
        this.state=({
          email:'',
          password:'',
          
        })
      }    

     
      loginUser = (email,password) => {
       
          // global.user=firebase.auth().currentUser; 
          // global.user.reload();
          // global.user=firebase.auth().currentUser;
          //var emailVerified=firebase.auth().currentUser.emailVerified;
         // console.log("AFter reload",user)
          firebase.auth().signInWithEmailAndPassword(email.trim(),password).then(function(user){ 
            console.log("Inside SignIn Method")
            global.user=firebase.auth().currentUser.reload();
            var emailVerified=firebase.auth().currentUser.emailVerified;
          if(emailVerified){
          ToastAndroid.show('Login Successfull !', ToastAndroid.LONG);
            this.props.navigation.navigate('DashboardScreen')
            console.log("Email is now verified",emailVerified)
            console.log(user)
          }
          else{

            ToastAndroid.show('Email not verified !', ToastAndroid.LONG);
          }
      }.bind(this)
          ).catch((error)=>{
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          return;
             
        })
        
      
      }
  

    render(){
      return (
      
  
            <Container style={styles.container} >
            <Image
              style={styles.logo}
              source={require('./Images/logo.png')}
            />

              <Text style={{color:'#707070',fontSize:32,fontWeight:"bold"}}>
                Sign In
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

            <Item  
             rounded
            style={styles.textBox} 
            floatingLabel >
            <Label 
            style={styles.textContent}>Password</Label>
            <Input  
            style={styles.textContent}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password)=> this.setState({password})}
           />       
            </Item>

            <Button 
            hasText 
            transparent
            onPress={()=> this.props.navigation.navigate('ForgotpasswordScreen')}>
          <Text style={{color:'#707070',marginLeft:85}}>Forgot Password?</Text>
        </Button>  

            <Button 
            style={styles.btn}
            rounded
            mode="contained"
            onPress={()=>this.loginUser(this.state.email,this.state.password)}
            >
            <Text style={{color:'white',fontSize:15}}>SIGN IN</Text>
            </Button>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#707070',marginTop:12.5}}>New Here? </Text><Button 
            hasText 
            transparent
            onPress={()=> this.props.navigation.navigate('SignupScreen')}>
          <Text style={{color:'#88B76F',fontWeight:"bold"}}> Sign Up</Text>  
        </Button> 
           </View>


            {/* <ActivityIndicator size='large'/> */}

                 
        </Container>
  
  
      );
    }
  }

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,

      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ffffff'
      
    },
    logo:{
      width: 100,
       height: 100
      },
      textBox:{
        marginTop:10,
        backgroundColor: "#B8B8B830",
        color:'#707070',
        width: 300, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btn:{
        marginTop:20,
        width: 200,
         height: 50,
         backgroundColor: '#88B76F',
         alignContent:'center',
         justifyContent:'center'
        },
        textContent:{
          color:'#707070',
          marginLeft:30
        }

  });
 