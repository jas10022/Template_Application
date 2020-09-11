import React from 'react';
import {StyleSheet, Dimensions, ScrollView, View, ImageBackground} from 'react-native';
import { Block, theme, Button } from 'galio-framework';

import { Card } from '../components';
import OrgCard from '../components/OrgCard';
import {Images} from "../constants";
const { width, height } = Dimensions.get('screen');
import { TextInput } from 'react-native-paper';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }
  renderArticles = () => {
    const textColor = '#000'
    return (

        <Block center>
          <ImageBackground
              source={Images.Notifications}
              style={{flex: 1, height: height, width, zIndex: 0}}/>
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.articles}>
            <Block style={styles.main}>
              <Block style={styles.block}>
                <Block style={{marginBottom:15}}>
                  <TextInput
                      theme={{colors: {primary: textColor}}}
                      style={{backgroundColor:'fff',text:textColor}}
                      label='Title'
                      value={this.state.title}
                      underlineColor={textColor}
                      onChangeText={text => this.setState({ title:text })}/>
                </Block>
                <Block style={{marginBottom:15}}>
                  <TextInput
                      theme={{colors: {primary: textColor}}}
                      style={{backgroundColor:'fff',text:textColor}}
                      label='Description'
                      value={this.state.description}
                      underlineColor={textColor}
                      onChangeText={text => this.setState({ description:text })}/>
                </Block>
              </Block>
              <Block>
                <Button>Submit</Button>
              </Block>
            </Block>
          </ScrollView>
        </Block>

    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    width:width*.91
  },
  block:{
    borderRadius: 4,
    borderColor:'#000',
    borderWidth:1,
    height:'auto',
    marginBottom:15,
    padding:15,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  home: {
    width: width,
    backgroundColor: 'white',
    flex: 1,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
