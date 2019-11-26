import React from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/Validation';
import Validation from '../utils/Validation';
import InputTemplate from '../forms/templates/Input'


export const RegisterStruct = t.struct ({

    name: t.String,
    email: formValidation.email,
    password : formValidation.password,
    passwordConfirmation : formValidation.password
});

//las configuraciones tambien son declaradas en el INPUT LOCALS
export const RegisterOptions = {
    fields :{
        name:{
            // label: 'Nombre(*)',
            // // error: 'Nombre invalido',
            //dentro del template va todas las configuraciones
            template: InputTemplate,
            config:{
                placeholder: 'Escribe un nombre y apellido',
                iconType: 'material-community',
                iconName: 'account-outline'
            }
        },
        email:{
            
            // label:'Email(*)',
            // error:'Email invalido',
             //dentro del template va todas las configuraciones
            template: InputTemplate,
            config:{
                placeholder: 'Escribe tu email',
                iconType: 'material-community',
                iconName: 'email-outline'
    
            }

        },
        password:{
            // label:'Constraseña(*)',            
            // error : 'Contraseña invalida',
            // password: true,
            // secureTextEntry: true
            //dentro del template va todas las configuraciones
            template: InputTemplate,
            config:{
                placeholder: 'Escribe tu constraseña',
                iconType: 'material-community',
                iconName: 'lock-outline',
                password: true,
                secureTextEntry: true
   
            },
            

        },
        passwordConfirmation:{
             // label:'Confirmación de constraseña(*)',
            // placeholder: 'Escribe otra vez tu constraseña',
            // error : 'Confirmación de constraseña invalida',
            // password: true,
            // secureTextEntry: true
            //dentro del template va todas las configuraciones
            template: InputTemplate,
            config:{
                placeholder: 'Escribe otra vez tu constraseña',
                iconType: 'material-community',
                iconName: 'lock-reset',
                password: true,
                secureTextEntry: true
    
            },

        }
    }
};