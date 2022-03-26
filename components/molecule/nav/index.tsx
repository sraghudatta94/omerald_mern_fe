import { useEffect } from 'react';
import MetisMenu from 'metismenujs';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { navLinks } from '@public/static/data/links';
import { Links } from '@components/atoms/link';

type Props = {
  isToggled: boolean;
};

export const NavMenu: React.FC<Props> = ({ isToggled }: Props) => {
  useEffect(() => {
    new MetisMenu('#metismenu');
  }, []);

  return (
    <>
      <div className={isToggled ? 'mobilemenu active p-0' : 'mobilemenu hide'}>
        <PerfectScrollbar>
          <ul className="metismenu text-muted" id="metismenu">
            {navLinks.map(nav => {
              return (
                <li key={nav.id}>
                  <Links href={nav.route}>
                    <a className="text-gray-400 text-sm font-light">
                      {nav.title}
                    </a>
                  </Links>
                </li>
              );
            })}
          </ul>
        </PerfectScrollbar>
      </div>
    </>
  );
};
