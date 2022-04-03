import { SocialIcons } from '@components/atoms/icons';
import { iconList } from '@public/static/data/icons';
import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <ul className="header-social-network d-inline-block list-inline mr-15">
      {iconList.map(icon => {
        return (
          <li className="list-inline-item" key={icon.id}>
            <SocialIcons bg={icon.code} href={icon.route}>
              <i className={`elegant-icon ${icon.icon}`}></i>
            </SocialIcons>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
