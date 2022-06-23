import React, {useState} from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import BasicFields from "./ICSApplicationForm_Farmer/BasicFields";
import Declaration from "./ICSApplicationForm_Farmer/Declaration";
import TableFields from "./ICSApplicationForm_Farmer/TableFields";
import NotesComp from "./ICSApplicationForm_Farmer/NotesComp";

const StepBarComp = () => {
  
  const handleonSubmit = () =>{
    console.log()
  }
  return (
    <div className="container py-2">
      <label className="text-xl font-semibold">{`ICS APPLICATION FORM (for use by the farmer)`}</label>
      <StepProgressBar
      onSubmit={handleonSubmit}
        startingStep={0}
        steps={[
          {
            label: "Basic Fields",
            name: "Basic Fields",
            content: <BasicFields />,
          },
          {
            label: "Image-Acquisition",
            name: "Image-Acquisition",
            content: <TableFields />,
          },
          {
            label: "Notes",
            name: "Notes",
            content: <NotesComp/>,
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
