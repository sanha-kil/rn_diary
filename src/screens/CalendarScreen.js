import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet} from 'react-native';
import CalendarView from '../components/CalendarView';
import {feedState, filteredFeedByDate} from '../stores/FeedStore';
import moment from 'moment';
import FeedList from '../components/FeedList';

const CalendarScreen = observer(() => {
  const feeds = feedState.feeds;
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

  const markedDates = feeds.reduce((acc, current) => {
    const formattedDate = moment(current.date).format('YYYY-MM-DD');
    acc[formattedDate] = {marked: true};

    return acc;
  }, {});

  return (
    <FeedList
      feeds={filteredFeedByDate(selectedDate)}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
});

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 100,
  },
});
