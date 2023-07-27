import "./Header.scss";
import { Link } from "react-router-dom";
import user from "../../components/images/user.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>Movie App</Link>
      </div>
      {/* <div className="search-bar">
        <form onSubmit={handleSearchBar}>
          <input
            className="form-control"
            type="text"
            placeholder="Search your Movies or Shows"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div> */}
      <div className="user">
        <div className="user-image">
          <Link to={""}>
            <img src={user} alt="user" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
