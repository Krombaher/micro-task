import React, {useState} from 'react'
import {Button} from "./Button";
import {FilterType} from "../../App";

type MoneyProps = {
  money: MoneyComponentType[]
}

type MoneyComponentType = {
  banknots: string
  value: number
  number: string
}

export const Task1 = (props: MoneyProps) => {
  const nameButton = [
    {name: 'All'},
    {name: 'Dollars'},
    {name: 'RUBLS'}
  ]
  const [filter, setFilter] = useState('All')

  let currentMoney = props.money

  if (filter === 'RUBLS') {
    currentMoney = props.money.filter(f => f.banknots === 'RUBLS')
  }

  if (filter === 'Dollars') {
    currentMoney = props.money.filter(f => f.banknots === 'Dollars')
  }

  const onClickFilterHandler = (nameButton: string) => {
    setFilter(nameButton)
  }

  return (
    <div>
      <ul>
        {
          currentMoney.map((obj, i) => {
            return (
              <li key={i}>
                <span>-{obj.banknots}-</span>
                <span>-{obj.value}-</span>
                <span>-{obj.number}-</span>
              </li>
            )
          })
        }
      </ul>
      {
        nameButton.map(btn => {
          return (
            <Button name={btn.name} callback={() => onClickFilterHandler(btn.name)}/>
          )
        })
      }

      {/* <Button name={'All'} callback={() => onClickFilterHandler('All')}/>
      <Button name={'Dollars'} callback={() => onClickFilterHandler('Dollars')}/>
      <Button name={'RUBLS'} callback={() => onClickFilterHandler('RUBLS')}/> */}
    </div>
  )
}
