import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

import "./MainPage.css";

function MainPage() {
  const [users, setUsers] = useState([]);
  const [helps, setHelps] = useState([]);
  let [counter, setCounter] = useState();

  const { username } = useParams();

  const ws = useRef();

  const sendCounter = () => {
    ws.current.send(
      JSON.stringify({
        counter: counter,
        type: "userClicked",
      })
    );
  };


  useEffect(() => {
    //Example: ws://localhost:8080/?username=tiburcio
    const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/?username=${username}`;
    ws.current = new WebSocket(SERVER_URL);

    ws.current.onopen = () => {
      console.log("Connection opened");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setUsers(data.users);
      setCounter(data.counter);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, [username]);


  return (
    <Layout>
      <div>
        <h1>Clicks totales: {counter}</h1>
        <button onClick={sendCounter}>Contador</button>
        
        {users.map((user, index) => {
          if (user.username === username) return <h1>Usuario: {user.username}</h1>;
          return <h1>Usuario: {user.username}</h1>;
        })}
      </div>
    </Layout>
  );
}

export default MainPage;
