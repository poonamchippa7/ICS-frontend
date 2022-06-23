// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// const NavbarComp = () => {
//   return (
//     <Navbar className='bg-blue-400 text-white' expand="lg">
//       <Container fluid className='px-4'>
//         <Navbar.Brand href="#" className="text-white !text-2xl">logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll" className='flex-end flex-grow-0 !text-white'>
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
         
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarComp
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
//import Logo from "../public/pro.ico";
import { Route, useLocation, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate() 
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="!no-underline">
			<nav className="shadow-md w-full z-10 bg-blue-300 ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center mx-4  justify-between w-full ">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-2xl cursor-pointer text-black">
									Food<span className="text-blue-700"> Chain</span>
								</h1>
							</div>
							<div className="hidden md:block omkar">
								<div className="ml-10 flex items-baseline space-x-4">
									<a
										activeClass="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:!text-white px-3 py-2 rounded-md text-base no-underline font-medium"
									>
										Home
									</a>
									<a
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:!text-white px-3 py-2 rounded-md text-base no-underline font-medium"
									>
										About
									</a>
									<a
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:!text-white px-3 py-2 rounded-md text-base no-underline font-medium"
									>
										Contact
									</a>

									<button
                  onClick={()=>navigate('/login')}
										activeClass="Login"
										to="sign up"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-blue-600 text-white px-3 py-2 no-underline rounded-md text-sm font-medium hover:bg-blue-200 hover:!text-black"
									>
										Login In
									</button>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<a
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 no-underline text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</a>
								<a
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 no-underline text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</a>
								<a
									href="/contact"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 no-underline text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</a>
                <a
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 no-underline text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Login
								</a>
								<a
									href="/contact"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 no-underline text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									SignUp
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;



/*
import React from "react";
import localstyles from "./Navbar.module.css";
import a from "next/link";

const Navbar = () => {
  const login = () => {};
  const register = () => {
    console.log("register");
  };
  const services = () => {
    console.log("services");
  };
  const contact = () => {
    console.log("Contact us");
  };
  const home = () => {
    console.log("home");
  };

  return (
    <div className={localstyles.header}>
        <Link href='/'>
        <a className={localstyles.header_title}>
        <img src="icon.png" alt="Grarage Plug"></img>
        
      </a>
        </Link>
      
      <div className={localstyles.header_action}>
        <>

        <Link href="#Home" replace={true}>
            <a className={localstyles.header_link} onClick={home}>
              Home
            </a>
          </Link>
          <Link href="#provided_Services" replace={true}>
            <a className={localstyles.header_link} onClick={services}>
              services
            </a>
          </Link>

          <Link href="#contact" replace={true}>
            <a className={localstyles.header_link} onClick={contact}>
              Contact us
            </a>
          </Link>


          <Link href="/login">
            <a className={localstyles.header_link}>Login</a>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Navbar;
*/