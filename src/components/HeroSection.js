import React from 'react';
import '../App.css';
import './HeroSection.css';
import Scroll from './Scroll'
import Scroll2 from './Scroll2'
import Scroll3 from './Scroll3'
import '../components/HeroSection.css';
import gsap from 'gsap'

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })


function tween() {


    tl.to(".textt", { y: "0%", duration: 1, delay: 0.5, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1")
}

function HeroSection() {

    tween();
    return (
        <div className="hero-container" id="Home">
            <div className="intro">
                <div className="intro-text">
                    <h2 className="hide">
                        <span className="textt">Creating Innovative</span>
                    </h2>
                    <h2 className="hide">
                        <span className="textt">Creative</span>
                    </h2>
                    <h2 className="hide">
                        <span className="textt">Websites for you</span>
                    </h2>
                </div>
            </div>            <div className="intro">
                <div className="intro-text">
                    <h2 className="hide">
                        <span className="textt">Creating Innovative</span>
                    </h2>
                    <h2 className="hide">
                        <span className="textt">Creative</span>
                    </h2>
                    <h2 className="hide">
                        <span className="textt">Websites for you</span>
                    </h2>
                </div>
                <div className="slider"></div>
            </div>
            <Scroll2 />
            <Scroll />
            <Scroll3 />
        </div>
    )
}

export default HeroSection
