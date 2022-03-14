import { useState } from "react";
import { Login } from "./components/login";
import "./App.css";

const App = () => {
  //set variables
  const [user, setUser] = useState(); // getter and setter - user is the default state, setUser
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState();

  // Define handler
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({ username: username, email: email, pass: pass });
  };

  return (
    <div className='App'>
      {user && <h1>{user.username}</h1>}
      {user ? <h1>{user.username}</h1> : <h1>Please type something</h1>}
      <Login
        handler={submitHandler}
        nameSetter={setUsername}
        emailSetter={setEmail}
        passSetter={setPass}
        boolSetter={setBool}
        bool={bool}
      />
      {/* <Login
        handler={submitHandler}
        nameSetter={setUsername}
        emailSetter={setEmail}
        passSetter={setPass}
        boolSetter={setBool}
        bool={bool}
      /> */}
    </div>
  );
};

export default App;
