import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return ( 
    <div className="Portfolio wow bounceInDown" data-wow-duration = "2s" >
        <h2><span> My </span> Work</h2>
        <div className = "overlay">
            <span className="fa fa-close"></span>
            <img src="" alt="Zoom-Image"/>    
        </div> 
            
        <div className = "content" data-class="/image/portfolio/1.jpg">
            <img src = "/image/portfolio/1.jpg" alt = "portfolio1" />
            <div className="zoom_btn_div">
                <button className="zoom_btn">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div> 
        <div className = "content" data-class="/image/portfolio/2.jpg">
            <img src = "/image/portfolio/2.jpg" alt = "portfolio2" />
            <div className="zoom_btn_div">
                <button className="zoom_btn">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div>
        <div className = "content" data-class="/image/portfolio/3.jpg"> 
            <img src = "/image/portfolio/3.jpg" alt = "portfolio3" />
            <div className="zoom_btn_div">
                <button className="zoom_btn wow pluse">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div> 
        <div className = "content" data-class="/image/portfolio/4.jpg">
            <img src = "/image/portfolio/4.png" alt = "portfolio4" />
            <div className="zoom_btn_div">
                <button className="zoom_btn">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div>
        <div className = "content" data-class="/image/portfolio/5.jpg">
            <img src = "/image/portfolio/5.png" alt = "portfolio5" />
            <div className="zoom_btn_div">
                <button className="zoom_btn">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div>
        <div className = "content" data-class="/image/portfolio/6.jpg">
            <img src = "/image/portfolio/6.jpg" alt = "portfolio6" />
            <div className="zoom_btn_div">
                <button className="zoom_btn">
                    <i className='fa fa-expand'></i><br/>
                    ZOOM
                </button>
            </div>
        </div> 
    </div>
    );
}

export default Portfolio;