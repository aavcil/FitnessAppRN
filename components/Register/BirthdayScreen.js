import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import Calendar from 'react-native-calendar-datepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
	DatePickerIOS,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	DatePickerAndroid,
	Text,
	Platform
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Actions, ActionConst } from 'react-native-router-flux';
import Wallpaper from '../Shared/Wallpaper';
import Moment from 'moment';


const SIZE = 40;

export default class BirthdayScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenDate: new Date(),
		};
		this.setDate = this.setDate.bind(this);
		this.props = props;
		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	setDate(newDate) {
		this.setState({ chosenDate: newDate })
	}


	_onPress(date) {
		this.setState({ chosenDate: date });
		Actions.goalScreen({
			gender: this.props.gender, bodyType: this.props.bodyType,
			weight: this.props.weight, height: this.props.height, birthDate: this.state.chosenDate
		});
	}


	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		this.setState({ postData: date });

		this._hideDateTimePicker();
	};

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});



		if (Platform.OS == 'ios') {

			return (
				<Wallpaper source={require('../../images/MainBackground.jpg')}>
					<View style={styles.container}>

						 <DatePickerIOS
							date={new Date(this.state.chosenDate)}
							onDateChange={this.setDate}
							mode='date'
							backgroundqColor='white'
						/> 
						

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
		} else {

			return (

				<Wallpaper source={require('../../images/MainBackground.jpg')}>
					<View style={styles.container}>

						{/* <Calendar
							onChange={(g) => this.setState({ date:g })}
							selected={this.state.date}
							
							// We use Moment.js to give the minimum and maximum dates.
							minDate={Moment().subtract(100, 'years').startOf('day')}
							maxDate={Moment().startOf('day')}
						/> */}

						<DateTimePicker
							isVisible={true}
							onConfirm={this._onPress}
							onCancel={this._hideDateTimePicker}

						/>
						{/* <TouchableOpacity style={styles.button}
							onPress={this._onPress}
							activeOpacity={1} >
							<Text style={styles.buttonText}>Kaydet</Text>
						</TouchableOpacity> */}
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
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		width: '100%'
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
		marginLeft: '12.5%',
		marginRight: '12.5%',
		marginTop: 75
	},
	buttonText: {
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