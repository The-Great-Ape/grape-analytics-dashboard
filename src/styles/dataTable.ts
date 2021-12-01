import { css } from '@emotion/react';

const dataTableStyles = {
  table: css`
    border-collapse: separate;
    border-spacing: 0 1rem;
    max-width: 1280px;
    min-width: 960px;
    margin: 0 auto;
  `,
  tableRow: css`
    & > td {
      background-color: rgba(0, 0, 0, 0.5);
    }
    & > td:first-of-type {
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
    }
    & > td:last-of-type {
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
    }
  `,
};

export default dataTableStyles;
