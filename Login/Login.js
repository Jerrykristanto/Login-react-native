import React , { Component } from 'react';
import { platfrom, StyleSheet, text, view, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    	<view style={styles.container}>
    	<Image
    	style={{width:70, height:50}}
    	source={require('./Foto/Facebook.png')}
    	/>
    	<TextInput
    	style={styles.inputBox}
    	placeholder="Email Atau Nomor Telpon"
    	/>
    	<TextInput
    	style={styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity 
    	styles={styles.button}>
    		<Text style={style.buttonText}>MASUK</Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text>Lupa Kata Sandi?</Text>
    	</TouchableOpacity>
    	</View>
        );
    }
}

const styles = StyleSheet.creat({
	container: {
		flex:1,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
	},
	inputBox: {
		width: 250,
		fontSize: 13,
		color: '#000000',
	},
	button: {
		width:250,
		height: 40,
		alignItems: 'center'
		justifyContent: 'center'
		backgroundColor: '#3B5998'
		marginVertical: 10,
		paddingHorizontal: 00,
	},
	buttonText: {
		fontSize: 13,
		color: '#f7f7f7'
	},
})
