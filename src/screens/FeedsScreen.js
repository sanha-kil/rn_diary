import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import {feedState} from '../stores/FeedStore';
import FeedList from '../components/FeedList';

const FeedsScreen = observer(() => {
  const [isHidden, setIsHidden] = useState(false);

  const onScrollToBottom = isBottom => {
    if (isHidden !== isBottom) {
      setIsHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList feeds={feedState.feeds} onScrollToBottom={onScrollToBottom} />
      <FloatingWriteButton isHidden={isHidden} />
    </View>
  );
});

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
