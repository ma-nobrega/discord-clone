import React from 'react';

import { FiCompass, FiDownload, FiPlus } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  newServer?: boolean;
  serverPublic?: boolean;
  downloader?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  downloader,
  serverPublic,
  newServer,
}) => {
  return (
    <Button
      isHome={isHome}
      downloader={downloader}
      serverPublic={serverPublic}
      newServer={newServer}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Discord" />}
      {newServer && <FiPlus />}
      {serverPublic && <FiCompass />}
      {downloader && <FiDownload />}
    </Button>
  );
};

export default ServerButton;
