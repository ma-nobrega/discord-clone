import React from 'react';
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Matheus Nobrega" />
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
