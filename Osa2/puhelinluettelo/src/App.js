import React, { useState, useEffect } from "react";
import personServices from "./Services/personServices";
import ShowPerson from "./components/showPerson";
import PersonForm from "./components/personForm";
import Filter from "./components/filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    personServices.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const sameName = persons.some((item) => item.name === newName);

    if (sameName) {
      if (window.confirm(`${newName} on jo lisätty, vaihdetaanko numeroa?`)) {
        let person = persons.find((x) => x.name === newName);
        console.log(person.id);
        changeNumber(person.id, newNumber);
      }
    } else {
      personServices.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${newName}`);
        setError(false);
      });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  const changeNumber = (id, newNumber) => {
    console.log("painettu");
    const person = persons.find((n) => n.id === id);
    const changedPerson = { ...person, number: newNumber };

    personServices
      .update(changedPerson.id, changedPerson)
      .then((response) => {
        setPersons(
          persons.map((item) => (item.id !== person.id ? item : response.data))
        );
        setMessage(`information of ${person.name} has been changed`);
      })
      .catch((error) => {
        setMessage(
          `information of ${person.name} has already been removed grom the server`
        );
        setError(true);
      });
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleDelete = (deletePerson) => {
    if (window.confirm(`poistetaanko ${deletePerson.name}?`))
      personServices.del(deletePerson.id).then(() => {
        setPersons(persons.filter((person) => person.id !== deletePerson.id));
      });
    setMessage(`${deletePerson.name} deleted from the server`);
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  const foundPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const Notification = ({ message, isError }) => {
    if (message === null) {
      return null;
    }
    return <div className={error ? "error" : "succes"}>{message}</div>;
  };

  return (
    <div>
      <Notification message={message} />
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <ul>
        {foundPersons.map((item, i) => (
          <ShowPerson key={i} person={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default App;

//cp -r build ../../../fullstack-hy-2020-osa3-/backend