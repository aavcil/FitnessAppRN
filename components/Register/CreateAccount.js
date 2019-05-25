import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Animated,
    Easing,
    TextInput,
    Text,
    AsyncStorage
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Wallpaper from '../Shared/Wallpaper';
import readyNowImage from '../../images/ReadyNow.png';
import { ImagePicker } from 'expo';
import api from '../services/api';

// import ImgToBase64 from 'react-native-image-base64';

const SIZE = 40;

export default class CreateAccount extends Component {

    constructor(props) {
        super();
        this.state = { username: '', password: '', email: '' };
        this._onPress = this._onPress.bind(this);
        this.props = props;
        this.state = {
            base64Image: null,
            data: {},
            image: null,
            sex: 1,
            token: false,
        };

    }

    // changeTypeImage(){
    //     ImgToBase64.getBase64String(this.state.image)
    //     .then(base64String => this.setState({base64Image:base64String}))
    //     .catch(err => console.log(err));

    // }

    async getTokenData() {

        if (this.props.gender == 'F') {
            this.setState({ sex: 2 })
        }

        var kilo = this.props.weight.toString().substring(0, 5);
        var boy = this.props.height.toString().substring(0, 6);
        var getWeight = parseInt(kilo, 10) + 1;
        var getHeight = parseInt(boy, 10) + 1;

        var postData = {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email,
            "profilePicture": this.state.image,
            "sex": this.state.sex,
            "bodyType": this.props.bodyType,
            "length": getHeight,
            "weight": getWeight,
            "birthDate": this.props.birthDate.toString().substring(0, 25),
            "target": this.props.selectedGoal
        };

        var a = await fetch(api.getData() + '/api/User/Register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        

        var b = await a.text();
        console.log(b);
        AsyncStorage.setItem('Token', b, () => {
        });
     


        // var tokenc = "";
        // await fetch('http://happyfit.production.cmosteknoloji.com/api/User/Register', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(postData),
        // }).then((resp) => {
        //     return resp.text()
        // }).then((text) => {
        //     tokenc = text;
        // });


    }

    _onPress() {

        this.getTokenData().then(() => {    
                Actions.packetPageScreen();   
        });

    }

    // Token yerine 1 gelirse aynı kullanıcı adı var. 2 gelirse mail var . 0 Dönerse Şifre Hatalı.


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
            aspect: [3, 4],
            quality: 1,

        });
        if (!result.cancelled) {
            this.setState({ image: result });
        }
        console.log(this.state.image)
    };
    render() {

        let { image } = this.state;

        return (
            <Wallpaper source={require('../../images/MainBackground.jpg')}>
                <View style={styles.container}>

                    <View style={styles.SectionStyleAddProfilePicture}>
                        <TouchableHighlight>
                            <Image
                                style={styles.ReadyNow}
                                source={require('../../images/ReadyNow.png')}
                            />
                        </TouchableHighlight>

                    </View>

                    <View style={styles.StyleAddProfilePicture}>
                        <TouchableOpacity onPress={this._pickImage}>

                            {this.state.image ?

                                <Image source={{ uri: image }} style={{ width: 110, height: 110, borderRadius: 110 }} />

                                :

                                <Image style={styles.addProfilPicture} source={require('../../images/AddProfilPicture.png')} />

                            }




                        </TouchableOpacity>

                    </View>
                    {/* <Image source={readyNowImage} resizeMode="contain" style={{width: '40%', height:DEVICE_WIDTH}}/> */}
                    <View style={styles.inputs}>
                        <View style={styles.SectionStyle}>
                            <Image source={require('../../images/icons/username.png')} style={styles.ImageStyle} />

                            <TextInput
                                style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 16 }}
                                placeholder="Kullanıcı Adı"
                                underlineColorAndroid="transparent"
                                value={this.state.username}
                                onChangeText={username => this.setState({ username })}
                            />

                        </View>
                        <View style={styles.SectionStyle}>
                            <Image source={require('../../images/icons/password.png')} style={styles.ImageStyle} />

                            <TextInput
                                style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 16 }}
                                placeholder="Şifre"
                                secureTextEntry={true}
                                underlineColorAndroid="transparent"
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />

                        </View>
                        <View style={styles.SectionStyle}>
                            <Image source={require('../../images/icons/email.png')} style={styles.ImageStyle} />

                            <TextInput
                                style={{ flex: 1, marginLeft: 10, color: 'white', fontSize: 16 }}
                                placeholder="E-posta Adresi"
                                underlineColorAndroid="transparent"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />

                        </View>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Text style={styles.headerText}> Egzersizler ve Beslenme Planın İçin  </Text>
                    </View>

                    <TouchableOpacity style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1} >
                        <Text style={styles.buttonText}>Hesap Oluştur</Text>
                    </TouchableOpacity>

                    <View style={{}}>

                        <Text style={styles.Text}> Hesap oluşturarak <Text style={styles.TextToPolitica}> kullanım koşulları, gizlilik politikası </Text>
                            ve
                        <Text style={styles.TextToPolitica}> yasal yönergeleri kabul etmiş sayılırsınız. </Text> </Text>
                    </View>
                </View >
            </Wallpaper >
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
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
    headerText: {
        color: 'white',
        backgroundColor: 'transparent',

        fontSize: 25,
        top: 30
    },
    Text: {
        color: 'white',
        backgroundColor: 'transparent',


        fontSize: 14,
        margin: 10,
        textAlign: 'center',
        top: 30
    },
    TextToPolitica: {
        color: '#D20059',
        backgroundColor: 'transparent',
        fontSize: 14,
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
        marginTop: 10,
        top: 30
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat',
        fontSize: 20,

    },
    StyleAddProfilePicture: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        top: 90
    },
    ReadyNow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        resizeMode: 'cover',
        flexDirection: 'column',
        height: 200,
        margin: 10
    },
    circle: {
        height: SIZE,
        width: SIZE,
        marginTop: -SIZE,
        borderRadius: 100,
        backgroundColor: '#F035E0',
    },
    inputs: {
        marginTop: 60
    },
    image: {
        width: 24,
        height: 24,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH - 50,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: .5,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        height: 40,
        borderRadius: 20,
        margin: 10,
        top: 50,
        marginLeft: 25
    },
    SectionStyleAddProfilePicture: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 100,
        top: 40,
        margin: 10,
    },
    addProfilPicture: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 115,

    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        marginLeft: 20,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
});