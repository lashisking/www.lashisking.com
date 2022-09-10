import * as React from 'react';
export default (props) => (
    <>
        <input id="nav-open" className="nav-input" type="radio" name="site-state" value="nav-open" />
        <input id="modal-open" className="nav-input" type="radio" name="site-state" value="modal-open"/>
        <input id="closed" className="nav-input" type="radio" name="site-state" value="closed" defaultChecked="false"/>
    
        <header>
            <nav id="main-nav" className="main-nav">
                <ul>
                <li><label htmlFor="closed" data-anchor="#top" className="site-link"><h2>LASH IS KING</h2></label></li>
                <li><label htmlFor="closed" data-anchor="#sam" className="site-link">Meet Sam</label></li>
                <li><label htmlFor="closed" data-anchor="#about" className="site-link">About</label></li>
                <li><label htmlFor="closed" data-anchor="#reviews" className="site-link">Reviews</label></li>
                <li><label htmlFor="closed" data-anchor="#pricing" className="site-link">Services and Pricing</label></li>
                <li><label htmlFor="closed" data-anchor="#expect" className="site-link">What to Expect</label></li>
                <li><label htmlFor="closed" data-anchor="#contact" className="site-link">Contact</label></li>
                <li><label htmlFor="modal-open" className="site-link">Policies</label></li>
                <li>
                    <a className="site-link" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank">
                    <button className="brand-button">Schedule</button>
                    </a>
                </li>
                </ul>
            </nav>
            
            <div className="inner">
                <div className="header-wrapper">
                <div className="home-icon">
                    <a href="/" className="site-link">
                    <i className="fas fa-crown"></i>
                    </a>
                </div>
                <div className="menu-toggle">        
                    <label htmlFor="closed" className="close-nav menu-toggle-button">
                    <i className="fa fa-close"></i>            
                    </label>
                    <label htmlFor="nav-open" className="open-nav menu-toggle-button">
                    <i className="fas fa-bars"></i>
                    </label>
                </div>
                </div>
            </div>   
        </header>   
    </>
);