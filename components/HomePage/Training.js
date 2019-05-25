import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');
import Load from "react-native-loading-gif";

import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    TouchableHighlight

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';

import api from '../services/api';

export default class Training extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: ' ',
            // data: {
            //     "Email": "selim@",
            //     "Password": "1234",
            //     "AppId": "0"
            // }
            data: {},
            totalCount: 0,
            token: null,
        };

    }
    async componentDidMount() {
        await this.refs.Load.OpenLoad();
        await AsyncStorage.getItem('Token').then((token) => {
            //   console.log(token.replace(/['"']+/g, ''));

            this.setState({
                token: token.replace(/['"']+/g, ''),
            });
        });

        var a = await fetch(api.getData() + '/api/ExerciseProgram/List?token=' + this.state.token, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });   
        var b = await a.json();
        await this.setState({ data: b.items, totalCount: b.totalCount });
        await this.refs.Load.CloseLoad();
    }

    renderItems() {

        var exercises = [];

        for (let i = 0; i < this.state.totalCount; i++) {
            exercises.push(
                <ImageBackground style={styles.images} key = {i}  source={{ uri: api.getData() + "/" + this.state.data[i].backgroundUrl }} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}  onPress={() => Actions.trainingDetailPage()}>{this.state.data[i].title} </Text>
                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>{this.state.data[i].description} </Text>
                </ImageBackground>
            );
        }
        return (
            <View>
                {exercises}
            </View>
        );


        // return (
        //     <ImageBackground style={styles.images} source={{ uri: api.getData() +"/"+ data[i].backgroundUrl }} >
        //         <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>{data[i].title} </Text>
        //         <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>{data[i].description} </Text>

        //     </ImageBackground>
        // );

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

                <ScrollView style={styles.container}>


                    {this.renderItems()}
                    {/*    <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                        <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>{this.state.data.title} </Text>

                        <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>{this.state.data.description} </Text>

                    </ImageBackground> 

                      <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground>
                <ImageBackground style={styles.images} source={require('../../images/Training/beginnerProgram.png')} >
                    <Text style={{ color: 'white', fontSize: 30, top: '40%', left: 10 }}>BAŞLANGIÇ PROGRAMI </Text>

                    <Text style={{ color: 'white', fontSize: 10, top: '42%', left: 10 }}>Fit bir vücut için ilk adımı at! </Text>

                </ImageBackground> */}



                </ScrollView>

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
        height: 200
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