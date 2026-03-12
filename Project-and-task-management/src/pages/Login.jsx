import * as React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log({ email, password, rememberMe });
  };

  return (
    <Box
      sx={{
        width: 360,
        margin: "50px auto",
        padding: 4,
        borderRadius: 2,
        boxShadow: "md",
        backgroundColor: "background.body",
      }}
    >
      <Typography level="h4" sx={{ mb: 2, textAlign: "center" }}>
        LOGIN
      </Typography>
      <Stack spacing={2}>
        <Input
          placeholder="Email or phone"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            size="sm"
            label="remember me"
          />
        </Box>
        <Button variant="solid" color="primary" onClick={handleLogin}>
          Log in
        </Button>        
      </Stack>
    </Box>
  );
};

export default Login;