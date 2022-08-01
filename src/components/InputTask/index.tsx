import React, { Dispatch, FormEvent, useEffect, useState } from 'react'
import { TaskActionKind, TaskActionType, TaskType } from '../../@types/tasks'
import { Button, FormsContainer, Input } from './styles'
import { v4 as uuidv4 } from 'uuid'

interface InputTaskProps {
  tasks: TaskType[]
  dispatch: Dispatch<TaskActionType>
}

export function InputTask({ tasks, dispatch }: InputTaskProps) {
  const [taskText, setTaskText] = useState('')

  function handleAddTask(e: FormEvent) {
    e.preventDefault()
    dispatch({
      type: TaskActionKind.Added,
      task: { id: uuidv4(), title: taskText, isComplete: false },
    })
    setTaskText('')
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <FormsContainer onSubmit={handleAddTask}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Button type="submit">Criar +</Button>
    </FormsContainer>
  )
}
