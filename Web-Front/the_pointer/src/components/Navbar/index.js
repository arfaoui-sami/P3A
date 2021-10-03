import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {
  Navbar, Container, Button
} from 'react-bootstrap';
import { logout } from '../../redux/actions/Auth_actions'


const Nav = () => {
  //const [valid, setValid] = useState(false);
  const dispatch = useDispatch()
  const userName = useSelector((state => state.users.user ? state.users.user.name : ''))
  const style = {
    padding: '8px 0',
    width: '100%',
    height: '60px',
    backgroundColor: "white",
    borderBottomStyle: 'solid',
    borderImage: 'linear-gradient(69deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',

  }
  const handelClick = (e) => {
    e.preventDefault();
    //setValid(!valid)
    dispatch(logout())
    history.push('/login')



  }
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <>
      <Navbar style={style} fixed='top'>
        <Container>
          <Navbar.Brand style={{ color: 'orange' }} >

            <h6 style={{ color: 'gray', margin: '0px' }}>
              <i>
                Team
              </i>
            </h6>
            <b><i>
              {/* RapidoS`` */}
            </i>
            </b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Toggle />
          </Navbar.Collapse >
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Collapse className="justify-content-end">
              {userName === '' ? '' : < Navbar.Text > Signed in as: {userName}</Navbar.Text>}
            </Navbar.Collapse >
            <Navbar.Collapse className="justify-content-center">
              {userName === '' ? '' : <Button onClick={handelClick} variant="outline-dark">Déconnexion</Button>}
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
