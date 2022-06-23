import React, { useState } from "react";
import { ListGroup, Card, Button, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RoundedBorderCard from "../allRedquiredForms/RoundedBorderCard";
import MyVerticallyCenteredModal from '../ModalBootstrap'
import Navbar from "../Navbar2";
const listofnames = [
  {"name": "kashal",
  "email": "bqwenzen@gmail.com",
  "phone": "8425252516",
  "address": "kushal address ",
  "city": "dombivali ",
  "state": "maharashtra ",
  "zipcode": "421302",
  "approved":"false"
},
  {"name": "shivam",
  "email": "shivam@gmail.com",
  "phone": "7387389282",
  "address": "pandt road frest villa",
  "city": "andheri",
  "state": "maharashtra",
  "zipcode": "272682",
  "approved":"false"
},
  {        "name": "John",
  "email": "john@gmail.com",
  "phone": "2827389282",
  "address": "shevantram road anand rao colony",
  "city": "andheri",
  "state": "maharashtra",
  "zipcode": "272682",
  "approved":"false"
},
  {        "name": "yuvraj",
  "email": "yuvraj@gmail.com",
  "phone": "7897397792",
  "address": "vijay wada road near hanuman mandir",
  "city": "atrawal",
  "state": "maharashtra",
  "zipcode": "272682",
  "approved":"false"
},
  {        "name": "Mohan",
  "email": "mohan@gmail.com",
  "phone": "8297397792",
  "address": "shevantram road anand rao colony",
  "city": "bhusaval",
  "state": "maharashtra",
  "zipcode": "272682",
  "approved":"true"
},
];


const ICSAdminComp = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modaldata, setmodalData] = useState("")
  const [searchTerm, setsearchTerm] = useState("");
  const [existingUserList, setexistingUserList] = useState([])
  const navigate = useNavigate() 
  const handleModalState = (n) => {
    const Userdata = listofnames.filter((val) => {if(val.name.toLowerCase() === n){return val}})
    setmodalData([Userdata])
   setModalShow(true) 
  }
  const handlelistchange = data => {
    // let arr = existingUserList.concat({})
    // console.log(arr)
     setexistingUserList([...existingUserList, data[0]]);
    // setexistingUserList(arr)
    // console.log(existingUserList)
    
 setModalShow(false)
  }
  const handleNavigation = existingUser => {
    console.log(existingUser)
    navigate('/allforms', {state: {user: existingUser}})
  }
  return (<>
  <Navbar/>
  <div className="flex flex-col md:flex-row sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto h-screen space-y-8 md:space-x-5 lg:space-x-8 md:space-y-0 py-8">
      <RoundedBorderCard customStyles={"shadow-lg flex-1 overflow-y-auto"}>
        <section className="mb-4 gap-2 w-full">
        <h5>New Users</h5>
        <input
        className="text-base p-1 px-2 w-full rounded-md md:text-lg border-2 focus-visible:"
          type={"text"}
          placeholder="Search..."
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />
        </section>
        
        <ListGroup variant="flush" className="space-y-3">
          {listofnames
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((n, i) => {
              return (
                <ListGroup.Item key={i} className="text-lg font-bold">
                  {/* <Link to={"/"} className="text-black no-underline">
                    
                  </Link> */}
                  <Card>
                      <Card.Header as="h5">{n.name}</Card.Header>
                      <Card.Body className="flex justify-between">
                        <CardGroup className="flex !flex-col">
                          <Card.Text className="!text-sm font-medium"><span>{`Phone No. `}</span>{n.phone}</Card.Text>
                          <Card.Text className="!text-sm font-medium"><span>{`Email ID: `}</span>
                            {n.email}
                          </Card.Text>
                        </CardGroup>

                        <Button className="!h-max" onClick={() => handleModalState(n.name)}>Details</Button>
                      </Card.Body>
                    </Card>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </RoundedBorderCard>

      <RoundedBorderCard customStyles={"shadow-lg overflow-y-auto flex-1"}>
        <section className="mb-4 gap-2 w-full">
        <h5>Existing Users</h5>
        <input
        className="text-base p-1 px-2 w-full rounded-md md:text-lg border-2 focus-visible:"
          type={"text"}
          placeholder="Search..."
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />
        </section>
        
        <ListGroup variant="flush" className="space-y-3">
          {existingUserList
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((existingUser, i) => {
              return (
                <ListGroup.Item key={i} className="text-lg font-bold">
                  {/* <Link to={"/"} className="text-black no-underline">
                    
                  </Link> */}
                  <Card>
                      <Card.Header as="h5">{existingUser.name}</Card.Header>
                      <Card.Body className="flex justify-between">
                        <CardGroup className="flex !flex-col">
                          <Card.Text className="!text-sm font-medium"><span>{`Phone No. `}</span>{existingUser.phone}</Card.Text>
                          <Card.Text className="!text-sm font-medium"><span>{`Email ID: `}</span>
                            {existingUser.email}
                          </Card.Text>
                        </CardGroup>

                        <Button className="!h-max" onClick={()=>{handleNavigation(existingUser)}}>Processing</Button>
                      </Card.Body>
                    </Card>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </RoundedBorderCard>      
    </div>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modaldata={modaldata}
        handlelistchange={(data)=>handlelistchange(data)}
      />
  </>
    
  );
};

export default ICSAdminComp;
