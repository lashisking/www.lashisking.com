import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import Pricing from "../components/Pricing";


const PricingPage = (props) => {
  return (
    <PageLayout page="Pricing">
        <Pricing />
    </PageLayout>
  )
}

export default PricingPage;

export const Head = PageLayout.Head()