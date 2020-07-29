import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./loading";
import Room from "./Room";
import Title from "./Title";
import "../App.css";

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: room } = this.context;
    room = room.map(rooms => {
      return <Room key={rooms.id} room={rooms} />;
    });
    return (
      <section className="featured-rooms">
        <Title title={"featured-rooms"} />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : room}
        </div>
      </section>
    );
  }
}
