import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "./TodoList/TodoList";
import { Stack } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState([]);


  // console.log('id  '+todos[0].id)
  return (
    <Stack alignItems="center" justifyContent="center" p="40px">
      <TodoInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos}  />
    </Stack>
  );
}
