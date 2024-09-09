import React, { useState } from "react";
import "./Projects.css"
import { Row, Col } from "react-bootstrap";
import DemoImage from "./demoImage.webp"
import Navigation from "../Navigation/Navigation";
import { Button, Modal } from 'antd';
import { Link } from "react-router-dom";
import img1 from "./AMC Projects/amc1.webp"
import img2 from "./AMC Projects/amc2.webp"
import img3 from "./AMC Projects/amc3.webp"
import img4 from "./AMC Projects/amc4.webp"
import img5 from "./AMC Projects/amc5.webp"
import img6 from "./AMC Projects/amc6.webp"
import ClothesLyne1 from "./clothesLyne/ClothesLyne1.webp"
import ClothesLyne2 from "./clothesLyne/ClothesLyne2.webp"
import ClothesLyne3 from "./clothesLyne/ClothesLyne3.webp"
import ClothesLyne4 from "./clothesLyne/ClothesLyne4.webp"
import ClothesLyne5 from "./clothesLyne/ClothesLyne5.webp"
import Expoleads1 from "./Expoleads/Expoleads1.webp"
import Expoleads2 from "./Expoleads/Expoleads2.webp"
import Expoleads3 from "./Expoleads/Expoleads3.webp"
import Expoleads4 from "./Expoleads/Expoleads4.webp"
import Expoleads5 from "./Expoleads/Expoleads5.webp"
import Expoleads6 from "./Expoleads/Expoleads6.webp"
import Crossfit1 from "./Crossfit/Crossfit1.webp"
import Crossfit2 from "./Crossfit/Crossfit2.webp"
import Crossfit3 from "./Crossfit/Crossfit3.webp"
import Crossfit4 from "./Crossfit/Crossfit4.webp"
import Crossfit5 from "./Crossfit/Crossfit5.webp"
import Crossfit6 from "./Crossfit/Crossfit6.webp"
import Crossfit7 from "./Crossfit/Crossfit7.webp"
import Crossfit8 from "./Crossfit/Crossfit8.webp"
import Prepseed1 from "./Prepseed/Prepseed1.webp"
import Prepseed2 from "./Prepseed/Prepseed2.webp"
import Prepseed3 from "./Prepseed/Prepseed3.webp"
import Prepseed4 from "./Prepseed/Prepseed4.webp"
import Prepseed5 from "./Prepseed/Prepseed5.webp"
import Prepseed6 from "./Prepseed/Prepseed6.webp"
import Prepseed7 from "./Prepseed/Prepseed7.webp"
import Bakery1 from "./bakery/Bakery1.jpg"
import Bakery2 from "./bakery/Bakery2.jpg"
import Bakery3 from "./bakery/Bakery3.jpg"
import Bakery4 from "./bakery/Bakery4.jpg"
import Bakery5 from "./bakery/Bakery5.jpg"
import Bakery6 from "./bakery/Bakery6.jpg"
import web1 from "./WebProjects/Aaryaneev/1.png"
import web2 from "./WebProjects/Aaryaneev/2.png"
import web3 from "./WebProjects/Aaryaneev/3.png"
import Vaar1 from "./WebProjects/Vaar/1.png"
import Vaar2 from "./WebProjects/Vaar/2.png"
import Vaar3 from "./WebProjects/Vaar/3.png"
import Vaar4 from "./WebProjects/Vaar/4.png"
import Outlead1 from "./WebProjects/Outlead/1.png"
import Outlead2 from "./WebProjects/Outlead/2.png"
import Outlead3 from "./WebProjects/Outlead/3.png"
import Outlead4 from "./WebProjects/Outlead/4.png"
import Revords1 from "./WebProjects/Revords/1.png"
import Revords2 from "./WebProjects/Revords/2.png"
import Revords3 from "./WebProjects/Revords/3.png"
import structura1 from "./WebProjects/structura/1.png"
import structura2 from "./WebProjects/structura/2.png"
import structura3 from "./WebProjects/structura/3.png"
import structura4 from "./WebProjects/structura/4.png"
import structura5 from "./WebProjects/structura/5.png"
import Het1 from "./WebProjects/Het/1.png"
import Het2 from "./WebProjects/Het/2.png"
import yellowspot1 from "./WebProjects/Yellowspot/1.png"
import yellowspot2 from "./WebProjects/Yellowspot/2.png"
import yellowspot3 from "./WebProjects/Yellowspot/3.png"
import yellowspot4 from "./WebProjects/Yellowspot/4.png"
import yellowspot5 from "./WebProjects/Yellowspot/5.png"
import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const showModal = (item) => {
        setSelectedProject(item);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    const ProjectAppData = [
        {
            ProjectHeading: "Clotheslyne",
            ProjectDescription: "Say goodbye to laundry day hassles with Clotheslyne, the ultimate laundry service app for busy individuals and businesses. Easily book laundry services, schedule convenient pick-up and drop-off times, and enjoy the ease of online payments—all from your phone. Whether you need a quick wash or full-service care, Clotheslyne ensures your clothes are returned fresh and clean. Designed for both users and laundry service owners, our app makes laundry management simple, efficient, and stress-free.",
            ProjectLink: "https://play.google.com/store/apps/details?id=com.clotheslyne.customer&hl=en-IN",
            projectImage: [
                {
                    img: ClothesLyne1
                },
                {
                    img: ClothesLyne2
                },
                {
                    img: ClothesLyne3
                },
                {
                    img: ClothesLyne4
                },
                {
                    img: ClothesLyne5
                },

            ]
        },
        {
            ProjectHeading: "Expoleads ",
            ProjectDescription: "Expo Lead Connect is a dynamic mobile app revolutionizing event networking and lead management. Traditional business card exchanges with its QR Scanner, effortlessly capturing and organizing data on Name, Email, Address, Phone, and Services. Utilizing OCR Reader technology, the app seamlessly integrates with Firebase to enhance contact management, allowing users to export contact lists to CSV and easily save contacts to their phone book."
            , ProjectLink: "https://play.google.com/store/apps/details?id=expoleads.scan.exhibitor.data"
            , projectImage: [
                {
                    img: Expoleads1
                },
                {
                    img: Expoleads2
                },
                {
                    img: Expoleads3
                },
                {
                    img: Expoleads4
                },
                {
                    img: Expoleads5
                },
                {
                    img: Expoleads6
                },

            ]
        },
        {
            ProjectHeading: "Crossfit",
            ProjectDescription: "Unlock your full fitness potential with CROSSFIT, the ultimate app for gym members and trainers alike. Exclusively designed for trainers to manage their clients, CROSSFIT allows trainers to easily add members, schedule personalized fitness classes, and create tailored diet plans. Members can effortlessly track their workouts, view their class schedules, and access a library of fitness videos, including Zumba and other popular routines. Additionally, the app offers a convenient marketplace for purchasing fitness products like protein powder and supplements, ensuring all your fitness needs are met in one place.",
            ProjectLink: "https://play.google.com/store/apps/details?id=crossfit.personaltrainer.gymtrainer.fitness&hl=en-IN"
            , projectImage: [
                {
                    img: Crossfit1
                },
                {
                    img: Crossfit2
                },
                {
                    img: Crossfit3
                },
                {
                    img: Crossfit4
                },
                {
                    img: Crossfit5
                },
                {
                    img: Crossfit6
                },
                {
                    img: Crossfit7
                },
                {
                    img: Crossfit8
                },

            ]
        },
        {
            ProjectHeading: "Prepseed",
            ProjectDescription: "Prepseed is an all-in-one educational app designed to streamline school management and enhance communication between principals, teachers, students, and parents. Tailored to each user role, Prepseed offers a comprehensive set of modules, including attendance tracking, assignment management, direct messaging, test administration, fee processing, and event coordination. Whether you're overseeing school operations, teaching, learning, or staying informed as a parent, Prepseed provides a seamless, user-friendly experience that keeps everyone connected and organized.",
            ProjectLink: "https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN",
            projectImage: [
                {
                    img: Prepseed1
                },
                {
                    img: Prepseed2
                },
                {
                    img: Prepseed3
                },
                {
                    img: Prepseed4
                },
                {
                    img: Prepseed5
                },
                {
                    img: Prepseed6
                },
                {
                    img: Prepseed7
                },

            ]
        },
        {
            ProjectHeading: "AMC Master",
            ProjectDescription: "Annual Maintenance Contract is a contract or project management app. Users can analyze their contract amount with all estimation of employees, raw material and supplier amount with charts and graphs."
            , ProjectLink: "https://play.google.com/store/apps/details?id=com.mojoomla.amcapp&hl=en_IN&gl=US",
            projectImage: [
                {
                    img: img5
                },
                {
                    img: img1
                },
                {
                    img: img2
                },
                {
                    img: img3
                },
                {
                    img: img4
                },

                {
                    img: img6
                },
            ]
        },
        {
            ProjectHeading: "Bakery Shop",
            ProjectDescription: "Bakery Shop is the perfect app for both bakery owners and customers. As an owner, easily manage your orders with a clear view of pending and completed tasks, ensuring smooth operations. For customers, Bakery Shop offers a delightful browsing experience where you can select your favorite cakes and bakery items from an extensive menu. Once you've made your choices, simply complete your order with secure online payments, and enjoy your treats in no time.",
            // ProjectLink:"https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
            projectImage: [
                {
                    img: Bakery4
                },
                {
                    img: Bakery1
                },
                {
                    img: Bakery3
                },
                {
                    img: Bakery2
                },
                {
                    img: Bakery5
                },
                {
                    img: Bakery6
                },

            ]
        },

    ]

    const ProjectWebData = [
        {
            ProjectHeading: "Aaryaneev",
            ProjectDescription: "Aaryarath began its journey over 30 years ago with a modest vision, leveraging family support to fund its first major project. The success was immediate, with 100% of offerings sold and an overwhelming response that set the foundation for future ventures. With strategic planning and careful execution, Aaryarath steadily expanded its portfolio. To fuel this growth, capital was raised, and the relentless efforts of Mr. Ratilal, a key driving force, helped propel the business forward. Today, Aaryarath stands as a multi-generational brand, proudly carrying its legacy of creating iconic landmarks.",
            ProjectLink: "https://aaryaneev.com/",
            projectImage: [
                {
                    img: web1
                },
                {
                    img: web2
                },
                {
                    img: web3
                },
            ]
        },
        {
            ProjectHeading: "Vaar",
            ProjectDescription: `
                Vaar: Real Estate Investment Made Simple At Vaar, we leverage historic data and current research to identify assets with high growth potential. Our focus is on areas experiencing significant economic activity and demographic shifts.
               Through collaboration with experienced brokers, we stay updated on neighborhood-specific trends and assess property-related factors to avoid potential risks. Once we identify a promising asset, we file with the SEC to obtain the necessary qualifications for offering shares to investors. The selected asset is then made available for investment on the Vaar platform. Accompanied by detailed documents outlining the asset's return profile, strengths, and risks, investors can seamlessly invest with just a few clicks. Vaar manages and leases the property, with rental income distributed to investors as semiannual dividends, proportional to their ownership. : Real estate is a long-term investment at Vaar, with a typical holding period of 3-10 years. This approach allows the asset to appreciate, generating strong returns for our investors.
            `,
            ProjectLink: "https://www.vaar.co/",
            // Uncomment and add project images as needed
            projectImage: [
                {
                    img: Vaar1
                },
                {
                    img: Vaar2
                },
                {
                    img: Vaar3
                },
                {
                    img: Vaar4
                },
            ]
        },

        {
            ProjectHeading: "Outlead Solutions",
            ProjectDescription: `He global pandemic has significantly transformed how businesses operate, presenting new challenges and opportunities. The founders of OutLead embraced this shift, setting out with a clear mission: to redefine the foundations of sales and marketing in the digital era.

OutLead has crafted a distinctive 5-stage lead generation process, placing a strong focus on building trust and authenticity with clients online. This process involves thorough research to identify key potential customer bases on LinkedIn, engaging them in meaningful conversations, and effectively presenting your product or service.

In addition, this lead generation process is supported by expertly developed digital marketing tools. These tools include establishing a strong digital presence on major social media platforms, implementing targeted strategies to grow followers, and consistently creating and posting insightful content relevant to the business.

Now is the perfect time to collaborate and lead the way with OutLead!`,
            ProjectLink: "https://www.outleadsolutions.com/"
            , projectImage: [
                {
                    img: Outlead1
                },
                {
                    img: Outlead2
                },
                {
                    img: Outlead3
                },
                {
                    img: Outlead4
                },

            ]
        },
        {
            ProjectHeading: "Revords",
            ProjectDescription: `Revords was created and developed by local business owners with a deep understanding of the ever-changing needs of local businesses, customer satisfaction, and loyalty.

It is a simple yet powerful customer loyalty platform designed to streamline and enhance the experience for both business owners and their customers.`,
            ProjectLink: "https://revords.com/",
            projectImage: [
                {
                    img: Revords1
                },
                {
                    img: Revords2
                },
                {
                    img: Revords3
                },

            ]
        },
        {
            ProjectHeading: "Structura",
            ProjectDescription: `With experience in over 1500 diverse projects, Strutura has established itself as a leading guide in the construction industry. We excel in providing comprehensive solutions across BIM, interior design, engineering, architecture, and structural planning, alongside cutting-edge 3D visualization services. Strutura positions itself as a navigator, helping clients maximize business value and achieve their project goals with precision and expertise.`
            , ProjectLink: "https://structura-web.vercel.app/",
            projectImage: [
                {
                    img: structura1
                },
                {
                    img: structura2
                },
                {
                    img: structura3
                },
                {
                    img: structura4
                },
                {
                    img: structura5
                },

            ]
        },
        {
            ProjectHeading: "Het Graphics",
            ProjectDescription: `Founded in 2000, Het Graphics has been a pioneer in the outdoor media industry, known for its innovative approaches and creative solutions. Our journey began with the introduction of Pole Kiosks in Ahmedabad, and we have since expanded our offerings to include a diverse range of billboard media options such as Gantries, Unipoles, large-format Hoardings, Cantilevers, Pole Kiosks, and LEDs.

With 99% of our media being backlit and all located in prime, high-traffic areas throughout Ahmedabad, Het Graphics stands as the leading outdoor media provider in the city, boasting over 400 media inventory options. Our strategically placed billboards ensure direct eye-level visibility in cluster-free zones, capturing the attention of commuters effectively.

All client interactions are managed through our subsidiary, Yellow Spot, a collaboration between Het Graphics and Khushi Advertising. This strategic alliance combines the expertise of two industry leaders, positioning Yellow Spot as one of Gujarat's most formidable outdoor media houses.

`,
            ProjectLink: "https://hetgraphics.vercel.app/",
            projectImage: [
                {
                    img: Het2
                },
                {
                    img: Het1
                },

            ]
        },
        {
            ProjectHeading: "Yellowspot",
            ProjectDescription: `Yellow Spot was born from the strategic collaboration between Het Graphics and Khushi Advertising, uniting two industry leaders to create one of Gujarat's premier outdoor media houses. With a portfolio of over 400 premium outdoor media options across Ahmedabad, 99% of which are backlit, we ensure maximum visibility in high-traffic locations and every neighborhood throughout the city.

Our mission is to deliver comprehensive 360-degree marketing solutions, catering to local, national, and international clients across a diverse range of platforms. At Yellow Spot, we are dedicated to providing impactful and effective advertising solutions that drive results.

`,
            ProjectLink: "https://www.yellowspot.in/",
            projectImage: [
                {
                    img: yellowspot1
                },
                {
                    img: yellowspot2
                },
                {
                    img: yellowspot3
                },
                {
                    img: yellowspot4
                },
                {
                    img: yellowspot5
                },

            ]
        },

    ]
    const truncateDescription = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const items = [
        {
            key: '1',
            label: <><h4>Explore App Projects</h4></>,
            children: <>
                <div className="ProjectsCards">
                    {ProjectAppData.map((item, index) => (
                        <div key={index} id="ProjectSingleCard">
                            <div className="IndexNumber">0{index + 1}</div>
                            <div className="HeadingContainer">
                                <h1>{item.ProjectHeading}</h1>
                            </div>
                            <div className="DescriptionContainer">
                                {item.ProjectDescription}
                                <br /><br />
                                {item.ProjectLink && (
                                    <button className="btn-style-border">
                                        <a href={item.ProjectLink} target="_blank">Download Now</a>
                                    </button>
                                )}
                                <button className="btn-style-transparent" onClick={() => showModal(item)}>
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                    {selectedProject && (
                        <Modal
                            title={selectedProject.ProjectHeading}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={800}
                            footer={null}
                        >
                            <br /><br />
                            <p style={{ fontSize: "18px" }}>{selectedProject.ProjectDescription}</p>
                            <br /><br />
                            {selectedProject.projectImage && selectedProject.projectImage.length > 0 && (
                                <div className="ProjectImagesContainer">
                                    {selectedProject.projectImage.map((image, idx) => (
                                        <img key={idx} src={image.img} alt={`Project ${idx + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                                    ))}
                                </div>
                            )}
                            <br /><br />
                            {selectedProject.ProjectLink && (
                                <button className="btn-style-border"><a href={selectedProject.ProjectLink} target="_blank">Download Now</a></button>
                            )}
                        </Modal>
                    )}
                </div></>,
        },
        {
            key: '2',
            label: <><h4>Explore Web Projects</h4></>,
            children: <>
                <div className="ProjectsCards">
                    {ProjectWebData.map((item, index) => (
                        <div key={index} id="ProjectSingleCard">
                            <div className="IndexNumber">0{index + 1}</div>
                            <div className="HeadingContainer">
                                <h1>{item.ProjectHeading}</h1>
                            </div>
                            <div className="DescriptionContainer">
                                <p>{truncateDescription(item.ProjectDescription, 50)}</p>
                                <br /><br />
                                {item.ProjectLink && (
                                    <button className="btn-style-border">
                                        <a href={item.ProjectLink} target="_blank">Visit Browser</a>
                                    </button>
                                )}
                                <button className="btn-style-transparent" onClick={() => showModal(item)}>
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                    {selectedProject && (
                        <Modal
                            title={selectedProject.ProjectHeading}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={800}
                            footer={null}
                        >
                            <br /><br />
                            <p style={{ fontSize: "18px" }}>{selectedProject.ProjectDescription}</p>
                            <br /><br />
                            {selectedProject.projectImage && selectedProject.projectImage.length > 0 && (
                                <div className="ProjectImagesContainer">
                                    {selectedProject.projectImage.map((image, idx) => (
                                        <img key={idx} src={image.img} alt={`Project ${idx + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                                    ))}
                                </div>
                            )}
                            <br /><br />
                            {selectedProject.ProjectLink && (
                                <button className="btn-style-border"><a href={selectedProject.ProjectLink} target="_blank">Explore Now</a></button>
                            )}
                        </Modal>
                    )}
                </div></>,
        },
    ];
    return (
        <>
            <Navigation />
            <section className="leftRightPaddingForSection">
                <div className="ProjectsPage">
                    <h1 className="BigHeading">Our <br /> Projects</h1>
                </div>
                <div className="ProjectCardContainer">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

                </div>


            </section>
        </>
    )
}
export default Projects;