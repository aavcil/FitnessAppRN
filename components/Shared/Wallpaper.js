import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	ImageBackground,
} from 'react-native';

export default class Wallpaper extends Component {
	render() {
		return (
			<ImageBackground style={styles.container} imageStyle={styles.picture} source={this.props.source}>
		        {this.props.children}
		      </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	picture: {
		flex: 1,
		resizeMode: "cover"

	}
});