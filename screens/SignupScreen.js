import React, { Component } from 'react';
import { } from 'react-native';
import { } from 'react-navigation';
import { StyleSheet, Text, View, Alert, ImageBackground, Image, ToastAndroid ,BackHandler} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Container, Input, Item, Label, Button} from 'native-base';

console.disableYellowBox = true;

class SignupScreen extends Component {
  static navigationOptions = {
    header: null}


  constructor(props) {

    super(props);


    this.state = {
      firstName: '',
      email: '',
      password: '',


    };
  }

 

  HandleSetFirstNameState = (firstName) => {
    this.setState({   //Text Will be updated everytime user types something in firstName Field
      firstName,
    });
  }

  HandleSetEmailState = (email) => {
    this.setState({
      email,
    });
  }

  HandleSetPasswordState = (password) => {
    
    this.setState({
      password,
    });
  }

  HandleSetConfPasswordState = (confirmpassword) => {
    this.setState({
      confirmpassword,
    });
  }




  

  HandleUserRegistration = () => {
    const { firstName, email, password, confirmpassword } = this.state;
    
     if (password === confirmpassword ) {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(()=>{
        global.user=firebase.auth().currentUser;
         
         if (global.user) {
           global.user.updateProfile({
            displayName:firstName,
            }).then(function() {
              console.log("User Object",global.user);
               user.sendEmailVerification().then(function() {
                 ToastAndroid.showWithGravityAndOffset('Verification Email Sent!',
                 ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
               );
               global.user.reload();
                 console.log("Email Sent!")
               }).catch(function(error) {
                 console.log("Unable to sent Email!")
               });
              ToastAndroid.showWithGravityAndOffset('Account Created!',
              ToastAndroid.LONG,
             ToastAndroid.BOTTOM,
             25,
             50,
            );
            this.props.navigation.navigate('LoginScreen')

            
            
 
            }.bind(this)

            )
            
           }
     }).catch((error) => {
  console.log(error.message);

         ToastAndroid.showWithGravityAndOffset(error.message,
          ToastAndroid.LONG,
           ToastAndroid.BOTTOM,
           25,
          50,
         );
         return;
      });
     
     } else {

     ToastAndroid.showWithGravityAndOffset("Password MisMatch!",
         ToastAndroid.LONG,
         ToastAndroid.BOTTOM,
         25,
         50,
      );

   }


  }


  render() {
    return (

      <Container style={styles.container} >
            <Image
              style={styles.logo}
              source={require('./Images/logo.png')}
            />

              <Text style={{color:'#707070',fontSize:32,fontWeight:"bold"}}>
                Create An Account
              </Text>

          <Item
            rounded
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>First Name</Label>
            <Input style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.HandleSetFirstNameState}
            />
          </Item>


          <Item
            rounded
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Email</Label>
            <Input style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              // onChangeText={(email)=> this.setState({email})}
              onChangeText={this.HandleSetEmailState}
            />
          </Item>

          <Item
            rounded
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Password</Label>
            <Input style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={this.HandleSetPasswordState}
            />
          </Item>

          <Item
            rounded
            floatingLabel
            style={styles.textBox}>
            <Label style={styles.textContent}>Confirm Password</Label>
            <Input style={styles.textContent}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={this.HandleSetConfPasswordState}
            />
          </Item>


          <Button style={styles.btn}
            rounded
            // mode="contained"
            onPress={this.HandleUserRegistration}
          >
            <Text style={{ color: 'white' }}>SIGN UP</Text>
          </Button>

          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#707070',marginTop:12.5}}>Already have an Account? </Text><Button 
            hasText 
            transparent
            onPress={()=> this.props.navigation.navigate('LoginScreen')}>
          <Text style={{color:'#88B76F',fontWeight:"bold"}}> Sign In</Text>  
        </Button> 
           </View>
        
      </Container>

    );
  }
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#ffffff',
    marginTop:15

  },

  textBox: {
    marginTop: 10,
    backgroundColor: "#B8B8B830",
    color: '#707070',
    width: 300,
    height: 50,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center'
  },
  textContent: {
    color: '#707070',
    marginLeft: 30
  },
  btn: {
    marginTop: 20,
    width: 200,
    height: 45,
    marginTop: 30,
    backgroundColor: '#88B76F',
    alignContent: 'center',
    justifyContent: 'center'
  }

});
