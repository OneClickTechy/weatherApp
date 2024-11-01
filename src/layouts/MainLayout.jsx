import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Nav from "../components/nav/Nav";
import { Routes, Route } from "react-router";
const MainLayout = () => {
  return (
    <div className="bg-background-dark w-full min-h-screen text-primary-dark grid grid-cols-12 grid-rows-12 gap-4 p-4">
      <Nav />
      <Header />
      <Main />
    </div>
  );
};

export default MainLayout;
