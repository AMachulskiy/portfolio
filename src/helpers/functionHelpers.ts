import { IFunctionHelpers } from '@src/interfaces/IFunctionHelpers'

const functionHelpers: IFunctionHelpers = {
  getFormattedDate: () => {
    const date = new Date()
    let hours: string | number = date.getHours()
    let minutes: string | number = date.getMinutes()
    let seconds: string | number = date.getSeconds()
    let days: string | number = date.getDate()
    let months: string | number = date.getMonth() + 1
    const years: string | number = date.getFullYear()

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    days = days + 1 < 10 ? `0${days}` : days
    months = months + 1 < 10 ? `0${months}` : months
    return {
      time: `${hours}:${minutes}:${seconds}`,
      date: `${days}/${months}/${years}`,
    }
  },
}

export default functionHelpers
