import React, { FormEvent, useState } from 'react'
import { TaskActionKind } from '../../@types/tasks'
import { Button, FormsContainer, Input } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { useTasksContext } from '../../contexts/TaskContext'

export function InputTask() {
  const [taskText, setTaskText] = useState('')
  const { dispatch } = useTasksContext()

  function handleAddTask(e: FormEvent) {
    e.preventDefault()
    dispatch({
      type: TaskActionKind.Added,
      task: { id: uuidv4(), title: taskText, isComplete: false },
    })
    setTaskText('')
  }

  return (
    <FormsContainer onSubmit={handleAddTask}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Button type="submit">+</Button>
    </FormsContainer>
  )
}
