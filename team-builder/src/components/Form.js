import React from "react";

const Form = (props) => {
  return (
    <div className="note-list">
      {props.teamMembers.map((teamMember) => (
        <div className="note" key={teamMember.id}>
          <h2>name: {teamMember.name}</h2>
          <p>e:mail: {teamMember.email}</p>
          <p>role: {teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};
export default Form;