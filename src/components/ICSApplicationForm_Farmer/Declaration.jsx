import React from "react";

const Declaration = ({handleAddFromChange, values}) => {
  return (
    <>
      <label className="font-semibold text-xl">Declaration of the farmer</label>
      <div className="flex flex-col w-full my-[2rem] text-start text-lg">
        <label className="flex">
          {`I, the farmer, declare that the information provided above is correct
        and that I have understood the conditions for Organic Production and
        ICS rules and I agree to sign the ICS contract.`}
        </label>
        <div className="flex flex-row gap-4 my-4 flex-wrap">
          <div className="flex flex-col flex-1 gap-y-2">
            <div className="flex items-center flex-wrap">
              <label className="labelclass">Date:</label>
              <input className="inputclass" name="Farmer_date" values={values.Farmer_date} type="date"/>
            </div>
            <div className="flex items-center flex-wrap">
              <label className="labelclass">Place:</label>
              <input className="inputclass" type="text" name="Farmer_place" placeholder="Place" values={values.Farmer_place}/>
            </div>
          </div>
          <div className="flex flex-row flex-wrap flex-1 gap-y-2">
            <label className="labelclass">Siganture of farmer:</label>
            <input className="inputclass" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[1rem] text-start text-lg">
        <label className="flex">
          I, the ICS manager, confirm that the above mentioned information is
          correct.
        </label>
        <div className="flex flex-row gap-4 my-4 flex-wrap">
          <div className="flex flex-col flex-1 gap-y-2">
            <div className="flex items-center flex-wrap">
              <label className="labelclass" >Date:</label>
              <input className="inputclass" name="ICSManager_date" values={values.ICSManager_date} type="date"/>
            </div>
            <div className="flex items-center flex-wrap">
              <label className="labelclass">Place:</label>
              <input className="inputclass" name="ICSManager_place" placeholder="Place" values={values.ICSManager_place}/>
            </div>
          </div>
          <div className="flex flex-row flex-wrap flex-1 gap-y-2">
            <label className="labelclass">
              Siganture of farmer ICS manager for acceptance:
            </label>
            <input className="inputclass" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Declaration;
