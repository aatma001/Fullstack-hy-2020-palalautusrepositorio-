import React from "react";

const showPerson = ({person, handleDelete}) => {

  return (
  
    <li>
      {person.name} {person.number} 
      <button onClick={() => handleDelete(person)}>Poista</button>
    </li>
  )
};

export default showPerson;
