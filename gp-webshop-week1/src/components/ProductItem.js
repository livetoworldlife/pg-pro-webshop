import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ProductItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea to={{
        pathname: `/detail/${props.product.id}`,
      }}
        component={Link}>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${props.product.image}`}
          title={props.product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h4">
            ${props.product.price}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      <Button size="small" color="primary">
        View
          </Button>
      <Button size="small" color="primary">
        Edit
          </Button>
    </CardActions> */}
    </Card>


  );
}
