import React from 'react'
import RoundedBorderCard from './RoundedBorderCard'
import { Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar2'
const formlist = [
    "ICS APPLCATION FORM (for use by the farmer)",
    "FARMER CONTRACT WITH ICS",
    "FARM DAIRY (for ICS)",
    "FORMAT FOR SANCTIONS BY ICS",
    "INTERNAL INSPECTION CHECKLIST",
    "APPLICATION FORMAT FOR EXIT OF FARMER FORM ICS",
    "EXIT APPROVAL FORMAT FOR A MEMBER FARMER FROM A GROWER GROUP"
]
const AllRequiredForms = () => {
  const navigate = useNavigate() 
  const handleRedirection = (title) => {
    if(title === "ICS APPLCATION FORM (for use by the farmer)"){
      navigate('/icsfarmApplication')
    }else if(title === "FARMER CONTRACT WITH ICS"){
      navigate('/farmerContract')
    }
  }
  const location = useLocation()
  return (
  <>
  <Navbar/>
  <div className='sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto py-2 space-y-4 my-4 px-1'>
    <div className='underline text-xl font-medium mb-5 border-black'>{`${location.state.user.name} Forms for Approval`}</div>
    <section className='flex flex-col gap-y-4'>
    {formlist.map((title)=>{
        return(

            <button key={title} onClick={()=>handleRedirection(title)}><RoundedBorderCard customStyles={"text-left"}>{title}</RoundedBorderCard></button>
        )
    })}
    </section>
    
</div>
</>
  )
}

export default AllRequiredForms