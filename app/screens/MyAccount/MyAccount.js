import React, {Component} from 'react';
import {StyleSheet , View , Text} from 'react-native';
import {Button} from 'react-native-elements';


export default class MyAccount extends Component {

    
    //funcion de navegacion solo ingresando nombre de screen
    goToScreen = (nameScreen) =>{

        this.props.navigation.navigate(nameScreen);
        
    };

    render(){
        return(
            <View style = {styles.viewBody} >
                {/* boton para registro */}
                <Text>MyAccount Screen</Text>
                <Button title='Registratee'
                // Onprees debe tener arrow funcion para que mande a llamar
                onPress = {()=> this.goToScreen('Register')}
                
                />
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