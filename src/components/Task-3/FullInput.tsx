import React, { ChangeEvent, useState } from 'react'

type FullInputTypeProps = {
  addMessage:(title: string) => void
}

export const FullInput = (props: FullInputTypeProps) => {

  let [title, setTitle] = useState('');
  
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
  }

  return (
    <div>
      <div>
        <input onChange={onChangeInputHandler}/>
        <button onClick={onClickButtonHandler}>+</button>
      </div>
    </div>
  )
}
