import React, {useState} from 'react';
import './App.css';
import {Task1} from './components/Task-1/Task-1';
import {Task2} from "./components/Task-2/Task2";
import { Task3 } from './components/Task-3/Task-3';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {
  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])

  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

  return (
    <div className="App">
     <Task3/>
    </div>
  );
}

export default App;
