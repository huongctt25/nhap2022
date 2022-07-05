import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../css/style.css";
import "../css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { getAsyncWithToken, postAsync } from "../constant/request";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [cookie, setCookie] = useCookies(["currentuser"]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: email.current.value,
      password: password.current.value,
    };
    const url = process.env.REACT_APP_BACK_END + "/auth/signin";
    const response = await postAsync(url, data);
    if (response.status === 201) {
      await setCookie("currentuser", response.data.access_token);
      await setCookie("userid", response.data.id);
    }
    navigate("/people");
  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="center">
          <h1>Hello</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email: </label>
            <input
              style={{ borderRadius: "15px" }}
              type="email"
              className="form-control custom-input"
              placeholder="name@example.com"
              ref={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Password: </label>
            <input
              style={{ borderRadius: "15px" }}
              type="password"
              className="form-control custom-input"
              placeholder=""
              ref={password}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              multiple
              onChange={(e) => setFile(e.target.files)}
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
