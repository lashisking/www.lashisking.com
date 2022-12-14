import React from 'react';
export default (props) => (
    <div  className="hero parallax">
        <div className="inner center hero-content v-inner">

        <div className="title-wrapper">
            <h1 className="title">{props.page}</h1>
            <p className="sub-title">{Array.prototype.concat.apply([], props.text).map(item => [item, <br/> ])}</p>
        </div>
        <div className="social-media-links">
            <a className="site-link" href="https://www.instagram.com/lashiskingllc/" target="_blank">
            <i className="fab fa-instagram"></i>
            </a>
            <a className="site-link" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank">
            <i className="far fa-calendar"></i>
            </a>
            <a className="site-link" href="mailto:service@lashisking.com" target="_blank">
            <i className="far fa-envelope"></i>
            </a>
        </div>
        </div>
    </div>
);