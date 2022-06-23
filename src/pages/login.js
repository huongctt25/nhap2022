import { useState, useMemo } from "react";
import "../css/bootstrap.css";
import "../css/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("hanoi");
  const [file, setFile] = useState(null);
  console.log("login");

  const handleLogin = (email, city) => {
    console.log({
      payload: {
        email,
        city,
        file,
      },
    });
  };
  return (
    <>
      <div className="container">
        <div className="center">
          <h1>Hello</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email, city);
          }}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              style={{ borderRadius: "15px" }}
              type="email"
              className="form-control custom-input"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">City: </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="hanoi">Hanoi</option>
              <option value="danang">Danang</option>
              <option value="hcm">HCM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              multiple
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
