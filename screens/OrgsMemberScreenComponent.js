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
import MemberCard from "../components/MemberCard";

const {width, height} = Dimensions.get("screen");

const member_test = [{key: '1',
    name: "test member",
    status: 'Member'},
    {key: '2',
        name: "test member",
        status: 'Executive'}];

class OrgsMemberScreenComponent extends React.Component {
    render() {
        return (
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: 'wrap' }} >

                    <MemberCard style={{ width:width*(9/10)}} item={member_test} />
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({

});

export default OrgsMemberScreenComponent;