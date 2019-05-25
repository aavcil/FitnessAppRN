import React, { Component } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header, Tabs, Tab } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');
import NutritionPage from './NutritionPage';
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    AsyncStorage,
    TouchableOpacity

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';



export default class StandartNutrition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: 0,
            bgImage: '',
            data:[]
        };
        this._onPress = this._onPress.bind(this);
    }

    _onPress(data) {

        Actions.nutritionDetailPageScreen({ setData: data });

    }

    async componentDidMount() {

        await AsyncStorage.getItem('Token').then((token) => {
            //   console.log(token.replace(/['"']+/g, ''));

            this.setState({
                token: token.replace(/['"']+/g, ''),

            });

        });
        console.log(this.state.token);
        var a = await fetch(api.getData() + '/api/Nutrition/List?nutritionType=1&token=' + this.state.token, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        var b = await a.json();
     
        console.log(b);
        this.setState({
            data:b
            });
            console.log(this.state.data);
    }

    handlerClick() {

    }

    renderData() {
        switch (this.props.name) {
            case '1':
                return (

                    <ScrollView >
                        <View style={{ width: DEVICE_WIDTH, height: 170 }} >
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBgFirst.png')} />
                            <Text style={{ opacity: 1, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(1)} > KİLO ALMA BESLENME LİSTESİ</Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(2)}   > DETOX</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -160, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>

                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(3)} > 1200 KALORİLİK 7 GÜNLÜK DİYET LİSTESİ</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -180, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>
                    </ScrollView>
                );

                break;
            case '2':
                return (
                    <ScrollView >
                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBgFirst.png')} />
                            <Text style={{ opacity: 1, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(4)}> STANDART BESLENME LİSTESİ</Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(2)}   > DETOX</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -160, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>

                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(3)} > 1200 KALORİLİK 7 GÜNLÜK DİYET LİSTESİ</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -180, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>
                    </ScrollView>
                );
                break;
            case '3':
                return (
                    <ScrollView >
                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBgFirst.png')} />
                            <Text style={{ opacity: 1, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(4)}> STANDART BESLENME LİSTESİ</Text>
                        </View>
                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(2)}   > DETOX</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -160, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>

                        <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                            <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                            <Text style={{ opacity: 0.5, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} onPress={(e) => this._onPress(3)} > 1200 KALORİLİK 7 GÜNLÜK DİYET LİSTESİ</Text>
                            <Image resizeMode='cover' style={{ opacity: 1, top: -180, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} />
                        </View>
                    </ScrollView>
                );
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Wallpaper source={require('../../images/tabsBackground.jpg')}>

            </Wallpaper>
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