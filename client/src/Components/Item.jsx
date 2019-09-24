import React from "react";
import "../style/Item.css";
import { Link } from "react-router-dom";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      image: props.item.image
    };
  }

  render() {
    return (
      <Link to={`/itemDetails/${this.state.id}`}>
        <div className="item-card">
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "20px",
              alignSelf: "flexstart"
            }}
            className="item-name"
          >
            {this.state.name}
          </p>
          <img className="item-img" src={this.state.image} alt="Item"></img>
        </div>
      </Link>
    );
  }
}

export default Item;
