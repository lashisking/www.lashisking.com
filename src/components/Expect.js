import React from "react";

const EXPECT_ITEMS = [
  {
    icon: "far fa-clipboard",
    heading: "Lash consultation",
    text: `We'll discuss the different lash styles, the look you're trying to acheive, and what options work best to compliment your beauty based on your eyes.
    Depending on your prior experience with lash extentions and eye sensitivities, we may decide to do a patch test to guarnatee comfort.`,
  },

  {
    icon: "fas fa-soap",
    heading: "Lash bath",
    text: `I'll begin with cleaning off any make up and oil. This is a critical and often under-performed step to ensure your eyelash extensions will have adequate adhesion and long lasting lash extentions.`,
  },
  {
    icon: "far fa-eye",
    heading: "Lash application",
    text: `To avoid any tangling, your bottom lashes will be gently secured out of the way while a primer is applied to your upper lashes. Now it's time to kick back and relax while the lash extentions are applied individually to each of your lashes. Once the procedure starts, expect to have your eyes closed for two to three hours. Feel free to bring headphones to listen to your favorite podcast or even take a nap! `,
  },

  {
    icon: "fas fa-magic",
    heading: "The Big Reveal",
    text: `Voila! And just like that you have been given the gift of cutting your "getting ready" time in the morning in half! We'll go over your aftercare regimen and how to maintain your lash health and your extension longevity. I recommend getting your eyelashes filled every two to three weeks.`,
  },
];


const Component = (props) => (
  <div id="expect" className="what-to-expect texture-bg-alt">
    <div className="v-inner">
      <div className="inner">
        <h3>What to expect</h3>
        <div className="expect-wrapper">
          <div className="expect-items">

            {EXPECT_ITEMS.map(({icon, heading, text}) => (
                <div key={heading} className="expect-item">
                <h4>
                    <i className={icon}></i>
                    {heading}
                </h4>
                <p>
                    {text}
                </p>
                </div>
            ))}
            
          </div>
          <div className="expect-image"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;