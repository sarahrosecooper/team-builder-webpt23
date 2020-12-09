import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormLayout from "./components/FormLayout";




function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sarah R. Cooper",
      email: "sarahrosecooperx@gmail.com",
      role: "web developer",
    },
  ]);

  const addNewCard = (teamMember) => {
    const newCard = {
      id: Date.now(), // gives you a unique id
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };

    setTeamMembers([...teamMembers, newCard]);
  };

  return (
    <div>
      <div className="App">
        <h1>the workplace app 📝</h1>
        <div>
          <Form teamMembers={teamMembers} />
        </div>
        <FormLayout addNewCard={addNewCard} />
      </div>
    </div>
  );
}

export default App;