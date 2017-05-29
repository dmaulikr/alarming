/**
 * Custom alarm clock app for iOS
 * @author Osama Sakhi <msakhi21@gmail.com>
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var moment = require('moment');


export class singleAlarm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: moment().format("hh:mm:ss A")
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "skyblue"}}>
        <Text style={styles.watch}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default class alarming extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: moment().format("hh:mm:ss A")
    };

    this.addNewAlarm = this.addNewAlarm.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState ({
        time: moment().format("hh:mm:ss A")
      });
    }, 1000);
  }

  // A dummy function for now. Will pull up a modal window later
  addNewAlarm() {
    this.setState({
      time: "ADD ALARM"
    });
  }

  render() {
    return (
      <View style={styles.watchHolder}>
        
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <Text style={styles.watch}>
            {this.state.time}
          </Text>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>

            <TouchableHighlight onPress={this.addNewAlarm} style={styles.addalarmHolder} >
              <Image source={images.addalarm} style={styles.addalarm} />
            </TouchableHighlight>
          </View>

        </View>
        <View style={{flex: 8, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  watch: {
    fontFamily: "Helvetica",
    fontSize: 40,
    textAlign: 'center',
    margin: 5,
    paddingTop: 30,
    flex: 1,
    left:     0,
    top:      0,
  },

  watchHolder: {
    flex: 1,
    backgroundColor: "steelblue"
  },

  addalarmHolder: {
    marginRight: 10,
    marginBottom: 10
  },

  addalarm: {
    width: 40,
    height: 40,
    paddingBottom: 10,
    paddingRight: 10,
    // margin: 10
    // marginRight: 10,
    // marginBottom: 10
  },
  
});

const images = {
  addalarm: require("./assets/img/alarm_add.png")
};

AppRegistry.registerComponent('alarming', () => alarming);
