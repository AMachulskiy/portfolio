export interface ICheckbox {
  id: number
  icon: string
  title: string
  value: string
}

export interface IProjectsFilters {
  technologies: ICheckbox[]
}

export interface IProjectsSelectedFilters {
  technologies: ICheckbox[]
}
