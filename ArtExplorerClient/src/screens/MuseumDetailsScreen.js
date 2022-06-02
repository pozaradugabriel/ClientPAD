import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Buffer} from "buffer";
import StarRating from 'react-native-star-rating';
import axios from 'axios';

export default function DetailsScreen({ route, navigation }){
    let starCount = 4
    const { museumId } = route.params;
    const [museum,setMuseum] = useState([]);
    const [rating,setRating] = useState(); 
    let [userRating,setUserRating] = useState(); 
    useEffect(() =>{
      axios.get('http://localhost:8080/api/museum/get/' + museumId)
        .then(res=>{
          console.log(res);
          setMuseum(res.data);
        })
        .catch(err => {
          console.log(err)
        })

      axios.get('http://localhost:8080/api/museum/rating/get/' + museumId)
      .then(res=>{
        console.log(res);
        setRating(res.data);
      })
      .catch(err => {
        console.log(err)
      })

      axios.get('http://localhost:8080/api/user/rating/get/' + museumId)
      .then(res=>{
        console.log(res);
        setUserRating(res.data);
      })
      .catch(err => {
        console.log(err)
      })
    },[]);

    const goToHomePage = () =>{
      navigation.navigate('home_screen');
    }
    const onStarRatingPress = (newRating) => {
      console.log(newRating);
      setUserRating(newRating);
      axios.post('http://localhost:8080/api/user/rating/add', {
          museumId:museumId,
          grade:newRating
        }).catch(err => {
        console.log(err)
      })
    }

    const onRemoveRating = () => {
      axios.delete('http://localhost:8080/api/user/rating/del/' + museumId).then(setUserRating(0)).catch(err => {
        console.log(err)
      })
    }
  
  
    return(
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={userRating}
                selectedStar={(rating) => onStarRatingPress(rating)}
              /> 
              
              <Pressable style = {styles.remove} disabled={(userRating == 0)}>
                <Text disabled={(userRating == 0)} onPress={() => {onRemoveRating()}} style={styles.remove_text}>X</Text>
              </Pressable>
          </View>
          
          <Text style={styles.title_text}>{museum.name}</Text>
          <Text style={styles.description_text}>{museum.description}</Text>
          <Text style={styles.title_text}>{rating}</Text>
        </View>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title_text:{
      fontSize:30,
      fontWeight:'bold',
      marginBottom:10
    },
    description_text:{
      fontSize:15,
      marginHorizontal:20,
      marginBottom: 30
    },
    remove:{
      paddingHorizontal:10,
      paddingVertical:5,
      backgroundColor: 'red',
      borderRadius: 5
    },
    remove_text:{
      color: 'white',
      fontSize: 22
    }
})