import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import OrgsPostScreenComponent from './OrgsPostScreenComponent';
import OrgsMemberScreenComponent from "./OrgsMemberScreenComponent";
import OrgsStatsScreenComponent from "./OrgsStatsScreenComponent";

import { Images, argonTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

import Register from "./Register";
import NotificationCard from "../components/NotificationCard";
import MemberCard from "../components/MemberCard";
import MemberAttendanceCard from "../components/MemberAttendanceCard";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class OrgProfile extends React.Component {
  state={
    isVisible:false,
    buttonIcon:"plus",
  }
  navigation = this.props;

  render() {
    const {navigation} = this.props;

    const renderResults=() =>{
      if(this.state.isVisible){
        navigation.navigate('Add_Event');
      }
      this.setState({
        isVisible:!this.state.isVisible//toggles the visibilty of the text
      });
    }

    const createPost=() =>{
      if(this.state.isVisible){
        navigation.navigate('Add_Post');
      }
      this.setState({
        isVisible:!this.state.isVisible//toggles the visibilty of the text
      });
    }

    return (
        <Block flex style={styles.profile}>
          <Block flex>
            <ImageBackground
                source={{uri: Images.ProfilePicture}}
                style={styles.profileContainer}
                imageStyle={styles.profileImage}>
              <Block flex style={styles.profileDetails}>
                <Block style={styles.profileTexts}>
                  <Text color="white" size={28} style={{ paddingBottom: 8 }}>Org Name</Text>
                  <Block row space="between">
                    <Block row>
                      <Block middle style={styles.pro}>
                        <Text size={16} color="white">Pro</Text>
                      </Block>
                      <Text color="white" size={16} muted style={styles.seller}>Seller</Text>
                      <Text size={16} color={argonTheme.COLORS.WARNING}>
                        4.8 <Icon name="shape-star" family="GalioExtra" size={14} />
                      </Text>
                    </Block>
                    <Block>
                      <Text color={theme.COLORS.MUTED} size={16}>
                        <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                        {` `} Los Angeles, CA
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
              </Block>
            </ImageBackground>
          </Block>
          <Block flex style={styles.options}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Block>
              <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
                <OrgsPostScreenComponent heading="Posts" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}}/>
                <OrgsMemberScreenComponent heading="Members" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}}/>
                <OrgsStatsScreenComponent heading="Stats" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}}/>
                </Tabs>
              </Block>
              {this.state.isVisible?
                  <Block row style={{position:'absolute',
                    right:-0,bottom: -width*.8,paddingRight:10}}>
                  <Block middle style={{paddingRight:10}}>
                    <Text color={theme.COLORS.black} size={16}>New Post</Text>
                  </Block>
                  <TouchableOpacity
                      style={styles.roundButton}
                      onPress={createPost}
                  >
                    <Icon name={"list"}  size={24} color="#01a699" />
                  </TouchableOpacity></Block>:null}
                  <Block row style={{position:'absolute',
                    right:-0,bottom: -width,zIndex:3,paddingBottom: 15,paddingRight:10,}}>
                    {this.state.isVisible?
                        <Block middle style={{paddingRight:10}}>
                      <Text color={theme.COLORS.black} size={16}>Event</Text>
                    </Block>:null}
                      <TouchableOpacity
                          onPress={renderResults}
                          style={styles.roundButton}
                      >
                        <Icon name={this.state.buttonIcon}  size={24} color="#01a699" />
                      </TouchableOpacity>
                  </Block>
            </ScrollView>

          </Block>

        </Block>
    );
  }
}

const styles = StyleSheet.create({
  roundButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
    zIndex: 3,
  },
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 4,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: argonTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 30,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});

