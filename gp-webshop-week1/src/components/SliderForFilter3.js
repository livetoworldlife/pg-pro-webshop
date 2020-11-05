import React from "react";

import { Slider, List, ListItem, ListItemText } from "@material-ui/core";

const hotelList = [
  {
    name: "Hotel A",
    price: 45
  },
  {
    name: "Hotel B",
    price: 50
  },
  {
    name: "Hotel C",
    price: 125
  },
  {
    name: "Hotel D",
    price: 75
  },
  {
    name: "Hotel E",
    price: 25
  },
  {
    name: "Hotel F",
    price: 88
  }
];
export default class App extends React.Component {
  state = {
    hotelList,
    value: 100
  };

  componentDidMount() {
    const { value } = this.state;
    this.setState({
      hotelList: hotelList.filter(item => item.price >= value)
    });
  }

  handleSliderChange = (event, newValue) => {
    let limit = 0;
    switch (Math.round(newValue)) {
      case 33: {
        limit = 30;
        break;
      }
      case 67: {
        limit = 50;
        break;
      }
      case 100: {
        limit = 100;
        break;
      }
      default: {
        limit = 0;
      }
    }
    const newList = hotelList.filter(item => item.price >= limit);
    this.setState({
      hotelList: newList,
      value: newValue
    });
  };
  render() {
    const marks = [
      {
        value: 0,
        label: "$0"
      },
      {
        value: 33,
        label: ">$30"
      },
      {
        value: 66,
        label: ">$50"
      },
      {
        value: 100,
        label: ">$100"
      }
    ];
    const { hotelList, value } = this.state;
    hotelList.sort((a, b) => a.price - b.price);
    return (
      <div style={{ marginTop: 30, padding: "0 15px" }}>
        <Slider
          defaultValue={value}
          step={33.33}
          marks={marks}
          onChange={this.handleSliderChange}
        />
        <List>
          {hotelList.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

