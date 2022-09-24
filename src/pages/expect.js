import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import Expect from "../components/Expect";


const ExpectPage = (props) => {
  return (
    <PageLayout page="Pricing">
        <Expect />
    </PageLayout>
  )
}

export default ExpectPage;

export const Head = PageLayout.Head()