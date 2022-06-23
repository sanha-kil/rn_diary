import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import TransparentCircleButton from './TransparentCircleButton';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const WriteHeader = ({
  onSave,
  askWhetherToDelete,
  isEditing,
  date,
  onChangeDate,
}) => {
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const adjustedDate = {
    date: moment(date).format('YYYY년 MM월 DD일'),
    time: moment(date).format('hh:mm'),
  };

  const onGoBack = () => {
    navigation.pop();
  };

  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };

  const onPressTime = () => {
    setMode('time');
    setVisible(true);
  };

  const onConfirm = selectedDate => {
    setVisible(false);
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          {isEditing && (
            <TransparentCircleButton
              name="delete-forever"
              color="#ef5350"
              hasMarginRight
              onPress={askWhetherToDelete}
            />
          )}
        </View>
        <View style={styles.iconButtonWrapper}>
          <TransparentCircleButton
            name="check"
            color="#009688"
            onPress={onSave}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{adjustedDate.date}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={onPressTime}>
          <Text>{adjustedDate.time}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={visible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />
    </View>
  );
};

export default WriteHeader;

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {flexDirection: 'row', alignItems: 'center'},
  center: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});
