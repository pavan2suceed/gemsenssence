import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
function MovieCard(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: props.data.image,
        }}
      />
      <View style={styles.wholeCard}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text0}>{props.data.title}</Text>
            <TouchableOpacity onPress={() => props.handleDelete()}>
              <AntDesign name="delete" size={25} color="red" />
            </TouchableOpacity>
          </View>
          <View style={styles.textCard}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <AntDesign name="star" size={20} color="#fcba03" />
              <Text style={styles.text1}>{props.data.rt_score}</Text>
            </View>
            <Text style={styles.text2}>51551 views</Text>
          </View>
          <Text style={styles.text2}>
            November 16th {props.data.release_date}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  tinyLogo: {
    width: '30%',
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  card: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  text0: {
    fontSize: 20,
    width: 160,
  },
  text1: {
    fontSize: 20,
    color: '#fcba03',
    marginHorizontal: 10,
  },
  text2: {
    fontSize: 15,
  },
  textCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  wholeCard: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
