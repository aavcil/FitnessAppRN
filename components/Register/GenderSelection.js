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
import arrowImg from '../../images/left-arrow.png';
import genderEmpty from '../../images/GenderSelection.png';
import genderFemale from '../../images/GenderWamen.png';
import genderMale from '../../images/GenderMale.png';

const SIZE = 40;

export default class GenderSelection extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			isSelected: false,
			isFemale: false
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		setTimeout(() => {
			if(!this.state.isSelected){
				alert("Lütfen cinsiyetinizi seçiniz");
				return;
			}
			Actions.bodyTypeSelection( {gender: this.state.isFemale ? "F" : "M"} );
		}, 100);
	}

	handleGenderClick(evt){
	  if(evt.nativeEvent.locationX > DEVICE_WIDTH / 2){
	  	this.setState({isSelected: true, isFemale: true});
	  }
	  else{
	  	this.setState({isSelected: true, isFemale: false});
	  }
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<Wallpaper source={require('../../images/MainBackground.jpg')}>
				<View style={styles.container}>
					<Text style={styles.headerText}>Cinsiyetin Nedir?</Text>
					<TouchableOpacity onPress={(evt) => this.handleGenderClick(evt) }> 
						<Image source={genderEmpty} resizeMode="contain" style={{width: DEVICE_WIDTH, height: ((DEVICE_WIDTH/1106) * 1284), display: (this.state.isSelected ? 'none' : 'flex')}}/>
						<Image source={genderFemale} resizeMode="contain" style={{width: DEVICE_WIDTH, height: ((DEVICE_WIDTH/1106) * 1284), display: (this.state.isSelected && this.state.isFemale ? 'flex' : 'none')}}/>
						<Image source={genderMale} resizeMode="contain" style={{width: DEVICE_WIDTH, height: ((DEVICE_WIDTH/1106) * 1284), display: (this.state.isSelected && !this.state.isFemale ? 'flex' : 'none')}}/>
					</TouchableOpacity>
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
	headerText:{
		color: 'white',
		backgroundColor: 'transparent',
		fontFamily: 'Montserrat',
		fontSize: 25,
		marginTop: 50,
		marginBottom: 30
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