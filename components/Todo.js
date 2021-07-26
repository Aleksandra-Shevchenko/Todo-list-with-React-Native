import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

function Todo() {

  const [todoItems, setTodoItems] = useState(() => [
    {id: uuidv4(), title: 'Захватить мир', isComplete: true},
    {id: uuidv4(), title: 'Победить прокрастинацию', isComplete: false},
  ])
  const [text, setTextValue]= useState('');

  const onChangeText = (text) => {
    setTextValue(text);
  };

  const addTodoItem = () => {
    if (text.length > 0) {
      setTodoItems([
        ...todoItems,
        {id: uuidv4(), title: text, isComplete: false}
      ]);
    }
    setTextValue('');
  }

  const completeTodoItem = (id) => {
    setTodoItems(todoItems.map((item) => item.id === id
      ? {...item, isComplete: !item.isComplete}
      : item
    ));
  }

  const removeTodoItem = (id) => setTodoItems(todoItems.filter((item) => item.id !== id));

  return (
    <>
      <TodoList
        todoItems={todoItems}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
      />
      <TextInput
        style={styles.input}
        placeholder='Добавить задачу ...'
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={addTodoItem}
      />
    </>
    
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#000',
    backgroundColor: '#fff',
    height: 60,
    padding: 20,
    borderRadius: 10,
  }

});

export default Todo;
