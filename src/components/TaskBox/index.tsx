import React, { useEffect } from 'react'
import { TaskActionKind, TaskType } from '../../@types/tasks'
import { Uncheck } from '../../assets'
import { useTasksContext } from '../../contexts/TaskContext'
import { CheckUncheckImg, Container, Text } from './styles'

interface TaskBoxProps {
  task: TaskType
}

export function TaskBox({ task }: TaskBoxProps) {
  const { dispatch } = useTasksContext()

  function checkUncheck() {
    dispatch({
      type: TaskActionKind.UpdateCompleted,
      task,
    })
  }

  useEffect(() => {}, [])

  return (
    <Container>
      <CheckUncheckImg src={Uncheck} alt="uncheck" onClick={checkUncheck} />
      <Text>{task.title}</Text>
    </Container>
  )
}
