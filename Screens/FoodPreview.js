import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;


export default function FoodPreview() {
  return (
    <View style={{width:width-40,alignSelf:'center',marginTop:10,backgroundColor:'white'}}>
        <View style={{flexDirection:'row'}}>
            <AntDesign name="arrowleft" size={35} color="black" />
            <Text style={{color:'black',fontSize:23,fontWeight:'600',marginLeft:25}}>Food Preview</Text>
        </View>


        <View style={{alignSelf:'center',justifyContent:'space-around'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                    <View style={{alignContent:'flex-start',alignSelf:'flex-start'}}>   
                    <Image source={require('../assets/dish.png')} style={{width:350,height:350,marginLeft:-75,alignSelf:'center',shadowColor:'grey',shadowRadius:10,shadowOpacity:5}} resizeMode={'contain'}/>
                    </View>

                    <View style={{flexDirection:'column',marginLeft:-25}}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontWeight:'500',fontSize:18}}>Vitamin</Text>
                            <Text style={{fontWeight:'500',fontSize:18}}>percentage</Text>
                            <Text style={{fontWeight:'700',fontSize:25,marginTop:10}}>20.9</Text>
                        </View>

                        <View style={{flexDirection:'column',marginTop:50}}>
                            <Text style={{fontWeight:'500',fontSize:18}}>Calorie</Text>
                            <Text style={{fontWeight:'500',fontSize:18}}>weight</Text>
                            <Text style={{fontWeight:'700',fontSize:25,marginTop:10}} >18.5</Text>
                        </View>
                    </View>

            </View>
        </View>

       
       <View>
        <Text>
        Bakso rebus
        </Text>
       </View>
    </View> 
  )
}