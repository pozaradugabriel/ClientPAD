import * as React from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function HomeScreen() {
  
  const [museums,setMuseums] = useState([]); 
    useEffect(() =>{
      axios.get('http://192.168.0.213:8080/api/museum/get/all')
        .then(res=>{
          console.log(res);
          setMuseums(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    },[]);
  
  /*const submitCredentials = async (event) =>{
    try {
      const response = await axios.get('http://192.168.0.213:8080/api/museum/get/all');
      if (response.status === 200) {
        alert("Map loaded succesfully");

        //latitudeArray.push(response.data[2].latitude);
        //console.log(latitudeArray);
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert(error);
    }
  };*/
  return (
    
    <View style={styles.container}>
      
      <MapView style={styles.map} 
        initialRegion={{
          latitude: 45.760696,
          longitude: 21.226788,
          latitudeDelta: 0.122,
          longitudeDelta: 0.121,
        }}   
      >
        {museums.map((museum,i) =>{
          return(<Marker
            key={i}
            coordinate={{
              latitude:museums[i].latitude,
              longitude:museums[i].longitude
            }}
            title={museums[i].name}
            description={museums[i].description + "\nType: " + museums[i]}
            pinColor={"#ffd1dc"}
            />
            )
        })}
      </MapView> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buton:{
    
  }
});