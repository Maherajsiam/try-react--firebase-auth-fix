import React from "react";
import PrivateRoute from "./UI/Components/PrivateRoute";
import Todos from "./UI/Routes/Todos";
import SignIn from "./UI/Routes/Signin";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Redux Todo App</h1>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/todos" element={<Todos />} />
        </Route>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}
export default App;
