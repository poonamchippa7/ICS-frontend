import React from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import BasicFields from "./BasicFields";
import Declaration from "./Declaration";

const StepBarComp = () => {
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="w-[80%] m-auto p-2">
      <label className="text-xl font-semibold">{`ICS APPLICATION FORM (for use by the farmer)`}</label>
      <StepProgressBar
      onSubmit={()=>{}}
        startingStep={0}
        steps={[
          {
            label: "Briefing",
            name: "Briefing",
            content: <BasicFields />,
          },
          {
            label: "Image-Acquisition",
            name: "Image-Acquisition",
            content: step2Content,
          },
          {
            label: "Image-processing",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator,
          },
          {
            label: "Declaration",
            name: "Declaration",
            content: <Declaration />,
          },
        ]}
      />
    </div>
  );
};

export default StepBarComp;
