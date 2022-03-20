import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import "./App.css";
import { tokenLogin } from "./utils";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenLogin(setUser);
  }, []);

  return (
    <main className='App'>
      <section className='img_container'>
        {user && <h1>Hi {user}</h1>} {/* && is a shorthand if true statement*/}
        {user ? <h1>{user}</h1> : <h1>Please login/sign-up</h1>}{" "}
        {/* use tenary operator*/}
        {!user ? <Login setUser={setUser} /> : <Home />}
      </section>
    </main>
  );
};

export default App;
