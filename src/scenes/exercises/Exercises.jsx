import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExercisesCard from "../../Components/Card/ExercisesCard";



export default function Exercises() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <ExercisesCard
           imagelink="link"
           title="Exercises1"
           content="Add here content"
           
           />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
