import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

function TodoItem({ title, remove, isComplete, complete }) {

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={isComplete ? require('../assets/tick.png') : null}
            resizeMode="cover"
          >
            <TouchableOpacity
              style={[styles.button, styles.buttonSuccess]}
              onPress={complete}
            />
          </ImageBackground>
        </View>
        <View>
          <Text style={[styles.text, isComplete && styles.textComplete]}>
            {title}
          </Text>
        </View>
      </View>


      <View style={styles.buttonsContainer}>
        <ImageBackground style={styles.image} source={require('../assets/close.png')} >
          <TouchableOpacity
            style={[styles.button, styles.buttonDelete]}
            onPress={remove}
          >
          </TouchableOpacity>
        </ImageBackground>
      </View>

    </View>
  );
}

TodoItem.defaultProps = {
  title: 'без названия',
  isComplete: false,
  onDelete: () => {},
  onComplete: () => {},
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 26,
    paddingHorizontal: 16,
    borderColor: '#5f6366',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    maxWidth: '30%',
    justifyContent: 'flex-end',
  },
  imageContainer:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#5f6366',
    borderRadius: 50,
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 16,
    height: 16,
  },
  button: {
    width: 20,
    height: 20,
  },
  text: {
    color: '#fff',
    marginLeft: 16,
    fontSize: 16,
  },
  textComplete: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
