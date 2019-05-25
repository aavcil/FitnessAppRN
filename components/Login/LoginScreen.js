import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Wallpaper from '../Shared/Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper source={require('../../images/HappyFit.jpg')}>
				<Logo />
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}