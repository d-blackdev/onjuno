import React, { useState, Component } from "react";
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import styled from "styled-components";
import { FaCommentAlt } from "react-icons/fa";
import "../css/Homepage.css";
import Percent from "../Image/side.png";
import Card from '../components/Card/Card'

class HomePage extends Component {
  state = {
    scroll: false,
  };
  // const [scroll, setScroll] = useState(false)

  handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({
        scroll: true,
      });
    }
  };
  render() {
    return (
      <>
        <main className="w-full h-full">
          <Header className="p-4  w-full position-fixed border-b shadow-md bg-white">
            <Navbar />
          </Header>
          <section className="w-full ">
            <Banner />
          </section>
        </main>
        <div className="message ">
          <FaCommentAlt className=" comment" />
        </div>
        {/* Sponsors */}
        <section className="w-full pt-16">
          <h4 className="mx-auto w-1/2 text-lg text-center best text-uppercase">
            Backed By The Best
          </h4>
          <div className="w-3/5 mx-auto flex md:flex-row pt-16 pb-24 text-5xl justify-between text-center ">
            <h3 className="mr-4">SEQUOIA</h3>
            <h3 className="mr-3">POLYCHAIN CAPITAL</h3>
            <h3>CONSENSYS</h3>
          </div>
        </section>
        {/* Savings */}
        <section className="w-full pt-4">
          <div className="w-4/5 mx-auto flex md:flex-row">
            <div>
            <h3 className="text-xl rainy">Start saving for a rainy day fund</h3>
            <h2 className="text-4xl font-semibold w-4/5">Use Our Checking Account to Achieve Your Financial Goals</h2>
            <p className="text-gray-600 w-4/5 mt-8">
                With the latest federal rate cut, the largestbanks are offering
                close to 0% APY on their checking and savings accounts. Onjuno
                checking will earn you more than 20x the national average*.
                Deposits up to $250,000 are FDIC insured through our partner
                bank.Grow your idle money faster withour checking account and
                start saving towards a rainy day fund, big expense or vacation
            </p>
            </div>
          <div>
            <img src={Percent} alt="per" className="side"/>
          </div>
          </div>
        </section>
        {/* Signup */}
        <section className="w-full pt-16 sign">
          <h1 className="text-5xl font-semibold mx-auto w-1/2 text-center">Sign up early to save more</h1>
          <p className="text-2xl text-gray-600 text-center p-4 w-1/2 mx-auto">Depending on the level of your checking account, you'll earn between 1.15% to 2.15% bonus rate</p>
          <div className="w-3/4 mx-auto flex md:flex-row justify-evenly pt-5">
            <Card title="metal" per1="2.15" per2="5" btnText="Sign Up Now"/>
            <Card title="Premium" per1="1.65" per2="4" btnText="Up Next"/>
            <Card title="Basic" per1="1.15" per2="3" btnText="Up Next"/>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;

const Header = styled.header`
  position: fixed !important;

  // .message {
  //   background: hotpink;
  //   border: 1px solid hotpink;
  //   border-radius: 50%;
  // }
`;
