import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";


import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/TaskSlice";
import Header from "./Header";
import { Link } from "react-router-dom";
import Task from "../components/Task";



const Home = () => {

  const dispatch = useDispatch();
  const [typeFilter, setTypeFilter] = useState("");
  const types = ["sport", "personal", "shopping", "study", "work"];


  useEffect(() => {
    axios.get(`/task?type=${typeFilter}`).then((res) => {
      dispatch(setTasks(res.data.tasks));
    });
  }, [typeFilter]);

  const { tasks } = useSelector((state) => state.task);

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value)
  };

  return (
    <Box>
      <Header />
      <Container>
        <Box display="flex" justifyContent="space-between" mt="2rem">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel>Select Type</InputLabel>
            <Select value={typeFilter} onChange={handleTypeChange}>
              {types.map((type, idx) => (
                <MenuItem key={`${idx}-${type}`} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button> 
          <Link style={{ textDecoration: "none" }} to="/task/create">
                  Create new ToDo
                </Link> 
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button onClick={() => {setTypeFilter('')}}>Clear filters</Button>
        </Box>
        <Box mt="2rem">
          <Grid container spacing={2}>
            {tasks.map((task, idx) => (
              <Grid item xs={12} md={3} key={`${idx}-${task.id}`}>
                <Link style={{ textDecoration: "none" }} to={`/task/${task._id}`}>
                  <Task task={task} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default Home;