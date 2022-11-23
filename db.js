module.exports = () => {
  const technologies = [
    {
      id: 1,
      icon: '../../img/html5Logo.svg',
      title: 'HTML | CSS | JS',
      value: 'html',
    },
    { id: 2, icon: '../../img/reactLogo.svg', title: 'CSS', value: 'css' },
    {
      id: 3,
      icon: '../../img/reactLogo.svg',
      title: 'JavaScript',
      value: 'javascript',
    },
    { id: 4, icon: '../../img/reactLogo.svg', title: 'React', value: 'react' },
    {
      id: 5,
      icon: '../../img/reactLogo.svg',
      title: 'TypeScript',
      value: 'typescript',
    },
    { id: 6, icon: '../../img/reactLogo.svg', title: 'Redux', value: 'redux' },
  ]

  const data = {
    projects: [],
  }

  data.projects.push(
    {
      id: 1,
      title: 'Проект',
      subtitle: '// _лендинг',
      img: '../../img/xarizma-landing.jpg',
      description: 'Сайт-лендинг для караоке клуба Xarizma.',
      technology: technologies[0],
    },
    {
      id: 2,
      title: 'Проект',
      subtitle: '// _портфолио',
      img: '../../img/portfolio.jpg',
      description: 'Мой сайт портфолио.',
      technology: technologies[3],
    },
    {
      id: 3,
      title: 'Проект',
      subtitle: '// _маркетплейс',
      img: '../../img/marketplace.jpg',
      description: 'Большой проект интернет магазина.',
      technology: technologies[3],
    }
  )

  return data
}
