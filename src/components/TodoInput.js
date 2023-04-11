import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { v4 } from "uuid";

export default function TodoInput({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");
  //console.log(inputValue)

  const handleInput = () => {
    if (inputValue.length > 0) {
      const newTodo = {
        id: v4(),
        name: inputValue,
        isComplete: false,
      };

      const newTodos = [...todos,newTodo];
      setTodos(newTodos);
      setInputValue("");
    }
  };

  return (
    <Stack direction="row" gap="15px">
      <TextField
        label="Input Todo"
        variant="outlined"
        height="76px"
        sx={{
          input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          width: { lg: "400px", xs: "300px" },
          backgroundColor: "#fff",
          borderRadius: "40px",
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: "#576cbc",
          width: { lg: "173px", xs: "80px" },
          height: "56px",
          fontSize: { lg: "20px", xs: "14px" },
        }}
        onClick={handleInput}
      >
        Add Button
      </Button>
    </Stack>
  );
}
