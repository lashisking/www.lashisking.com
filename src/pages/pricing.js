import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import About from "../components/About";
import Hero from "../components/Hero";
import Sam from "../components/Sam";
import Reviews from "../components/Reviews";
import Photoblock from "../components/Photoblock";
import Pricing from "../components/Pricing";
import BookNow from "../components/BookNow";
import Expect from "../components/Expect";
import Contact from "../components/Contact";
import Policies from "../components/Policies";


const PricingPage = (props) => {
  return (
    <PageLayout page="Pricing">
        <Pricing />
    </PageLayout>
  )
}

export default PricingPage;

export const Head = PageLayout.Head()