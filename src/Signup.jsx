import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return <div>
        <div style={{
            paddingTop: 200,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#eeeeee"
        }}>
            <Typography variant={"h5"}>
                welcome to divylearn
            </Typography>

        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>

            <Card variant="outlined" style={{ width: 400, padding: 25 }}>

                <TextField onChange={(e) => {
                    setUsername(e.target.value);
                }} fullWidth={true} label="Username" variant="standard" />
                <br />
                <br />
                <TextField onChange={(e) => {
                    setPassword(e.target.value);
                }} fullWidth={true} label="Password" variant="standard" type={"password"} />
                <br />
                <br />
                <Button size='large'
                    variant="contained"
                    onClick={() => {
                        fetch("http://localhost:3000/admin/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: username,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then((res) => {
                            res.json().then((data) => {
                                localStorage.setItem("token", data.token);
                                window.location = "/"
                            })
                        })
                    }}>
                    Sign Up</Button>
            </Card>
        </div>
    </div>
}

export default Signup
