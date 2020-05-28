import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        username:'',
        email: '',
        password: '',
        gender: 'male',
    
    }
  }

onChangeName = (e) => {
    this.setState({
        username: (e)
    });
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
    obj.username = this.state.username;
    obj.email = this.state.email;
    obj.password = this.state.password;
    obj.gender = this.state.gender;

    console.log('data  :',JSON.stringify({obj}));
    fetch("http://todoapp.ahmedrohym.com/api.php?apicall=signup", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",               
        },
        body: JSON.stringify({obj})
        })
        .then(res => {
          console.log('Success:', res);   
            if (res.ok) {
                Actions.profile();
                return res.json();
            } else {
                throw Error(res.statusText);
                
            }
        }).catch(error => {Alert.alert(error); } );  

        e.preventDefault();
}
	render(){
		return(
			<View style={styles.container}>
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText={this.onChangeName}
              value={this.state.username}
              onSubmitEditing={()=> this.password.focus()}
              />
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

        <Button
              onPress={() => {
                  this.setState({
                      gender: 'male',
                  })
              }}
              title="Male"
              color="rgba(255, 255,255,0.2)"
          />
          <Button
              onPress={() => {
                  this.setState({
                      gender: 'female',
                  })
              }}
              title="Female"
              color="rgba(255, 255,255,0.2)"
          />
           <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
             <Text style={styles.buttonText}>Sign up</Text>
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