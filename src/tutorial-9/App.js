import { responsiveProperty } from "@mui/material/styles/cssUtils";
import React from "react";

function App() {
  const [users, setUsers] = React.useState([
    { id: 1, name: "Daniel" },
    { id: 2, name: "Max" },
    { id: 3, name: "Kate" },
  ]);

  // const getUsers = () => {
  //   fetch("https://61e6a5ccce3a2d0017359303.mockapi.io/users")
  //     .then((response) => response.json())
  //     .then((names) => setUsers([...users, ...names]));
  // };

  const getUsers = async () => {
    try {
      let response = await fetch(
        "https://61e6a5ccce3a2d0017359303.mockapi.io/users"
      );
      let result = await response.json();
      setUsers([...users, ...result]);
    } catch (error) {
      alert("Возниклы ошибка");
    }
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <div
        style={{
          width: "400px",
          height: "30px",
          textAlign: "center",
          border: "1px solid black",
          marginTop: "100px",
          marginBottom: "20px",
        }}
        onClick={getUsers}
      >
        Получить список пользователей
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
