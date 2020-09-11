import React from 'react';
import {TouchableOpacity, Platform, StyleSheet,Dimensions} from 'react-native';

import styled from 'styled-components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Block,Text} from 'galio-framework';
const { width, height } = Dimensions.get('screen');

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose, onChange, date } = this.props;
        console.log(date);
        return (
            <Block flex onPress={onClose} style={styles.container}>
                {Platform.OS === 'ios'?
                    <Block style={styles.header}>
                        <TouchableOpacity onPress={onClose}>
                            <Text size={16} color={'#fff'}>Done</Text>
                        </TouchableOpacity>
                    </Block>:null}
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    is24Hour={true}
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(e, d) => {
                        if (Platform.OS === 'ios') {
                            onChange(d);
                        } else {
                            onClose(d);
                        }
                    }}
                    style={{ backgroundColor: 'white' }}
                />
            </Block>
        );
    }
}
const styles = StyleSheet.create({
  header:{
      width: width,
      padding: 16,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      borderBottomWidth: 1,
      borderColor: 'grey',
  },
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#00000066' : 'transparent',
        position: 'absolute',
        justifyContent: 'flex-end',
        width: width,
        height: height,
    }
})