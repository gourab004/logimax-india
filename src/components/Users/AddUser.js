import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredWeight, setEnteredWeight] = useState('');
  const [enteredCoupon, setEnteredCoupon] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (enteredAmount.trim().length === 0 || enteredWeight.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid weight and amount (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1 || +enteredAge>110) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const couponChangeHandler = (event) => {
    setEnteredCoupon(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
      <h1>Sells and Back Office</h1>

      <p>Please enter the sells details</p>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <label htmlFor="paymentType">Payment Type</label>
          <select id="paymentType" name="paymentType">
            <option value="cash">Cash</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
          </select>
          
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="number"
            value={enteredWeight}
            onChange={weightChangeHandler}
          />
          <label htmlFor="ornamentType">Ornament Type</label>
          <select id="ornamentType" name="ornamentType">
            <option value="neckless">Neckless</option>
            <option value="ring">Ringe</option>
            <option value="Ear ring">Ear ring</option>
            <option value="others">Others</option>
          </select>
          <label htmlFor="coupon">Coupon</label>
          <input
            id="coupon"
            type="text"
            value={enteredCoupon}
            onChange={couponChangeHandler}
          />
          <br/>
          <br/>
          <Button type="submit">Submit Sell</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
