import React from 'react'
import s from './Task2.module.scss'

type CarsProps = {
  topCars: CarsComponentType[]
}

type CarsComponentType = {
  manufacturer: string
  model: string
}

export const Task2 = (props: CarsProps) => {

  return (
    <div>
      <table className={s.table}>
        {
          props.topCars.map((car, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
              </tr>
            )
          })
        }
      </table>

    </div>
  )
}
