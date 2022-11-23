import { ICheckbox } from './filters'

export enum TechValueEnum {
  html = 'HTML',
  css = 'CSS',
  javascript = 'JavaScript',
  react = 'React',
  ts = 'TypeScript',
  redux = 'Redux',
}

export interface IProject {
  id: number
  title: string
  subtitle: string
  img: string
  description: string
  technology: ICheckbox
}
