import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import { styled } from '@mui/styles';

import {
  Grid,
  Typography,
  Collapse,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableSortLabel,
  TableRow,
  TableFooter,
  TablePagination,
  Tooltip,
  Paper,
  Box,
  Avatar,
  LinearProgress,
} from '@mui/material';

const StyledTable = styled(Box)(({ theme }) => ({
  '& .MuiTable-root': {
    background: 'none',
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: '0 16px',
  },
  '& .MuiPaper-root': {
    background: 'none',
    boxShadow: 'none',
  },
  '& .MuiToolbar-root': {
    '@media (min-width: 900px)': {
      height: '60px',
      minHeight: '60px !important',
      boxSizing: 'border-box',
    },
  },
  '& .MuiTableRow-root.MuiTableRow-head': {
    background: 'none',
    '& .MuiButton-root': {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      marginLeft: '1px',
    },
    '&:hover': {
      background: 'none',
    },
  },
  '& .MuiTableCell-head:nth-child(1)': {
    width: '262px',
  },
  '& .MuiTableCell-head:nth-child(2)': {
    width: '211px',
  },
  '& .MuiTableCell-head:nth-child(6)': {
    width: '211px',
  },
  '& .MuiTableRow-root': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiTableCell-root': {
    background: 'none',
    borderBottom: 'none',
    '@media (min-width: 900px)': {
      height: '60px',
      minHeight: '60px !important',
      boxSizing: 'border-box',
    },
  },
  '& .MuiTableCell-root.MuiTableCell-body': {
    lineHeight: '1.25em',
    fontSize: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '@media (min-width: 900px)': {
      padding: 0,
    },
  },
  '& .MuiTableCell-root.MuiTableCell-body:first-child': {
    '@media (min-width: 900px)': {
      borderTopLeftRadius: '60px',
      borderBottomLeftRadius: '60px',
    },
  },
  '& .MuiTableCell-root.MuiTableCell-body:last-child': {
    '@media (min-width: 900px)': {
      borderTopRightRadius: '60px',
      borderBottomRightRadius: '60px',
    },
  },
  '& .MuiTableCell-root.MuiTableCell-head': {
    lineHeight: '1.25em',
    textTransform: 'uppercase',
    padding: 0,
  },
  '& .MuiAvatar-circular.MuiPaper-root': {
    background: '#333',
  },
}));

const numberFormater = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const formatNumber = {
  format: (val) => {
    if (!val) {
      return '--';
    }

    return numberFormater.format(val);
  },
};

export default function GrapePartnersView(props) {
  const [ready, setReady] = React.useState(false);
  const [partnerData, setPartnerData] = React.useState([]);

  function LinearProgressWithLabel(progressProps) {
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
            {...progressProps}
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
            {`${Math.round(progressProps.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const partnercolumns = [
    {
      name: 'name',
      label: 'Collection',
      options: {
        filter: true,
        sort: true,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          // eslint-disable-next-line
          console.log(tableMeta.rowData, '......');
          return (
            <Box sx={{ position: 'relative' }}>
              <Avatar
                alt={tableMeta.rowData[0]}
                src={`${tableMeta.rowData[1]}`}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: 60,
                  height: 60,
                  transform: 'translateY(-50%)',
                }}
              />
              <Typography
                sx={{ marginLeft: '64px', whiteSpace: 'pre-wrap', lineHeight: 1.25, p: 1 }}
              >
                {tableMeta.rowData[0]}
              </Typography>
            </Box>
          );
        },
      },
    },
    {
      name: 'image',
      label: 'Image',
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
    {
      name: 'community_strength',
      label: 'Grape Community Strength*',
      options: {
        filter: false,
        sort: true,
        display: true,
        width: 210,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <LinearProgressWithLabel value={value} />;
        },
      },
    },
    {
      name: 'tvl',
      label: 'TVL (SOL)**',
      options: {
        filter: false,
        sort: true,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return formatNumber.format(value);
        },
      },
    },
    {
      name: 'nft_average',
      label: 'NFT Average',
      options: {
        filter: false,
        sort: true,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return formatNumber.format(value);
        },
      },
    },
    {
      name: 'unique_holders',
      label: 'Unique Holders',
      options: {
        filter: false,
        sort: true,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return formatNumber.format(value);
        },
      },
    },
    {
      name: 'grape_holder_score',
      label: 'Grape Holder Score',
      options: {
        filter: false,
        sort: true,
        display: true,
        width: 210,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <LinearProgressWithLabel value={value} />;
        },
      },
    },
  ];

  const partneroptions = {
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
  };

  const getPartnerData = () => {
    fetch('/dataRaw.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // eslint-disable-next-line
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // eslint-disable-next-line
        setPartnerData(myJson);
        setReady(true);
      });
  };

  React.useEffect(() => {
    getPartnerData();
  }, []);

  return (
    <React.Fragment>
      {ready && (
        <StyledTable>
          <MUIDataTable
            title={''}
            data={partnerData}
            columns={partnercolumns}
            options={partneroptions}
          />
        </StyledTable>
      )}
    </React.Fragment>
  );
}
