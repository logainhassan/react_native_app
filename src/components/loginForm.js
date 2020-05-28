import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class loginForm extends Component {
     constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    onChangeEmail = (e) => {
        this.setState({
            email: (e)
        });
    }
    onChangePassword = (e) => {
      this.setState({
          password: (e)
      });
    }

    onSubmit =(e)=> {
        let obj ={};
        obj.email = this.state.email;
        obj.password = this.state.password;
        fetch("http://todoapp.ahmedrohym.com/api.php?apicall=login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",      
                              
            },
            body: JSON.stringify({obj})
            })
            .then(res => {
                if (res.ok) {
                    Actions.profile();
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).catch(error => Alert.alert('Invalid email or password') );  

            e.preventDefault();
    }
   
      
	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={this.onChangeEmail}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              value={this.state.password}
              onChangeText={this.onChangePassword}
              ref={(input) => this.password = input}
              />   
           <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});