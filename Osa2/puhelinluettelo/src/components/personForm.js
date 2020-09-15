import React from "react";

const personForm = (props) => {
  return (
    <div>
      <h1>Add a new</h1>
      <form onSubmit={props.addPerson}>
        <div>
          name <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number{" "}
          <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default personForm;
