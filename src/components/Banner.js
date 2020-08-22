import React from 'react'
import styled from 'styled-components'
import { MdMailOutline} from 'react-icons/md';
import {FaGooglePlay, FaApple} from 'react-icons/fa';
import Button from './Button';
import Logo from '../Image/usa.png';
import Anime from "../Image/animation_640_ke30n3vw.gif"

// import { FaCommentAlt } from "react-icons/fa";


function Banner() {
    return (
        <>
        <Banners className="w-4/5 mx-auto flex md:flex-row pt-32">
            <div>
                <h1 className="text-6xl text-black-50  text-left ">The most powerful checking Account</h1>
                <p className="text-xl text-left text-gray-900 w-3/4 mt-2 ">Our checking account gives you higher returns than a savings account with no hidden fees.</p>
                <div className="flex md:flex-row justify-between input-div mt-10 mb-5">
                    <div className="flex md:flex-row ">
                        <MdMailOutline className="mt-1 text-4xl mail text-purple-500 mr-4"/>
                        <input placeholder="Enter Email Address" className="border-none outline-none"/>
                    </div>
                    <Button name="Join Now" filled/>
                </div>
                <div className="flex md:flex-row">
                    <img src={Logo} alt="Logo" className="w-8 h-4 mt-1 mr-4"/>
                    <p className="text-gray-900 text-sm font-semibold mb-16">337 spots left for Priority Access</p>
                </div>
                <div className="flex md:flex-row justify-between app-div">
                    {/* Google Play */}
                    <div className="flex md:flex-row app-cont">
                        <FaGooglePlay className="text-2xl mt-3 mr-3"/>
                        <div>
                            <h6 className="text-sm">Coming Soon</h6>
                            <h4 className="text-lg font-semibold">Google Play</h4>
                        </div>
                    </div>
                    {/* APPLE Play */}
                    <div className="flex md:flex-row app-cont">
                        <FaApple className="text-3xl mt-2 mr-3"/>
                        <div>
                            <h6 className="text-sm">Coming Soon</h6>
                            <h4 className="text-lg font-semibold">App Store</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={Anime} alt="lottie" className="lottie"/>
            </div>
        </Banners>
                 </>
    )
}

export default Banner

const Banners = styled.div`
h1{
    text-transform: capitalize;
}
.input-div{
    border: 2px solid rgb(230, 222, 222);
    width: 73%;
    border-radius: 10px;
    padding: 10px;
}
// .lottie{
//     width: 150%;
//     height: 100%;
// }
.mail{
    color: 8F00A6;
}
.app-cont{
    border: 2px solid rgb(230, 222, 222);
    padding: 10px;
    color: rgb(90, 88, 88);
    border-radius: 10px;
}
.app-div{
    width:50%
}
.app-cont h6{
    font-size: 10px;

}
// .app-count h4{
//     font-size: 15px;
//     font-weight: 700;
// }
`
