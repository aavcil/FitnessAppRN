import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StatusBar } from 'react-native';
import NavBar from './Shared/NavBar';
import LoginScreen from './Login/LoginScreen';
import HomeScreen from './Home/HomeScreen';
import RegisterScreen from './Register/RegisterScreen';
import GenderSelection from './Register/GenderSelection';
import BodyTypeSelection from './Register/BodyTypeSelection';
import BodyDataScreen from './Register/BodyDataScreen';
import BirthdayScreen from './Register/BirthdayScreen';
import GoalScreen from './Register/GoalScreen';
import CreateAccountScreen from './Register/CreateAccount';
import HomePageScreen from './HomePage/Home';
import TrainingPageScreen from './HomePage/Training';
import NutritionPageScreen from './HomePage/Nutrition';
import PacketPageScreen from './Register/PacketScreen';
import NutritionPageScreen2 from './Nutrition/NutritionPage';
import NutritionDetailPageScreen from './Nutrition/NutritionDetail';
import BeforeAfterPage from './HomePage/BeforeAfter';
import TrainingDetailPage from './Training/TrainingDetail';
import ListAnimationPage from './HomePage/ListAnimation';
import ProfilePage from './HomePage/Profile';
import LoginAppScreen from './Login/LoginAppScreen';

export default class Main extends Component {

	constructor(props) {
		super(props);

		this.state = { loading: true, index: 0, hasToken: false, hasNavBar: false };

	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
		});
		this.setState({ loading: false });
		
	}

async getTokenData() {
		await AsyncStorage.getItem('Token').then((token) => {
			this.setState({ hasToken: token !== null, loading: true })
		});
		await AsyncStorage.getItem('getNavBar').then((navbar) => {

			this.setState({ hasNavBar: navbar})
		});
	}
	componentDidMount() {
		StatusBar.setHidden(true);
		this.getTokenData();
	}
	switchScreen(index) {
		this.setState({ index: index })
	}
	renderItem() {
		console.log(this.state.hasNavBar);
		if (this.state.hasNavBar =="geldim") {
			return (<NavBar />);
		}
		else { return; }
	}

	render() {
		if (!this.state.loading) {
			return <Expo.AppLoading />;
		}
		return (
			<Container>
				<Router>
					<Scene key="root">

						<Scene key="loginScreen"
							component={LoginScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
							initial={!this.state.hasToken}
						/>
						<Scene key="homePageScreen"
							component={HomePageScreen}
							animation='fade'
							hideNavBar={true}
							initial={this.state.hasToken}
							panHandlers={null}
						/>

						<Scene key="loginAppScreen"
							component={LoginAppScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="registerScreen"
						component={RegisterScreen}
						animation='fade'
						hideNavBar={true}
						panHandlers={null}
					/>

						<Scene key="genderSelection"
							component={GenderSelection}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="bodyTypeSelection"
							component={BodyTypeSelection}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="bodyDataScreen"
							component={BodyDataScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="birthdayScreen"
							component={BirthdayScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="goalScreen"
							component={GoalScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="homeScreen"
							component={HomeScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>

						<Scene key="createAccountScreen"
							component={CreateAccountScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>

						<Scene key="trainingPageScreen"
							component={TrainingPageScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="nutritionPageScreen"
							component={NutritionPageScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="packetPageScreen"
							component={PacketPageScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="nutritionPageScreen2"
							component={NutritionPageScreen2}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="nutritionDetailPageScreen"
							component={NutritionDetailPageScreen}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="beforeAfterPage"
							component={BeforeAfterPage}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="trainingDetailPage"
							component={TrainingDetailPage}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="listAnimationPage"
							component={ListAnimationPage}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
						<Scene key="profilePage"
							component={ProfilePage}
							animation='fade'
							hideNavBar={true}
							panHandlers={null}
						/>
					</Scene>
				</Router>
				{this.renderItem()}

			</Container>

		);
	}
}


