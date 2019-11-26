import React, {Component, cloneElement} from 'react';
import {StyleSheet , View , Text} from 'react-native';
import {Button} from 'react-native-elements';
//PARA EL FORMULARIO
import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterOptions,RegisterStruct} from '../../forms/Register';
//para la base de datos en el registro
import * as firebase from 'firebase';







export default class Register extends Component {


    // para traer registeroptions y stuctur
    constructor(){
        super();

        this.state = {
            registerStruct : RegisterStruct,
            registerOptions : RegisterOptions,

            formData:{
                name:'',
                email:'',
                password:'',
                passwordConfirmation:''

            },
            formErrorMessage:''
        };
    }

// comprobacion que el boton de registro esta bien weeee
// register = () => {
 //     console.log('Intento de registro')
// }
// validacion de que los datos del formulario esten bien: registerForm es el ref del formulario de abajo
    register = () => {

        const {password,passwordConfirmation}= this.state.formData;

        if(password === passwordConfirmation){
            // validacion de datoos
        const validate = this.refs.registerForm.getValue();
            console.log('contraseñas iguales');

            if(validate) {
                
                this.setState({formErrorMessage:'' });
                
                console.log('formulario correto')
            // IMPLEMENTACION DE FIREEBASEE EN EL REGISTRO ,,,    .theen(resolve => ESTO ES PARA VER SI ESTA CORRECTO WE

                firebase.auth().createUserWithEmailAndPassword(validate.email, validate.password).then(resolve => {

                    console.log('registro correto');
                }).catch(err => {
                    // esto es para el error en la base
                    console.log('Email ya esta en uso');
                });

            } else{
                // console.log('formulario incorreto')
                this.setState({
                    formErrorMessage:'formulario incorreto'
                });
            }
        }else{
            //console.log('contraseñas no iguales');
            this.setState({
                formErrorMessage:'contraseñas no iguales'
            });
        }
        
    };

// para que se registren los cambios en el formulario
//es mandado al INPUT tambien
    onChangeFormRegister = formValue => {

        this.setState({
            formData: formValue
        });

        // console.log(this.state.formData);

        // console.log('si vale esto')
    };


    render(){

        // para un mayor orden se traen las constantes aca
        const {registerOptions , registerStruct,formErrorMessage} = this.state;



        return(
            <View style = {styles.viewBody} >
                <Text>Register Screen</Text>
               
               {/* formulario */}
                <Form
                ref='registerForm'

                // se pueden traer directamente del state this.state.registerOptions
                type={registerStruct}
                options = {registerOptions}


                //decimos que el valor que debe tener siempre este formulario de ser el de arriba formData
                value ={this.state.formData}
                

                // para que se registren los cambios en el formulario
                onChange= {(formValue) => this.onChangeFormRegister(formValue)}


                />

                <Button

                buttonStyle = {styles.buttonRegisterContainer}
                title='Unirse'
                onPress= {()=> this.register()}
                
              
                />
                 <Text
                    style={styles.formErrorMessage}
                >{formErrorMessage}
                
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody :{
       
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: "center",
        
    },
    buttonRegisterContainer:{
        backgroundColor: '#00a680',
        margin: 10,

        
    },
    formErrorMessage:{
        color: 'red',
        textAlign:'center',
        marginTop:30
    }
   
});