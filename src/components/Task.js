import {
  Card,
  Box,
  CardContent,
  CardActionArea,
  Typography
} from "@mui/material";


const Task = ({ task }) => {

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {task.name}
            </Typography>
            <Typography sx={{ p: 0 }}>{task.type}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default Task;