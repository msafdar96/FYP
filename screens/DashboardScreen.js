import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,ImageBackground,Image ,BackHandler} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Label,Button, Root,Toast,Card,CardItem,Left,Right,Icon,Title,Body,Picker} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(128,0,0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const data2 = {
  labels: ["Test1", "Test2"],
  legend: ["L1", "L2", "L3"],
  data: [[60, 60, 60], [30, 30, 60]],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};
const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
};
const data = {
  labels: ["CNC", "Lathe", "Milling"], // optional
  data: [0.4, 0.6, 0.8]
};



const pieData = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

class DashboardScreen extends Component{
  
  static navigationOptions = {
    headerLeft: <Text onPress={() => 
      navigation.navigate('DrawerOpen')}>Menu</Text>
    }
   

    render(){
        return(
        <Container style={styles.container}>
         <Header style={{backgroundColor:'#88B76F',height:60}}>
          <Left>
            <Icon style={{color:'white'}} name='menu' onPress={() => this.props.navigation.openDrawer()}></Icon>
          </Left>
          <Body>
          <Text style={{color:'#ffffff',fontSize:20,alignContent:'center'}}>Dashboard</Text>
            {/* <Title style={{color:'#707070',fontSize:32}}>Business Intelligence And Visual Data Analytics</Title> */}
          </Body>
         
        </Header> 
        {/* <Text style={{color:'#000000',fontSize:25}}>Welcome, {firebase.auth().currentUser.displayName} !{Dimensions.get("window").width}</Text> */}

        <Container style={styles.container}>
        {/* <Header /> */}
        <Content>
          <Card>
            <CardItem >
              <Body>
            <ProgressChart
              data={data}
              width={315}
              height={220}
              chartConfig={chartConfig}
              hideLegend={false}
            />
              
              </Body>
            </CardItem>
            <CardItem footer  bordered>
              <Text style={{color:'#808080'}}>Machine Progress till now</Text>
            </CardItem>
         </Card>
         <Card>
            <CardItem>
              <Body>
              <LineChart
                    data={{
                      labels: ["2019", "2018", "2017", "2016", "2015", "2014"],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                          ]
                        }
                      ]
                    }}
                    width={315} // from react-native
                    height={220}
                    yAxisLabel={"$"}
                    yAxisSuffix={"k"}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                  />
              </Body>
            </CardItem>
            <CardItem footer  bordered >
              <Text style={{color:'#808080'}}>Tool Health Monitoring</Text>
            </CardItem>
         </Card>
        
         <Card>
           <CardItem>
             <Text style={{fontSize:30}}>
                22,890
             </Text>
             <Text>{"               "}</Text>
             <Text  style={{fontSize:18}}>
               Past 30 Days
             </Text>
             <Text>{"  "}</Text>
             <Icon name="ios-people" />
           </CardItem>
         </Card>

         <Card>
            <CardItem>
              <Body>
              <LineChart
                data={data1}
                width={320}
                height={220}
                chartConfig={{
                  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
 
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5}
                }
              />
              
              </Body>
            </CardItem>
            <CardItem footer  bordered>
              <Text style={{color:'#808080'}}>Line Chart Representation</Text>
            </CardItem>
         </Card>
         <Container style={{flexDirection:'row',alignContent:'center',height:100}}>

         <Card style={{width:175,height:90,justifyContent:'center',alignContent:'center'}}>
           <CardItem >
             <Text style={{fontSize:23,color:'#808080'}}>
                Lathe
             </Text>
             <Text>{"  "}</Text>
             <Icon name="ios-people" />
    
           </CardItem>
           </Card>
           <Card style={{width:175,height:90,justifyContent:'center',alignContent:'center'}}>
           <CardItem>
             <Text style={{fontSize:23,color:'#808080'}}>
                Milling
             </Text>
             <Text>{"  "}</Text>
             <Icon name="ios-people" />

           </CardItem>
         </Card>
         </Container>
         <Card>
           <CardItem>
             <Body>

             </Body>
           <StackedBarChart
            //style="{graphStyle}"
            data={data2}
            width={315}
            height={220}
            chartConfig={chartConfig}
          />
           

           </CardItem>
         </Card>
         <Card>
           <CardItem>
             <Text style={{fontSize:30}}>
               37,429,438
             </Text>
             <Text>{"               "}</Text>
             <Text  style={{fontSize:18}}>
               Total Time
             </Text>
             <Text>{"  "}</Text>
             <Icon name="ios-people" />
           </CardItem>
         </Card>
         
         

        

        </Content>
      </Container>
      </Container>);
    }
  }
                

    
    

       
   

export default DashboardScreen;

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