import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet} from 'react-native';
import {searchState} from '../stores/SearchStore';
import {searchFeeds} from '../stores/FeedStore';
import FeedList from '../components/FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

const SearchScreen = observer(() => {
  const searchedTarget = searchFeeds(searchState.keyword);

  return (
    <View style={styles.block}>
      {searchedTarget.length > 0 ? (
        <FeedList feeds={searchedTarget} />
      ) : (
        <EmptySearchResult type={'NOT_FOUND'} />
      )}
    </View>
  );
});

export default SearchScreen;

const styles = StyleSheet.create({
  block: {flex: 1},
});
