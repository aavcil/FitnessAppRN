import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';

export default class ListAnimation extends Component {
    constructor() {
        super();

        this.state = {

           
            itemNumber: 0

        };


    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        <ListItem selected={this.state.itemNumber == 0}>
                            <Left>
                                <Text>Simon Mignolet</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem selected={this.state.itemNumber == 1}>
                            <Left>
                                <Text>Nathaniel Clyne</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem selected={this.state.itemNumber == 2}>
                            <Left>
                                <Text>Dejan Lovren</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>

                <Button onPress={() => { this.setState({  itemNumber: this.state.itemNumber + 1 }); console.log(this.state.itemNumber==1 )}}>
                    <Text>Click Me!</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
