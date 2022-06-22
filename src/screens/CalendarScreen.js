import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet, Animated, Button} from 'react-native';

const FadeInAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current;

  return (
    <View>
      <Animated.View style={[styles.rectangle, {opacity: animation}]} />
      <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      />
    </View>
  );
};

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnabled(prev => !prev);
        }}
      />
    </View>
  );
};

const CalendarScreen = observer(() => {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
      <SlideLeftAndRight />
    </View>
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
