import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/UserSlice";


const Header = () => {
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Box
      height="100px"
      backgroundColor="#ff6407"
      padding="0 20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
        <Box fontSize="20px" color="#fff" fontWeight="bold">
            <Link to="/home" style={{textDecoration: 'none', color:'#f8fcf3', marginLeft:'200px', fontSize: '30px'}}>TODO</Link>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
            <Select sx={{
              boxShadow: 'none', '.MuiOutlinedInput-notchedOutline' : {border: 0}
            }}
            value={user.name}>
                <MenuItem value={user.name}>{user.name}</MenuItem>
                <MenuItem onClick={()=> {dispatch(setLogout()); navigate('/')}}>Logout</MenuItem>
            </Select>
        </Box>
    </Box>
  );
};
export default Header;
