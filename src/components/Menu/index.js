import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={style.menuWrapper}>
      <button className={style.menuBtn}>
        <Link to={'/formBuilder'}>Edit Mode</Link>
      </button>
      <button className={style.menuBtn}>
        <Link to={'/liveForm'}>Live Mode</Link>
      </button>
    </div>
  );
};
export default Menu;
