import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SingleTodo({ todos, setTodos }) {
  console.log(todos);
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
        bgColor="green"
        sx={{
          width: "400px",
          height: "60px",
          backgroundColor: "#b3c99c",
          borderRadius: "10px",
        }}
        justifyContent="center"
      >
        <Typography variant="h6">{todos.name}</Typography>
      </Stack>
      <Stack direction="row" gap="10px">
        <Button
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#b9eddd",
            borderRadius: "10px",
          }}
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
        >
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
      </Stack>
    </Stack>
  );
}
