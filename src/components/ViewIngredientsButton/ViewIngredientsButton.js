import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ViewIngredientsButton (props) {
    return (
      <Pressable onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </Pressable>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
