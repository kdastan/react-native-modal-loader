import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

export const Loader = ({ loading, color, size }) => {
  return (
    <Modal
      transparent
      animationType={'none'}
      visible={loading}
      onRequestClose={() => null}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} color={color} size={size} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  activityIndicatorWrapper: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
