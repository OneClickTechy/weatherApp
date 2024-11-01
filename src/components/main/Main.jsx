import {Outlet } from "react-router";
const Main = () => {
  
  return (
    <main className="text-text-lighter col-span-11 row-span-11 col-start-2 row-start-2">
      <Outlet />
    </main>
  );
};

export default Main;
