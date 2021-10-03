
import React, { useState, useEffect } from 'react'
import {
    Button, Form, Col, Row
} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-bootstrap/FormSelect'
import axios from 'axios';
import Employees from '../../components/employeesCard'
import Loader from "react-loader-spinner";





const Home_admin = () => {

    const [name, setName] = useState("");
    const [gouvernarate, setGouvernarate] = useState("Tunis");
    const [loading, setLoading] = useState(false);
    // const [valid, setValid] = useState(false);
    const [CIN, setCIN] = useState("");
    const [employeesL, setEmployeesL] = useState([{}]);




    const handelForminputs = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            CIN,
            name,
            gouvernarate,
            employeeState: "onService"
        };
        console.log(data);
        axios({
            method: "post",
            url: "http://localhost:5000/api/addEmpolyee",
            withCredentials: true,
            data
        }).then(res => {
            setLoading(false); setCIN(''); setName('')
        }).catch((err) => console.log(err))
    }



    useEffect(() => { axios.get("http://localhost:5000/api/employees").then((res) => { setEmployeesL(res.data); console.log('rendring') }) }, [CIN]);



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.get("http://localhost:5000/api/employees")

    //         setEmployeesL(result.data)
    //     };

    //     fetchData();
    // }, [handelForminputs])





    return (
        <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div >
                <Form onSubmit={handelForminputs} style={{ width: '80vw', margin: "10px", padding: '90px', borderBottom: '5px solid orange', boxShadow: '1px 2px 6px 2px #e0e0e0' }}>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-2" controlId="formBasicEmployeeCIN">

                            <Form.Control type="" type="text" placeholder="Entre CIN" value={CIN} onChange={(e) => { setCIN(e.target.value) }} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-2" controlId="formBasicEmployeeName">

                            <Form.Control type="" type="text" placeholder="Entre votre nom" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-2" controlId="formGridState">
                            <FloatingLabel controlId="floatingSelect" label="Gouvernerate">
                                <Select aria-label="Floating label select example"
                                    onChange={(e) => { setGouvernarate(e.target.value) }} value={gouvernarate
                                    }>
                                    <option selected value="Tunis">Tunis</option>
                                    <option value="Ariana">Ariana</option>
                                    <option value="Ben Arous">Ben Arous</option>
                                    <option value="Manouba">Manouba</option>
                                </Select>
                            </FloatingLabel>

                            {/* <select className="Container" aria-label="Default select example" value={gouvernarate} onChange={(e) => { setGouvernarate(e.target.value) }} value={gouvernarate
                            }>
                                <option selected value="Tunis">Tunis</option>
                                <option value="Ariana">Ariana</option>
                                <option value="Ben Arous">Ben Arous</option>
                                <option value="Manouba">Manouba</option>
                            </select> */}

                        </Form.Group>
                        <Row style={{ margin: '10px' }}>

                            <Col sm="12" md={{ size: 1, offset: 1 }}>
                                <label style={{ color: 'red' }} for="exampleFile" sm={2}>Ajouter des Photos d'échantillons pour crée le Modele</label>
                            </Col>
                            <Col sm="12" md={{ size: 1, offset: 1 }}>  <input type="file" name="file" id="exampleFile" />
                            </Col>



                        </Row>
                        <Row>
                            <Button variant="outline-dark" size='sl' type="submit" style={{ width: '50%', margin: '10px auto' }}>
                                {loading ? <div>
                                    <Loader type="ThreeDots"
                                        color="gray"
                                        height={50}
                                        width={50}
                                    ></Loader>
                                </div>
                                    :
                                    'Valider'

                                }
                            </Button>
                        </Row>
                    </Row>
                </Form>
            </div>
            <h1 >
                Liste des employés
            </h1>
            <hr style={{ width: '100%' }} />
            <div style={{ display: 'flex', width: '100vw', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    employeesL.map((emp, key) => {
                        return (

                            <Employees id={emp._id} key={key} name={emp.name} gouvernerate={emp.gouvernarate} employeeState={emp.employeeState} />

                        )

                    })
                }
            </div>
        </div >

    )
}

export default Home_admin
