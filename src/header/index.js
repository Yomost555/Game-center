import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const items = [
    {
      label: (
        <Link to='/'>
          Home
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to='/sudoku'>
          Sudoku
        </Link>
      ),
      key: 'sudoku',
    },
    {
      label: (
        <Link to='/four-star'>
          Four star
        </Link>
      ),
      key: 'four-star',
    },
  ];

function Header() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;