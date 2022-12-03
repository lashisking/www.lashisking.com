import * as React from 'react';

const PAGES = [
    'About',
    'Reviews',
    'Pricing',
    'Policies'
];

function createClassList(className, page, currentPage) {
    const classes = [className];
    if (page.toLowerCase() === currentPage.toLowerCase()) {
        classes.push('selected');
    }
    return classes.join(' ');
}

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
                        { PAGES.map(page => (
                            <a key={page} className={createClassList('site-link', page, props.current)} href={`/${page.toLowerCase()}`}>{page}</a>
                        ))}
                        <a className="site-link booknow" href="https://square.site/book/LXWWVM8PHCGRW/lash-is-king" target="_blank">Book Now</a>
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