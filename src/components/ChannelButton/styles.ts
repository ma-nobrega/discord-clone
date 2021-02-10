import styled from 'styled-components';

import { FiHash, FiUserPlus, FiSettings } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
    &:last-child {
      display: none;
    }
    span {
      color: var(--senary);
      margin-left: 5px;
    }
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    div {
      display: flex;
      span {
        color: var(--white);
      }
    }
  }
`;
export const HashtagIcon = styled(FiHash)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;
export const InviteIcon = styled(FiUserPlus)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
export const SettingsIcon = styled(FiSettings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  margin-left: 6px;
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
