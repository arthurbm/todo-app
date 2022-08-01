import React from 'react'
import { TasksType } from '../../@types/tasks'
import {
  Container,
  CustomText,
  NumberText,
  NumberTextCompleted,
  TextContainer,
} from './styles'

interface TasksSectionProps {
  tasks: TasksType[]
}

export function TasksSection({ tasks }: TasksSectionProps) {
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
          <h2>{task.title}</h2>
        </div>
      ))}
    </Container>
  )
}
