import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import { Input, Icon } from 'react-native-elements';



export default (inputTemplate = locals => {

    return (

        <View style={styles.ViewContainer}>
            <Input
            // esto es llevado al registro, dando a conocer las configuraciones que debe tener el template
            placeholder={locals.config.placeholder}
            password = {locals.config.password}
            secureTextEntry={locals.config.secureTextEntry}
            rightIcon={
                <Icon
                name= {locals.config.iconName}
                type={locals.config.iconType}
                color='#b3b3b3'
                size={24}
                
                />
            }
            //esto se manda al onchange y es traido del mismo
            onChangeText={ value => locals.onChange(value)}
            
            
            
            />
        </View>
    )

});
const styles = StyleSheet.create({

    ViewContainer : {
        marginTop: 12,
        marginBottom: 15,
    }



});
