import { MenuLinks } from '@components/molecules/menu';
import { SocialLinks } from '@components/molecules/social';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useLayoutEffect, useState } from 'react';

const Menu = ({ addClass }: any) => {
  const [scroll, setScroll] = useState(false);
 
  const [size, setSize] = useState(0);


  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div className={scroll ? 'header-sticky sticky-bar' : 'header-sticky'}>
        <div className="container  align-self-center position-relative">
          <div className="main-nav float-left ">
            <MenuLinks />
          </div>
          <div className="float-right header-tools text-muted font-small">
            <SocialLinks />
            <a href="#/" className=" text-red-600" onClick={addClass}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
