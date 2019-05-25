import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Animated,

    AsyncStorage,

    Text
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Actions, ActionConst } from 'react-native-router-flux';
import Wallpaper from '../Shared/Wallpaper';
import Load from "react-native-loading-gif";
import api from "../services/api";

const SIZE = 40;

export default class PacketScreen extends Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            isLoading: false,
            isSelected: false,
            isFemale: false,
            count: 5,
            totalCount: 0,
            data: {},
            token: "",
            pkgTypes: [],
            setId: null,
        };

        this._onPress = this._onPress.bind(this);
        this.growAnimated = new Animated.Value(0);
    }

    async componentDidMount() {
        await this.refs.Load.OpenLoad();

        await AsyncStorage.getItem('Token').then((token) => {
            this.setState({
                token: token.replace(/['"']+/g, ''),
            });
        });
        var a = await fetch(api.getData() + '/api/Package/List', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        var b = await a.json();
        await this.setState({ data: b.items, totalCount: b.totalCount });
        await this.fillData();
        await this.refs.Load.CloseLoad();
    }
    fillData() {
        var packages = [
        ];
        for (var i = 0; i < this.state.totalCount; i++) {
            var getPackage = {
                name: this.state.data[i].name,
                content: this.state.data[i].content,
                price: this.state.data[i].price,
                freeDays: this.state.data[i].freeDays,
                id: this.state.data[i].id
            };
            packages[i] = getPackage;
        }
        this.setState({ pkgTypes: packages });
    }
    _onPress() {
        this.setPackage();

    }
    async setPackage() {
    console.log(this.state.token);
        var a = await fetch(api.getData() + '/api/User/SetPackage?token=' + this.state.token + '&packageId=' + this.state.pkgTypes[this._carousel.currentIndex].id, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        var b = await a.text();
        console.log(b + ' b');
        if (b == 'true') {
            AsyncStorage.setItem('isNavBar6', b, () => {
                Actions.homePageScreen();
            });
        }

    }
    _renderItem({ item, index }) {
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <ImageBackground resizeMode="contain" source={require('../../images/Packages/package.png')} style={{ width: DEVICE_WIDTH / 1.8, height: '90%', opacity: 0.6, borderRadius: 50 }} >
                    <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 30, color: 'white', top: '5%' }}>  {item.name} </Text>
                    <View style={{ padding: 10, height: '60%', marginTop: 15 }}>
                        <Text style={{ textAlign: 'left', justifyContent: 'center', alignItems: 'center', fontSize: 20 }}>  {item.content}  </Text>
                    </View>
                    <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>  {item.freeDays} </Text>
                    <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>  {item.price}  </Text>
                </ImageBackground>
            </View>
        );
    }
    render() {
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, SIZE],
        });
        return (
            <Wallpaper source={require('../../images/MainBackground.jpg')}>
                <Image resizeMode='cover'
                    source={require('../../images/degisim.png')}
                    style={{ width: 180, height: 155, left: '30%', top: '5%' }}
                />
                <View style={styles.container}>
                    <Text style={styles.headerText}>Hangi Paketi Tercih Edersin?</Text>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.pkgTypes}
                        renderItem={this._renderItem}
                        sliderWidth={DEVICE_WIDTH}
                        itemWidth={DEVICE_WIDTH / 1.8}
                        itemHeight={DEVICE_HEIGHT}

                    />
                    <TouchableOpacity style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1} >
                        <Text style={styles.buttonText}>Hemen Başla </Text>
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
                <Load Image="2" bgAnimate="opacity" ref="Load"></Load>

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
        width: '100%',
        height: '100%'
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
        marginBottom: 25
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat',
        fontSize: 20
    },
    headerText: {
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