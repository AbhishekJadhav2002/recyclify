import React from "react"
import "./Components.Homepage.style.css"
import { StepsData, FeaturesData, WhyRecycleData, FAQs, FooterData } from "../../Data"
import { ArrowDown } from "../Icons"
import AuthenticationForms from '../templates/AuthenticationForms/AuthenticationForms'
import WorkingSteps from "./Homepage--Components/WorkingSteps"
import Features from "./Homepage--Components/Features"
import FAQ from "./Homepage--Components/FAQs"
import WhyToRecycle from "./Homepage--Components/WhyToRecycle"
import Footer from "./Homepage--Components/Footer"

function Homepage() {
    const [authenticationModal, setSignUpState] = React.useState(false)

    const [isLoggedIn, setIsLoggedin] = React.useState(false)

    function toggleModal() {
        setSignUpState(previousState => !previousState)
    }

    return (
        <div id="Home" className="homepage">
            {authenticationModal && <AuthenticationForms onButtonClick={() => toggleModal()} />}
            <div className="blur-nav"></div>
            <nav id="navbar">
                <section className="nav-text">
                    <a href="#Home">Home</a>
                    <a href="#Sell">Sell/Order</a>
                    <a href="#Profile">Profile</a>
                </section>
                <section id="trapezoid">
                    <ArrowDown className="show-menu" />
                </section>
            </nav>
            <div className="header-container">
                <div className="header-background"></div>
                <div className="header-content">
                    <h1 className="willChange">Plastic and E-waste Recycling Services</h1>
                    <p>Upload your household waste and get them exchanged with a worthwhile amount from a collector who will ensure a environment friendly recycling.</p>
                    {isLoggedIn ?
                        <button className="btn" data-hover="Buy / Sell"><div><a href="/sell-buy">Let's Start</a></div></button> :
                        <button className="btn" onClick={() => toggleModal()} data-hover="Login / Sign In"><div>Get Started</div></button>
                    }
                </div>
                <div className="shopping-img"></div>
            </div>
            <WorkingSteps data={StepsData} />
            <Features data={FeaturesData} />
            <WhyToRecycle data={WhyRecycleData} />
            <FAQ data={FAQs} />
            <Footer data={FooterData} />
            {/* <Blob /> */}
            {/* <div className="working-container">
                <h1>How it's Works !</h1>
                <section className="items-flex">
                    <div className="item item-1">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-2">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-3">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-4">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                    <div className="item item-5">
                        <h3>Collection</h3>
                        <p>Collecting recyclable plastics from the user</p>
                    </div>
                </section>
            </div> */}
        </div>
    )
}

export default Homepage;