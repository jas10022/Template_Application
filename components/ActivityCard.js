import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import {StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { trashOrgs } from "../constants/utils";

import Icon from "react-native-vector-icons/FontAwesome";
const { width,height } = Dimensions.get('screen');
import argonTheme from "../constants/Theme";

import { SwipeListView } from 'react-native-swipe-list-view';


class ActivityCard extends React.Component {

    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];
        return (
            <Block>

            <Block row space="between" flex style={cardContainer}>
                    <Block flex space="between" card style={styles.cardDescription}>
                        <Text size={14} style={styles.cardTitle} color={'#000'}>{item[0].card}</Text>
                        <Text size={12} color={'#000'} bold>{item[0].points}</Text>
                    </Block>
                <Block flex space="between" card style={styles.cardDescription}>
                    <Text size={14} style={styles.cardTitle} color={'#000'}>{item[1].card}</Text>
                    <Text size={12} color={'#000'} bold>{item[1].points}</Text>
                </Block>
            </Block>
                <Block row space="between" flex style={cardContainer}>
                        <Block flex space="between" card style={styles.cardDescription}>
                            <Text size={14} style={styles.cardTitle} color={'#000'}>{item[2].card}</Text>
                            <Text size={12} color={'#000'} bold>{item[2].points}</Text>
                        </Block>
                </Block>

            </Block>
        );
    }
}

ActivityCard.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    card: {
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 50,
        marginBottom: 0
    },
    cardTitle: {
        flexWrap: 'wrap',
        paddingBottom: 6,
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 2,
        height: height * .2,
        marginBottom: 15,
        marginRight:15,
        backgroundColor: theme.COLORS.WHITE,

    },

    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },

    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
});

export default withNavigation(ActivityCard);