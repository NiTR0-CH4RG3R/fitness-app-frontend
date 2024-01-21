import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Details() {
  return (
    <div>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} >
            photo slide

        </Grid>
        <Grid item xs={12} >
            Description
        </Grid>

        </Grid>
        
      </Box>
      </div>
      <div
      style={{display:"flex",justifyContent:"center",}}
      >
        hello

      </div>
    </div>
  );
}
