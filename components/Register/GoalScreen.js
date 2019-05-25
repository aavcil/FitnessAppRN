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
import loseWeightImage from '../../images/LoseWeight.png';
import loseWeightActiveImage from '../../images/LoseWeightActive.png';
import gainWeightImage from '../../images/GainWeight.png';
import gainWeightActiveImage from '../../images/GainWeightActive.png';
import getFitImage from '../../images/GetFit.png';
import getFitActiveImage from '../../images/GetFitActive.png';
import arrowImg from '../../images/left-arrow.png';

const SIZE = 40;

export default class RegisterScreen extends Component {
	constructor(props) {
		super();
		
		this.state = {
			isLoading: false,
		};
		this.props=props;
		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
	
		Actions.createAccountScreen({ gender: this.props.gender, bodyType: this.props.bodyType, 
			weight: this.props.weight, height: this.props.height, 
			birthDate: this.props.birthDate, selectedGoal:this.state.selectedGoal });
	}

	handleGoal1Click(evt){
	  this.setState({selectedGoal : 1});
	}

	handleGoal2Click(evt){
	  this.setState({selectedGoal : 2});
	}

	handleGoal3Click(evt){
	  this.setState({selectedGoal : 3});
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<Wallpaper source={require('../../images/MainBackground.jpg')}>
				<View style={styles.container}>

					<TouchableOpacity onPress={(evt) => this.handleGoal1Click(evt) }>
						<Image source={loseWeightImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 387, display: (this.state.selectedGoal == 1 ? 'none' : 'flex')}}/>
						<Image source={loseWeightActiveImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 387, display: (this.state.selectedGoal != 1 ? 'none' : 'flex')}}/>
					</TouchableOpacity>

					<TouchableOpacity onPress={(evt) => this.handleGoal2Click(evt) }>
						<Image source={gainWeightImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 399, display: (this.state.selectedGoal == 2 ? 'none' : 'flex')}}/>
						<Image source={gainWeightActiveImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 399, display: (this.state.selectedGoal != 2 ? 'none' : 'flex')}}/>
					</TouchableOpacity>

					<TouchableOpacity onPress={(evt) => this.handleGoal3Click(evt) }>
						<Image source={getFitImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 423, display: (this.state.selectedGoal == 3 ? 'none' : 'flex')}}/>
						<Image source={getFitActiveImage} resizeMode="contain" style={{width: DEVICE_WIDTH, height: (DEVICE_WIDTH / 1080) * 423, display: (this.state.selectedGoal != 3 ? 'none' : 'flex')}}/>
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