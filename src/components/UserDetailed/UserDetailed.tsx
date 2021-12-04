import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./UserDetailed.css";

const UserDetailed = () => {
  const location = useLocation();

  const { modalOpen, data } = location.state;

  return modalOpen ? (
    <div className="modal-container">
      <div className="modal">
        <h1>
          Nombre: {data.name} {data.last_name}
        </h1>
        <p>Edad: {data.age} años.</p>
        <p>Fecha de Nacimiento: {data.born}.</p>
          <Link to="/" className="back">
            Volver
          </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserDetailed;
