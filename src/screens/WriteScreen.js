import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import {createFeed} from '../stores/FeedStore';
import {useNavigation} from '@react-navigation/native';

const WriteScreen = observer(() => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const onSave = () => {
    createFeed(title, body, new Date());
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
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
