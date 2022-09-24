import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import Photoblock from "../components/Photoblock";
import BookNow from "../components/BookNow";

const IndexPage = (props) => {
  return (
    <PageLayout 
      page="Lash is King"
      text={[`"Self care is giving the world the best you, instead of what's left of you."`, `—Katie Reed`]}>
        <BookNow />
        <Photoblock />
    </PageLayout>
  )
}

export default IndexPage;

export const Head = PageLayout.Head()