import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import {createFeed, deleteFeed, modifyFeed} from '../stores/FeedStore';
import {useNavigation} from '@react-navigation/native';

const WriteScreen = observer(({route}) => {
  const feed = route.params?.feed;
  const [title, setTitle] = useState(feed?.title ?? '');
  const [body, setBody] = useState(feed?.body || '');
  const navigation = useNavigation();

  const onSave = () => {
    if (feed) {
      modifyFeed({
        id: feed.id,
        date: feed.date,
        title,
        body,
      });
    } else {
      createFeed(title, body, new Date());
    }
    navigation.pop();
  };

  const askWhetherToDelete = () => {
    Alert.alert(
      '삭제',
      '삭제하시겠습니까?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            deleteFeed(feed);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          askWhetherToDelete={askWhetherToDelete}
          isEditing={!!feed}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});
