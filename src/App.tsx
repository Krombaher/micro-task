import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { NewComponent } from './components/NewComponent';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    if(filter === 'RUBLS') {
        currentMoney = money.filter(f=> f.banknots === 'RUBLS')
    }

    if(filter === 'Dollars') {
        currentMoney = money.filter(f=> f.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
      setFilter(nameButton)
    }


    return (
        <div className="App">
            <NewComponent currentMoney={currentMoney}/>

            <Button name={'All'} callback={() => onClickFilterHandler('All')}/>
            <Button name={'Dollars'} callback={() => onClickFilterHandler('Dollars')}/>
            <Button name={'RUBLS'} callback={() => onClickFilterHandler('RUBLS')}/>
        </div>
    );
}

export default App;
