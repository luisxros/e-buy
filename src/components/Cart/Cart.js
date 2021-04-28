import React from 'react'
import { Container, Button, Typography, Grid } from '@material-ui/core';
import classes from '*.module.css';

const Cart = () => {
    const isEmpty = true;
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'> Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart/> }
        </Container>
    )
}

export default Cart
