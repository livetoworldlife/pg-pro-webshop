import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    color: 'white',
    display: 'flex',
    marginTop: 50,
  },
  // margin: {
  //   height: theme.spacing(4),
  // },
}));

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 21,
    width: 21,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -9,
    marginLeft: -11,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 7,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
  markLabel: {
    color: 'white'
  },
  valueLabel: {

    marginLeft: 5
  },
})(Slider);

// function AirbnbThumbComponent(props) {           // for green line in bar maybe i can add next week
//   return (
//     <span {...props}>
//       <span className="bar" />
//       <span className="bar" />
//       <span className="bar" />
//     </span>
//   );
// }

export default function CustomizedSlider(props) {
  const classes = useStyles();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(400);

  const marks = [                       // marks for min and max value of slider
    {
      value: minValue,
      label: `$ ${minValue}`
    },

    {
      value: maxValue,
      label: `$ ${maxValue}`
    }
  ];

  //const valueText = value => `$${value}`;

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>Price Filter</Typography>
      <AirbnbSlider
        //ThumbComponent={AirbnbThumbComponent}
        //getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={props.defaultValue}
        onChange={props.handleSliderChange}
        //getAriaValueText={valueText}
        marks={marks}
        max={maxValue}
        min={minValue}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
