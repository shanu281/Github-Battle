import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";
import { AiFillWarning } from "react-icons/ai";

function Card(props) {
  return (
    <>
      <div className="card">
        <h1>#{props.i + 1}</h1>
        <div className="image-container">
          <img
            className="img"
            src={props.user.owner.avatar_url}
            alt={props.user.name}
          />
        </div>

        <a className="login" href={props.user.html_url}>
          <h2>{props.user.owner.login}</h2>
        </a>
        <div>
          <FaUserAlt color="brown" fontSize="30px" margin="10px"  />
          <span>
            {" "}
            <a className="login" href={props.user.html_url}>
              {props.user.owner.login}
            </a>
          </span>
        </div>
        <div>
          <RiStarSFill color="brown" fontSize="30px" />
          <span> {props.user.stargazers_count
} Stars</span>
        </div>
        <div>
          <CgGitFork color="skyblue" fontSize="30px" />
          <span> {props.user.forks} Forks</span>
        </div>
        <div>
          <AiFillWarning color="red" fontSize="30px" />
          <span> {props.user.open_issues} Open Issue</span>
        </div>
      </div>
    </>
  );
}
export default Card;
