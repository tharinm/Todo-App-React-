import React, { useState } from "react";
import { Stack, Typography, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast, { Toaster } from "react-hot-toast";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SingleTodo({ todos, setTodos, todo }) {
  // console.log(todo.id);
  console.log(todos);

  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState("");

  //Delete Todo
  const handleDelete = () => {
    const updateTodo = todos.filter((item) => {
      if (item.id === todo.id) {
        return false;
      }
      return true;

      //  return console.log(item.id)
    });
    // console.log(updateTodo)
    setTodos(updateTodo);
    toast("Todo Deleted Successfully!", {
      icon: "☹️",
    });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    //console.log("chek");

    setEditTodoName(todo.name);
  };

  // console.log(isEdit);

  const hadleSubmit = (e) => {
    const value = editTodoName.length;

    if (e.keyCode === 13) {
      //console.log(value);
      if (value > 0) {
        // console.log("empty");
         const newTodos = todos.map((item) => {
           if (todo.id === item.id) {
             return {
               ...item,
               name: editTodoName,
             };
           } else {
             return item;
           }
         });
         setTodos(newTodos);
         setIsEdit(false);
         toast("Todo Updated Successfully!", {
           icon: "🙂",
         });
      } else {
        toast("Todo Can not be a blank", {
          icon: "😥",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  const handleChange = (e) => {
    setEditTodoName(e.target.value);
  };
  //Todo Complete
  // const handleComplete = () => {
  // const completeTodo = todos.map((item) => {
  // if (item.id === todo.id) {
  // return {
  // isCompleted: !item.isCompleted,
  //
  // }

  // }
  // else {
  // return item
  // }
  // });
  // setTodos(completeTodo)

  // };

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      mb="20px"
      p="1px"
      spacing={3}
    >
      <Stack
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#82cd47",
          borderRadius: "10px",
        }}
        justifyContent="center"
      >
        <Checkbox {...label} color="success" />
      </Stack>

      <Stack
        width="150px"
        sx={{
          width: "400px",
          height: "60px",
          backgroundColor: "#b3c99c",
          borderRadius: "10px",
        }}
        justifyContent="center"
      >
        {isEdit ? (
          <TextField
            label="Edit Todo"
            variant="outlined"
            height="76px"
            value={editTodoName}
            sx={{ backgroundColor: "white" }}
            onChange={handleChange}
            onKeyDown={hadleSubmit}
          />
        ) : (
          <Typography variant="h6">{todo.name}</Typography>
        )}
      </Stack>
      <Stack direction="row" gap="10px">
        <Button
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#b9eddd",
            borderRadius: "10px",
          }}
          onClick={handleEdit}
        >
          <ModeEditIcon sx={{ width: "50px", height: "30px" }} />
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#ffc898",
            borderRadius: "10px",
          }}
          onClick={handleDelete}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
      </Stack>
    </Stack>
  );
}
