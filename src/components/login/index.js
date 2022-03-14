export const Login = ({
  handler,
  nameSetter,
  emailSetter,
  passSetter,
  boolSetter,
  bool,
}) => {
  return (
    <>
      <form onSubmit={handler}>
        <input
          onChange={(event) => nameSetter(event.target.value)}
          placeholder='Username'
        />

        {!bool && (
          <input
            onChange={(event) => emailSetter(event.target.value)}
            placeholder='Email'
          />
        )}

        <input
          onChange={(event) => passSetter(event.target.value)}
          placeholder='Password'
        />

        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => boolSetter(!bool)}>Log-in or Sign-up</button>
    </>
  );
};

// export default Login;
