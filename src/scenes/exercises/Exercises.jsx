import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExercisesCard from "../../Components/Card/ExercisesCard";

export default function Exercises() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getDataFromApi();
  }, []);

  function getDataFromApi() {}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((exercise, index) => (
            <Grid item xs={3} key={index}>
              <ExercisesCard
                id={exercise.id}
                imagelink={exercise.imagelink}
                title={exercise.title}
                content={exercise.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
