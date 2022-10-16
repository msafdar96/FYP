import React,{Component} from 'react';
import { StyleSheet, Text, View,Animated,ActivityIndicator,ImageBackground,Image,StatusBar} from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast} from 'native-base';
 //light green :#88B76F
class MainScreen extends Component{

  static navigationOptions = {
    header: null}


  

    render(){ 
        return(
         
        
    
         <Container  style={styles.container}>
           
          <StatusBar hidden />
         
          <Image
              style={styles.logo}
              source={require('./Images/logo.png')}
            />

              <SimpleAnimation movementType='spring' delay={800} duration={3000} fade staticType='zoom'>
                  <Text style={{color:'#88B76F',fontWeight: "bold",fontSize:32,justifyContent:"center",alignContent:"center",marginTop:20}}>BUSINESS INTELLIGENCE</Text>
              </SimpleAnimation>
                    
           
            <Button style={styles.btn} mode="contained" onPress={()=> this.props.navigation.navigate('LoginScreen')}>
            <Text style={{color:'white',fontWeight: "bold",fontSize:16}}>Get Started</Text>
          </Button>
          
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
      marginTop:230,
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
      marginTop:150
    }
  });

