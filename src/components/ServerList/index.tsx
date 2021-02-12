import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={7} />
      <ServerButton newServer />
      <ServerButton serverPublic />
      <Separator />
      <ServerButton downloader />
    </Container>
  );
};

export default ServerList;
