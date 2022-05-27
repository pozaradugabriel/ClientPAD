
import {StyleSheet, Text, TextInput, View, Pressable, Image, Dimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
export default function LoginPage(){
    const [text, setText] = React.useState("");
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {styles.header}>
                <Image 
                    style = {styles.logo}
                    source={require('../utils/logo.png')}
                    resizeMode='stretch'
                />
            </SafeAreaView>

            <View style = {styles.footer}>
                <Text style={styles.welcome_text}>
                    Bine ai venit pe CommuniTIM!
                </Text >
                <Text style = {styles.fieldText}>utilizator:</Text>
                <View style = {styles.usernameFieldContainer}>
                    <TextInput
                    style={styles.usernameField}
                    placeholder='...'
                    />
                </View>
                <Text style = {styles.fieldText}>parolă:</Text>
                <View style = {styles.passwordFieldContainer}>
                    <TextInput
                    style={styles.passwordField}
                    placeholder='...'
                    secureTextEntry
                    />
                </View>
                <Pressable style = {styles.loginButton}
                >
                    <Text style = {styles.buttonText}>loghează-te</Text>
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
        marginBottom:250
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
        backgroundColor:"#9933ff"
      },
      buttonText:{
        color:"#fff", 
        fontWeight:'bold',
        fontSize:20,
      }
  });