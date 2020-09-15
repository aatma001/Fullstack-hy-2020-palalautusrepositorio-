import React from "react";

const showPerson = ({ person, handleDelete }) => {

  return (

    <li>
      {person.name} {person.number}
      <button onClick={() => handleDelete(person)}>Delete</button>
    </li>
  )
};

export default showPerson;
