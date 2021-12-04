
import { UserI } from "../UserList/types";
import "./User.css";
const User = ({ id, age, last_name, name, onClick}: UserI) => {

  return (
    
    <div className="user" onClick={onClick}>
      <p className="user-name">{name.split(' ')[0]}</p>
      <p className="user-born">{age}</p>
      <p className="user-last_name">{last_name.split(' ')[0]}</p>
    </div>
  );
};

export default User;
