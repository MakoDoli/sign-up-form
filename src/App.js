import "./App.css";
import Form from "./components/Form";
import Return from "./pages/Return/Return";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";

export const newObj = createContext({
  name: "matilda",
  surname: "",
  email: "",
  password: "",
});
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="return" element={<Return />}></Route>
      </Routes>
    </div>
  );
}

export default App;
