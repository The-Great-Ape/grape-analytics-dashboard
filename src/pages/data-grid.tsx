/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import type { NextPage } from 'next';
import { jsx } from '@emotion/react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DataTable from '../components/DataTable';

const Home: NextPage = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          component="main"
          sx={{ pt: 8, height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: 'center', mb: 4, textTransform: 'uppercase' }}
          >
            Partner Report
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <DataTable />
          </Box>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container sx={{ maxWidth: 'sm' }}>
          <Typography sx={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Grape Protocol
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Home;
