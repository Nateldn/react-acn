import { useState } from "react";
import { createUser } from "../../utils";

export const Login = ({ setUser }) => {
  //set variables
  const [username, setUsername] = useState(); // getter and setter - user is the default state, setUser
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  // Define handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      // setUser({ username: username, email: email, pass: pass });
      createUser(username, email, pass);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder='Username'
        />

        {!bool && (
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
            type='email'
          />
        )}

        <input
          onChange={(event) => setPass(event.target.value)}
          placeholder='Password'
          type='password'
        />

        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => setBool(!bool)}>Log-in or Sign-up</button>
    </>
  );
};
