import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExercisesCard from "../../Components/Card/ExercisesCard";



export default function Exercises() {

  const [data,setData]=React.useState({
    imagelink:"",
    title:"",
    content:""
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <ExercisesCard
           imagelink={data.imagelink}
           title={data.title}
           content={data.content}
           
           />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
