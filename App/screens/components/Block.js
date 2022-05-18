import * as React from 'react';
import {Animated, TouchableWithoutFeedback, StyleSheet} from 'react-native';

export const Block = ({
  style,
  dragStartAnimationStyle,
  onPress,
  onLongPress,
  children,
  panHandlers,
  delayLongPress,
}) => {
  return (
    <Animated.View
      style={[styles.blockContainer, style, dragStartAnimationStyle]}
      {...panHandlers}>
      <Animated.View>
        <TouchableWithoutFeedback
          delayLongPress={delayLongPress}
          onPress={onPress}
          onLongPress={onLongPress}>
          {children}
        </TouchableWithoutFeedback>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
  },
});
