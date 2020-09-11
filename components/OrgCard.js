import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import {StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { trashOrgs } from "../constants/utils";

import Icon from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get('screen');
import argonTheme from "../constants/Theme";

import { SwipeListView } from 'react-native-swipe-list-view';

const TrashButton = ({style, navigation}) => (
    <TouchableOpacity style={[styles.button, style]} onPress={() => console.log("trashed")}>
        <Icon
            size={16}
            name="trash"
            color={'#FF0000'}
        />
        <Block middle style={styles.notify} />
    </TouchableOpacity>
);

const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
};

const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(orgs => orgs.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
};

const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};
var listData;

class OrgCard extends React.Component {
    renderTrash = () => {
        if(trashOrgs){
            return([
                <TrashButton key='trash-org'/>
            ])
        }
    };

    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
            horizontal ? styles.horizontalStyles : styles.verticalStyles,
            styles.shadow
        ];
        const renderItem = data => (
            <TouchableHighlight
                card
                onPress={() => navigation.navigate('OrgProfile')}
                style={styles.rowFront}>
                <Block card row style={styles.card}>
                    <Block card middle style={styles.title}>
                        <Text size={16}>{data.item.title}</Text>
                    </Block>
                    <Block card middle style={styles.messages}>
                        <Text size={14}>{data.item.message}</Text>
                    </Block>
                </Block>
            </TouchableHighlight>
        );

        const renderHiddenItem = (data, rowMap) => (
            <View style={styles.rowBack}>
                <TouchableOpacity style={styles.backLeft}>
                    <Text style={styles.backTextWhite}>{data.item.points}</Text>
                    <Text style={styles.backTextWhite}>Points</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => deleteRow(rowMap, data.item.key)}
                >
                    <Text style={styles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
        //[listData,set] = item
        return (
            <View style={styles.container}>
            <SwipeListView
                data={item}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={70}
                rightOpenValue={-70}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={1000}
                onRowDidOpen={onRowDidOpen}
            />
            </View>
            /*
            <Block row middle space="between" style={styles.card}>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate('OrgDescription')}>
                    <Block card middle style={styles.title}>
                        <Text size={16} style={styles.cardTitle}>{item.title}</Text>
                    </Block>
                </TouchableWithoutFeedback>
                <Block row middle style={{width:'65%',height:'100%'}}>
                <Block card middle style={styles.messages}>
                    <Text size={14}>{item.message}</Text>
                </Block>
                <Block card  style={styles.trash}>
                    {this.renderTrash()}
                </Block>
                </Block>
            </Block>*/
        );
    }
}

OrgCard.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    card: {
        marginVertical: theme.SIZES.BASE,
        width:width-(width/8),
        height:'100%'
    },
    messages: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#B3E5F0',
        height:'100%',
    },
    cardTitle: {
        flex: .25,
    },
    trash:{
        alignItems: 'center',
        height:'100%',
        width:0,
    },
    points: {
        alignItems: 'center',
        backgroundColor: '#B3E5F0',
        height:'100%',
        width:'15%'
    },
    title:{
        backgroundColor: '#fff',
        height:'100%',
        width:'40%',
        alignItems: 'center',
    },
    cardDescription: {
        alignItems: 'center',
        backgroundColor: '#F8F9FE',
        height:'100%',
    },
    imageContainer: {
        borderRadius: 3,
        elevation: 1,
        overflow: 'hidden',
    },
    image: {
        // borderRadius: 3,
    },
    horizontalImage: {
        height: 122,
        width: 'auto',
    },
    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    fullImage: {
        height: 215
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
    container: {
        backgroundColor: '#F8F9FE',
        justifyContent: 'space-between',
        flex: 1,
        width:'100%'
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#F8F9FE',
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        marginBottom: 10,
        borderColor:'#F8F9FE',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#F8F9FE',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginBottom: 10,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        borderRadius: 5,
        backgroundColor: 'red',
        right: 0,
    },
    backLeft: {
        borderRadius: 5,
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        left:0,
        backgroundColor:'#B3E5F0',
    },
});

export default withNavigation(OrgCard);