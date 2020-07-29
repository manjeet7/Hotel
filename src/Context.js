import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loadindg: true
  };
  componentDidMount() {
    let rooms = this.formatdata(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loadindg: false
    });
  }

  formatdata(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const rooms = tempRooms.find(room => room.slug === slug);
    return rooms;
  };
  render() {
    return (
      <div>
        <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
          {this.props.children}
        </RoomContext.Provider>
      </div>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomContext, RoomProvider };
