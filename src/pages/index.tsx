/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { jsx, Global } from '@emotion/react';
import { Heading, Text } from '@chakra-ui/react';

import DataTable from '../components/DataTable';

import styles from '../styles/home';
import globalStyles from '../styles/global';

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <Global styles={globalStyles} />

      <main css={styles.main}>
        <Heading textAlign="center" marginBottom="2rem" textTransform="uppercase">
          Partner Report
        </Heading>
        <div css={styles.dataTableContainer}>
          <DataTable />
        </div>
      </main>

      <footer css={styles.footer}>
        <Text>&copy; {new Date().getFullYear()} Grape Protocol</Text>
      </footer>
    </div>
  );
};

export default Home;
