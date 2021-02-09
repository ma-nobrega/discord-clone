import styled from 'styled-components';

import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 16px;
  background-color: var(--secondary);
  height: 48px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 15px;
  font-weight: bold;

  color: var(--white);
`;

export const ExpandIcon = styled(FiChevronDown)`
  width: 20px;
  height: 20px;

  color: var(--white);
  cursor: pointer;
`;
