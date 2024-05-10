import avatar1 from "/images/Netflix-avatar.png";
import avatar2 from "/images/Netflix-avatar2.png";
import avatar3 from "/images/Netflix-avatar3.png";
import avatar4 from "/images/Netflix-avatar4.png";
import "../styles/Profiles.css";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <>
      <div className="profile-container">
        <h1>¿Quién está viendo ahora?</h1>
        <ul className="choose-profile">
          <li >
            <Link to="/home">
              <img className="avatar" src={avatar1} alt="" />
            </Link>
            <p>Mariano</p>
          </li>
          <li >
            <Link to="/home">
              <img className="avatar" src={avatar2} alt="" />
            </Link>
            <p>Adrián</p>
          </li>
          <li>
            <Link to="/home">
              <img className="avatar" src={avatar3} alt="" />
            </Link>
            <p>Verónica</p>
          </li> 
          <li >
            <Link to="/home">
              <img className="avatar" src={avatar4} alt="" />
            </Link>
            <p>Ana</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profiles;