import React, { useEffect, useState } from 'react'
import { TaskType } from '../../@types/tasks'
import { useTasksContext } from '../../contexts/TaskContext'
import { TaskBox } from '../TaskBox'
import {
  Container,
  CustomText,
  ListItem,
  NumberText,
  NumberTextCompleted,
  TextContainer,
} from './styles'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function TasksSection() {
  const { tasks } = useTasksContext()
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>()
  const [uncompletedTasks, setUncompletedTasks] = useState<TaskType[]>()
  const [parent] = useAutoAnimate()

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
          <CustomText color="blue">Criadas</CustomText>
          <NumberText>{getTotalTasksAmount()}</NumberText>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomText color="purple">Completas</CustomText>
          <NumberTextCompleted>{`${getCompletedTasksAmout()} de ${getTotalTasksAmount()}`}</NumberTextCompleted>
        </div>
      </TextContainer>

      {/* @ts-ignore */}
      <ul ref={parent}>
        {uncompletedTasks?.map((task) => (
          <ListItem key={task.id}>
            <TaskBox task={task} />
          </ListItem>
        ))}

        {completedTasks?.map((task) => (
          <ListItem key={task.id}>
            <TaskBox task={task} />
          </ListItem>
        ))}
      </ul>
    </Container>
  )
}
