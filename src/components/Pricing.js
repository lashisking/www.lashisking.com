import React from "react";

const SERVICES = [
    { 
        service: "Full Set",
        price: "$150"
    },
    { 
        service: "1 Week Fill",
        price: "$75"
    },
    { 
        service: "2 Week Fill",
        price: "$85"
    },
    { 
        service: "3 Week Fill",
        price: "$95"
    },
];

const Component = (props) => (
    <div id="pricing" className="pricing">
        <div className="v-inner">
        <div className="inner">
            <h3>Services and pricing</h3>
            <div className="pricing-container">

                {SERVICES.map(({ price, service }) => (
                    <div className="pricing-item" key={service}>
                        <div className="pricing-image"></div>
                        <div className="pricing-content">
                        <h4>{service}</h4>
                        <p> 
                            <strong>{price}</strong>
                        </p>
                        <a className="site-link" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank" rel="noreferrer">
                            <button className="brand-button">Schedule</button>
                        </a>      
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
        </div>
    </div>
);

export default Component;