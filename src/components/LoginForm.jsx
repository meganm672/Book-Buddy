import { useState } from "react";

import { Stack, Button, Paper, TextField, Typography, Link } from "@mui/material";

import { useRegisterMutation, useLoginMutation } from "../redux/api";
const LoginForm = () => {
    const [register, {isLoading}] = useRegisterMutation();
    const [login] = useLoginMutation();

    console.log(isLoading? "Loading result" : "from useRegisterMutation", register)
    console.log(isLoading? "Loading result" : "from useLoginMutation", login)
     // should be either login or register, to match the API routes
     const [type, setType] = useState("login");
     // form fields
     const [fistname, setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [repeatPassword, setRepeatPassword] = useState("");




const handleSubmit = async (event) => {
    event.preventDefault();

    if (type === "register") {
        // pass the new user data stored in react state
        register({user: {username, password}});
    }

    if (type === "login") {
        login({user: {username, password}});
    }

}
return (
    <Paper elevation={6} sx={{width: "50%", padding: 4, margin: "14px auto"}}>
        <form onSubmit={handleSubmit}>
            <Stack direction="column">
                <Typography
                    variant="h5"
                    sx={{textAlign: "center"}}
                >
                    {type === "login" ? "Log In" : "Register"}
                </Typography>
                {type === "register" && <TextField
                    label="First Name"
                    onChange={e => setFirstname(e.target.value)}
                    value={fistname}
                    sx={{margin: "8px 0"}}
                    />}
                {type === "register" && <TextField
                    label="Last Name"
                    onChange={e => setLastname(e.target.value)}
                    value={lastname}
                    sx={{margin: "8px 0"}}
                    />}
                <TextField
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    sx={{margin: "8px 0"}}
                    />
                <TextField
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    sx={{margin: "8px 0"}}
                    type="password"
                    />
                    {type === "register" && <TextField
                        label="Re-Enter Password"
                        onChange={e => setRepeatPassword(e.target.value)}
                        value={repeatPassword}
                        type="password"
                        error={!!(password && repeatPassword && password !== repeatPassword)}
                        helperText={password && repeatPassword && password !== repeatPassword ? "Password must match" : null}
                    />}
                </Stack>
                <Button
                    variant="contained"
                    size="large"
                    sx={{margin: "8px 0", width: "100%"}}
                    type="submit"
                >
                    {type === "login" ? "Log In" : "Register"}
                </Button>
                {type === "login"
                    ? (
                        <Typography>Need to create an account?{" "}
                        <Link href="#" onClick={() => setType("register")}>
                            Register</Link>
                        </Typography>
                    ): (
                        <Typography>Already have an account?{" "}
                        <Link href="#" onClick={() => setType("login")}>
                            Log In</Link>
                        </Typography>
                    )
                }
        </form>
    </Paper>
);
}

export default LoginForm