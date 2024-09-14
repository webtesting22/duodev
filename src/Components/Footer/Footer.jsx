import React from "react";
import "./footer.css"
const Footer = () => {
    return (
        <>
            <section id="Footer">

            <div className="AgiluxBrandingText">
                            <h1>AGILUX</h1>
                    </div>
                <div className="FooterBtn">
                    
                    <button>Free Call<i class='bx bx-right-arrow-alt'></i></button>
                </div>
                <div className="AgiluxCopyright">
                    <div>
                        <div className="SocialMediaIcons">
                            <div>
                                Instagram<span><i class='bx bx-right-arrow-alt'></i></span>
                            </div>
                            <div>
                                Facebook<span><i class='bx bx-right-arrow-alt'></i></span>
                            </div>
                            <div>
                                Linkdin<span><i class='bx bx-right-arrow-alt'></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="copyRightText">
                        <p>@2024 AGILUX</p>
                    </div>
                    
                </div>
               
            </section>
        </>
    )
}
export default Footer