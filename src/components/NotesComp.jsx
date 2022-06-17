import React, { useState } from "react";
import './NotesComp.css';

export default function NotesComp() {
  const [values, setValues] = useState({
    fullName: " ",
    email: " ",
    description: " ",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };
  const handleAddFormSubmit = () => {};
  return (
    <div className="Container">
      <div className="situation" >
        <div className="Notes"  >
        <label  >
        Notes on field situation in organic crop
        </label>
        </div>
           
            <div className="Owners">
              <label className="MultipleOwners">
              Organic holding in field with multiple owners, no clear borders
              </label>
              <input
                className="Ans"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>

            <div className="Owners">
              <label className="Allowners">
              All owners are organic
              </label>
              <input
                className="Ans"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>

            <div className="Owners">
              <label className="Field">

              Field is clearly separated from other fields by</label>
              <input
                className="Ans"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>
            <div className="Owners">
              <label className="Other">
              Other: (describe)
              </label>
              <input
                className="Ans"
                id="grid-password"
                type="text"
                name="description"
                required="required"
                placeholder="Enter the role..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>
          </div>
       
      </div>
  

    // <div className='flex justify-center items-center h-max flex-col bg-yellow-100'>
    //     <label class="">ICS APPLICATION FORM for use by the farmer </label>
    //   <form>

    //   </form>

    // </div>
  );
}
