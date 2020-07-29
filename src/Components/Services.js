import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        text: "Free Cocktail",
        info: "Free Alcholo and snacks"
      },
      {
        icon: <FaHiking />,
        text: "Free hiking ",
        info: "Explore the beauty near hotel"
      },
      {
        icon: <FaShuttleVan />,
        text: "Free Shuttle",
        info: "You are our responsibility to untill you return back"
      },
      {
        icon: <FaBeer />,
        text: "Free Beer",
        info: "Enjoy the diffrent flavours of our beers"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.text}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
