import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarView = ({markedDates, selectedDate, onSelectDate}) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={calendarTheme}
    />
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

const calendarTheme = {
  selectedDayBackgroundColor: '#009688',
  arrowColor: '#009688',
  dotColor: '#009688',
  todayTextColor: '#009688',
};
