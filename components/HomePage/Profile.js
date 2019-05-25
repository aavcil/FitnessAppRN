import React, { Component } from 'react'
import Dimensions from 'Dimensions';
import Menu from '../Shared/Menu';
import Wallpaper from '../Shared/Wallpaper';
import { Header } from 'native-base';
const menuImage = require('../../images/icons/menu.png');
import {
    Image,
    ImageBackground,
    ScrollView,
    Platform,
    AsyncStorage,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Icon } from 'react-native-elements';
import api from '../services/api';
import SideMenuu from 'react-native-side-menu';
import Load from "react-native-loading-gif";
import DatePicker from 'react-native-datepicker'
import { Item, Input, Label, Button } from 'native-base';
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerContainer: { height: '100%' },
    headerColumn: {
        backgroundColor: 'transparent',
        height: '30%',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    InputsView: {
        width: DEVICE_WIDTH,
        margin: 10,
        height: 499
    },

    Inputs: {
        margin: 5,

    },

    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '10%'
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: '#3365fa',
        borderRadius: 85,
        borderWidth: 3,
        height: 120,
        marginBottom: 15,
        width: 120,
    },
    userNameText: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
    uyelik: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        top: 2,
        padding: 10,
        left: 10,
    },
    buttons: {
        margin: 10,
        borderRadius: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: DEVICE_WIDTH,
        backgroundColor: 'white'

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
})
const DEVICE_WIDTH = Dimensions.get('window').width;
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            selectedItem: ' ',
            token: null,
            getData: {},
            boy: "",
            hedef: "",
            kilo: "",
            date: null,
            oldPassword: "",
            password: "",
            email: "",
            profilePicture: "",
            bodyType: null,
            length: null,
            weight: null,
            birthDate: null,
            target: null,
            remainingDay: null,

        };
    }

    async postNewData() {
        var postData = {
            "oldPassword": this.state.oldPassword,
            "password": this.state.password,
            "email": this.state.email,
            "profilePicture": this.state.profilePicture,
            "length": parseInt(this.state.length, 10) + 1,
            "weight": parseInt(this.state.weight, 10) + 1,
            "birthDate": this.state.birthDate,
            "target": parseInt(this.state.target, 10) + 1
        };
        console.log(postData);

        var a = await fetch(api.getData() + '/api/User/SetInfo?token=' + this.state.token, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        var b = await a.text();
        console.log(b);
    }


    async componentDidMount() {
        this.refs.Load.OpenLoad();
        await AsyncStorage.getItem('Token').then((token) => {
            //   console.log(token.replace(/['"']+/g, ''));

            this.setState({
                token: token.replace(/['"']+/g, ''),

            });

        });
        console.log(this.state.token);
        var a = await fetch(api.getData() + '/api/User/GetInfo?token=' + this.state.token, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        var b = await a.json();
        await this.setState({
            getData: b,
            boy: b.length.toString(),
            kilo: b.weight.toString(),
            hedef: b.target.toString(),
            date: b.birthDate,
        })
        console.log(this.state.getData.purchases);
        if (this.state.getData.purchases[this.state.getData.purchasesCount-1].expiration != null) {
            var date =new Date(this.state.getData.purchases[this.state.getData.purchasesCount-1].expiration);

            this.setState({
                remainingDay:((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()) + ' Tarihine Kadar Ücretsiz.'
            });
        }
        else {
            this.setState({
                remainingDay: "Premium Üyelik"
            });
        }
        await this.refs.Load.CloseLoad();
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

                    <View style={styles.headerContainer}>

                        <View style={styles.headerColumn}>
                            <Image
                                style={styles.userImage}
                                source={{
                                    uri: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png',
                                }}
                            />
                            <View style={styles.userAddressRow}>
                                <View>
                                    <Icon
                                        reverse
                                        name={this.state.getData.gender == 1 ? 'md-male' : 'md-female'}
                                        type='ionicon'
                                        color='#517fa4'
                                    />
                                </View>
                                <View style={styles.userCityRow}>
                                    <Text style={styles.userCityText}>
                                        <Text style={styles.userNameText}>{this.state.getData.username}</Text>
                                    </Text>
                                    <Text style={styles.uyelik}>{this.state.remainingDay}</Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView style={styles.InputsView}>
                            <Item floatingLabel>
                                <Label>Eski Şifreniz</Label>
                                <Input onChangeText={(text) => { this.setState({ oldPassword: text }) }} />
                            </Item>
                            <Item floatingLabel >
                                <Label>Yeni Şifreniz</Label>
                                <Input onChangeText={(text) => { this.setState({ password: text }) }} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Email = {this.state.getData.email}</Label>
                                <Input onChangeText={(text) => { this.setState({ email: text }) }} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Hedef = {this.state.hedef}</Label>
                                <Input onChangeText={(text) => { this.setState({ target: text }) }} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Boy = {this.state.boy}</Label>
                                <Input onChangeText={(text) => { this.setState({ length: text }) }} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Kilo = {this.state.kilo}</Label>
                                <Input onChangeText={(text) => { this.setState({ weight: text }) }} />
                            </Item>

                            <DatePicker
                                style={{ width: DEVICE_WIDTH - 20, marginTop: 10 }}
                                date={this.state.date}
                                mode="date"
                                placeholder="Tarih Seçin"
                                format="YYYY-MM-DD"
                                minDate="1905-05-19"
                                maxDate="2007-05-19"
                                confirmBtnText="Seç"
                                cancelBtnText="Kapat"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }

                                }}
                                onDateChange={(date) => { this.setState({ date: date, birthDate: date }) }}
                            />

                            <Button full rounded style={{ marginTop: 20 }} onPress={() => { this.postNewData() }}>
                                <Text>Primary</Text>
                            </Button>
                        </ScrollView>
                    </View>
                </View>

                <Load Image="2" bgAnimate="opacity" ref="Load"></Load>
            </SideMenuu>
        )
    }


}


