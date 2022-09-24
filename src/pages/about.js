import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import About from "../components/About";
import Sam from "../components/Sam";
import Expect from "../components/Expect";

const AboutPage = (props) => {
    return (
        <PageLayout page="about">
            <Sam />
            <About />        
            <Expect />
        </PageLayout>
  )
}

export default AboutPage;

export const Head = PageLayout.Head()