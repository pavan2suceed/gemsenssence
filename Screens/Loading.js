import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
export const Loading = props => {
  const {loading} = props;
  return (
    <View>
      {loading && (
        <View>
          <Modal animationType="slide" transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View
                style={{
                  margin: 20,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 35,
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 10,
                }}>
                <ActivityIndicator size="small" color="#0000ff" />
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default Loading;
