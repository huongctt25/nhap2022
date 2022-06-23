import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Msg = ({ closeToast, toastProps, title, description }) => (
  <div>
    <h4>Title: {title}</h4>
    <p>Description: {description}</p>
  </div>
);

function Nhap() {
  const displayMsg = () => {
    toast.success(<Msg title="Manse" description="Manse beo" />);
    // toast(Msg) would also work
  };

  return (
    <div>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer />
    </div>
  );
}
export default Nhap;
