import { FormEvent, useState } from "react";
import AddressForm from "./Business";
import UserForm from "./Personal";
import { useMultiStepForm } from "./useMultistepForm";

type FormData = {
  firstName: string;
  lastName: string;
   email: string;
  Company: string;
  Industry: string;
  size: string; 
 
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  Company: "",
  Industry: "",
  size: "",
  email: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) return next();
    alert("Account created successfully");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "#393939",
        border: "1px solid #404245",
        color: "#c4c8cc",
        padding: "2rem",
        borderRadius: "0.5rem",
        maxWidth: "600px",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
