import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BackgroundTimer from 'react-native-background-timer';

/* function timeFunction() {
    const [secondsLeft, setSecondsLeft] = useState(3601);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if(timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();
        return () => {
            BackgroundTimer.stopBackgroundTimer();
        }
    }, [timerOn])

    const clockify = () => {
        let hours = Math.floor(secondsLeft / 60 / 60);
        let mins = Math.floor(secondsLeft / 60 % 60);
        let seconds = Math.floor(secondsLeft % 60);

        let displayHours = hours < 10 ? `0${hours}` : hours;
        let displayMins = mins < 10 ? `0${mins}` : mins;
        let displaySecs = seconds < 10 ? `0${seconds}` : seconds;

        return (
            displayHours,
            displayMins,
            displaySecs
        )
    }
} */

// functionality lang na meron dito is timer and score increment along with settings icon, kaso di ko pa na edit yung icon 
export class HeaderQuiz extends React.Component {

    state = {
        timer: null,
        counter: 0,
        value: 0,
    }

    incrementScore = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }
    startTimer = () => {

        let timer = setInterval(this.manageTimer, 1000);
        this.setState({ timer });

    }

    manageTimer = () => {

        var states = this.state

        if (states.counter === 0) {
            alert('Times Up !\nTimer  is reset')
            clearInterval(this.state.timer)
            this.setState({
                counter: 10
            })
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });

        }
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', margin: 30, width: "100%"}}>
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                <View style={{margin: 5}}>
                    <Text style={{fontSize: 20}}>Score: {this.state.value} </Text>
                    <Button onPress={this.incrementScore} title='Increment'/>

                    <Text style={{fontSize: 20, paddingTop: 5}}>Time Left: {this.state.counter} </Text>
                    <Button
                        title='START TIMER'
                        onPress={() => this.startTimer()}
                    />

                </View>

                <View style={{margin: 5}}>
                    <TouchableOpacity>
                        <FontAwesome name='trophy' size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            </View>   
        )
    }
}

export default HeaderQuiz

