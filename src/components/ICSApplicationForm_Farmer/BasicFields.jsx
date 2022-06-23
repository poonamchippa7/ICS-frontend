import React, { useState } from "react";
import RoundedBorderCard from "../allRedquiredForms/RoundedBorderCard";
const styles = [
  "text-lg font-semibold flex flex-1 whitespace-nowrap min-w-min",
];
const BasicFields = ({handleAddFormChange, values}) => {
  // const [values, setValues] = useState({
  //   Farmer_Name: "",
  //   Village_Name: "",
  //   Farmer_Address_and_Contact_Details: "",
  //   Farmer_Code: "",
  //   Farm_Number_of_fields_including_conventional_plots: "",
  // });
  // const handleAddFormChange = (event) => {
  //   event.preventDefault();
  //   setValues((values) => ({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  const handleAddFormSubmit = ({}) => {};
  return (
    <>
    {/* <label className="headingclass">{`Basic Fields`}</label> */}
          <form
            className="w-full my-[2rem] space-y-4"
          >
            <div className=" flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 gap-y-4">
                <section className="flex items-center flex-wrap">
                  <label className={`labelclass`}>Farmer Name :</label>
                  <input
                    className="inputclass"
                    type="text"
                    name="Farmer_Name"
                    required="required"
                    placeholder="Farmer's name..."
                    values={values.Farmer_Name}
                    onChange={handleAddFormChange}
                  />
                </section>

                <section className="flex items-center flex-wrap">
                  <label className={`labelclass`}>Village Name :</label>
                  <input
                    className="inputclass"
                    type="text"
                    name="Village_Name"
                    required="required"
                    placeholder="Village name..."
                    values={values.Village_Name}
                    onChange={handleAddFormChange}
                  />
                </section>

                
              </div>

              <div className="flex flex-col flex-1 lg:flex-nowrap space-y-4">
                <section className='flex items-center flex-wrap'>
                <label className="labelclass">Farmer Code :</label>
                <input
                  className="inputclass"
                  type="text"
                  name="Farmer_Code"
                  required="required"
                  placeholder="To be Fill by ICS Office"
                  values={values.Farmer_Code}
                  onChange={handleAddFormChange}
                />
                </section>
                <section className="flex items-center flex-wrap">
                  <label className={`labelclass !whitespace-normal`}>
                    Farmer Address and Contact Details :
                  </label>
                  <textarea
                    className="inputclass"
                    type="textarea"
                    name="Farmer_Address_and_Contact_Details"
                    required="required"
                    placeholder="Farmer_Address_and_Contact_Details"
                    values={values.Farmer_Address_and_Contact_Details}
                    onChange={handleAddFormChange}
                  />
                </section>
                
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <label className="labelclass">
                Farm (No. of fields including conventional plots) :
              </label>
              <input
                className="inputclass"
                type="text"
                name="Farm_Number_of_fields_including_conventional_plots"
                required="required"
                placeholder="Farm_Number_of_fields_including_conventional_plots"
                values={
                  values.Farm_Number_of_fields_including_conventional_plots
                }
                onChange={handleAddFormChange}
              />
            </div>
          </form>
    </>
  );
};

export default BasicFields;
