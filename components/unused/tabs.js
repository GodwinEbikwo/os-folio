import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Tabs = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === '1' || tab == null;
  const isTabTwo = tab === '2';
  const isTabThree = tab === '3';

  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: '/test', query: { tab: '1' } }}>
            <a>Selected work</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: '/test', query: { tab: '2' } }}>
            <a>About me</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: '/test', query: { tab: '3' } }}>
            <a>Contact</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <>This is tab one content</>}
        {isTabTwo && <>This is tab two content</>}
        {isTabThree && <>This is tab three content</>}
      </TabBody>
    </TabContainer>
  );
};

export default withRouter(Tabs);

export const TabContainer = styled.div`
  margin-top: var(--spacer);
  height: auto;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const TabHead = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid var(--border-color);
`;

export const Tab = styled.div`
  padding: 0.5rem 3rem;
  text-transform: uppercase;
  background: ${({ selected }) => (selected ? 'black' : 'transparent')};

  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }

  * {
    mix-blend-mode: difference;
    color: white;
  }
`;

export const TabBody = styled.div`
  height: 100%;
  padding: 2em;
`;
