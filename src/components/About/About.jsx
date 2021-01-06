import React from "react";

import CompanyProfile from "./CompanyProfile/CompanyProfile";
import CTASection from "../CTASection/CTASection";
import OwnerProfile from "./OwnerProfile/OwnerProfile";

import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.About}>
            <OwnerProfile />
            <CompanyProfile />
            <CTASection />
        </div>
    );
}

export default About;