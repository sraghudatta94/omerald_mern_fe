import React, { useLayoutEffect, useState } from 'react';
import { Links } from '@components/atoms/link';
import { navLinks } from 'public/static/data/links/index';
import { NavMenu } from '../nav';

export const MenuLinks: React.FC = () => {
  const [size, setSize] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
  }, []);

  return (
    <nav className="w-[20px] md:w-[60vw]">
      <ul className="main-menu d-none d-lg-inline font-small">
        {navLinks.map(nav => {
          return (
            <li key={nav.id}>
              <Links href={nav.route}>
                <a className="text-gray-400">{nav.title}</a>
              </Links>
            </li>
          );
        })}
      </ul>

      <div
        className={
          size < 991 ? 'd-block d-lg-none w-[20px] md:w-[60vw]' : 'd-none'
        }
      >
        <button onClick={toggleTrueFalse}>Menu</button>
        <NavMenu isToggled={isToggled} />
      </div>
    </nav>
  );
};
