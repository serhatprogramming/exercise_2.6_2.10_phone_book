import React from "react";

const Persons = ({ persons, keyword }) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(keyword))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
