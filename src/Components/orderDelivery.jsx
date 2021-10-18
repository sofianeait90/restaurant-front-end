import React, { useState, useEffect } from "react";
import Joi from "joi-browser";

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  Button,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { useStyles } from "../Styles/orderCardstyles";

import { getAddressType } from "../Services/addressTypeService";
import { getCountry } from "../Services/countryServices";

const OrderDelivery = ({ history }) => {
  const SchemaOrderCustomer = {
    customerCountry: Joi.string().required().label("Country"),
    addressType: Joi.string().required().label("Address Type"),
    zipCode: Joi.string().required().max(5).label("zipCode"),
    streetAddress: Joi.string().required().label("streetAddress"),
    streetAddress2: Joi.string().required().label("streetAddress2"),
  };

  const validate = () => {
    const { error } = Joi.validate(data, SchemaOrderCustomer, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: SchemaOrderCustomer[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const [errorsInput, setErrorsInput] = React.useState([]);
  const [data, setData] = React.useState({});
  const [country, setCountry] = useState([]);
  const [addressType, setAddressType] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCountry = async () => {
    const { data } = await getCountry();
    setCountry(data);
  };

  const loadAddressType = async () => {
    const { data } = await getAddressType();
    setAddressType(data);
  };

  useEffect(() => {
    (loadCountry(), loadAddressType()).then(setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsValiadate = validate();
    setErrorsInput(errorsValiadate || {});

    if (errorsValiadate) return;

    history.push("/orderMenu");
  };

  const handleChange = ({ target: input }) => {
    const dataTemp = { ...data };
    console.log(errorsInput);
    dataTemp[input.name] = input.value;
    setData(dataTemp);
    const errorsTemp = { ...errorsInput };
    const errorsMessage = validateProperty(input);
    if (errorsMessage) errorsTemp[input.name] = errorsMessage;
    else delete errorsTemp[input.name];
    setErrorsInput(errorsTemp);
  };

  //__________________renderMethode___________________________
  const classes = useStyles();
  if (loading === true)
    return <CircularProgress className={classes.Progress} />;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div>
              <h3 className={classes.textH3}>Find Your Store </h3>
              <h6>
                Menu,Special Offers and princing may vary for each location
              </h6>
            </div>
          }
        />
        <CardContent className={classes.CardContent}>
          {/*_______________________________________________________________________________________*/}

          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              title={
                <h4 className={classes.fontWhite}>Enter Delivery Address</h4>
              }
            />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <TextField
                      className={classes.textFieldCountry}
                      name="customerCountry"
                      label="country"
                      select
                      value={data.customerCountry}
                      onChange={handleChange}
                    >
                      {country.map((option) => (
                        <option key={option._id} value={option._id}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      className={classes.textFieldCountry}
                      name="addressType"
                      label="address Types"
                      select
                      value={data.addressType}
                      onChange={handleChange}
                    >
                      {addressType.map((option) => (
                        <option key={option._id} value={option._id}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name={"streetAddress"}
                      className={classes.textFieldAddress}
                      label="StreetAddress"
                      error={errorsInput["streetAddress"]}
                      value={data.streetAddress}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name={"streetAddress2"}
                      className={classes.textFieldAddress}
                      label="StreetAddress2"
                      value={data.streetAddress2}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      name={"zipCode"}
                      className={classes.textFieldCountry}
                      label="ZipCode"
                      value={data.zipCode}
                      onChange={handleChange}
                      error={errorsInput["zipCode"]}
                    />
                  </Grid>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      disabled={validate()}
                      className={classes.sumbitButton}
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDelivery;
