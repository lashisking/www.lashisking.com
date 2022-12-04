import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import Expect from "../components/Expect";

const AboutPage = (props) => {
    return (
        <PageLayout page="about">
            <Expect />
        </PageLayout>
  )
}

export default AboutPage;

export const Head = PageLayout.Head()