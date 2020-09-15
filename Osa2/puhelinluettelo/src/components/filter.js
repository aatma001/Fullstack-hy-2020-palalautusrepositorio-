import React from "react";

const filter = ({ handleFilterChange }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <form>
          filter shown with <input onChange={handleFilterChange}></input>
        </form>
      </div>
    </div>
  );
};

export default filter;
