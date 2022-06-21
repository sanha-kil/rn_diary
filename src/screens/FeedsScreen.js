import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import {feedState} from '../stores/FeedStore';
import FeedList from '../components/FeedList';

const FeedsScreen = observer(() => {
  return (
    <View style={styles.block}>
      <FeedList logs={feedState.feeds} />
      <FloatingWriteButton />
    </View>
  );
});

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
