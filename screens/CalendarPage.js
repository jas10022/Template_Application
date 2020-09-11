import React from 'react';
import {StyleSheet, Dimensions, ScrollView, ImageBackground, View, TouchableOpacity} from 'react-native';
import {Block, Text, theme} from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/Events';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Images} from "../constants";
const { width,height } = Dimensions.get('screen');
const testIDs = require('../constants/testCalender');
var moment = require('moment');

moment().format();
class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      items: {},
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      calender: {
        '2020-05-20': [{
          title: 'Wedding Gig',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }],
        '2020-05-19': [{
          title: 'Birthday Gig',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }],
        '2020-05-21': [{
          title: 'Concessions',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }],
        '2020-05-22': [{
          title: 'Bhangra Competition',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }],
        '2020-05-17': [{
          title: 'Bhangra Banquet',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }],
        '2020-05-18': [{
          title: 'Bhangra video Due',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }, {
          title: 'Bhangra Practice',
          description: 'this is a description of the event',
          height: Math.max(50, Math.floor(Math.random() * 150)),
          marked: true
        }]
      },
      move:false,
      selectedEvent: this.props.route.params.selectedEvent,
  };
    console.log(this.state.selectedEvent);
    console.log(this.props.route.params.selectedEvent);

  }

  render() {
    if(this.state.selectedEvent !== undefined){
      this.state.move = true;
    }
    const ismove = this.state.move
    return (
      <Block center style={styles.home}>
        <ImageBackground
            source={Images.Notifications}
            style={{flex: 1, height: height, width, zIndex: 0}}/>
        <Block style={{height:height *.9,width:width*.95}}>
          <Agenda
              testID={testIDs.agenda.CONTAINER}
              items={this.state.items}
              loadItemsForMonth={this.loadItems.bind(this)}
              selected={!ismove ? this.state.date:this.state.selectedEvent}
              style={{backgroundColor: 'transparent'}}
              renderItem={this.renderItem.bind(this)}
              renderEmptyDate={this.renderEmptyDate.bind(this)}
              rowHasChanged={this.rowHasChanged.bind(this)}
          />
        </Block>
      </Block>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = new Date(day.timestamp + i * 24 * 60 * 60 * 1000);
        const strTime = time.toISOString().split('T')[0];
          this.state.items[strTime] = [];

          if (strTime in this.state.calender) {
            const cal = this.state.calender[strTime]
            const numItems = this.state.calender[strTime].length;
            for (let j = 0; j < numItems; j++) {
              this.state.items[strTime].push(cal[j]);
            }
          }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
      //console.log(this.state.items);
    }, 1000);

  }

  //this is where we can customize how the card look like and implement a color code for each org or some system
  renderItem(item) {
    console.log("item");
    console.log(item);
    return (
        <TouchableOpacity
            testID={testIDs.agenda.ITEM}
            style={[styles.item, {height: item.height}]}
        >
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
        <View style={styles.emptyDate}>
          <Text>This is empty date!</Text>
        </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

}

const styles = StyleSheet.create({
  home: {
    width: width,
    height:height,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export default CalendarPage;


/////////////////////////Look at /////////////////
/*
<Agenda
  // The list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key has to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={{
    '2012-05-22': [{name: 'item 1 - any js object'}],
    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
    '2012-05-24': [],
    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  }}
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  // Callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed')}}
  // Callback that gets called when day changes while scrolling agenda list
  onDayChange={(day)=>{console.log('day changed')}}
  // Initially selected day
  selected={'2012-05-16'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return (<View />);}}
  // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // Specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // Specify how agenda knob should look like
  renderKnob={() => {return (<View />);}}
  // Specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View />);}}
  // Specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={true}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2012-05-16': {selected: true, marked: true},
    '2012-05-17': {marked: true},
    '2012-05-18': {disabled: true}
  }}
  // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
  disabledByDefault={true}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
  refreshControl={null}
  // Agenda theme
  theme={{
    ...calendarTheme,
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // Agenda container style
  style={{}}
/>
 */