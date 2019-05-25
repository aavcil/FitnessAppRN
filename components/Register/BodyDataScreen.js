import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	PanResponder,
	TextInput
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Wallpaper from '../Shared/Wallpaper';
 
import backgroundImage from '../../images/MainBackground.jpg';
import WeightForeground from '../../images/WeightForeground.png';

import WeightImage from '../../images/Weight.png';
import MeasureImage from '../../images/Measure.png';
import MeasurePinImage from '../../images/MeasurePin.png';

import arrowImg from '../../images/left-arrow.png';
import ImageRotate from 'react-native-image-rotate';

const SIZE = 40;

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default class BodyDataScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			currentWeight: 70,
			currentHeight: 170
		};

		this.props = props;

		this._onPress = this._onPress.bind(this);
		this._updateNativeStyles = this._updateNativeStyles.bind(this);

		this._panResponder = {};
    	this._currentRotation = 202;
    	this._currentHeight = -2739;
	    this._circleStyles = {
	    	style : {
	    		transform: [
	    			{
	    				rotate: this._currentRotation + 'deg'
	    			}
	    		]
	    	}
	    };

	    this._heightStyles = {
	    	style : {
	    				left: this._currentHeight
	    	}
	    };
	}


	_onPress() {
		Actions.birthdayScreen( {gender: this.props.gender, bodyType: this.props.bodyType,
			 weight: this.state.currentWeight, height: this.state.currentHeight} );
	}

	componentWillMount() {
	    this._panResponder = PanResponder.create({
	      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
	      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
	      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
	      onPanResponderMove: this._handlePanResponderMove.bind(this),
	      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
	      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
	    });

	    this._panResponder2 = PanResponder.create({
	      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder2.bind(this),
	      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder2.bind(this),
	      onPanResponderGrant: this._handlePanResponderGrant2.bind(this),
	      onPanResponderMove: this._handlePanResponderMove2.bind(this),
	      onPanResponderRelease: this._handlePanResponderEnd2.bind(this),
	      onPanResponderTerminate: this._handlePanResponderEnd2.bind(this),
	    }); 
    }

    componentDidMount(){
  		this._updateNativeStyles();
    }

   _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
    this.measure && this.measure.setNativeProps(this._heightStyles);
  }


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////// FIRST PAN HANDLERS ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return false;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?

    if(gestureState.moveY < DEVICE_HEIGHT /2){
    	return true;
    }
    else{
    	return false;
    }
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
  }
  _handlePanResponderMove(e: Object, gestureState: Object) {
	var val = this._currentRotation + (gestureState.dx/2);
	val = val > 292 ? 292 : (val < 0.1 ? 0 : val);
  	var weight = Math.abs(val.map(292, 0, 30, 160));
  	this._circleStyles.style = { transform : [{rotate: val + "deg"}] };
  	this.setState({currentWeight: weight});
  	this._updateNativeStyles();
  }
  _handlePanResponderEnd(e: Object, gestureState: Object) {
  	var val = this._currentRotation + (gestureState.dx/2);
	val = val > 292 ? 292 : (val < 0.1 ? 0 : val);
  	this._currentRotation = val;
  }

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////////////////////////// SECOND PAN HANDLERS ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  _handleStartShouldSetPanResponder2(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return false;
  }

  _handleMoveShouldSetPanResponder2(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderGrant2(e: Object, gestureState: Object) {
  }
  _handlePanResponderMove2(e: Object, gestureState: Object) {
	var val = this._currentHeight + (gestureState.dx/2);
  	val = val > -1623 ? -1623 : (val < -3298 ? -3298 : val);
  	var height = Math.abs(val.map(-1623, -3298, 70, 220) % 220);
  	this._heightStyles.style = { left : val };
  	this.setState({currentHeight: height});
  	this._updateNativeStyles();
  }
  _handlePanResponderEnd2(e: Object, gestureState: Object) {
	var val = this._currentHeight + (gestureState.dx/2);
  	val = val > -1623 ? -1623 : (val < -3298 ? -3298 : val);
  	this._currentHeight = val;
  }


	render() {

		return (
				<View style={styles.container}>
					<Image source={WeightImage} resizeMode="contain" ref={(c) => { this.circle = c; }} style={styles.circle} />
					<Image source={WeightForeground} resizeMode="contain" style={{position:'absolute', height: '100%'}} {...this._panResponder.panHandlers} />
					<Image source={MeasureImage} resizeMode="contain" ref={(c) => { this.measure = c; }} style={styles.measure} {...this._panResponder2.panHandlers} />
					<Image source={MeasurePinImage} resizeMode="contain" style={styles.measurePin} />

					<Text keyboardType='numeric' style={{fontFamily: 'BebasNeue', fontSize: 60, color: 'white', marginTop: 40}}>{this.state.currentWeight.toFixed(1) + " kg"}</Text>
					<Text keyboardType='numeric' style={{fontFamily: 'BebasNeue', fontSize: 60, color: 'white', marginTop: 20}}>{this.state.currentHeight.toFixed(1) + " cm"}</Text>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							<Text style={styles.buttonText}>Kaydet</Text>
					</TouchableOpacity>
{/*

{//					<TextInput keyboardType='numeric' style={{fontFamily: 'BebasNeue', fontSize: 40, color: 'white', height: 100, width: 200}} onChangeText={(t) => { if(!isNaN(parseFloat(t)) && isFinite(t)){this.setState({currentWeight: parseFloat(t)})} else{this.setState({currentWeight: 0})}} } value={this.state.currentWeight.toFixed(1) + " kg"}></TextInput>
					<TouchableOpacity onPress={this._onPress}
						style={styles.backButton}
						activeOpacity={1}>
						<Image style={styles.image} source={arrowImg} />
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
*/}
				</View>
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
		position: 'absolute',
		bottom: 50
	},
	buttonText:{
		color: 'white',
		backgroundColor: 'transparent',
		fontFamily: 'Montserrat',
		fontSize: 20
	},
	circle: {
	    width: DEVICE_WIDTH * 1.4,
	    height: DEVICE_WIDTH * 1.4,
	    position: 'absolute',
	    top: '11%'
	  },
	measure: {
	    height: 80,
	    position: 'absolute',
	    bottom: '20%',
	    zIndex:9999
	  },
	measurePin: {   
	    height: 80,
	    position: 'absolute',
	    bottom: '22%',
	    zIndex:99999
	  },
	image: {
		width: 24,
		height: 24,
	}
});