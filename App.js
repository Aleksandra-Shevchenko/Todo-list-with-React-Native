import React, { useState } from "react";
import { StyleSheet, SafeAreaView,
  Platform, StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import Header from "./components/Header";
import Todo from "./components/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <KeyboardAvoidingView 
        behavior='padding'
        style={styles.todoContainer}
      >
        <Todo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#000',
    color: '#fff',
  },
  todoContainer: {
    flex: 1,
  },
});
