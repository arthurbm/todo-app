export interface TaskType {
  id: string
  title: string
  isComplete: boolean
}

export interface TaskActionType {
  type: string
  task: TaskType
}

export enum TaskActionKind {
  Added = 'added',
  UpdateText = 'updateText',
  UpdateCompleted = 'updateCompleted',
  Deleted = 'deleted',
}
