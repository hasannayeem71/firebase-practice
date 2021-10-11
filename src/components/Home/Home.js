import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is Home</h1>
      <p>hello {user && user.displayName}</p>
    </div>
  );
};

export default Home;
