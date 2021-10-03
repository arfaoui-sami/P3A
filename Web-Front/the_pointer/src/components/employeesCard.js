import React from 'react'
import { useHistory } from "react-router-dom";
import jwt from 'jsonwebtoken';
import {
    Button, Card
} from 'react-bootstrap';

function EmployeesList(props) {

    const maxAge = 3 * 24 * 60 * 60 * 1000;
    const createToken = (data) => {
        return jwt.sign({ data }, 'process.env.TOKEN_SECRET', {
            expiresIn: maxAge,
        });
    }
    const cryptedID = createToken(props.id)
    const history = useHistory();
    const handleClick = (path) => history.push(path);


    const spanStyled = {
        textAlign: 'center',
        color: 'white',
        backgroundColor: props.employeeState === "onService" ? "#4a9805" : "gray",
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    }

    return (





        <Card style={{ width: '13rem', margin: '10px', boxShadow: '1px 2px 6px 2px #e0e0e0' }}>
            <span style={spanStyled} >{props.employeeState}</span>
            {/* <Card.Img variant="top" src="https://thispersondoesnotexist.com/image" decoding="sync" importance="high" /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.gouvernerate}
                </Card.Text>
                <Button onClick={() => handleClick(`/admin/employee/details/${cryptedID}`)} style={{ width: '100%' }} variant="outline-dark" size='sl'>Détails</Button>
            </Card.Body>
        </Card >






    )

}

export default EmployeesList
