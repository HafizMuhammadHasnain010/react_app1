import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import "./Todolist.css";

function GitCard() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    //api calling here
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    setLoader(true);
    var apiURL = `https://api.github.com/users/${userName}`;
    fetch(apiURL)
      .then((result) => result.json())
      .then((data) => {
        console.log("userdata", data);
        setUserData(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUserData(""); // Set userData to empty if not found
        setLoader(false);
      });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="app">
        <h2 className="header text-center">Git Data Fetch</h2>

        <Row className="mb-3">
          <Col>
            <FloatingLabel controlId="floatingInput" label="User_Name">
              <Form.Control
                type="User Name"
                placeholder="Enter GitHub username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Button
              variant="primary"
              onClick={fetchProfile}
              disabled={isLoading}
            >
              Fetch Data
            </Button>
          </Col>
        </Row>

        {userData && userData.login ? ( // Check if userData exists and has a login (valid user)
          <div>
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={userData.avatar_url}
                  alt="GitHub Avatar"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                />
                <Card.Body>
                  <Card.Title>{userData.name}</Card.Title>
                  <Card.Text>{userData.bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <strong>Followers:</strong> {userData.followers}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Following:</strong> {userData.following}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Public Repos:</strong> {userData.public_repos}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Location:</strong> {userData.location}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </Card.Link>
                  <Card.Link
                    href={userData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub API
                  </Card.Link>
                </Card.Body>
              </Card>
            )}
          </div>
        ) : (
          // If user not found or userData is empty, display a message or take other actions
          <div>No user found or invalid username</div>
        )}
      </div>
    </Container>
  );
}

export default GitCard;

// import React, { useEffect, useState } from 'react';
// import { Button, Card, ListGroup, Form, FloatingLabel, Container, Row, Col, Spinner } from 'react-bootstrap';
// import './Todolist.css';
// // import Loader from '../Loader';

// function GitCard() {
//   const [userName, setUserName] = useState('');
//   const [userData, setUserData] = useState('');
//   const [isLoading,setLoader]=useState(false)

//    useEffect(()=>{
//     //api calling hear
//     fetchProfile()
//    },[])

//   const fetchProfile = () => {
//     setLoader(true)
//     var apiURL = `https://api.github.com/users/${userName}`;
//     fetch(apiURL)
//       .then((result) => result.json())
//       .then((data) => {
//         console.log('userdata', data);
//         setUserData(data);
//         setLoader(false)
//       });
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="app">
//         <h2 className="header text-center">Git Data Fetch</h2>

//         <Row className="mb-3">
//           <Col>
//             <FloatingLabel controlId="floatingInput" label="User_Name">
//               <Form.Control
//                 type="User Name"
//                 placeholder="Enter GitHub username"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FloatingLabel>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col>
//             <Button variant="primary" onClick={fetchProfile} disabled={isLoading} >
//               Fetch Data
//             </Button>
//           </Col>
//         </Row>

//           <div>
//             {isLoading ?
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                 <Spinner animation="border" role="status" variant="primary">
//                   <span className="visually-hidden">Loading...</span>
//                 </Spinner>
//               </div>
//                 :
//                 <Card className="text-center" style={{ width: '18rem' }}>
//                   <Card.Img
//                     variant="top"
//                     src={userData.avatar_url}
//                     alt="GitHub Avatar"
//                     style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }}
//                   />
//                   <Card.Body>
//                     <Card.Title>{userData.name}</Card.Title>
//                     <Card.Text>{userData.bio}</Card.Text>
//                   </Card.Body>
//                   <ListGroup className="list-group-flush">
//                     <ListGroup.Item>
//                       <strong>Followers:</strong> {userData.followers}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <strong>Following:</strong> {userData.following}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <strong>Public Repos:</strong> {userData.public_repos}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <strong>Location:</strong> {userData.location}
//                     </ListGroup.Item>
//                   </ListGroup>
//                   <Card.Body>
//                     <Card.Link href={userData.html_url} target="_blank" rel="noopener noreferrer">
//                       GitHub Profile
//                     </Card.Link>
//                     <Card.Link href={userData.url} target="_blank" rel="noopener noreferrer">
//                       GitHub API
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//             }
//           </div>
//       </div>
//     </Container>
//   );
// }

// export default GitCard;

// import { useState } from 'react';
// import React from 'react';
// import { Button, Card, ListGroup, Form, FloatingLabel, Container, Row, Col } from 'react-bootstrap';
// import './Todolist.css';

// function GitCard() {
//   const [userName,setUserName]=useState('Rizwanjamal')
//   const [userData,setUserData]=useState("")

//   const fetchprofile=()=> {
//     var apiURL= `https://api.github.com/users/${userName}`
//     fetch(apiURL)
//       .then(result=>result.json())
//       .then(data=>{
//         console.log("userdata",data)
//         setUserData(data)
//       })

//   }

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <div className="app">
//         <h2 className="header text-center">Git Data Fetch</h2>

//         <Row className="mb-3">
//           <Col>
//             <FloatingLabel controlId="floatingInput" label="User_Name">
//               <Form.Control type="User Name" placeholder="api" value={userName} onChange={(e)=>setUserName(e.target.value)} />
//             </FloatingLabel>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col>
//             <Button variant="primary" onClick={fetchprofile}>Fetch Data</Button>
//           </Col>
//         </Row>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={userData.avatar_url} />
//           <Card.Body>
//             <Card.Title>{userData.name}</Card.Title>
//             <Card.Text>
//                 {userData.bio}
//             </Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>{userData.followers}</ListGroup.Item>
//             <ListGroup.Item>{userData.following}</ListGroup.Item>
//             <ListGroup.Item>{userData.public_repos}</ListGroup.Item>
//             <ListGroup.Item>{userData.location}</ListGroup.Item>
//           </ListGroup>
//           <Card.Body>
//             <Card.Link href="#">{userData.html_url}</Card.Link>
//             <Card.Link href="#">{userData.url}</Card.Link>
//           </Card.Body>
//         </Card>
//       </div>
//     </Container>
//   );
// }

// export default GitCard;

// // // import React, { useState } from 'react';
// // import './Todolist.css';
// // import { Button, Card ,ListGroup,Form ,FloatingLabel} from 'react-bootstrap';

// // function GitCard() {
// //   return (
// //     <>
// //       <div className="app">
// //         <h2 className="header">Git Data fetch</h2>

// //         <FloatingLabel
// //           controlId="floatingInput"
// //           label="Email address"
// //           className="mb-3"
// //         >
// //           <Form.Control type="email" placeholder="name@example.com" />
// //         </FloatingLabel>

// //         <Button variant="primary">Primary</Button>{' '}

// //         <Card style={{ width: '18rem' }}>
// //           <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
// //           <Card.Body>
// //             <Card.Title>Card Title</Card.Title>
// //             <Card.Text>
// //               Some quick example text to build on the card title and make up the
// //               bulk of the card's content.
// //             </Card.Text>
// //           </Card.Body>
// //           <ListGroup className="list-group-flush">
// //             <ListGroup.Item>Cras justo odio</ListGroup.Item>
// //             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
// //             <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
// //           </ListGroup>
// //           <Card.Body>
// //             <Card.Link href="#">Card Link</Card.Link>
// //             <Card.Link href="#">Another Link</Card.Link>
// //           </Card.Body>
// //         </Card>

// //       </div>
// //     </>
// //   );
// // }

// // export default GitCard;
