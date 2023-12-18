
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';


export const Mynavbar = ({ Url, filterUrls }) => {

    const [searchValue, setSearchValue] = useState('')
    const [activity, setActivity] = useState(Url)


    function addActivity(val) {
        const filteredValue = Url.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase()));
        filterUrls(filteredValue)
    }

    console.log()

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='images/logo.png' alt='text' />
                    </Navbar.Brand>

                    <Form className="d-flex mx-auto">
                        <FormControl type="text"
                            placeholder="Search"
                            className="mr-2"
                            onChange={(e) => { setSearchValue(e.target.value) }} />
                        <Button variant="outline-success" onClick={addActivity}>Search</Button>
                        <img src='images/dwd.png' alt='text' />

                    </Form>


                    {/* {proops.Url.filter((val) => {
                        if (SearchValue === '') { return <div>{val}</div> }
                        else if (val.first_name.toLowerCase().includes(setSearchValue.toLowerCase())) { return <div>{val}</div> }

                    })} */}

                    <Nav className="ml-auto">
                        <img src='images/video.png' alt='text' />

                        <img src='images/notic.png' alt='text' />


                        <img src='images/icon.png' alt='text' />
                    </Nav>

                </Container>
            </Navbar >
        </div >
    )
}
