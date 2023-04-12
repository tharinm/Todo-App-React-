import React from "react";
import SingleTodo from "../../components/SingleTodo";
import { Stack } from "@mui/material";

export default function TodoList({ todos, setTodos}) {

  return (
    <Stack justifyContent="center" alignItems="center" mt="20px" p="10px">
      {todos.map((item) => {
          return (
            <SingleTodo
              key={item.id}
              todo={item}
              todos={todos}
              setTodos={setTodos}
            />
          );
      })}
    </Stack>
  );
}
