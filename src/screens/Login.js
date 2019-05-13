import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, ScrollView, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import  { connect } from 'react-redux'
import { setEmailField, setPasswordField, doLogin} from '../actions/AuthActions';
import {NavigationActions, StackActions} from "react-navigation";

export class Login extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {};

        this.loginAction = this.loginAction.bind(this);
        this.verifyStatus = this.verifyStatus.bind(this);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.goToForgot = this.goToForgot.bind(this);
    }

    goToForgot(){
        this.props.navigation.navigate('Forgot');
    }

    componentDidUpdate(){
        this.verifyStatus();
    }

    verifyStatus(){

        if(this.props.status === 1){
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'HomeNav'})
                ]
            }));
        }
    }

    loginAction(){
        if(this.props.emailValid === true && this.props.passValid === true) {
            this.props.doLogin(this.props.email, this.props.pass);
        }
    }

    goToSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    render(){

        let buttonOpacity = 0.2;

        if(this.props.emailValid === true && this.props.passValid === true){
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/login-app-done.png')} style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
                <View style={styles.header}></View>

                <View style={styles.fieldAreaEmail}>
                    <Text style={styles.fieldTitle}>E-MAIL</Text>
                    <View style={styles.fieldItemArea}>
                        <TextInput style={styles.fieldItem} value={this.props.email} onChangeText={(text)=> this.props.setEmailField(text)} />
                        <View style={styles.fieldItemStatus}>
                            {this.props.emailValid &&
                            <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')}/>
                            }
                        </View>
                    </View>
                </View>

                <View style={styles.fieldAreaPass}>
                    <Text style={styles.fieldTitle}>SENHA</Text>
                    <View style={styles.fieldItemArea}>
                        <TextInput secureTextEntry={true} style={styles.fieldItem} value={this.props.pass} onChangeText={(text)=>{ this.props.setPasswordField(text)}}/>
                        <View style={styles.fieldItemStatus}>
                            {this.props.passValid &&
                            <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')}/>
                            }
                        </View>
                    </View>
                </View>

                    <View style={styles.bArea}>
                        <TouchableHighlight underlayColor={null} onPress={this.goToForgot} style={styles.bText}>
                            <Text style={styles.bTextInt}>Esqueceu a senha?</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor={null} onPress={this.goToSignUp} style={styles.bText}>
                            <Text style={styles.bTextInt}>Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>


                    <TouchableHighlight underlayColor={null} style={[styles.button, {opacity:buttonOpacity}]} onPress={this.loginAction}>
                        <Text style={styles.buttonText}>></Text>
                    </TouchableHighlight>


                </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        flex: 1
    },
    keyboardContainer: {
        flex: 1
    },
    header: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 250
    },
    fieldTitle: {
        color: '#fff',
        fontSize: 16
    },
    fieldItem: {
        flex: 1,
        color: '#fff',
        fontSize: 17,
    },
    fieldAreaEmail: {
        position: 'relative',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    fieldAreaPass: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    fieldItemArea: {
        flexDirection: 'row',
        height: 50,
    },
    fieldItemStatus: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldItemStatusImg: {
        height: 40,
        width: 40
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#0a5360',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 40
    },
    bArea: {
        flexDirection: 'row'
    },
    bText: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bTextInt: {
        color: '#fff',
        fontSize: 18
    }
});



const mapStateToProps = (state) =>{
    return {
        status: state.auth.status,
        email: state.auth.email,
        pass: state.auth.pass,
        emailValid: state.auth.emailValid,
        passValid: state.auth.passValid
    }
}
const LoginConnect = connect(mapStateToProps, {setEmailField, setPasswordField, doLogin})(Login);
export default LoginConnect;