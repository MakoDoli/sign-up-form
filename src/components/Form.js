import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState, useReducer, useContext } from "react";

import { newObj } from "../App";

const userArray = [];

// export let newUser = {
//   name: "",
//   surname: "",
//   email: "",
//   password: "",
// };
export let newUser = {};
export default function Form() {
  newUser = useContext(newObj);
  const [userEmail, setUserEmail] = useState("");

  const reducer = function (state, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_LASTNAME":
        return { ...state, surname: action.payload };
      case "UPDATE-EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_PASSWORD":
        return { ...state, password: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, newUser);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //რამე ფუნქცია რითაც შეყვანილ მონაცემებს/ობიექტს რამე უნდა ვუქნათ. მაგ., გავuშვათ API request ან ბექში (ეგ ჯერ არ ვიცი)
    state.email = userEmail;
    console.log(state);

    newUser = state;
    console.log(newUser);
    userArray.push(state);
    //console.log(userArray);
    navigate("/return");
  };

  return (
    <div className="form">
      <div className="heading">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </div>
      <div className="form-container">
        <div className="price">
          <p>
            <span className="try-free">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </div>
        <div className="form-inputs">
          <form onSubmit={submitHandler}>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              onChange={(e) =>
                dispatch({ type: "UPDATE_NAME", payload: e.target.value })
              }
              placeholder="Your name"
              // value={state.name}
            />

            <input
              placeholder="Last name"
              type="text"
              onChange={(e) =>
                dispatch({ type: "UPDATE_LASTNAME", payload: e.target.value })
              }
              // value={state.surname}
            />
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
              // value={userEmail}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value })
              }
            />

            <button type="sumbit">CLAIM YOUR FREE TRIAL</button>

            <p>
              By clicking the button, you are agreeing to our{" "}
              <span className="terms">Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
