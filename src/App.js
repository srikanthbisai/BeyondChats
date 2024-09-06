import Main from "./components/Main";
import SideMenu from "./components/SideMenu";

export default function App() {
  return (
    <div className="flex">
      <SideMenu/>
      <Main />
    </div>
  )
}
