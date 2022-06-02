
import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import axios from "axios";
import {Buffer} from "buffer";
export default function LoginScreen({navigation}){
    const [name,onChangeName] = useState("");
    const [password,onChangePassword] = useState("");
    const token = Buffer.from(`${name}:${password}`, 'utf8').toString('base64')
    const goToHomePage = () =>{
      navigation.navigate('home_screen');
    }
    const goToRegister = () =>{
      navigation.navigate('singup_screen');
    }
    const submitCredentials = async (event) =>{
      try {
        const response = await axios.get('http://localhost:8080/api/login', {
          headers:{
            'Authorization':`Basic ${token}` ,
          }
        });
        if (response.status === 200) {
          goToHomePage();
          alert("You have logged in succesfully.");
        } else {
          throw new Error("An error has occurred");
        }
      } catch (error) {
        alert("Username or password incorrect");
      }
    };
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {styles.header}>
            <Image 
                    style = {styles.logo}
                    source={require('../utils/placeholderlogo.png')}
                    resizeMode='stretch'
                />
            </SafeAreaView>
            
            <View style = {styles.footer}>
                <Text style={styles.welcome_text}>
                    Welcome on ArtExplorer!
                </Text >
                <Text style = {styles.fieldText}>username:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    onChangeText={onChangeName}
                    value={name}
                    />
                </View>
                <Text style = {styles.fieldText}>password:</Text>
                <View style = {styles.passwordFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={password}
                    />
                </View>
                <Pressable style = {styles.loginButton}
                >
                    <Text onPress={submitCredentials} style = {styles.buttonText}>Sign In</Text>
                </Pressable>
                <Pressable style = {styles.loginButton}
                >
                    <Text onPress={goToRegister} style = {styles.buttonText}>Regisrer</Text>
                </Pressable>
              </View>
          </View>
    )
}
  const {height} = Dimensions.get('window');
  const windowWidth = Dimensions.get('window').width;
  const logo_height = height*0.28;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header:{
      backgroundColor: '#fff',
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    footer:{
      flex:2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:50,
      paddingHorizontal:30,
      alignItems:'center'
    },
    logo:{
        marginTop:80
    },
    welcome_text:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:40
      },
      usernameField:{
        fontSize:20,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },
      passwordField:{
        fontSize:20,
        borderTopLeftRadius:50,
        color:'#696969',
        marginLeft:10,
        marginTop:8
      },
      usernameFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRadius:8,
        width:windowWidth-50,
        height:50,
        marginBottom:50,
        borderColor:'#696969'
    },
      passwordFieldContainer:{
        borderLeftWidth:3,
        borderRightWidth:3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRadius:8,
        width:windowWidth-50,
        height:50,
        borderColor:'#696969'
     },
      fieldText:{
        color:'#696969',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15,
        alignSelf: 'flex-start'
      },
      loginButton:{
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:6,
        elevation:3,
        backgroundColor:"#AA1945"
      },
      buttonText:{
        color:"#fff", 
        fontWeight:'bold',
        fontSize:20,
      }
  });