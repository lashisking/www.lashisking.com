import React from "react";

export default (props) => (
    <footer>
        <div className="v-inner">
        <div className="inner">        
            <div className="social-media-links">
            <a className="site-link" href="https://www.instagram.com/lash.is.king/" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="site-link" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank">
                <i className="far fa-calendar"></i>
            </a>
            <a className="site-link" href="mailto:service@lashisking.com" target="_blank">
                <i className="far fa-envelope"></i>
            </a>
            <a className="site-link" href="tel:+14805402245">
                <i className="fas fa-mobile-alt"></i>
            </a>
            </div>

            <div className="footer-contact">
            <a className="map-link footer-map-link" href="https://maps.google.com/?q=1810 E Ray Rd. Suite A-109,Chandler,AZ,85225" target="_blank">
                1810 E Ray Rd. Suite A-109<br/>
                Chandler, AZ 85225
            </a>
            </div>
            
            <div className="made-with">
            Made with <i className="far fa-heart"></i> in Chandler, AZ
            </div> 
        </div>
        </div>
    </footer>
);
