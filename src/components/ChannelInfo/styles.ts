import styled from 'styled-components';
import {
  FiHash,
  FiUsers,
  FiBell,
  FiHelpCircle,
  FiInbox,
  FiSearch,
} from 'react-icons/fi';
import { RiPushpinLine } from 'react-icons/ri';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Descriptions = styled.div`
  display: flex;
  align-items: center;
`;

export const HashtagIcon = styled(FiHash)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Notification = styled(FiBell)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;

export const PinnedMessages = styled(RiPushpinLine)`
  width: 24px;
  height: 24px;
  margin-left: 14px;

  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;

export const Members = styled(FiUsers)`
  width: 24px;
  height: 24px;
  margin-left: 14px;

  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;

export const Input = styled.div`
  margin-left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--tertiary);
  padding: 4px 6px;
  border-radius: 4px;
  input {
    width: 106px;
    background-color: transparent;
    color: var(--white);
    &::placeholder {
      color: var(--gray);
    }
  }
`;

export const InputIcon = styled(FiSearch)`
  width: 16px;
  height: 16px;
  margin-left: 4px;

  color: var(--symbol);
`;

export const Inbox = styled(FiInbox)`
  width: 24px;
  height: 24px;
  margin-left: 14px;

  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;

export const Help = styled(FiHelpCircle)`
  width: 24px;
  height: 24px;
  margin-left: 14px;

  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;
