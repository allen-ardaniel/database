import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Images from '../images'
import Swiper from 'react-native-swiper'
import {HeaderQuiz} from './HeaderQuiz'

//nilipat ko tong buong function sa App.js para gumana yung touchable opacity, di ko lang muna tinanggal baka kasi need pa
export default function OnBoardingScreen(){
    const onBoardList = [
        {id: 1, title: "This is a phone", image: Images.smartphone},
        {id: 2, title: "You have mail", image: Images.mail},
        {id: 3, title: "This is a check", image: Images.check},

    ];

    return (
        <View style={{flex: 1, backgroundColor: '#B0C7D3'}}>
            <Swiper paginationStyle={{
                position: 'absolute',
                bottom: 0,
            }}
                activeDotColor='#B0C7D3'
                activeDotStyle= {{width: 20, height: 8}}
            >
                {onBoardList.map((id, index) =>{
                    return (
                        <View key={index} style={{justifyContent: 'center', alignItems: 'center', height:'100%'}}>
                            <Text style={styles.textStyle}>{id.title}</Text>
                            <Image source={id.image} style={styles.imageContainer}/>
                        </View>
                    );
                })}
            </Swiper>
            <View style={{
                position: 'absolute',
                bottom: '5%',
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStartedStyle}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function QuizOne(){
    return(
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0C7D3',
      }}>
        <HeaderQuiz />
        {/* Question */}
        {/* Multiple Choice */}
        {/* Progress Bar */}
      </View>
    )
  }

const styles = StyleSheet.create({
    textStyle:{
        fontSize:25,
        fontWeight: 'bold',
        width: '40%',
        textAlign: 'center'
    },
    imageContainer:{
        height: '70%',
        width: '90%',
        resizeMode: 'contain',
        marginHorizontal:15,
    },
    buttonStyle:{
        backgroundColor: '#F9D901',
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom:20,
    },
    textStartedStyle:{
        fontWeight: 'bold',
    },
});

