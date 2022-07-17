import { IProject } from '@src/interfaces/IProject'
import apiService from './api'

export interface IProjectService {
  getProjects: () => Promise<IProject[]>
}

export default class ProjectService implements IProjectService {
  private api = apiService

  getProjects = async (): Promise<IProject[]> => {
    const { data } = await this.api.get('projects')
    return data
  }
}
