import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import {argonTheme, articles} from '../constants';
import {Card} from "./index";
const { width,height } = Dimensions.get("screen");


class EventCard extends React.Component {
    render() {
        const {navigation, item, itemLength, horizontal, full, style, ctaColor, imageStyle} = this.props;

        const imageStyles = [
            full ? styles.fullImage : styles.horizontalImage,
            imageStyle
        ];
        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];
        const typeRender = itemLength % 2 === 0 && itemLength !== 0;

        return (

            <Block flex row>
                {
                    typeRender ? <Block flex row>
                        <Card
                            item={item[0]}
                            style={{marginRight: theme.SIZES.BASE}}
                        />
                        <Card item={item[1]}/>
                    </Block> :
                            <Card item={item[0]} style={{marginRight: theme.SIZES.BASE}}/>
                }
            </Block>
        )
    }
}

EventCard.propTypes = {
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
        height: height * .065,
        marginBottom: 15,
        backgroundColor: 'transparent',
        borderColor:'#000',
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

export default withNavigation(EventCard);