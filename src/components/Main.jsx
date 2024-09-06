import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ForumIcon from "@mui/icons-material/Forum";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function Main() {
  // State for the Select component
  const [value, setValue] = React.useState("");

  // Handle change for Select component
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];

  return (
    <div className="flex-grow">
      <header className="justify-between flex p-2 border border-gray-200">
        <div className="textContainer">
          <h1 className="text-3xl tracking-wide font-bold text-black font-serif">
            Chatbot Mind Map
          </h1>
          <p className="text-md">
            This is the brain and the memory of the chatbot. You can add, edit
            and analyze
          </p>
          <p className="text-md">
            the source data being used to answer user queries from here.
          </p>
        </div>

        <div className="imageContainer flex justify-center items-center space-x-10">
          <Button variant="outlined">GUIDED TOUR</Button>
          <p>SELECT ORG</p>
          <img src="profile.png" alt="Profile" />
        </div>
      </header>

      <main className="flex justify-center items-center space-x-4 mt-4">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ width: 160, padding: 1, fontSize: 18 }}
        >
          ADD DATA
        </Button>
        <Button
          variant="contained"
          startIcon={<AvTimerIcon />}
          sx={{ width: 280, padding: 1, fontSize: 18, backgroundColor: "pink" }}
        >
          DATA TRAINING STATUS
        </Button>
        <Button
          variant="outlined"
          startIcon={<ForumIcon />}
          sx={{
            width: 280,
            padding: 1,
            fontSize: 18,
            color: "pink",
            backgroundColor: "white",
            border: "1px solid pink",
          }}
        >
          GROUND TRUTHS
        </Button>
      </main>

      <div className="w-1/2 mx-auto">
        <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <TextField
          label="Search"
          variant="outlined"
          style={{ width: 400 }}
          margin="normal"
        />

        <FormControl variant="outlined" sx={{ width: 200 }}>
          <InputLabel id="numeric-select-label">Results</InputLabel>
          <Select
            labelId="numeric-select-label"
            value={value}
            onChange={handleChange}
            label="Results"
          >
            {numbers.map((num, index) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ width: 160, padding: 1, fontSize: 18 }}
        >
          SEARCH
        </Button>
      </div>

      <div className="w-full flex p-4 rounded-lg border border-gray-200 mt-10">
        <div className="textContainer w-3/4 text-lg">Data</div>
        <div className="gridContainer w-1/4 grid grid-cols-4 text-lg">
          <div>Source</div>
          <div>Type</div>
          <div>Created</div>
          <div>Actions</div>
        </div>
      </div>

      
    </div>
  );
}

export default Main;
