import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  Company: string;
  Industry: string;
  size: string;
  
};

type BusinessProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const BusinessForm = ({
  Company,
  Industry,
  size,
 
  updateFields,
}: BusinessProps) => {
  return (
    <FormWrapper title="Business Info">
      <label>Company Name</label>
      <input
        autoFocus
        required
        type="text"
        value={Company}
        onChange={(e) => updateFields({ Company: e.target.value })}
      />
      <label>Industry</label>
      <input
        required
        type="text"
        value={Industry}
        onChange={(e) => updateFields({ Industry: e.target.value })}
      />
      <label>Size</label>
      <input
        required
        type="number"
        value={size}
        onChange={(e) => updateFields({ size: e.target.value })}
      />
      
    </FormWrapper>
  );
};

export default BusinessForm;
