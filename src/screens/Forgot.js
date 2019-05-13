import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, ScrollView, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import  { connect } from 'react-redux'
import { setEmailField, doForgot} from '../actions/AuthActions';

export class Forgot extends Component{

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0f6675'
        },
        headerTintColor: '#fff'
    }

    constructor(props){
        super(props);
        this.state = {};

        this.forgotAction = this.forgotAction.bind(this);
    }

    forgotAction(){
        if(this.props.emailValid) {
            this.props.doForgot(this.props.email);
        }
    }

    render(){

        let buttonOpacity = 0.2;

        if(this.props.emailValid){
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <ScrollView style={styles.scrollViewStyle}>
                    <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
                        <Text style={styles.header}>Esqueceu a senha?</Text>

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

                    
                    </KeyboardAvoidingView>
                </ScrollView>

                <TouchableHighlight underlayColor={null} style={[styles.button, {opacity:buttonOpacity}]} onPress={this.forgotAction}>
                    <Text style={styles.buttonText}>></Text>
                </TouchableHighlight>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollViewStyle: {
        flex: 1
    },
    keyboardContainer: {
        flex: 1
    },
    header: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50
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
        bottom: 20,
        right: 20,
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
        emailValid: state.auth.emailValid,
    }
}
const ForgotConnect = connect(mapStateToProps, {setEmailField, doForgot})(Forgot);
export default ForgotConnect;