import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Comment from "./Comment";
import "../tutorial-6/App.css";

const App = () => {
  const [comments, setComments] = React.useState([]);

  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    createdAt: "",
    text: "",
    gender: "Мужчина",
  });

  const handleChangeInputs = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  React.useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments")));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(comments);
  }, [comments]);

  const handleSumbit = () => {
    if (
      user.fullName.length > 0 &&
      user.email.length > 0 &&
      user.text.length > 0
    ) {
      const id = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
      setComments([...comments, { ...user, createdAt: new Date(), id }]);
      setUser({
        fullName: "",
        email: "",
        createdAt: "",
        text: "",
        gender: user.gender,
      });
    } else {
      alert("Введите значение");
    }
  };

  const onRemove = (id) => {
    setComments(comments.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <Box className="box1">
        <h2 style={{ margin: 0, padding: 0, marginBottom: "10px" }}>Отзывы</h2>
        <div className="comments-wrapper" style={{ overflow: "auto" }}>
          {comments.map((comment) => (
            <Comment key={comment.createdAt} {...comment} onRemove={onRemove} />
          ))}
        </div>
      </Box>
      <Box className="box2">
        <h2 style={{ margin: 0, padding: 0, marginBottom: "10px" }}>
          Обратная связь
        </h2>
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          name="fullName"
          onChange={handleChangeInputs}
          value={user.fullName}
        />
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Почта"
          variant="outlined"
          name="email"
          onChange={handleChangeInputs}
          value={user.email}
        />
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Текст"
          variant="outlined"
          name="text"
          onChange={handleChangeInputs}
          value={user.text}
        />
        <div
          style={{ display: "flex", marginBottom: "10px" }}
          className="wrapper-gender"
        >
          <h4 style={{ margin: 0, padding: 0 }}>Выберите пол:</h4>
          <select
            style={{ flex: "1 auto" }}
            onChange={handleChangeInputs}
            value={user.gender}
            name="gender"
          >
            <option value="Мужчина">Мужчина</option>
            <option value="Женщина">Женщина</option>
            <option value="Я нерешительный">Я нерешительный</option>
          </select>
        </div>

        <Button
          onClick={handleSumbit}
          style={{ width: "100%" }}
          variant="contained"
        >
          Отправить
        </Button>
      </Box>
    </div>
  );
};

export default App;
