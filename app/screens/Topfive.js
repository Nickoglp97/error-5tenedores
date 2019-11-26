import React, {Component} from 'react';
import {StyleSheet , View , Text} from 'react-native';


export default class Topfive extends Component {

    render(){
        return(
            <View style = {styles.viewBody} >
                <Text>Topfive Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody :{
       
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    }
});