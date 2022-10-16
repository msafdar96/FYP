import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,ImageBackground,Image,BackHandler} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast,Card,CardItem,StatusBar,Left,Right,Icon,Title,Body,Picker} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import firebase from 'firebase'


var zeroCount = 0
var oneCount = 0
   var chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(128,0,0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};


const data ={
  labels: ['0', '1'],
  legend: ['2.5 Pressure', '3 Pressure', '4 Pressure'],
  data: [
    [2,3,4],
  ],
  barColors: ['#72bcd4', '#ccccff', '#9999ff'],
 }
var barData = {
  labels: ['0','1'],
  datasets: [
    {
      data: [20,10],
     
     },
   ],
};
class EDA extends Component{
  
  static navigationOptions = {
    headerLeft: <Text onPress={() => 
      navigation.navigate('DrawerOpen')}>Menu</Text>
    }
    componentDidMount(){
      
        
      
        
      for(let i = 1; i < 30; i++){
      firebase.database().ref(i).child('target').once('value', (data)=>{
          if(data.toJSON().toString() == "0"){
         zeroCount=zeroCount+1;
         console.log("zero",zeroCount)
          }
          else{
              oneCount=oneCount+1;
          }

      }).then(() =>{
          barData.datasets[0].data = [zeroCount,oneCount]
          console.log(barData.datasets[0].data)

      })

      }

      
  }


    render(){
        return(
          <Container style={styles.container}>
             <Header style={{backgroundColor:'#88B76F',height:60}}>
          <Left>
            <Icon style={{color:'white'}} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
          <Body>
          <Text style={{color:'#ffffff',fontSize:20,alignContent:'center'}}>EDA Charts</Text>
            {/* <Title style={{color:'#707070',fontSize:32}}>Business Intelligence And Visual Data Analytics</Title> */}
          </Body>
         
        </Header>

          
          <Content>
          <Card>
            <CardItem >
              <Body>
                 <BarChart
                //style={graphStyle}
                data={barData}
                width={315}
                height={220}
                xAxisLabel={' target'}
                
                chartConfig={chartConfig}
            />      
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            <CardItem >
              <Body>
              <StackedBarChart
                    //style={graphStyle}
                    data={data}
                    width={315}
                    height={220}
                    chartConfig={chartConfig}
                    />

              </Body>
            </CardItem>
            <CardItem footer  bordered>
              <Text style={{color:'#808080'}}>Tool Health Monitoring</Text>
            </CardItem>
         </Card>
          </Content>
         
    
         
            </Container>
      
       
           );

        }}
   

export default EDA;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    btn:{
      marginTop:30,
      width: 100,
       height: 50,
       backgroundColor: "#B8B8B8",
       alignContent:'center',
       paddingLeft:27
       //alignItems:'center'
      
      }
     
  });