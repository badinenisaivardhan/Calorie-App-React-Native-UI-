import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import MniDishes from './MniDishes';


const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;


export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{marginTop:20}}>
        
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:'#fff7ea',width:100,height:40,alignContent:'center',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{color:'orange',fontSize:18,fontWeight:'700',textAlign:'center'}}>For You</Text>
                </View>
                <Text style={{color:'grey',fontSize:18,fontWeight:'700',textAlign:'center',marginLeft:15}}>
                    Browse
                </Text>
                <Text style={{color:'grey',fontSize:18,fontWeight:'700',textAlign:'center',marginLeft:15}}>
                    Trending
                </Text>
            </View>


           <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
           <View style={{marginTop:20,flexDirection:'column',alignContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'800',fontSize:35}}> Healthy Food</Text>
                <Text style={{fontWeight:'600',color:'grey',fontSize:15,marginTop:5}}> Here's Recommended for you</Text>
            </View>
            <View style={{alignSelf:'center',alignContent:'center',alignItems:'center',justifyContent:'center',marginTop:20,marginRight:10}}>
                <AntDesign name="search1" size={28} color="black" />
            </View>
           </View>


            <View style={{backgroundColor:'#d93f01',height:height/2.3,borderRadius:10,marginTop:125}}>
            <Image source={require('../assets/dish.png')} style={{width:350,height:350,alignSelf:'center',marginTop:-150,shadowColor:'black',shadowRadius:10,shadowOpacity:5}} resizeMode={'contain'}/>

            <Text style={{color:'white',fontSize:27,fontWeight:'600',marginLeft:20,marginTop:-40}}>Bakso rebus mas eko</Text>

            <Text style={{color:'white',fontSize:18,fontWeight:'500',marginLeft:20,marginTop:15}}>Traditional Food</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:15}}>
            <AntDesign name="star" size={24} color="white" style={{marginLeft:5}} />
            <AntDesign name="star" size={24} color="white" style={{marginLeft:5}} />
            <AntDesign name="star" size={24} color="white" style={{marginLeft:5}} />
            <AntDesign name="staro" size={24} color="lightgrey" style={{marginLeft:5}} />
            <AntDesign name="staro" size={24} color="lightgrey" style={{marginLeft:5}} />   
            <Text style={{color:'white',fontSize:17,fontWeight:'300',marginLeft:10}}>126 Reviews</Text>
            </View>
            
            <View style={{backgroundColor:'white',height:0.5,width:width/1.2,alignSelf:'center',marginTop:20}}>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:20,marginLeft:10,alignContent:'center'}}>
                
            <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontWeight:'600',fontSize:25}}>Protein</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:50,height:5,backgroundColor:'white',borderRadius:5}}></View>
                        <View style={{width:15,height:5,backgroundColor:'lightgrey',borderRadius:5}}></View>
                        </View>
                    <Text style={{color:'white',fontWeight:'600',fontSize:15,marginLeft:10}}>10%</Text>

                    </View>
                </View>   

                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontWeight:'600',fontSize:25}}>Carbs</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:40,height:5,backgroundColor:'lightgreen',borderRadius:5}}></View>
                        <View style={{width:25,height:5,backgroundColor:'lightgrey',borderRadius:5}}></View>
                        </View>
                        
                    <Text style={{color:'white',fontWeight:'600',fontSize:15,marginLeft:10}}>8%</Text>
                    </View>
                </View>  

                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontWeight:'600',fontSize:25}}>Fat</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:30,height:5,backgroundColor:'yellow',borderRadius:5}}></View>
                        <View style={{width:30,height:5,backgroundColor:'lightgrey',borderRadius:5}}></View>
                        </View>
                    <Text style={{color:'white',fontWeight:'600',fontSize:15,marginLeft:10}}>5%</Text>
                    </View>
                </View>  
            </View>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,marginLeft:10}}>
                <Text style={{fontWeight:'400',fontSize:18}}>Other favorite foods </Text>
                <View style={{width:10,height:10,borderRadius:10/2,backgroundColor:'grey',marginLeft:10}}>
                </View>
                <Text style={{fontWeight:'400',fontSize:16,marginLeft:10}}>12 </Text>
            </View>

           <MniDishes/>
           <View style={{marginTop:5}}>
           <MniDishes/>
           </View>
           <View style={{marginTop:5}}>
           <MniDishes/>
           </View>
           <View style={{marginTop:5}}>
           <MniDishes/>
           </View>
           <View style={{marginTop:5}}>
           <MniDishes/>
           </View>

    </View>
    </ScrollView>
  )
}