import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

// Screens 
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Seacrh';
import TopFiveScreen from '../screens/Topfive';

// screens myaccount
import MyAccountScreen from '../screens/MyAccount/MyAccount';
import RegisterScreen from '../screens/MyAccount/Register';

// creando stacks
const HomeScreenStack = createStackNavigator({
    //paginas del home
    Home : {
        screen: HomeScreen,
        navigationOptions : ({navigation}) => ({
            title:'Home',
            
        })
    }
});


const TopFiveScreenStack = createStackNavigator({
    // cuanto se cargue el stack va a lanzar la pagina
    //paginas del TopFive
    TopFive : {
        screen: TopFiveScreen,
        navigationOptions : ({navigation}) => ({
            title:'Top 5 Restaurantes'
        })
    }
});
const SearchScreenStack = createStackNavigator({
    // cuanto se cargue el stack va a lanzar la pagina
    //paginas del search
    Search : {
        screen: SearchScreen,
        navigationOptions : ({navigation}) => ({
            title:'Buscar'
        })
    }
});
const MyAccountScreenStack = createStackNavigator({
    //paginas del MyAccount
    MyAccount : {
        screen: MyAccountScreen,
        navigationOptions : ({navigation}) => ({
            title:'Mi Cuenta'
        })
    },
    Register :{
        screen : RegisterScreen,
        navigationOptions : ({navigation}) => ({
            title: 'Registrooo'
        })
    }
});

const RootStack = createBottomTabNavigator({

    Home: {
        screen : HomeScreenStack,
        navigationOptions : ({navigation}) =>({
            
            // titulo HOme de boton abajo
            tabBarLabel: 'Casa',
            tabBarIcon :({ tintColor }) =>(<Icon
                name='home'
                type= 'material-comunity' size={22} color={tintColor}/>)
        })
    },
    TopFive: {
        screen: TopFiveScreenStack,
        navigationOptions : ({navigation}) =>({
            
            // titulo HOme de boton abajo
            tabBarLabel: 'Top Cinco',
            tabBarIcon :({ tintColor }) =>(<Icon
                name='grade'
                type= 'material-icons' size={22} color={tintColor}/>)
        })
        
    },
    Search: {
        screen: SearchScreenStack,
        navigationOptions : ({navigation}) =>({
            
            // titulo HOme de boton abajo
            tabBarLabel: 'Buscar',
            tabBarIcon :({ tintColor }) =>(<Icon
                name='search'
                type= 'material-icons' size={22} color={tintColor}/>)
        })
        
    },
    MyAccount: {
        screen: MyAccountScreenStack,
        navigationOptions : ({navigation}) =>({
            
            // titulo HOme de boton abajo
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon :({ tintColor }) =>(<Icon
                name='user'
                type= 'font-awesome' size={22} color={tintColor}/>)
        })
        
    },

},  {   
     // OPCIONES DEL ROOTSTACK
        // primera en ver
        initialRouteName: 'MyAccount',
        //orden de las opciones
        order: ['Home','Search','TopFive','MyAccount'],
        
        //colores
        tabBarOptions :{
            
            inactiveTintColor: '#646464',
            activeTintColor : '#00a680'

        }


    }
);



// cerramos el ciclo

export default createAppContainer(RootStack);





