import React, { useEffect } from 'react'
import { TaskActionKind, TaskType } from '../../@types/tasks'
import { Check, Trash, Uncheck } from '../../assets'
import { useTasksContext } from '../../contexts/TaskContext'
import { Image, Container, Text, FlexContainer, CrossedText } from './styles'

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

  function onDelete() {
    dispatch({
      type: TaskActionKind.Deleted,
      task,
    })
  }

  useEffect(() => {}, [])

  return (
    <Container>
      <FlexContainer>
        {task.isComplete ? (
          <>
            <Image src={Check} onClick={checkUncheck} alt="checked" />
            <CrossedText>{task.title}</CrossedText>
          </>
        ) : (
          <>
            <Image src={Uncheck} alt="unchecked" onClick={checkUncheck} />
            <Text>{task.title}</Text>
          </>
        )}
      </FlexContainer>
      <Image src={Trash} alt="trash" onClick={onDelete} />
    </Container>
  )
}
