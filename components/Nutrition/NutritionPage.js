import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header, Tabs, Tab } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');
import Load from "react-native-loading-gif";

import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    AsyncStorage

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';
import api from '../services/api';



export default class NutritionPage extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: 0,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    async componentDidMount() {
    
        this.refs.Load.OpenLoad();
        await AsyncStorage.getItem('Token').then((token) => {
            //   console.log(token.replace(/['"']+/g, ''));

            this.setState({
                token: token.replace(/['"']+/g, ''),

            });
        });
       

        var a = await fetch(api.getData() + '/api/Nutrition/List?nutritionType=1&token=' + this.state.token, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        var b = await a.json();
        debugger;
        this.setState({
            data: b,
            totalCount: b.totalCount,
        });
        await this.getV();
        await this.refs.Load.CloseLoad();
    }

    async getV() {
        var a = await fetch(api.getData() + '/api/Nutrition/List?nutritionType=2&token=' + this.state.token, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        var b = await a.json();

        this.setState({
            dataV: b,
            totalCountV: b.totalCount,
        });

    }


    _renderItem() {
        var nutrition = [];
        for (let i = 0; i < this.state.totalCount; i++) {
            nutrition.push(
                <View style={{ width: DEVICE_WIDTH, height: 170 }} key={this.state.data.items[i].id}>
                    <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                    <Text style={{ opacity: 1, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} > {this.state.data.items[i].title}</Text>
                    {!this.state.data.items[i].available ? <Image resizeMode='cover' style={{ opacity: 1, top: -180, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} /> : null}
                </View>
            );
        }
        return (
            <View>
                {nutrition}
            </View>
        );
    }

    renderData() {
        var vej = [];
        for (let i = 0; i < this.state.totalCountV; i++) {
            vej.push(
                <View style={{ width: DEVICE_WIDTH, height: 170 }} key={this.state.dataV.items[i].id}>
                    <Image style={{ opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />
                    <Text style={{ opacity: 1, fontSize: 30, top: -105, textAlign: 'center', color: '#ff0055', fontWeight: 'bold' }} > {this.state.dataV.items[i].title}</Text>
                    {!this.state.dataV.items[i].available ? <Image resizeMode='cover' style={{ opacity: 1, top: -180, left: (DEVICE_WIDTH / 2) - 37.5, width: 75, height: 80 }} source={require('../../images/icons/Lock.png')} /> : null}

                </View>
            );
        }
        return (
            <View>
                {vej}
            </View>
        );
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
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#ff0055' }}>
                        <Tab heading="Standart" activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#fbc213' }} activeTabStyle={{ backgroundColor: '#faba12' }} >
                            <Wallpaper source={require('../../images/tabsBackground.jpg')}>
                                <ScrollView>
                                    {this._renderItem()}
                                </ScrollView>
                            </Wallpaper>
                        </Tab>
                        <Tab heading="Vejetaryen" activeTextStyle={{ color: '#fff', fontWeight: 'bold' }} textStyle={{ color: '#fff', fontSize: 12 }} tabStyle={{ backgroundColor: '#fbc213' }} activeTabStyle={{ backgroundColor: '#faba12' }} >

                            <Wallpaper source={require('../../images/Vejeteryan.jpg')}>
                                <ScrollView>
                                    {this.renderData()}
                                </ScrollView>
                            </Wallpaper>
                        </Tab>

                    </Tabs>

                </View>
                <Load Image="2" bgAnimate="opacity" ref="Load"></Load>

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