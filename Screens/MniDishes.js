import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

export default function MniDishes() {
  return (
    <View style={{backgroundColor:'#eff1f1',height:100,borderRadius:5,marginTop:10,alignSelf:'center',alignItems:'center'}}>

                <View style={{flexDirection:'row',width:width-40,height:100,alignSelf:'center',alignItems:'center',justifyContent:'space-evenly'}}>
        
                <Image source={require('../assets/smalldish.png')} style={{width:80,height:80,alignSelf:'center',borderRadius:80/2,shadowColor:'grey',shadowRadius:10,shadowOpacity:10}} resizeMode={'contain'}/>
                <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                        <Text style={{fontWeight:'600'}}>Cajun halloumi burgers</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'row'}}>
                        <AntDesign name="star" size={18} color="grey" />
                        <Text style={{color:'grey'}}> 3.5 Reviews</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                        <AntDesign name="clockcircle" size={18} color="grey" />
                        <Text style={{color:'grey'}}> 00.20 Minutes</Text>
                        </View>
                        </View>
                </View>
                </View>
            </View>
  )
}