import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FeedListItem from './FeedListItem';

const FeedList = ({feeds, onScrollToBottom}) => {
  const onScroll = e => {
    if (!onScrollToBottom) {
      return;
    }

    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const measured =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (measured < 72) {
      onScrollToBottom(true);
    } else {
      onScrollToBottom(false);
    }
  };

  return (
    <FlatList
      data={feeds}
      style={styles.block}
      renderItem={({item}) => <FeedListItem feed={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
