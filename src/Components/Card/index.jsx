import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";
import { AiFillWarning } from "react-icons/ai";

function Card(props) {
  return (
    <>
      <div className="card">
        <h1>#{props.i+1}</h1>
        <div className="image-container">
        <img className="img" src="" alt={props.user.name} />
        </div>

        <h2>{props.user.name}</h2>
        <div>
          <FaUserAlt color="brown" fontSize="30px" margin="10px" />
          <span>{props.user.name}</span>
        </div>
        <div>
          <RiStarSFill color="brown" fontSize="30px" />
          <span> {props.user.size} Stars</span>
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
