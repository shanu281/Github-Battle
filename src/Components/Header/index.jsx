import { NavLink } from "react-router-dom";
import "./style.css";
function Header(props) {
  return (
    <>
      <div className="header-btn-container">
        <div className="flex">
          <div className="header-btn ">
            <NavLink to="/popular">Popular</NavLink>
          </div>
          <div className="header-btn">
            <NavLink to="/battle">Battle</NavLink>
          </div>
        </div>
        <div onClick={()=> props.handleMode("mode")} className={props.mode=== "mode"? "dark mode": "normal mode"}>🔦</div>
      </div>
    </>
  );
}
export default Header;
