/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { jsx } from '@emotion/react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

import dataRaw from '../dataRaw.json';

const DataTable = () => {
  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const rows: GridRowsProp = dataRaw.map((item, key) => Object.assign({}, item, { id: key }));

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Collection',
      minWidth: 200,
      flex: 1,
      renderCell: (params: any) => {
        return (
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <Avatar src={params.getValue(params.id, 'image')} alt={params.value} />
            <Typography sx={{ ml: 2, whiteSpace: 'pre-wrap', lineHeight: 1.25 }}>
              {params.value}
            </Typography>
          </Stack>
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
    { field: 'tvl', headerName: 'TVL (SOL)**', minWidth: 150, flex: 1 },
    { field: 'nft_average', headerName: 'NFTs Average', minWidth: 120, flex: 1 },
    { field: 'unique_holders', headerName: 'Unique Holders', minWidth: 150, flex: 1 },
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
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    flexGrow: 1,
    borderCollapse: 'separate',
    borderSpacing: '0 1rem',
    border: 'none',
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
      margin: '1rem 0',
      borderRadius: '60px',
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
    <StyledDataGrid
      autoPageSize
      rows={rows}
      columns={columns}
      disableSelectionOnClick
      onCellClick={() => false}
      components={{
        Footer: Footer,
      }}
    />
  );
};

export default DataTable;
