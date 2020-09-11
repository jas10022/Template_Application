import React, {useState} from 'react';
import {StyleSheet, Dimensions, ScrollView, View, ImageBackground, TouchableOpacity} from 'react-native';
import {Block, Input, theme, Text, Button} from 'galio-framework';

import { Card } from '../components';
import OrgCard from '../components/OrgCard';
import {Images} from "../constants";
const { width, height } = Dimensions.get('screen');
import { TextInput } from 'react-native-paper';
import DatePickerComponent from '../components/DatePickerComponent';
import { DateTime } from 'luxon'


var moment = require('moment');

moment().format();

class Add_Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location:'',
      info: '',
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate()),
      endDate: new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate() + 1),
      isStartDateVis:false,
      isEndDateVis:false,
    };
  }

  renderArticles = () => {
    const textColor = '#000'
    const { startDate,endDate } = this.state;

    const showStartDatePicker = () => {
      this.setState((state) => {
        return {isStartDateVis: !state.isStartDateVis}
      });
    };

    const showEndDatePicker = () => {
      this.setState((state) => {
        return {isEndDateVis:!state.isEndDateVis}//toggles the visibilty of the text
      });
    };

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
                  <Block style={{width:'100%'}}>
                    <TouchableOpacity onPress={showStartDatePicker}>
                    <Block flex style={styles.dateContainer}>
                      <Text size={16} color={textColor}>Start</Text>
                      <Text size={16} color={textColor} style={styles.dateWiget}>{moment(startDate).utc().format('l')}</Text>
                    </Block>
                    </TouchableOpacity>
                  <TouchableOpacity onPress={showEndDatePicker}>
                    <Block flex style={styles.dateContainer}>
                      <Text size={16} color={textColor}>End</Text>
                      <Text size={16} color={textColor} style={styles.dateWiget}>{moment(endDate).utc().format('l')}</Text>
                    </Block>
                  </TouchableOpacity>
                  </Block>
                </Block>
                <Block style={styles.block}>
                  <Block>
                    <TextInput
                        theme={{colors: {primary: textColor}}}
                        style={{backgroundColor:'fff',text:textColor}}
                        label='Location'
                        value={this.state.location}
                        underlineColor={textColor}
                        onChangeText={text => this.setState({ location:text })}/>
                  </Block>
                  <Block>
                    <TextInput
                        theme={{colors: {primary: textColor}}}
                        style={{backgroundColor:'fff',text:textColor}}
                        label='Info'
                        value={this.state.info}
                        underlineColor={textColor}
                        onChangeText={text => this.setState({ info:text })}/>
                  </Block>
                </Block>
                <Block>
                  <Button>Submit</Button>
                </Block>
              </Block>
          </ScrollView>
          {this.state.isStartDateVis?
              <DatePickerComponent
                  date={startDate}
                  onClose={date => {
                    if (date && Platform.OS !== 'ios') {
                      this.setState((state)=>{ return {isStartDateVis: !state.isStartDateVis, startDate: date} });
                      console.log(this.state.startDate);
                    } else {
                      this.setState((state)=>{ return {isStartDateVis: !state.isStartDateVis} });
                    }
                  }}
                  onChange={d => {
                    this.setState({ startDate: d });
                  }}
              />:null}
          {this.state.isEndDateVis?
              <DatePickerComponent
                  date={endDate}
                  onClose={date => {
                    if (date && Platform.OS !== 'ios') {
                      this.setState((state)=>{ return {isEndDateVis: !state.isEndDateVis, endDate: date} });
                      console.log(this.state.endDate);
                    } else {
                      this.setState((state)=>{ return {isEndDateVis: !state.isEndDateVis} });
                    }
                  }}
                  onChange={d => {
                    this.setState((state)=>{ return{endDate:d} });
                  }}
              />:null}
        </Block>
    );
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
  dateContainer:{
    flexDirection: 'row',
    marginBottom: 5,
  },
  dateWiget:{
    position: 'absolute',
    right: 0
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

export default Add_Event;
