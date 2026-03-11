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
    // כאן אפשר לקרוא API להזדהות
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
        התחברות
      </Typography>

      <Stack spacing={2}>
        <Input
          placeholder="אימייל או טלפון"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* אינפוט סיסמה */}
        <Input
          placeholder="סיסמה"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* שורה עם זכור אותי ולינק לשחזור סיסמה */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            size="sm"
            label="זכור אותי"
          />
        </Box>

        {/* כפתור התחברות */}
        <Button variant="solid" color="primary" onClick={handleLogin}>
          התחבר
        </Button>

        {/* לינק להרשמה */}
        
      </Stack>
    </Box>
  );
};

export default Login;