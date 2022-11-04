import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import {College} from './College';
import Student from './Student';
import Employee from './Employee';

function App() {
  const e = {
    fnm: "wissam",
    nm: "Hamed",
    City:"Damascus"

  }

  return (
  <Fragment>
    <h1> Welcom to Fullstack development</h1>
    <h2>react JS Programing Week09 Lab exercise</h2>
    <h3>student ID 101243840</h3>
    <h4>Wissam Hamed</h4>
    <h4>George brown college, Toronto</h4>
    <College></College>
    <Student></Student>
    <Student fnm = 'wissam' nm ='hamed' rsl = '100'> </Student>
    <Employee emp = {e}></Employee>
   </Fragment>
  )
}

export default App;