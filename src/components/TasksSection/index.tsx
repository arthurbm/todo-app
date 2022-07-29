import React from 'react'
import { TasksType } from '../../@types/tasks'
import { Container, CustomText } from './styles'

interface TasksSectionProps {
  tasks: TasksType[]
}

export function TasksSection({ tasks }: TasksSectionProps) {
  return (
    <Container>
      <CustomText color="blue">Tarefas criadas</CustomText>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
        </div>
      ))}
    </Container>
  )
}
