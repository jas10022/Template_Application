//////////////////////////////////////////////////////////
//
// Create by: Jaskaran Bakshi
// Date: May 14, 2020
// Organization: Orgs
//
//////////////////////////////////////////////////////////

import React from "react";
import {
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions, TouchableOpacity
} from "react-native";
//galio
import {Block, Text, theme} from "galio-framework";
//argon
import {articles, Images, argonTheme} from "../constants/";
import {Card} from "../components/";
import EventCard from "../components/EventCard";
import {HeaderHeight} from "../constants/utils";
import NotificationCard from "../components/NotificationCard";
import Icon from "react-native-vector-icons/FontAwesome";

const {width, height} = Dimensions.get("screen");

const post_test = [{key: '1',
    title: "test notification",
    message: 'No Message'},
    {key: '2',
        title: "test org",
        message: 'No Message'}];

class OrgsPostScreenComponent extends React.Component {
    render() {
        return (
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: 'wrap' }} >
                    <NotificationCard style={{ width:width*(9/10)}} item={post_test} />
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({

});

export default OrgsPostScreenComponent;