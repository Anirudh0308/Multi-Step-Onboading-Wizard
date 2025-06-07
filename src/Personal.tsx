import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;

};

type PersonalProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const PersonalForm = ({
  firstName,
  lastName,
  email,

  updateFields,
}: PersonalProps) => {
  return (
    <FormWrapper title="Personal Info">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label> Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      
    </FormWrapper>

    

  );
};

export default PersonalForm;
