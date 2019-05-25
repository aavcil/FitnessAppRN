import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header } from 'native-base';
import Dimensions from 'Dimensions';
import { isHomePage } from '../Main';
const menuImage = require('../../images/icons/menu.png');
import ActionSheet from 'react-native-actionsheet'
import ActionSheet2 from 'react-native-actionsheet'
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image, Animated,
    ImageBackground,
    TouchableOpacity

} from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';
import { ImagePicker } from 'expo';


const SIZE = 40;
export default class Home extends Component {
    showActionSheet = () => {
        this.ActionSheet.show()
    }

    constructor(props) {
        super();

        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            isLoading: false,
            isBefore: false,
            isAfter: true,
            isOpen: false,
            selectedItem: ' ',
            selectedImage: null,
            selectedImage2: null,
            ImageId: 0,
            isClicked: 0,
            title: 'Image'
        };


        this.growAnimated = new Animated.Value(0);
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


    _pickImage = async (x) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [2, 5],
            quality: 1,
        });
        if (!result.cancelled) {
            if (this.state.isClicked == 0) {
                this.setState({ selectedImage: result.uri });
            }
            else {
                this.setState({ selectedImage2: result.uri, isClicked: 0 });
            }
        }
    };

    render() {
        let { selectedImage } = this.state;
        let { selectedImage2 } = this.state;
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
                    <Wallpaper source={require('../../images/MainBackground.jpg')}>
                        <Image resizeMode='cover'
                            source={require('../../images/degisim.png')}
                            style={{ width: 180, height: 155, left: '30%', top: '5%' }}
                        />

                        <View style={{ height: '100%', width: '100%', top: 50, justifyContent: 'center', flexDirection: 'row', }}>

                            <TouchableOpacity onPress={() => { this.state.isBefore = true, this.showActionSheet() }}>

                                {this.state.selectedImage ? this.state.isBefore ?
                                    <Image resizeMode="contain" source={{ uri: selectedImage }} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />

                                    : <Image resizeMode="contain" source={require('../../images/addImage.png')} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />
                                    : <Image resizeMode="contain" source={require('../../images/addImage.png')} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />



                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.state.isAfter = true, this.state.isClicked = 1, this.showActionSheet() }}>
                                {this.state.selectedImage2 ? this.state.isAfter ?
                                    <Image resizeMode="contain" source={{ uri: selectedImage2 }} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />

                                    : <Image resizeMode="contain" source={require('../../images/addImage.png')} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />
                                    : <Image resizeMode="contain" source={require('../../images/addImage.png')} style={{ width: DEVICE_WIDTH / 2.1, height: '60%', margin: 5, opacity: 1, borderRadius: 10 }} />

                                }
                            </TouchableOpacity>
                        </View>
                        <ActionSheet
                            ref={o => this.ActionSheet = o}
                            title={'HappyFit'}
                            options={['Galeriden Seç', 'Kamerayı Aç', 'Kapat']}
                            cancelButtonIndex={2}
                            onPress={(index) => { if (index == 0) { this._pickImage() } if (index == 1) { console.log('Kamera') } }}
                        />



                        {/* <TouchableOpacity style={styles.button2}
                            onPress={this._onPress}
                            activeOpacity={1} >
                            <Text style={styles.buttonText} >Hemen Başla </Text>
                        </TouchableOpacity> */}
                        {/*
					<TouchableOpacity onPress={this._onPress}
						style={styles.backButton}
						activeOpacity={1}>
						<Image style={styles.image} source={arrowImg} />
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
*/}

                    </Wallpaper>

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
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0055',
        height: SIZE,
        width: '85%',
        marginBottom: 50,
        borderRadius: 20,
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
