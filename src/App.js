import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBeWHuKv-BjXQMWekBHdc4M0mEZAGPGRoQ',
    authDomain: 'reactnativeauthenticatio-842d2.firebaseapp.com',
    databaseURL: 'https://reactnativeauthenticatio-842d2.firebaseio.com',
    projectId: 'reactnativeauthenticatio-842d2',
    storageBucket: 'reactnativeauthenticatio-842d2.appspot.com',
    messagingSenderId: '1069785721287'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
              </Button>
          </CardSection>
        </Card>

      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
