import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";
import SliderForFilter from '../components/SliderForFilter';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import DummyData from '../dataset/data.json';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: 'rgb(255, 133, 133)',
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const initialValues = () => {                         // to calculate min and max value of product price
  const priceList = DummyData.map(p => p.price);
  return [Math.min(...priceList), Math.max(...priceList)];

};

const ProductsPage = () => {
  const classes = useStyles();
  const [loadedProducts, setLoadedProducts] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState();
  const [defaultValue, setDefaultValue] = useState(initialValues);


  useEffect(() => {                               // get product data
    const fetchProducts = async () => {
      try {
        const productData = DummyData;
        setLoadedProducts(productData);
        setFilteredProducts(productData);
      } catch (err) { }
    };
    fetchProducts();
  }, []);

  const handleOnChange = (e) => {                  // handle search inputs
    let searchQuery = e.target.value.toLowerCase();
    setSearchInputValue(searchQuery);
    if (searchQuery.length >= 2) {
      let filterPlaces = loadedProducts.filter((product) => {
        let searchValuePlace = product.name.toLowerCase();

        return searchValuePlace.indexOf(searchQuery) !== -1;
      });
      setFilteredProducts(filterPlaces);
    } else {
      setFilteredProducts(loadedProducts);
    }
  };

  const handleSliderChange = (event, newValue) => {     //handle slider changes

    let filteredProducts = loadedProducts.filter((product) =>
      product.price > newValue[0] && product.price < newValue[1]);

    setFilteredProducts(filteredProducts);

  };
  const currentPlaces = loadedProducts && filteredProducts;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Searc and Filter sections */}
        <div className={classes.heroContent}>
          <Search
            placeHolder="Search for product"
            value={searchInputValue}
            onChangeHandler={handleOnChange}
          />
          <SliderForFilter
            defaultValue={defaultValue}
            handleSliderChange={handleSliderChange} />

        </div>
        {/* if seacrh or filter result is null give this info */}
        {filteredProducts && filteredProducts.length === 0 && <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            The product you are looking for was not found
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            The characters in your inputs have been searched in the names of the products.
            However, no product could be found.
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            If you search again carefully we hope you can find the product you are looking for.
            </Typography>
        </Container>}
        {/* send data to child component */}
        {loadedProducts && filteredProducts && <ProductList items={currentPlaces} />}

      </main>
    </React.Fragment>
  );
};

export default ProductsPage;