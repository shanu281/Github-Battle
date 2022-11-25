import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="header-btn-container">
        <button>
          <NavLink to="/popular">Popular</NavLink>
        </button>
        <button>
          <NavLink to="/battle">Battle</NavLink>
        </button>
        <button>🔦</button>
      </div>
    </>
  );
}
export default Header;
