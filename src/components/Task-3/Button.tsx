import React from 'react'

type ButtonProspType ={
  name: string
  callback:()=>void
}

export const Button = (props: ButtonProspType) => {

  const onClickButtonHandler = () => {
    props.callback()
  }

  return (
    <div>
      <button onClick={onClickButtonHandler}>{props.name}</button>
    </div>
  )
}
