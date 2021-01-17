import React, {useState} from "react";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import CompanyProfile from "./CompanyProfile/CompanyProfile";
import CTASection from "../CTASection/CTASection";
import OwnerProfile from "./OwnerProfile/OwnerProfile";

import classes from "./About.module.css";

const About = () => {
    const [profile, setProfile] = useState(true);

    function handleClick() {
        setProfile(prevValue => !prevValue);
    }

    return (
        <div className={classes.About}>
            <main className={classes.MainContent}>
                <OwnerProfile profile={profile} />
                <CompanyProfile profile={profile} />
                <div className={classes.Ball} style={{transform: profile ? "translateX(50%)" : "translateX(-40%)"}}></div>
                <button className={classes.BallButton} onClick={handleClick} style={{left: profile ? "92%" : "5%"}}>
                    {profile ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </button>
            </main>
            <CTASection />
        </div>
    );
}

export default About;