import React from 'react'
import MapLeft from './MapLeft';
import MapRight from './MapRight'

import {
  Box,
  Grid,
} from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <>
      <Box style = {{marginTop: '1rem', padding: '0 2rem'}} >
        <Grid container style = {{marginLeft: '10px'}}>
          <Grid item xs={7}>
          <MapLeft />
          </Grid>
          <Grid item xs={5}>
          <MapRight />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainContent;
