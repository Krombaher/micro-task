import React from 'react'

type ButtonType = {
  name:string
}

export const Button = (props: ButtonType) => {

  // const onClickHandler = () => {
  //   props.callback()
  // }

  return (
    <div>
      <button>{props.name}</button>
    </div>
  )
}
