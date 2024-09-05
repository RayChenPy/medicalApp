import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/navbar";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

export default function home() {
  return (
    <>
      {/* <Signup /> */}
      <Home/>
    </>
  );
}
