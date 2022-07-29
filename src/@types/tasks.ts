export interface TasksType {
  id: string
  title: string
  isComplete: boolean
}

export interface TaskActionType {
  type: string
  task: TasksType
}

export enum TaskActionKind {
  Added = 'added',
  UpdateText = 'updateText',
  UpdateCompleted = 'updateCompleted',
  Deleted = 'deleted',
}
