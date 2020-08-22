import React from "react";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import { FaCheck, FaDollarSign } from "react-icons/fa";
import "../../css/Card.css";

function Card({title, per1, per2, btnText}) {
  return (
    <div className="card mr-6">
      {/* <CardImg /> */}
      <div className=" sub">
              <h5>{title}</h5>
              <h4>{per1}%</h4>
        <div className="flex md:flex-row text-center mx-auto w-1/2 ">
                  <h6 className="mr-2">{per2}%</h6>
          <p className="text-xl text-gray-600">cash back</p>
        </div>
      </div>
      {/* second card section */}
      <div className=" p-4">
        <div className=" flex md:flex-row justify-between num">
          <div>
            <h5>
              <span>2163</span> /2500 spots
            </h5>
          </div>
          <h5>
            <span className="text-lg text-gray-800">337</span> spots left
          </h5>
        </div>
        {/* progrss bar div */}
        <div className="progress-cont">
          <div className="progress"></div>
        </div>
        {/* button div */}
              <button className="card-btn">{btnText}</button>
      </div>
      <hr />
      {/* Third card section */}
      <div className=" p-4">
        <h4 className="text-2xl text-gray-400">INCLUDES</h4>
        <div className="pt-3 pb-3 flex md:flex-row">
          <FaCheck className="text-green-500 mr-3 mt-1" />
          <h6>Charcoal Black metal card</h6>
        </div>
        <div className="pt-3 pb-3 flex md:flex-row">
          <FaCheck className="text-green-500 mr-3 mt-1" />
          <h6>2.15% Bonus Rate Checking Account</h6>
        </div>
        <div className="pt-3 pb-3 flex md:flex-row">
          <FaCheck className="text-green-500 mr-3 mt-1" />
          <h6>5% Cash back on brands you love</h6>
        </div>
        <div className="pt-3 pb-3 flex md:flex-row">
          <FaCheck className="text-green-500 mr-3 mt-1" />

          <h6>Free Cash Withdrawals</h6>
        </div>
        <div className="pt-3 pb-3 flex md:flex-row">
          <FaCheck className="text-green-500 mr-3 mt-1" />
          <h6 className="text-gray-900">Phone & Chat Support</h6>
        </div>
        <p className="w-full text-gray-700 pb-2">
          Fund account with a minimum opening deposit of $1000. 3 additional
          free ATM withdrawals per month from our network ATMs.
        </p>
      </div>
      {/* Fourth card section */}
      <div className="fourth flex md:flex-row p-4 ">
        <div className="doll-cont">
          <FaDollarSign className="doll"/>
        </div>
        <div>
          <h5 className='line-through font-semibold'>
            $11.9/<span>m</span> Membership Fee
          </h5>
          <h5 className="free">Free for 6 months</h5>
          <h6 className="save">$60 Savings</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
