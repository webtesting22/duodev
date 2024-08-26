import React from "react";
import "./Projects.css"
import { Row, Col } from "react-bootstrap";
import DemoImage from "./demoImage.webp"
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
const Projects = () => {

    const ProjectData = [
        {
            ProjectHeading: "AMC Master",
            ProjectDescription: "Annual Maintenance Contract is a contract or project management app. Users can analyze their contract amount with all estimation of employees, raw material and supplier amount with charts and graphs."
            , ProjectLink: "https://play.google.com/store/apps/details?id=com.mojoomla.amcapp&hl=en_IN&gl=US"
        },
        {
            ProjectHeading: "Expoleads ",
            ProjectDescription: "Expo Lead Connect is a dynamic mobile app revolutionizing event networking and lead management. Traditional business card exchanges with its QR Scanner, effortlessly capturing and organizing data on Name, Email, Address, Phone, and Services. Utilizing OCR Reader technology, the app seamlessly integrates with Firebase to enhance contact management, allowing users to export contact lists to CSV and easily save contacts to their phone book."
            , ProjectLink: "https://play.google.com/store/apps/details?id=expoleads.scan.exhibitor.data"
        },
        {
            ProjectHeading: "School Management  ",
            ProjectDescription: "The School Management App, designed for students and teachers, offers key features including student admissions with detailed profiles, class routines, payment data, teacher listings, subject lists, exam details, and results. The Attendance Module utilizes student QR codes for easy attendance tracking and history review. Enhanced communication is facilitated through Firebase notifications for messages, notices, events, holidays, and a convenient web view for teachers, parents, and support staff, all presented in a cohesive calendar view for seamless module navigation.- Users: - Students, Teacher, Parents & Support Staff."
            , ProjectLink: "https://apps.apple.com/in/app/school-management-system-app/id1255762471?platform=iphone"
        },
        {
            ProjectHeading: "SSA - Driver App",
            ProjectDescription: "SSA is a dedicated application for authorized drivers providing transportation services to Gujarat Government Schools through Samgra Shiksha Abhiyan. The app records all trips, allowing drivers to manage student attendance and view their earnings. Integrated with Google Maps and Firebase Authentication, it enables real-time tracking, notifications for overspeed and off-route driving, and features an SOS Call function for emergencies, ensuring a secure and efficient transportation system.",
            ProjectLink: "https://play.google.com/store/apps/details?id=in.ssavtsv2&hl=en_US"
        },
        {
            ProjectHeading: "Clotheslyne",
            ProjectDescription: "Say goodbye to laundry day hassles with Clotheslyne, the ultimate laundry service app for busy individuals and businesses. Easily book laundry services, schedule convenient pick-up and drop-off times, and enjoy the ease of online payments—all from your phone. Whether you need a quick wash or full-service care, Clotheslyne ensures your clothes are returned fresh and clean. Designed for both users and laundry service owners, our app makes laundry management simple, efficient, and stress-free.",
            ProjectLink: "https://play.google.com/store/apps/details?id=com.clotheslyne.customer&hl=en-IN"
        },
        {
            ProjectHeading: "Crossfit",
            ProjectDescription: "Unlock your full fitness potential with CROSSFIT, the ultimate app for gym members and trainers alike. Exclusively designed for trainers to manage their clients, CROSSFIT allows trainers to easily add members, schedule personalized fitness classes, and create tailored diet plans. Members can effortlessly track their workouts, view their class schedules, and access a library of fitness videos, including Zumba and other popular routines. Additionally, the app offers a convenient marketplace for purchasing fitness products like protein powder and supplements, ensuring all your fitness needs are met in one place.",
            ProjectLink: "https://play.google.com/store/apps/details?id=crossfit.personaltrainer.gymtrainer.fitness&hl=en-IN"
        },
        {
            ProjectHeading:"Prepseed",
            ProjectDescription:"Prepseed is an all-in-one educational app designed to streamline school management and enhance communication between principals, teachers, students, and parents. Tailored to each user role, Prepseed offers a comprehensive set of modules, including attendance tracking, assignment management, direct messaging, test administration, fee processing, and event coordination. Whether you're overseeing school operations, teaching, learning, or staying informed as a parent, Prepseed provides a seamless, user-friendly experience that keeps everyone connected and organized.",
            ProjectLink:"https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
        },
        {
            ProjectHeading:"Bakery Shop",
            ProjectDescription:"Bakery Shop is the perfect app for both bakery owners and customers. As an owner, easily manage your orders with a clear view of pending and completed tasks, ensuring smooth operations. For customers, Bakery Shop offers a delightful browsing experience where you can select your favorite cakes and bakery items from an extensive menu. Once you've made your choices, simply complete your order with secure online payments, and enjoy your treats in no time.",
            // ProjectLink:"https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
        }
    ]
    return (
        <>
            <Navigation />
            <section className="leftRightPaddingForSection">
                <div className="ProjectsPage">

                </div>
                <div className="ProjectsCards">
                    <div id="CardContainer">
                        <div className="LeftSideProjectCard">
                            <h2>Explore our App Projects</h2>
                        </div>
                        <div className="ProjectCardContainer">
                            <div className="ProjectsCards">
                                {ProjectData.map((item, index) => (
                                    <div key={index} id="ProjectSingleCard">
                                        <div className="IndexNumber">
                                            0{index + 1}
                                        </div>
                                        <div className="HeadingContainer">
                                            <h1> {item.ProjectHeading}</h1>
                                        </div>
                                        <div className="DescriptionContainer">
                                            {item.ProjectDescription}
                                            <br /><br />
                                            {item.ProjectLink && (
                                                <button className="btn-style-border"> <a href={item.ProjectLink} target="_blank">Download Now</a></button>

                                            )}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Projects;