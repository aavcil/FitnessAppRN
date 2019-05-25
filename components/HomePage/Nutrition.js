import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');

import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    TouchableHiglih

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';



export default class Nutrition extends Component {

    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: ' ',
            selectedGoal:0
        };
    
    }
    _onPress(data) {
        Actions.nutritionPageScreen2({ selectedGoal: data });
    }
    handleGoal1Click() {

        this._onPress(1);
    }

    handleGoal2Click() {
        this._onPress(2);
    }

    handleGoal3Click() {
        this._onPress(3);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,

        });
    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (

            <SideMenuu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}
            >
                <View style={{ left: 0, right: 0, top: 0 }}>
                    <Header style={{ backgroundColor: '#ff0055' }}>
                        <TouchableOpacity
                            onPress={this.toggle}
                            style={styles.button}
                        >
                            <Image
                                source={menuImage}
                                style={{ width: 32, height: 32 }}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../images/headerLogo.png')}
                            style={{ left: 130, width: '35%', height: '80%', top: 5 }}
                        />
                    </Header>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.handleGoal1Click()} >
                        <ImageBackground style={styles.images} source={require('../../images/Nutrition/hizliAlma.png')}  >
                            <Text style={{ color: '#ff0055', fontSize: 30, top: '40%', textAlign: 'center', left: 10, width: 150 }}>Hızlı Kilo Alma </Text>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleGoal2Click()} >
                        <ImageBackground style={styles.images} source={require('../../images/Nutrition/hizliVerme.png')}  >
                            <Text style={{ color: '#ff0055', fontSize: 30, top: '40%', textAlign: 'center', left: 280, width: 150 }}>Hızlı Kilo Verme </Text>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleGoal3Click()} >
                        <ImageBackground style={styles.images} source={require('../../images/Nutrition/hizliAlma.png')} >
                            <Text style={{ color: '#ff0055', fontSize: 30, top: '40%', textAlign: 'center', left: 10, width: 150 }}>Formda Kalma Sıkılaşma</Text>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>


            </SideMenuu>


        );
    }
}
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 2,
        padding: 10,
        left: 10,
    },
    images: {
        width: DEVICE_WIDTH,
        height: 230,

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});