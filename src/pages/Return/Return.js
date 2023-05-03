import { useNavigate } from "react-router-dom";
import { newUser } from "../../components/Form";
import "../../components/Form.css";
import { useState } from "react";

export default function Return() {
  const navigate = useNavigate();

  const reset = () => {
    navigate("/");
    window.location.reload();
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className="form">
      <div className="form-container">
        <div className="price" style={{ paddingTop: 0 }}>
          <p>
            <span className="try-free">Dear {newUser.name.toUpperCase()}</span>{" "}
            <br></br>Thank you for signing up
          </p>
        </div>
        <div className="form-inputs">
          <form onSubmit={reset}>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              defaultValue={newUser.name}
            />

            <input
              placeholder="Last name"
              type="text"
              defaultValue={newUser.surname}
            />
            <input
              placeholder="Email"
              type="email"
              defaultValue={newUser.email}
            />
            <div className="password-section">
              <input
                className="password-input"
                placeholder="Password"
                type={visible ? "text" : "password"}
                defaultValue={newUser.password}
              />
              <div onClick={() => setVisible(!visible)} className="show">
                show
              </div>
            </div>

            <button onClick={reset}>click here to return</button>

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
