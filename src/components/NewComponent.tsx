import React from 'react'

type CurrentMoneyProps = {
  currentMoney: NewComponentType[]
}

type NewComponentType = {
  banknots: string
  value: number
  number: string
}

export const NewComponent = (props: CurrentMoneyProps) => {
  return (
    <>
      <ul>
        {
          props.currentMoney.map((obj, i) => {
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
    </>
  )
}
