import { IMyInterests } from '@src/interfaces/IMyInterests'

const myInterests: IMyInterests[] = [
  { title: 'HTML', items: ['_pug.md'] },
  { title: 'CSS', items: ['_scss.md', '_sass.md'] },
  { title: 'Java Script' },
  { title: 'React JS' },
  { title: 'Type Script' },
  { title: 'Redux Toolkit' },
  {
    title: 'Свободное время',
    items: [
      '_прогулки на природе.md',
      '_катание на роликах.md',
      '_катание на велосипеде.md',
      '_путешествие на автомобиле.md',
      '_катание на коньках.md',
      '_сноубординг.md',
      '_просмотр фильмов.md',
      '_прослушивание рок-музыки.md',
    ],
  },
]

export default myInterests
