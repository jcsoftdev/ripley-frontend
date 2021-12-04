import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import Average from "../Average/Average";

import User from "../User";
import { UserListI } from "./types";

import "./UserList.css";

const API_BASE = "/api";

const UserList = () => {
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}${API_BASE}/users`);
      const data: UserListI = await res.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const getAverage = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API}${API_BASE}/user/average`
      );
      const data: { average: number } = await res.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  const { isLoading, error, data } = useQuery("users", getUsers);
  const { error: errorAverage, data: average } = useQuery(
    "average",
    getAverage
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch</p>;

  return (
    <>
      {!errorAverage && <Average average={average?.average} />}
      <div className="user-list">
        {data?.map((user) => (
          <User
            key={`${user.id}-${user.name}`}
            {...user}
            onClick={() => {
              navigate(`/user/${user.id}`, {
                state: {
                  modalOpen: true,
                  data: user
                },
              });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default UserList;
