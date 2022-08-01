import React, { useEffect, useState } from 'react'
import { TaskType } from '../../@types/tasks'
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
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>()
  const [uncompletedTasks, setUncompletedTasks] = useState<TaskType[]>()

  function getTotalTasksAmount() {
    return tasks.length
  }

  function getCompletedTasksAmout() {
    return tasks.reduce<number>((acc, currentTask) => {
      if (currentTask.isComplete) return acc + 1
      return acc
    }, 0)
  }

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.isComplete))
    setUncompletedTasks(tasks.filter((task) => !task.isComplete))
  }, [tasks])

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

      {uncompletedTasks?.map((task) => (
        <div key={task.id}>
          <TaskBox task={task} />
        </div>
      ))}

      {completedTasks?.map((task) => (
        <div key={task.id}>
          <TaskBox task={task} />
        </div>
      ))}
    </Container>
  )
}
