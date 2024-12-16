import React from "react";
import "./App.css"; // Assuming you will add styles in App.css or use Tailwind CSS

// Importing the SVG assets
import BG from "./assets/HomePage BG.svg";
import Logo from "./assets/Logo.svg";
import Bar from "./assets/Bar.svg";
import SymbolLogo from "./assets/Symbol Logo.svg";
import BlurGreenLine from "./assets/Blur Green Line.svg";
import GreenDashUnderline from "./assets/Green Dash Underline.svg";
import RORBG from "./assets/BG2.svg";
import Bottom from "./assets/Bottom Image.svg";

const ComingSoon = () => {
    return (
        <div className="main-container tailwind-scrollbar-hide">
            <div class="landing" >
                {/* Logo Section */}
                {/* <div className="logo-section" style={{ backgroundImage: `url(${BG})` }}> */}
                <img src={BG} alt="BG" className="BG-image" />
                <img src={Logo} alt="Logo" className="logo-image" />
            </div>
            <div className="divider-bar">
                <img src={Bar} alt="Divider Bar" className="divider-bar-image1" />
                <img src={SymbolLogo} alt="Symbol" className="divider-bar-image2" />
            </div>
            {/* </div> */}
            <div className="coming-soon-container">
                {/* Divider Bar */}
                {/* <div className="divider-bar"> */}
                {/* <div> */}
                {/* <img src={Bar} alt="Divider Bar" className="divider-bar-image" /> */}
                {/* </div> */}
                {/* <div> */}
                {/* <img */}
                {/* src={SymbolLogo} */}
                {/* alt="Symbol Logo" */}
                {/* className="symbol-logo" */}
                {/* /> */}
                {/* </div> */}
                {/* </div> */}

                {/* Coming Soon Section */}

                {/* Blur Line */}
                {/* <div className="divider-bar">
                    <img src={Bar} alt="Divider Bar" class="divider-bar-image1 bottom" />
                    <img src={SymbolLogo} alt="Symbol" class="divider-bar-image2 bottom" />
                </div> */}
                <div className="content-container">
                    <img src={RORBG} alt="Background Top" className="bg-image" />
                    <div className="content-section">
                        <h1 className="coming-soon-title" style={{ fontFamily: 'BahnSchrift', fontWeight: 'normal', color: '#e0e5e3' }}>Coming Soon!</h1>
                        <img
                            src={GreenDashUnderline}
                            alt="Green Dash Underline"
                            className="green-dash-underline"
                        />
                        <p className="content-text" style={{ fontFamily: 'BahnSchrift', fontWeight: 'lighter', color: '#e0e5e3' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
                            magna non nisl vulputate, eget tempor urna bibendum. Donec pulvinar
                            risus ut orci fermentum hendrerit.
                        </p>
                        <img src={BlurGreenLine} alt="Blur Green Line" className="blur-line-image" />
                    </div>
                </div>
                <div className="divider-bar">
                    <img src={Bar} alt="Divider Bar" className="divider-bar-image1 bottom" />
                    <img src={SymbolLogo} alt="Symbol" className="divider-bar-image2 bottom" />
                </div>
                <div className="footer">
                    <img src={Bottom} alt="Background Bottom" class='bg-image' />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;