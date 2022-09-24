import * as React from 'react';
export default (props) => (
    <>
        <input id="nav-open" className="nav-input" type="checkbox" name="site-state" value="nav-open" defaultChecked={false} />

        <header>
            <div className="inner">
                <div className="header-wrapper">
                    <div className="home-icon">
                        <a href="/" className="site-link">
                        <i className="fas fa-crown"></i>
                        </a>
                    </div>
                    <nav id="main-nav-2" className="main-nav-2">
                        <a className="site-link" href="/about">About</a>
                        <a className="site-link" href="/reviews">Reviews</a>
                        <a className="site-link" href="/pricing">Pricing</a>
                        <a className="site-link" href="/policies">Policies</a>
                        <a className="site-link" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank">Book Now</a>
                    </nav>
                    <div className="menu-toggle">        
                        <label htmlFor="nav-open" className="toggle-nav menu-toggle-button">
                            <i className="fa fa-close nav-button nav-button-close"></i>            
                            <i className="fas fa-bars nav-button nav-button-open"></i>
                        </label>
                    </div>
                </div>
            </div>   
        </header>   
    </>
);