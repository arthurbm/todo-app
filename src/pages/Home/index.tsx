import React from 'react'
import { InputTask, TasksSection } from '../../components'
import { TasksProvider } from '../../contexts/TaskContext'

export function Home() {
  return (
    <>
      <TasksProvider>
        <InputTask />
        <TasksSection />
      </TasksProvider>
    </>
  )
}
