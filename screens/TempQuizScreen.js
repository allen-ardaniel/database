import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';


//this whole idea is to render only 5 items from the database, pinagaaralan ko pa yun
export class Quiz extends React.Component{

    state = {
        data : []
    }

    fetchData = async() => {
        const response = await fetch('http://192.168.18.8:1347/arithmetic/')
        const users = await response.json();
        this.setState({data:users}); 
    }

    componentDidMount(){
        this.fetchData(); 
    }

    handleRandoms(){
        const items = this.getRandomItems()
        this.setState({data: items})
    }

    getRandomItems(){
        function getRandomNumbers(num, limit){
            let randoms = []
            for (let i = 0; i< num; i++){
                randoms.push(Math.floor(Math.random() * (limit + 1)))
            }
            return randoms
        }

        const randoms = getRandomNumbers(this.state.randomNums, this.state.data.length)
        return  randoms.map(value => this.state.data[value])
    }

    render(){
        return(
            <View>
                <Text style={{padding: 20 ,alignItems:'center'}}>Welcome</Text>
                <FlatList 
                data={this.state.randomItems}
                keyExtractor={(item ,index) => index.toString()}
                renderItem={({item}) =>
                    <View style= {{backgroundColor: '#abc123', padding:10, margin:20}}>
                        <Text style= {{color: '#fff' , fontWeight: 'bold'}}>{item.questions}</Text>
                        <Text style= {{color: '#fff'}}>{item.operation_type}</Text>
                        <Text>{this.state.randomItems}</Text>
                    </View>

                }

                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});