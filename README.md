# react-native-modal-loader
[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![npm version](http://img.shields.io/npm/v/react-native-modal-loader.svg)](https://www.npmjs.com/package/react-native-modal-loader)
[![npm downloads](https://img.shields.io/npm/dm/react-native-modal-loader.svg?update=7)](http://badge.fury.io/js/react-native-modal-loader)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.github.com/testshallpass/react-native-dropdownalert/master/LICENSE)

A progress hud for react apps

## Installation

Install the module from npm with `npm install react-native-modal-loader --save`.

## Demo

<img src="https://github.com/kdastan/react-native-modal-loader/blob/master/demo/demo.gif" width="30%" />

## Usage

Import module using `import { Loader } from 'react-native-modal-loader';`, then place component at the top of your view container.

```js
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Loader } from 'react-native-modal-loader';

export default class App extends Component {
  state = {
    isLoading: false
  }

  showLoader = () => {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} />
        <TouchableOpacity onPress={() => this.showLoader()}>
          <View style={styles.buttonContainer}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              {'Show Loader'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    height: 40,
    width: 160,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
```

## Future purposes

- Update Readme
- Add Prop.Types
- Make customizable

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Kumar Dastan
