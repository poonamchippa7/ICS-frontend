import React, { useState } from "react";

const BasicFields = () => {
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
    <div className="border-2 border-black m-16 my-24! max-w-4xl py-4 px-2 ">
      <label className="font-semibold text-xl">{`Basic Fields`}</label>
      <form onSubmit={handleAddFormSubmit} className="w-full my-[2rem]">
        <div className=" flex">
          <div className="flex flex-col flex-1">
            <div className="w-full md:mb-0 flex items-center">
              <label className="text-start text-lg">
                Farmer Name :
              </label>
              <input
                className="appearance-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>

            <div className="w-full md:mb-0 flex items-center ">
              <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2">
                Village Name :
              </label>
              <input
                className="appearance-none py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>

            <div className="w-full md:mb-0 flex items-center ">
              <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2">
                Farmer Address and Contact Details :
              </label>
              <input
                className="appearance-none  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                values={values.description}
                onChange={handleAddFormChange}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-wrap -mx-3 mb-6 flex items-center wrap-text ">
              <div className="w-full px-3 mb-6 md:mb-0 flex items-center wrap-text">
                <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2">
                  Farmer Code :
                </label>
                <input
                  style={{ width: "50%" }}
                  className="appearance-none wrap-text py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="fullName"
                  required="required"
                  placeholder="Fill by ICS Office"
                  values={values.description}
                  onChange={handleAddFormChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 flex items-center">
          <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2">
            Farm (No. of fields including conventional plots) :
          </label>
          <input
            className="appearance-none  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            values={values.description}
            onChange={handleAddFormChange}
          />
        </div>
      </form>
    </div>
  );
};

export default BasicFields;
