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
  },
}));

const initialValues = () => {
  const priceList = DummyData.map(p => p.price);
  return [Math.min(...priceList), Math.max(...priceList)];

};

const ProductsPage = () => {
  const classes = useStyles();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState();
  const [defaultValue, setDefaultValue] = useState(initialValues);


  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // const responseData = await sendRequest(
        //   `${process.env.REACT_APP_BACKEND_URL}/places`
        // );
        //
        const productData = DummyData;

        setLoadedPlaces(productData);
        setFilteredPlaces(productData);
      } catch (err) { }
    };
    fetchPlaces();
  }, []);

  const handleOnChange = (e) => {
    let searchQuery = e.target.value.toLowerCase();
    setSearchInputValue(searchQuery);
    if (searchQuery.length >= 2) {
      let filterPlaces = loadedPlaces.filter((product) => {
        let searchValuePlace = product.name.toLowerCase();

        return searchValuePlace.indexOf(searchQuery) !== -1;
      });
      setFilteredPlaces(filterPlaces);
    } else {
      setFilteredPlaces(loadedPlaces);
    }
  };

  const handleSliderChange = (event, newValue) => {
    console.log(newValue[0]);
    let filteredProducts = loadedPlaces.filter((product) =>
      product.price > newValue[0] && product.price < newValue[1]);

    console.log(filteredProducts);

    setFilteredPlaces(filteredProducts);

  };
  // // function accepts obj of places and sort it alphabetically
  // const getSortByName = (obj) => {
  //   obj.sort((first, second) => {
  //     if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
  //     if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
  //     return 0;
  //   });
  // };
  // // sort the the loaded
  // useEffect(() => {
  //   if (loadedPlaces) getSortByName(loadedPlaces);
  // }, [loadedPlaces]);

  const currentPlaces = loadedPlaces && filteredPlaces;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Search
            placeHolder="Search for product"
            value={searchInputValue}
            onChangeHandler={handleOnChange}
          />
          <SliderForFilter
            defaultValue={defaultValue}
            handleSliderChange={handleSliderChange} />
          {/* <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container> */}
        </div>
        {filteredPlaces && filteredPlaces.length === 0 && <Container maxWidth="sm">
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
        {loadedPlaces && filteredPlaces && <ProductList items={currentPlaces} />}

      </main>
    </React.Fragment>
  );
};

export default ProductsPage;