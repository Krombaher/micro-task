import React, { useState } from 'react'
import { Button } from './Button'
import { FullInput } from './FullInput'
import { Input } from './Input'

export const Task3 = () => {

  const [message, setMessage] = useState([
    { message: '' },
  ])

  let [title, setTitle] = useState('');

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message])
  }

  const onClickButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <Input title={title} setTitle={setTitle} />
      <Button name={'+'} callback={onClickButtonHandler} />
      {
        message.map((el, index) => {
          return (
            <div key={index}>{el.message}</div>
          )
        })
      }
    </div>
  )
}
