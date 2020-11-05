import React from 'react'
import ProductItem from './ProductItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function ProductList({ items }) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {items.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};
