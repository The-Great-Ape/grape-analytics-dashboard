/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

import { formatNumber } from '../utils/utils';

import dataRaw from '../../public/dataRaw.json';

const DataTable = () => {
  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', pr: 2 }}>
        <Box sx={{ width: '100%', height: '1rem' }}>
          <LinearProgress
            sx={{
              height: '1rem',
              borderTopLeftRadius: '1rem',
              borderBottomLeftRadius: '1rem',
              '& .MuiLinearProgress-bar': {
                background:
                  'linear-gradient(276deg, #0FE2DF 5.96%, #8870F2 86.08%, #9E5BF6 96.45%)',
                borderRadius: '1rem',
              },
            }}
            variant="determinate"
            {...props}
          />
        </Box>
        <Box
          sx={{
            minWidth: 50,
            backgroundColor: 'black',
            textAlign: 'center',
            p: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const rows: GridRowsProp = dataRaw.map((item, key) => Object.assign({}, item, { id: key }));

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Collection',
      minWidth: 250,
      flex: 1,
      renderCell: (params: any) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={params.getValue(params.id, 'image')}
              alt={params.value}
              sx={{
                position: 'absolute',
                left: -10,
                top: '50%',
                width: 60,
                height: 60,
                transform: 'translateY(-50%)',
              }}
            />
            <Typography sx={{ marginLeft: 7, whiteSpace: 'pre-wrap', lineHeight: 1.25, p: 1 }}>
              {params.value}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: 'community_strength',
      headerName: 'Grape Community Strength*',
      minWidth: 210,
      flex: 1,
      renderCell: (params: any) => {
        return <LinearProgressWithLabel value={params.value} />;
      },
    },
    {
      field: 'tvl',
      headerName: 'TVL (SOL)**',
      minWidth: 150,
      flex: 1,
      renderCell: (params: any) => {
        return formatNumber.format(params.value);
      },
    },
    {
      field: 'nft_average',
      headerName: 'NFTs Average',
      minWidth: 120,
      flex: 1,
      renderCell: (params: any) => {
        return formatNumber.format(params.value);
      },
    },
    {
      field: 'unique_holders',
      headerName: 'Unique Holders',
      minWidth: 150,
      flex: 1,
      renderCell: (params: any) => {
        return formatNumber.format(params.value);
      },
    },
    {
      field: 'grape_holder_score',
      headerName: 'Grape Holder Score',
      minWidth: 200,
      flex: 1,
      renderCell: (params: any) => {
        return <LinearProgressWithLabel value={params.value} />;
      },
    },
  ];

  function Footer() {
    return (
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography>* Percentage of total NFTs held by the community</Typography>
        <Typography>** The current floor price * number of NFTs held by community</Typography>
        <Typography>
          *** Percentage of verified holders against overall holders who are members of the
          community
        </Typography>
      </Box>
    );
  }

  const StyledDataGrid = styled(DataGrid)(() => ({
    border: 'none',
    '& .MuiDataGrid-virtualScrollerContent': {
      paddingBottom: 10 * 16, // HACK: to compensate space between rows (total rows * row's margin bottom size).
      boxSizing: 'content-box',
    },
    '& .MuiDataGrid-columnHeader': {
      textTransform: 'uppercase',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize: '0.75rem',
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-columnHeader:focus-within,& .MuiDataGrid-columnHeader:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-row': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 60,
      marginBottom: 16, // HACK: Row spacing.
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    '& .MuiDataGrid-cell': {
      border: 0,
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeaders': {
      border: 0,
    },
  }));

  return (
    <Fragment>
      <StyledDataGrid
        autoHeight
        rowHeight={60}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        onCellClick={() => false}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      <Footer />
    </Fragment>
  );
};

export default DataTable;
