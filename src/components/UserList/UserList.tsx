import { useQuery } from "react-query";

import User from "../User";
import { UserListI } from "./types";

import './UserList.css'

const API_BASE = "/api";

const UserList = () => {
  const getUsers = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}${API_BASE}/users`);
      const data: UserListI = await res.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  const { isLoading, error, data } = useQuery("repoData", getUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch</p>;

  return <div className='user-list'>
    {data?.map((user)=> (
      <User key={`${user.id}-${user.name}`} {...user} onClick={()=>console.log(user)} />
    ))}
  </div>;
};

export default UserList;
