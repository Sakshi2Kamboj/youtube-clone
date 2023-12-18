import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';




export const Mycolum = ({ Url }) => {
    const [videos, setVideos] = useState(Url)

    return (


        <Container>
            <div className='row'>
                {
                    videos.map(
                        (u) => {
                            return (<div className='col-md-3'>  <iframe width="300" height="250" src={u.url} title="CSS Styling &amp; Importing CSS Files in React JS | Class Vs ClassName in React JS in Hindi in 2020 #14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <br />  <a href={u.url} target="_blank">{u.description} </a>
                            </div>)
                        }
                    )

                }
            </div>
        </Container>














    )
}
