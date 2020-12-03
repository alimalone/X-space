import React from "react";

import { Link } from "react-router-dom";

export default function Button() {
  return (
    
        <div className="link">
        <Link to={`/main`}>
          <button className="main">Picture of the day</button>
        </Link>
        </div>
      
   
  );
}