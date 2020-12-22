import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return(
    //Utilizando fragment pois não posso ter dois components juntos sem
    //estar envolvido por um "container". 
    <>
    <StatusBar barStyle= "light-content" backgroundColor="#7159c1" translucent/>
    
    <View style={styles.container}>
      <Text style={styles.title}>Hello Rafael</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
