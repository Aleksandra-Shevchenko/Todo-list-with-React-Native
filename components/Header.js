import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 100,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
