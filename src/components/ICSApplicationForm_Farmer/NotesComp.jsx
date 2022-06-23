import React, { useState } from "react";
import "./NotesComp.css";

const NotesComp=({handleAddFormChange, values})=> {
  // const [values, setValues] = useState({
  //   Organic_holding_in_field_with_multiple_owners_no_clear_borders: "",
  //   All_owners_are_organic: "",
  //   Field_is_clearly_separated_from_other_fields_by: "",
  //   Other_describe: "",
  // });
  // const handleAddFormChange = (event) => {
  //   event.preventDefault();
  //   setValues((values) => ({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   }));
  //   console.log(values);
  // };
  return (
    <>
    {/* <label className='headingclass'>Notes on field situation in organic crop</label> */}
      <section className='space-y-4'>
      <div className="flex flex-1 !justify-between flex-wrap items-center gap-2">
          <label className="labelclass">
            Organic holding in field with multiple owners, no clear borders
          </label>
          <input
            className="inputclass !flex-none"
            type="text"
            name="Organic_holding_in_field_with_multiple_owners_no_clear_borders"
            required="required"
            placeholder="Yes or No."
            values={values.description}
            onChange={handleAddFormChange}
          />
        </div>

        <div className="flex flex-1 justify-between flex-wrap items-center">
          <label className="labelclass">All owners are organic</label>
          <input
            className="inputclass !flex-none"
            type="text"
            name="All_owners_are_organic"
            required="required"
            placeholder="Yes or No"
            values={values.description}
            onChange={handleAddFormChange}
          />
        </div>

        <div className="flex flex-1 justify-between flex-wrap items-center">
          <label className="labelclass">
            Field is clearly separated from other fields by
          </label>
          <input
            className="inputclass !flex-none"
            type="text"
            name="Field_is_clearly_separated_from_other_fields_by"
            required="required"
            placeholder="Yes or No"
            values={values.description}
            onChange={handleAddFormChange}
          />
        </div>

        <div className="flex flex-1 justify-between flex-wrap items-center">
          <label className="labelclass">Other: (describe)</label>
          <textarea
            className="inputclass !flex-none !p-4"
            type="text"
            name="Other_describe"
            required="required"
            placeholder="Other_describe"
            values={values.description}
            onChange={handleAddFormChange}
          />
        </div>
      </section>
    </>
  );
}
export default NotesComp;
