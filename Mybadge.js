import React from 'react'

import Button from 'react-bootstrap/Button';

import Badge from 'react-bootstrap/Badge';



export const Mybadge = () => {
    return (
        <div className='text-center width:50%'>
            <h3> <Badge bg=" btn-light" text="dark">
                All
            </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Music
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Movies
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Trailers
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Games
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    T-Series
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Motivational
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Devotional
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Rituals
                </Badge>{' '}

                <Badge bg=" btn-light" text="dark">
                    Cricket
                </Badge>{' '}
                <Badge bg=" btn-light" text="dark">
                    Football
                </Badge>{' '}
            </h3>
        </div >

    )
}
