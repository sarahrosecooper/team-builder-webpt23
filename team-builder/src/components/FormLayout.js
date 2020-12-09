import React, { useState } from "react";

const FormLayout = (props) => {
  // console.log("this is our props",props);
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    console.log("event", event.target.value);
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  // will use onSubmit synthetic event
  const submitForm = (event) => {
    event.preventDefault();
    props.addNewCard(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          onChange={handleChanges}
          type="text"
          placeholder="name please!"
          value={teamMember.name}
          name="name"
        />
        <label htmlFor="note">e-mail:</label>
        <input
          id="note"
          type="email"
          name="email"
          placeholder="add your email here please."
          value={teamMember.email}
          onChange={handleChanges}
        />
        <label htmlFor="note">role: </label>
        <textarea
          id="role"
          name="role"
          placeholder="add your role here please."
          value={teamMember.role}
          onChange={handleChanges}
        />
        <button type="submit">submit work card</button>
      </form>
    </div>
  );
};

export default FormLayout;