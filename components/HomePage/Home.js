import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header, Button } from 'native-base';
import Dimensions from 'Dimensions';
import { isHomePage } from '../Main';
const menuImage = require('../../images/icons/menu.png');
import Moment from 'moment';

import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';
import Load from "react-native-loading-gif";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: ' ',
            token: null,
        };
    }

    async componentDidMount() {
      
        await AsyncStorage.getItem('Token').then((token) => {
            this.setState({
                token: token,
            });
            console.log(this.state.token);
        });
        await AsyncStorage.setItem('getNavBar', "geldim", () => {
        });

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

    logOut() {
        AsyncStorage.removeItem('Token').then(
            () => {
                Actions.loginScreen();
            });
    }

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
                    <Wallpaper source={require('../../images/MainBackground.jpg')}>
                        <Button block success onPress={() => this.logOut()}>
                            <Text>Log Out</Text>
                        </Button>
                        <Text>Username : {this.props.username} </Text>
                        <Text>Password : {this.props.password} </Text>
                        <Text>Email : {this.props.email} </Text>
                        <Text>Gender : {this.props.gender} </Text>
                        <Text>BodyType : {this.props.bodyType} </Text>
                        <Text>Weight : {this.props.weight} </Text>
                        <Text>Height : {this.props.height} </Text>
                        <Text>BDay : {this.props.birthDate} </Text>
                        <Text>SelectedGoal : {this.props.selectedGoal} </Text>
                        <Text>SelectedPacket : {this.props.selectedPacket} </Text>
                        <Text>ProfilePicture : {this.props.imageData} </Text>

                        <Text>Token : {this.state.token}  </Text>
                        <Image source={{ uri: this.props.imageData }} resizeMode='cover' style={{ width: 101, left: '40%', height: 110, borderRadius: 110 }} />



                    </Wallpaper>
                </View>

                <Load Image="2" bgAnimate="opacity" ref="Load"></Load>

            </SideMenuu>


        );
    }
}
const DEVICE_HEIGHT = Dimensions.get('window').height;
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
});