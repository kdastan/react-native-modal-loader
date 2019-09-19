# react-native-modal-loader

[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![npm version](http://img.shields.io/npm/v/react-native-modal-loader.svg)](https://www.npmjs.com/package/react-native-modal-loader)
[![npm downloads](https://img.shields.io/npm/dm/react-native-modal-loader.svg?update=7)](http://badge.fury.io/js/react-native-modal-loader)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.github.com/testshallpass/react-native-dropdownalert/master/LICENSE)

A progress hud for react apps

## Installation

Install the module from npm with `npm install react-native-modal-loader --save`.

## Demo

<img src="https://github.com/kdastan/react-native-modal-loader/blob/master/demo/demonstration.gif" width="30%" />

## Usage

Import module using `import Loader from 'react-native-modal-loader';`, then place component at the top of your view container.

### Properties

| Prop    | Default | isRequired |        Type        | Description                              |
| :------ | :-----: | :--------: | :----------------: | :--------------------------------------- |
| loading |  false  |    true    |        bool        | Whether to show the loader or hide it    |
| color   |  grey   |   false    |       color        | Color of the spinner                     |
| size    |  small  |   false    | 'small' or 'large' | Size of the spinner                      |
| opacity |   0.4   |   false    |       number       | Background opacity value between 0 and 1 |
| title   |   ""    |   false    |       string       | Description for loader                   |

## Example

```js
import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import Loader from "react-native-modal-loader";

export default class App extends Component {
  state = {
    isLoading: false
  };

  showLoader = () => {
    this.setState({ isLoading: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <Button title="Press me!" onPress={this.showLoader} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
```

## Future goals

- [ ] New animation style

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Kumar Dastan
