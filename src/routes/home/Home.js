/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import WorldDataColumn from '../../components/WorldDataColumn/WorldDataColumn';
import styles from './Home.module.css';
import UsersAverageInputColumn from '../../components/UsersAverageInputColumn/UsersAverageInputColumn';
import UserExpensesColumn from '../../components/UserExpensesColumn/UserExpensesColumn';

const Home = () => {
  return (
    <div className={styles.Field}>
      <UserExpensesColumn />
      <UsersAverageInputColumn />
      <WorldDataColumn />
    </div>
  );
};

export default Home;
