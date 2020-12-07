import React, { useState, useEffect } from "react";
import HttpClient from "../HttpClient";
import "../css/Main.scss";

export default function Main() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div className="main">
      
      
      {apod && (
        <div>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="673" height="auto" />
          <p>{apod.explanation}</p>

          <hr />
          {JSON.stringify(apod, null, 2)}
        </div>
      )}
    </div>
  );
}
