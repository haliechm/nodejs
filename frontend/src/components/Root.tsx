import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-green-400 w-full h-screen">
      <div>root</div>
      <Outlet />
    </div>
  )
}