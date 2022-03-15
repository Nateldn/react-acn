export const createUser = async (username, email, pass) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST", // all HTTP e.g. get, post, put  methods must be in string and uppercase letters
      headers: { "Content-Type": "application/json" }, // headers should be structured in JSON format
      body: JSON.stringify({
        username: username,
        email: email,
        password: pass,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
