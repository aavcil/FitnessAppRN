
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Menu from './Menu';
import SideMenuu from 'react-native-side-menu';
import Wallpaper from '../Shared/Wallpaper';
const NavMenu = require('react-native-side-menu');
const image = require('../../images/icons/menu.png');

export default class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: 'About',
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
                <View style={styles.container}>
                    <Wallpaper source={require('../../images/MainBackground.jpg')}>
                    



                    </Wallpaper>
                </View>
                <TouchableOpacity
                    onPress={this.toggle}
                    style={styles.button}
                >
                    <Image
                        source={image}
                        style={{ width: 32, height: 32 }}
                    />
                </TouchableOpacity>
            </SideMenuu>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
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
