import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {feedState, setMessage} from '../stores/FeedStore';

const FeedsScreen = observer(() => {
  console.log(feedState.message);
  return (
    <View style={styles.block}>
      <Text>{feedState.message}</Text>
      <TextInput
        value={feedState.message}
        onChangeText={e => setMessage(feedState, e)}
        style={styles.input}
      />
    </View>
  );
});

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {},
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});
