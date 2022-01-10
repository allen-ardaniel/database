import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

//this class renders the data from the database
export class QuizScreen extends React.Component{

    state ={ // uses state array, to store the data from the database
        data: []
    }

    fetchData = async ()=>{ // method used to retrieve the data
        const response = await fetch('http://192.168.18.8:4547/arithmetic/'); //dito need mo mag install ng nodemon, then magbukas ka ng terminal, type mo nodemon server.js, yung server.js yan yung node.js part
        const users = await response.json();
        this.setState({data: users})
    }

    componentDidMount(){
        this.fetchData
    }

    render(){
        return(
            <View>
            <TouchableOpacity
                activeOpacity={0.50}
                style={style.button}
                onPress={this.login}
            >
                <Text>Try</Text>
            </TouchableOpacity>

            <FlatList 
                initialNumToRender={5}
                data={this.state.data}
                renderItem={({item}) =>
                    <View>
                        <Text>{item.questions}</Text>
                    </View>
                }

            />
        </View>
        )
    }

    login = () => {
        fetch('http://192.168.18.8/E:VSworkspaceCIIT/Mathrix/mathrix-proj/backend/endpoint.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },  
            body: JSON.stringify({
                key: 'test',
            })
        })
        .catch((error) => console.warn("fetch error: ", error))
        .then((response) => response.text())
        .then ((res) =>{
            alert(res.message);
        })
        .done();

    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row', 
        borderRadius: 20,
        height: 50, 
        width: 350,
        backgroundColor: '#79A6CF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        margin: 50,
        elevation:3,
    },
});