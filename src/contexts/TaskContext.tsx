import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { TaskActionKind, TaskActionType, TaskType } from '../@types/tasks'

interface ContextProps {
  tasks: TaskType[]
  dispatch: Dispatch<TaskActionType>
}

const TaskContext = createContext<ContextProps>({} as unknown as ContextProps)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  function tasksReducer(tasks: TaskType[], action: TaskActionType): TaskType[] {
    const { type, task } = action

    switch (type) {
      case TaskActionKind.Added: {
        return [
          ...tasks,
          {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete,
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
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasksContext = () => {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return context
}
