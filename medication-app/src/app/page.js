import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/navbar";
import Home from "../../pages/jsx/Home";
import Login from "../../pages/jsx/Login";
import Signup from "../../pages/jsx/Signup";

export default function home() {
  return (
    <>
      <Signup />
    </>
  );
}
