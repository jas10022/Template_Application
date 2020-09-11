import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';
const { width,height } = Dimensions.get("screen");
import { Dropdown } from 'react-native-material-dropdown';


const user_status = true;// this is the user setting if they are a member or a club exec
const userStatusOptions = [{
  value: 'Member',
}, {
  value: 'Executive',
}];
class NotificationCard extends React.Component {

  renderOptions = (data) => {
    if(user_status){
      return(<Dropdown
          label='status'
          data={userStatusOptions}
          value={data.status}
      />)
    }else{
      return(<Text size={12} color={'#000'}>{data.status}</Text>);
    }
  }

  render() {

    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (

        <Block flex style={cardContainer}>
          {item.map(data =>{
            return(
          <TouchableWithoutFeedback>
            <Block row flex space="between" card style={styles.cardDescription}>
              <Text size={14} style={styles.cardTitle} color={'#000'}>{data.name}</Text>
              <Dropdown
                  data={userStatusOptions}
                  value={data.status}
                  containerStyle={{width:width/4,borderColor: 'transparent'}}
                  fontSize={14}
                  textColor={'#000'}
                  dropdownOffset={{top:0,left:0}}
                  inputContainerStyle={{ borderBottomColor:'transparent',color:'#000'}}
                  rippleInsets={{top: 0, bottom: 0}}
              />
            </Block>
          </TouchableWithoutFeedback>
            )})}
        </Block>

    );
  }
}

NotificationCard.propTypes = {
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
    height: height * .045,
    marginBottom: 15,
    backgroundColor: 'transparent',
    borderColor:'#000',
    borderWidth:0,
    borderBottomWidth:1,
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

export default withNavigation(NotificationCard);