import React from 'react'
import { useTasksContext } from '../../contexts/TaskContext'
import { TaskBox } from '../TaskBox'
import {
  Container,
  CustomText,
  NumberText,
  NumberTextCompleted,
  TextContainer,
} from './styles'

export function TasksSection() {
  const { tasks } = useTasksContext()

  function getTotalTasksAmount() {
    return tasks.length
  }

  function getCompletedTasksAmout() {
    return tasks.reduce<number>((acc, currentTask) => {
      if (currentTask.isComplete) return acc + 1
      return acc
    }, 0)
  }

  return (
    <Container>
      <TextContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomText color="blue">Tarefas criadas</CustomText>
          <NumberText>{getTotalTasksAmount()}</NumberText>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomText color="purple">Tarefas completas</CustomText>
          <NumberTextCompleted>{`${getCompletedTasksAmout()} de ${getTotalTasksAmount()}`}</NumberTextCompleted>
        </div>
      </TextContainer>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskBox task={task} />
        </div>
      ))}
    </Container>
  )
}
