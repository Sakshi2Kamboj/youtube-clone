import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Col } from "react-bootstrap";


export const Sidebar = (props) => {
    const { status, updateStatus } = props;


    return (
        <div>

            <SideNav style={{ background: 'grey', color: 'black' }} expanded={status}>
                <SideNav.Toggle
                    onClick={() => {
                        updateStatus(!status)
                    }}
                />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "2.75em" }} />
                        </NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="placed orders">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "2.75em" }}
                            />
                        </NavIcon>
                        <NavText>shorts</NavText>
                    </NavItem>


                    <NavItem eventKey="subscriptions">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "2.75em" }}
                            />
                        </NavIcon>
                        <NavText>subscriptions</NavText>
                    </NavItem>

                    <NavItem eventKey="liabrary">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "2.75em" }}
                            />
                        </NavIcon>
                        <NavText>liabrary</NavText>
                    </NavItem>





                </SideNav.Nav>
            </SideNav>

        </div>
    );
}


