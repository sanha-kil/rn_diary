import React from 'react';
import moment from 'moment';

import {Platform, Pressable, StyleSheet, Text} from 'react-native';
const FeedListItem = ({log}) => {
  const {title, body, date} = log;
  const adjustedDate = moment(date).format('YYYY년 MM월 DD일 HH:mm');

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}>
      <Text style={styles.date}>{adjustedDate}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </Pressable>
  );
};

export default FeedListItem;

const styles = StyleSheet.create({
  block: {backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24},
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {fontSize: 18, color: '#263238', fontWeight: 'bold', marginBottom: 8},
  body: {fontSize: 16, color: '#37474f', lineHeight: 21},
});
