import React, { useReducer } from 'react'
import { TaskActionKind, TaskActionType, TasksType } from '../../@types/tasks'
import { InputTask } from '../../components'

export function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  function tasksReducer(
    tasks: TasksType[],
    action: TaskActionType,
  ): TasksType[] {
    const { type, task } = action

    switch (type) {
      case TaskActionKind.Added: {
        return [
          ...tasks,
          {
            id: task.id,
            title: task.title,
            isComplete: false,
          },
        ]
      }
      case TaskActionKind.UpdateText: {
        return tasks.map((t) => {
          if (t.id === task.id) {
            return task
          } else {
            return t
          }
        })
      }
      case TaskActionKind.UpdateCompleted: {
        return tasks.map((t) => {
          if (t.id === task.id) {
            return {
              ...t,
              isComplete: !t.isComplete,
            }
          } else {
            return t
          }
        })
      }
      case TaskActionKind.Deleted: {
        return tasks.filter((t) => t.id !== task.id)
      }
      default: {
        throw Error('Unknown action: ' + type)
      }
    }
  }

  return (
    <>
      <InputTask tasks={tasks} dispatch={dispatch} />
    </>
  )
}