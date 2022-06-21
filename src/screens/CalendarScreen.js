import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, StyleSheet} from 'react-native';

const CalendarScreen = observer(() => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>hello</Text>
    </View>
  );
});

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});
