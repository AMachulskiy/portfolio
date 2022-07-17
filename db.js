module.exports = () => {
  const data = {
    projects: [],
  }

  data.projects.push(
    {
      id: 1,
      title: '_landing page',
      commits: 138,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      button: 'Check in GitHub',
    },
    {
      id: 2,
      title: '_portfolio',
      commits: 245,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      button: 'Check in GitHub',
    }
  )

  return data
}
