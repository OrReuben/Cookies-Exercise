import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    Cookies.set("myCookie", "test", {sameSite:'lax'});
  }, []);

  const handleSendCookie = async () => {
    await axios
      .get("http://localhost:3001/api/data", { withCredentials: true })
      .then((data) => console.log(data));
  };

  const handleGetCookie = async () => {
    await axios
      .get("http://localhost:3001/api/setcookie", { withCredentials: true })
      .then((data) => console.log(data));
  };

  useEffect(() => {
    const checkIfHttpOnlyCookieExists = async () => {
      try {
        await axios
          .get("http://localhost:3001/api/getcookie", { withCredentials: true })
          .then((data) => console.log(data));
        // alert("Hurray!");
      } catch (err) {
        console.log(err.response.data);
      }
    };
    checkIfHttpOnlyCookieExists();
  }, []);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleSendCookie}>Send Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleGetCookie}>Click me!</button>
    </div>
  );
}

export default App;
