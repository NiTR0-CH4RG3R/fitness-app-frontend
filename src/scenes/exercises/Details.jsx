import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import YouTube from "react-youtube";

export default function Details() {
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              photo slide
            </Grid>
            <Grid item xs={12}>
              Description
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <YouTube
          videoId="AWl3WBAU4h8"
          opts={{ width: "560", height: "315" }}
        />
      </div>
      
      
    </div>
  );
}
