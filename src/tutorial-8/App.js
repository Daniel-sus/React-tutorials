import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./style.css";

function App() {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => {
    console.log("ФОРМА!", values);
    reset();
  };

  console.log(formState.errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <TextField
            {...register("firstName", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.firstName && formState.errors.firstName.message
            }
            error={!!formState.errors.firstName}
            label="Имя"
            fullWidth
          />
          <TextField
            {...register("lastName", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.lastName && formState.errors.lastName.message
            }
            error={!!formState.errors.lastName}
            name="lastName"
            label="Фамилия"
            fullWidth
          />
        </div>
        <div className="wrapper">
          <TextField
            {...register("email", {
              required: "Это обязательное поле!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: "Это неверная почта!",
              },
            })}
            helperText={
              formState.errors.email && formState.errors.email.message
            }
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register("password", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.password && formState.errors.password.message
            }
            error={!!formState.errors.password}
            name="password"
            type="password"
            fullWidth
            label="Пароль"
          />
        </div>
        <div className="row">
          <TextField name="about" label="Обо мне" />
        </div>
        <br />
        <div className="row">
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button variant="contained" color="error">
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
