import React from "react";
import "./Projects.css"
import { Row, Col } from "react-bootstrap";
import DemoImage from "./demoImage.webp"
import Navigation from "../Navigation/Navigation";
const Projects = () => {
    return (
        <>
        <Navigation/>
            <section>
                <div className="ProjectsPage">

                </div>
                <div className="ProjectsCards">
                    <div className="ProjectsSingleCard leftRightPaddingForSection">
                        <div className="leftSideColumn">
                            <div>
                                <h4>UP DeCK - WEB DESIGN</h4>
                                <button className="ProjectBtn">Live Project</button>
                            </div>
                        </div>
                        <div className="rightSideColumn">
                            <div style={{overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <img src="https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Projects;