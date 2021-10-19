import React from 'react';
import Header from '../header/header';
import ListCards from '../list-cards/list-cards';
import './app.scss';

const App = () => {
  const data = [
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/01.jpg?raw=true',
      imgAlt: 'night mounth',
      title: 'Title1',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 12,
      views: 35,
      id: 1,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/02.jpg?raw=true',
      imgAlt: 'darkness',
      title: 'Title2',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 2,
      views: 65,
      id: 2,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/03.jpg?raw=true',
      imgAlt: 'night tree',
      title: 'Title3',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 54,
      views: 77,
      id: 3,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/04.jpg?raw=true',
      imgAlt: 'branch',
      title: 'Title4',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 14,
      views: 53,
      id: 4,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/05.jpg?raw=true',
      imgAlt: 'street',
      title: 'Title5',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 23,
      views: 32,
      id: 5,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/1/06.jpg?raw=true',
      imgAlt: 'lake',
      title: 'Title6',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 5,
      views: 15,
      id: 6,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/2/01.jpg?raw=true',
      imgAlt: 'city',
      title: 'Title7',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 1,
      views: 3,
      id: 7,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/2/22.jpg?raw=true',
      imgAlt: 'lake',
      title: 'Title8',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 15,
      views: 17,
      id: 8,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/2/18.jpg?raw=true',
      imgAlt: 'flowers',
      title: 'Title9',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 75,
      views: 121,
      id: 9,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/my/09.jpg?raw=true',
      imgAlt: 'zhatwa',
      title: 'Title10',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 38,
      views: 86,
      id: 10,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/my/05.jpg?raw=true',
      imgAlt: 'flashlight',
      title: 'Title11',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 17,
      views: 74,
      id: 11,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/my/12.jpg?raw=true',
      imgAlt: 'valley',
      title: 'Title12',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 33,
      views: 56,
      id: 12,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/my/10.jpg?raw=true',
      imgAlt: 'bridge',
      title: 'Title13',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 18,
      views: 24,
      id: 13,
    },
    {
      imgSrc:
        'https://github.com/Wolf-Den1994/img_momentum/blob/main/my/11.jpg?raw=true',
      imgAlt: 'waterfall',
      title: 'Title14',
      descr:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis incidunt.',
      like: 31,
      views: 65,
      id: 14,
    },
  ];
  return (
    <>
      <Header />
      <ListCards posts={data} />
    </>
  );
};

export default App;
