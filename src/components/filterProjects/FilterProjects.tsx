import { ICheckbox } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './filterProjects.scss'

interface IFilterCheckboxProps {
  title: string
  data: ICheckbox[]
  selectedData?: ICheckbox[]
  onChange: (data: ICheckbox) => void
}

const FilterProjects: ReactFC<IFilterCheckboxProps> = ({
  title,
  data,
  selectedData,
  onChange,
}) => {
  const renderCheckbox = () => {
    const selectedCheckboxes = selectedData as ICheckbox[]
    const list = []

    for (let i = 0; i < data.length; i++) {
      const { id, title: _title, icon, value } = data[i]
      console.log(data[i])

      list.push(
        <div className='checkbox' key={id}>
          <label className='checkbox-elem'>
            <input
              type='checkbox'
              checked={selectedCheckboxes.some((item) => item.value === value)}
              onChange={() => onChange(data[i])}
            />
            <div className='checkbox-active' />
            <div className='checkbox-icon'>
              <img src={icon} alt={value} />
            </div>
            <span className='checkbox-text'>{_title}</span>
          </label>
        </div>
      )
    }
    return <div className='checkbox__wrapper'>{list}</div>
  }

  return renderCheckbox()
}

export default FilterProjects
