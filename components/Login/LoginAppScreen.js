import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import {
    StyleSheet,
	View,
	AsyncStorage

} from 'react-native';
import Dimensions from 'Dimensions';

import {
	Button,
	Text,
	Form,
	Item as FormItem,
	Input,
	Label,
  } from 'native-base';
export default class LoginAppScreen extends Component {

	constructor(props) {
        super();
        this.state = { userName: '', password: ''};
        this._onPress = this._onPress.bind(this);
        this.props = props;
        this.state = {
            token: null,
        };
    }
	// async postLoginData(){

	// 	var postData={
	// 		"userName":this.state.userName,
	// 		"password":this.state.password
	// 	}
		
    //     var a = await fetch(api.getData() + '/api/User/Login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(postData),
	// 	});
		
	// 	var b = await a.text();
	// 	console.log(b);
    //     AsyncStorage.setItem('Token', b, () => {
    //     });
	// }
	render() {
		return (
			<Wallpaper source={require('../../images/MainBackground.jpg')}>
	<View style={styles.container}>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input 
			  onChangeText={(userName) => {this.setState({userName}); }}
			  value={this.state.userName}/>
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
			<Input secureTextEntry={true}  
			onChangeText={(password) => {this.setState({password}); }}
			  value={this.state.password}/>
          </FormItem>

          <Button full primary style={{ paddingBottom: 4 }} onPress={()=>this.postLoginData()}>
            <Text> Login </Text>
          </Button>
        </Form>
		</View>
			</Wallpaper>
		);
	}
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        width: '100%'
	},
});