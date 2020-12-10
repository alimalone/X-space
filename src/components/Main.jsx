import React, { useState, useEffect } from "react";
import HttpClient from "../HttpClient";
import "../css/Main.scss";

export default function Main() {
  const [apod, setApod] = useState({});
  const [open, setOpen] = useState(false);
  const [add, minus] = useState(true);

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div className="main">
      {apod && (
        <div className="imgHead">
          
          <img src={apod.url} alt="APOD" width="500" height="auto" />

          <div className="info">
            <button
              className="add"
              onClick={() => {
                setOpen(!open);
                minus(!add);
              }}
            >
              {add ? "*" : "-"}
            </button>
            {open && (
              <p>
                {apod.title} - <i>{apod.date}</i>
                {apod.explanation}
              </p>
            )}</div>
          
        </div>
      )}
    </div>
  );
}

/*<hr />
{JSON.stringify(apod, null, 2)}*/
