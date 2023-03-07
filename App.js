import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FoodPreview from './Screens/FoodPreview';
import Home from './Screens/Home';


const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;


export default function App() {
  return (
      <SafeAreaView style={{width:width-40,alignSelf:'center'}}>
        <StatusBar style='auto'/>
       <FoodPreview/>
    </SafeAreaView>
   
  );
}


