import React from 'react';

import {
  Container,
  Descriptions,
  HashtagIcon,
  Title,
  Separator,
  Description,
  Options,
  Notification,
  PinnedMessages,
  Members,
  Input,
  InputIcon,
  Inbox,
  Help,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <Descriptions>
        <HashtagIcon />
        <Title>chat-livre</Title>
        <Separator />
        <Description>Canal aberto para conversas</Description>
      </Descriptions>
      <Options>
        <Notification />
        <PinnedMessages />
        <Members />
        <Input>
          <input type="text" placeholder="Buscar" />
          <InputIcon />
        </Input>
        <Inbox />
        <Help />
      </Options>
    </Container>
  );
};

export default ChannelInfo;
