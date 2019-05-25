import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Wallpaper from '../Shared/Wallpaper';

import backgroundImage from '../../images/MainBackground.jpg';
import introImage from '../../images/Intro.png';
import arrowImg from '../../images/left-arrow.png';

const SIZE = 40;


export default class RegisterScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		Actions.genderSelection();
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});
	
		return (
			<Wallpaper source={require('../../images/MainBackground.jpg')}>
				<View style={styles.container}>
					<Image source={introImage} resizeMode="contain" style={{width: '100%', height:DEVICE_WIDTH}}/>

					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							<Text style={styles.buttonText}>Kaydet</Text>
					</TouchableOpacity>
{/*
					<TouchableOpacity onPress={this._onPress}
						style={styles.backButton}
						activeOpacity={1}>
						<Image style={styles.image} source={arrowImg} />
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
*/}
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
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%'
	},
	backButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#ff0055',
		position: 'absolute',
		right: 50,
		bottom: 50

	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff0055',
		height: SIZE,
		width: '75%',
		borderRadius: 20,
		zIndex: 100,
		marginLeft: 25,
		marginRight: 25,
		marginTop:75
	},
	buttonText:{
		color: 'white',
		backgroundColor: 'transparent',
		fontFamily: 'Montserrat',
		fontSize: 20
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	}
});