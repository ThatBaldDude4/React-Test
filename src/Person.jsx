import { useState } from 'react';

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />
      <p>Full Name: {firstName + " " + lastName}</p>
    </>
  );
}

function Input({firstName, lastName, setFirstName, setLastName}) {
    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }

    return (
        <>
        <label>
            First Name:
            <input value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        </label>
        <label>
            Last Name:
            <input value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        </label>
        </>
        
    )
}

export default Person