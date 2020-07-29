import React, { Component } from "react";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import Styledhero from "../Components/Styled";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
    console.log(this.state.slug);
  }
  // componentDidMount() {}
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> No Such Room Found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...dfltimage] = images;
    return (
      <>
        <Styledhero img={mainImg}>
          <Banner title={`${name}Room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </Styledhero>
        <section className="single-room">
          <div className="single-room-images">
            {dfltimage.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : ${size} SQFT</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </h6>
              <h6>{breakfast && "Free Breakfast Include"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <ul className="extras">
            <h6>Extras</h6>
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
