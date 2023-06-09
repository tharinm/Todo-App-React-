import React, { useState } from "react";
import { Button, Stack, TextField, Box } from "@mui/material";
import { v4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

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

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setInputValue(""); // clear the input field
       toast("New Todo Added!", {
         icon: "🚀",
         style: {
           borderRadius: "10px",
           background: "#333",
           color: "#fff",
         },
       });
     // console.log(inputValue);
    } else {
      toast("Todo Can not be a blank", {
        icon: "😥",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
     // console.log("empty");
    }

    // console.log(setInputValue.length);
  };

  return (
    <Stack direction="row" gap="15px" alignItems="center">
      <TextField
        label="Input Todo"
        variant="outlined"
        height="76px"
        sx={{
          input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          width: { lg: "400px", xs: "200px" },

          backgroundColor: "#fff",
          borderRadius: "40px",
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        multiline
        maxRows={4}
      />
      <Button
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: "#576cbc",
          width: { lg: "173px", xs: "90px" },
          height: "50px",
          fontSize: { lg: "15px", xs: "10px" },
        }}
        onClick={handleInput}
      >
        Add Todo
      </Button>
      <Box>
        <Toaster />
      </Box>
    </Stack>
  );
}
