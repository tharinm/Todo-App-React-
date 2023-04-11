import React from "react";
import SingleTodo from "../../components/SingleTodo";
import { Stack } from "@mui/material";

export default function TodoList({ todos, setTodos }) {
  // console.log(todos)
  return (
    <Stack justifyContent='center' alignItems='center' mt="20px" p="10px">
      {todos.map((todos, key) => (
        <SingleTodo todos={todos} setTodos={setTodos} key={key} />
      ))}
    </Stack>
  );
}
