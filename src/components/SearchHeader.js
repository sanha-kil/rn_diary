import {observer} from 'mobx-react-lite';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  changeSearchKeyword,
  clearSearchKeyword,
  searchState,
} from '../stores/SearchStore';

const SearchHeader = observer(() => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        onChangeText={changeSearchKeyword}
        value={searchState.keyword}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={clearSearchKeyword}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
});

export default SearchHeader;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
