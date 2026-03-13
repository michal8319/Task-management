import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const user = useSelector((state) => state.user);

  const { register, handleSubmit } = useForm({defaultValues: {username: "",password: "",rememberMe: false}});

  const onSubmit = (data) => {
    if (data.username === user.username &&data.password === user.password) {
      dispatch(login());
      if (data.rememberMe) {
        localStorage.setItem("isLogged", "true");
      }
      alert("Login successful");
      navigate("/ProjectMain");   
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <Box sx={{width: 360,margin: "50px auto",padding: 4,borderRadius: 2,boxShadow: "md",backgroundColor: "background.body",}}>
      
      <Typography level="h4" sx={{ mb: 2, textAlign: "center" }}>LOGIN</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Stack spacing={2}>

          <Input placeholder="Username"{...register("username", { required: true })}/>

          <Input placeholder="Password"type="password"{...register("password", { required: true })}/>

          <Checkbox label="remember me"{...register("rememberMe")}/>

          <Button type="submit" variant="solid" color="primary">Log in</Button>

        </Stack>

      </form>

    </Box>
  );
};

export default Login;