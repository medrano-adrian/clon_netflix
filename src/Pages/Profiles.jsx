import avatar1 from "/images/Netflix-avatar.png";
import avatar2 from "/images/Netflix-avatar2.png";
import avatar3 from "/images/Netflix-avatar3.png";
import avatar4 from "/images/Netflix-avatar4.png";
import "../styles/Profiles.css";

const Profiles = () => {
  return (
    <>
      <div className="profile-container">
        <h1>¿Quién está viendo ahora?</h1>
        <ul className="choose-profile">
          <li >
            <a href="/home">
              <img className="avatar" src={avatar1} alt="" />
            </a>
            <p>Mariano</p>
          </li>
          <li >
            <a href="/home" >
              <img className="avatar" src={avatar2} alt="" />
            </a>
            <p>Adrián</p>
          </li>
          <li >
            <a href="/home" >
              <img className="avatar" src={avatar3} alt="" />
            </a>
            <p>Verónica</p>
          </li>
          <li >
            <a href="/home">
              <img className="avatar" src={avatar4} alt="" />
            </a>
            <p>Ana</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profiles;