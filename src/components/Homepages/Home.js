// import React from "react";
// import "../images/Homebg.jpg";
// import {Carousel} from 'react-bootstrap';
// import "../App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//   return (
//     <>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             width= "1500px"
//             height="505px"
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//           width= "1500px"
//           height="505px"
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//           width= "1500px"
//           height="505px"
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// };

// export default Home;
import React from "react";
import Common from "./Common";
import web from "../Pictures/img2.png";

function Home() {
  return (
  
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
  
  );
}

export default Home;