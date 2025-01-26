import React from 'react'

export default function ShowTopNote({message, date}) {

  return (
    <div className="noteTop flex">
      <div className="StartMessage">
        <div>
          <span id="message">{message}</span>
        </div>
        <div>
          <span id="date">Date: {date}</span>
        </div>
      </div>
    </div>
  );
}
