import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({ todoItems, completeTodoItem, removeTodoItem }) {

  // const todoItems = [
  //   {title: 'Купить молоко', id: 1, isComplete: false},
  //   {title: 'Помыть машину', id: 2, isComplete: false},
  //   {title: 'Позаниматься йогой', id: 3, isComplete: true},
  //   {title: 'Сходить к бабуле', id: 4, isComplete: false},
  //   {title: 'Позаниматься йогой', id: 5, isComplete: true},
  //   {title: 'Сходить к бабуле', id: 6, isComplete: false},
  //   {title: 'Позаниматься йогой', id: 7, isComplete: true},
  //   {title: 'Сходить к бабуле', id: 8, isComplete: false},
  // ];

  return (
    <FlatList
      data={todoItems}
      renderItem={({ item }) => (
        <TodoItem
          title={item.title}
          isComplete={item.isComplete}
          remove={() => removeTodoItem(item.id)}
          complete={() => completeTodoItem(item.id)}
        />)
      }
      keyExtractor={item => item.id}
    />
    
  );
}

export default TodoList;
