import React from 'react'
import { InputTask, TasksSection } from '../../components'
import { TasksProvider } from '../../contexts/TaskContext'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <TasksProvider>
        <Container>
          <InputTask />
          <TasksSection />
        </Container>
      </TasksProvider>
    </>
  )
}
