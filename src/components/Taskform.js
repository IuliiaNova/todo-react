import { Formik } from "formik";
import * as Yup from "yup";
import {
  MenuItem,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Button, Select } from "@mui/material";
import { useState } from "react";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

const initialEditSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

const initialCreateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
});

let initialValues = {
  name: "",
  type: "",
};


const TaskForm = ({ mode = "edit", task }) => {

  const navigate = useNavigate();
  const types = ["sport", "personal", "shopping", "study", "work"];

  const handleFormSubmit = (values, onSubmitProps) => {
    if (mode === "edit") {
      axios.put(`/task/${values._id}`, values).then((res) => {
        navigate("/home");
      });
    } else {
      axios.post(`/task/create`, values).then((res) => {
        navigate("/home");
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`/task/${id}`).then((res) => {
      navigate('/home');
    });
  };


  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={mode === "create" ? initialValues : task}
      validationSchema={mode === "create" ? initialCreateSchema : initialEditSchema}
    >
      {({
        handleSubmit,
        handleBlur,
        touched,
        resetForm,
        values,
        handleChange,
        errors,
      }) => (
        <Box p="2rem 0" m="2rem auto">
          <Typography textAlign="center" mb="2rem">
            ToDo
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="30px">
              <TextField
                label="Task name"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.name) && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              
              <FormControl>
                <InputLabel>Select Type</InputLabel>
                <Select
                  label="Task type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="type"
                  error={Boolean(touched.type) && Boolean(errors.type)}
                >
                  {types.map((type, idx) => (
                    <MenuItem value={type} key={`${idx}-${type}`}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {mode === "edit" && (
                <FormControl>
                  <InputLabel>Status</InputLabel>
                  <Select
                    label="Status"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="status"
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              )}
              <Button
                variant="outlined"
                type="submit"
                m="2rem 0"
                p="1rem 0"
                background="#00D5FA"
              >
                {mode === "edit" ? 'Edit Task' : 'Create Task' }
              </Button>
            </Box>
          </form>
          <Button onClick={() => handleDelete(values._id)}>Delete Todo</Button>
        </Box>
      )}
    </Formik>
  );
};

export default TaskForm;