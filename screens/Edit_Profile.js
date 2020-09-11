import React from 'react';
import {StyleSheet, Dimensions, ScrollView, View, ImageBackground, Platform} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';

import { Card } from '../components';
import OrgCard from '../components/OrgCard';
import {argonTheme, Images} from "../constants";
import {HeaderHeight} from "../constants/utils";
const { width, height } = Dimensions.get('screen');
import { TextInput } from 'react-native-paper';
import User_data from "../constants/User_data";


class Edit_Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: User_data.name,
        email: User_data.email_address,
        username: User_data.username,
        school: User_data.college,
        major: User_data.major
      };
      console.log(User_data.name);
  }

  render() {
    const textColor = '#000'
    return (
        <Block flex style={styles.container}>
          <Block middle>
            <ImageBackground
                source={Images.Notifications}
                style={{flex: 1, height: height, width, zIndex: 0}}/>
            <Block style={{zIndex: 1,height:'100%',width:'85%',paddingTop:'20%'}}>
              <Block style={styles.item}>
              <TextInput
                  underlineColor={textColor}
                  selectionColor={textColor}
                  inputContainerStyle={{textColor:textColor}}
                  theme={{colors: {primary: textColor}}}
                  style={{backgroundColor:'fff',text:textColor}}
                  label='Name'
                  value={this.state.name}
                  onChangeText={text => this.setState({ name:text })}/>
              </Block>
              <Block style={styles.item}>
              <TextInput
                  underlineColor={textColor}
                  selectionColor={textColor}
                  inputContainerStyle={{textColor:textColor}}
                  theme={{colors: {primary: textColor}}}
                  style={{backgroundColor:'fff',text:textColor}}
                  label='Email'
                  value={this.state.email}
                  onChangeText={text => this.setState({ email:text })}/>
              </Block>
                <Block style={styles.item}>
              <TextInput
                  underlineColor={textColor}
                  selectionColor={textColor}
                  inputContainerStyle={{textColor:textColor}}
                  theme={{colors: {primary: textColor}}}
                  style={{backgroundColor:'fff',text:textColor}}
                  label='Username'
                  value={this.state.username}
                  onChangeText={text => this.setState({ username:text })}/>
                </Block>
              <Block style={styles.item}>
              <TextInput
                  underlineColor={textColor}
                  selectionColor={textColor}
                  inputContainerStyle={{textColor:textColor}}
                  theme={{colors: {primary: textColor}}}
                  style={{backgroundColor:'fff',text:textColor}}
                  label='School'
                  value={this.state.school}
                  onChangeText={text => this.setState({ school:text })}/>
              </Block>
              <Block style={styles.item}>
              <TextInput
                  underlineColor={textColor}
                  selectionColor={textColor}
                  inputContainerStyle={{textColor:textColor}}
                  theme={{colors: {primary: textColor}}}
                  style={{backgroundColor:'fff',text:textColor}}
                  label='Major'
                  value={this.state.major}
                  onChangeText={text => this.setState({ major:text })}/>
              </Block>
              <Block>
                <Button>Submit</Button>
              </Block>
            </Block>

          </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    height:'10%',
    width:'100%'
  },
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});

export default Edit_Profile;
