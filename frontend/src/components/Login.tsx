import axios from "axios";
import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios.get("http://localhost:3001/")

    axios.post("http://localhost:3001/login", {
      username,
      password,
    })
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.error("err: ", err);
    })
  }
  
  return(
    <form onSubmit={handleSubmit}>
      username: <input type="text" title="username" onChange={(e) => setUsername(e.target.value)}/>
      password: <input type="text" title="password" onChange={(e) => setPassword(e.target.value)}/>

      <input type="submit" value="Login"/>
    </form>
  );
}