import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const App = () => {

  const [randomColor,setRandomColor] = useState('rgb(32,0,126)')

  const changeBG = () => {

    let color = "rgb(" + 
              Math.floor(Math.random() * 256)+
              ","+
              Math.floor(Math.random() * 256)+
              ","+
              Math.floor(Math.random() * 256)+
              ")"
              
    setRandomColor(color)
  }

  return (
    <>
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap To Change</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  }
});

export default App;