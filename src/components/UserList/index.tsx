import React from 'react';
import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
  nickname?: string;
  isBot?: boolean;
  isOnline?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, isOnline }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} isOnline={isOnline} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Matheus Nobrega" isOnline />
      <Role>Offline - 18</Role>
      <UserRow nickname="Matheus" isBot />
      <UserRow nickname="Felipe" />
      <UserRow nickname="Indio" />
      <UserRow nickname="Alex" />
      <UserRow nickname="Eric" />
      <UserRow nickname="Lucas" />
      <UserRow nickname="William" />
      <UserRow nickname="Jhonatan" />
      <UserRow nickname="Nicolas" />
      <UserRow nickname="Felipe" />
      <UserRow nickname="Indio" />
      <UserRow nickname="Alex" />
      <UserRow nickname="Eric" />
      <UserRow nickname="Lucas" />
      <UserRow nickname="William" />
      <UserRow nickname="Jhonatan" />
      <UserRow nickname="Nicolas" />
    </Container>
  );
};

export default UserList;
