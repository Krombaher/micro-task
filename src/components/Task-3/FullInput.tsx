import React, { ChangeEvent, useState } from 'react'

type FullInputTypeProps = {
  addMessage:(title: string) => void
}

export const FullInput = (props: FullInputTypeProps) => {

  let [title, setTitle] = useState('');
  console.log(title)
  
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onClickButtonHandler}>+</button>
      </div>
    </div>
  )
}
