import React from 'react';
import { StyleSheet, Dimensions, ScrollView,View } from 'react-native';
import {Block, Text, theme} from 'galio-framework';

import { Card } from '../components';
import ActivityCard from '../components/ActivityCard';
import NotificationCard from "../components/NotificationCard";
const { width,height } = Dimensions.get('screen');
import CalendarStrip from 'react-native-calendar-strip';

const test = [{key: '1',
  card: "test Points",
  data: [],
  points: 5},
  {key: '2',
    card: "test Activity",
    data: [],
    points: 5},
  {key: '3',
    card: "test hours",
    data: [],
    points: 5}];
const user = 'test user';


class Home extends React.Component {

  renderArticles = () => {
    return (

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex center style={{height:'25%',textAlign:'center',width:width}}>
            <Text size={16}>Welcome {user}!</Text>
          </Block>
          <ActivityCard style={{ marginRight: theme.SIZES.BASE, width:width*(.95)}} item={test} />
          <Block>
            <Block>
              <Text size={14} color={'#000'}>Events:</Text>
            </Block>
            <CalendarStrip
                style={{height:100, paddingTop: 5, paddingBottom: 10}}
            />
          </Block>

        </ScrollView>
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
