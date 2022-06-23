import React , { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import "../Styles/Contract.css";

const Contract = () => {

  return (
   <div className='body'>
   <div className='container'>
   <h1> FARMERS CONTRACT WITH ICS</h1>
   <h5> Name of the ICS <br/>and<br/>Farmers name & Code No.<br/> </h5> 
   <div className='rules'>
    <h6>The ICS shall :</h6> 
    1. Be responsible for co-ordinating the project and organic certification from an 
    accredited organic certification body.<br/>
    2. Advise farmers on the organic farming methods and organize farmer training 
    programmes<br/>
    3. Conduct the internal inspections and approval of organic farmers <br/>
    4. Buy the organic crop at the prevailing market price plus any possible organic 
    premium (depending on market). The ICS shall make the payments within one 
    week of the purchase of the products from the farmer.<br/>
    5. Entertain the complaints and appeals of the farmers and do justification within 
    reasonable time.<br/>
    <>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I have read and agreed all terms & conditions " />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>ICS Signature</Form.Label>
    <Form.Control placeholder="Enter sign"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>ICS Name</Form.Label>
    <Form.Control placeholder="Enter Farmer's Name "/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Stamp</Form.Label>
    <Form.Control placeholder="stamp "/>
  </Form.Group>
  <Form.Group className="form-group col-md-6 d-flex justify-content-between">
   <Form.Label for="">Date </Form.Label>
   <Form.Control className="w-50 my-2" type="date"  placeholder="Enter Date "required="required"/>
  </Form.Group>
 </>
    <br/>
    <h6>The farmer shall:</h6>
  
    1. Undertake organic farming as per the organic standards outlined in the Internal 
    Organic Standard as well as the Internal Control System (ICS).<br/>
    2. Not use pesticides, herbicides or synthetic fertilisers on any crop within the 
    certified organic fields.<br/>
    3. Attend all the training programmes organized by the Internal Control System.<br/>
    4. Maintain the farm records in the required format.<br/>
    5. Fulfil the conditions enforced by the internal control system and the accredited
    certification body.<br/>
    6. Endeavour to maintain and improve the ecosystem by not cutting trees and 
    burning organic material and littering plastic wastes unnecessarily<br/>
    7. Sell the certified products to the Internal Control System only. <br/>
    8. In case of any violation of the organic standards in the project, the same shall be 
    reported to the ICS.
     171<br/>
    9. Accept the sanctions prescribed by the ICS in case of violations of the internal 
    standards by the farmer.<br/>
    10. Shall allow inspections by persons authorised by ICS and the inspector of the 
    accredited Certification Body and give access to the fields, stores and documents.<br/>
   
    <>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I have read and agreed all terms & conditions " />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Farmers Signature</Form.Label>
    <Form.Control placeholder="Enter sign"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Farmers Name</Form.Label>
    <Form.Control placeholder="Enter Farmer's Name "/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Place</Form.Label>
    <Form.Control placeholder="Enter Place Name "/>
  </Form.Group>
  <Form.Group className=" col-md-6 d-flex justify-content-between">
   <Form.Label for="">Date </Form.Label>
   <Form.Control className="w-50 " type="date"  placeholder="Enter Date "required="required"/>
  </Form.Group>
 </>
 
 <Button variant="info"> Submit </Button>
 </div>
    </div>
    </div>
  )
}

export default Contract