function App() {
  let email;
  let password;

  const handleChange = (event) => {
    if (event.target.name === "email") {
      email = event.target.value;
    } else {
      password = event.target.value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email === true || !password === true) {
      alert("заполни email и password");
    } else {
      console.log({ email, password });
      email = "";
      password = "";
      event.target.reset();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "250px",
          height: "220px",
          padding: "15px",
          border: "1px solid black",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: 0,
            paddingLeft: "10px",
            alignSelf: "flex-start",
            paddingBottom: 5,
          }}
        >
          Email
        </h3>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          style={{
            outline: "none",
            width: "100%",
            height: "28px",
            padding: "5px 15px",
            border: "1px solid black",
            borderRadius: "15px",
            marginBottom: "10px",
          }}
        />
        <h3
          style={{
            margin: 0,
            padding: 0,
            paddingLeft: "10px",
            alignSelf: "flex-start",
            paddingBottom: 5,
          }}
        >
          Password
        </h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          style={{
            outline: "none",
            width: "100%",
            height: "28px",
            padding: "5px 15px",
            border: "1px solid black",
            borderRadius: "15px",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            height: "30px",
            marginTop: "15px",
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "15px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
