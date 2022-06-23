import React,{useState, useEffect} from 'react'
import RoundedBorderCard from '../allRedquiredForms/RoundedBorderCard'
import BasicFields from './BasicFields';
import "./ICSFarmApplication.scss"
import Accordion from 'react-bootstrap/Accordion'
import NotesComp from './NotesComp';
import Navbar from '../Navbar2';
import Declaration from './Declaration';
const ICSFarmApplication = () => {

    const [values, setValues] = useState({
        Farmer_Name: "",
        Village_Name: "",
        Farmer_Address_and_Contact_Details: "",
        Farmer_Code: "",
        Farm_Number_of_fields_including_conventional_plots: "",
        Organic_holding_in_field_with_multiple_owners_no_clear_borders: "",
        All_owners_are_organic: "",
        Field_is_clearly_separated_from_other_fields_by: "",
        Other_describe: "",
        Farmer_date: "",
        Farmer_place: "",
        ICSManager_date:"",
        ICSManager_place:"",
      });
      const handleAddFormChange = (event) => {
        event.preventDefault();
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
        console.log(values)
      };
      const handleAddFormSubmit = () => {};
 
      
  return (
    <>
    <Navbar/>
    <div className="sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto py-2 space-y-4 my-4 px-1">
      <label className="text-2xl font-semibold">{`ICS APPLICATION FORM (for use by the farmer)`}</label>
      <Accordion defaultActiveKey="0" alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header className='!text-2xl !font-medium' as="h1">Basic Fields</Accordion.Header>
    <Accordion.Body>
      <BasicFields handleAddFormChange={handleAddFormChange} values={values} />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Notes on field situation in organic crop</Accordion.Header>
    <Accordion.Body>
    <NotesComp handleAddFormChange={handleAddFormChange} values={values} />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Declaration of the farmer</Accordion.Header>
    <Accordion.Body>
    <Declaration handleAddFormChange={handleAddFormChange} values={values} />
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
    </div>
    </>
  )
}

export default ICSFarmApplication