import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

export default function ExercisesCard({imagelink,title,content,id}) {

  const navi=useNavigate();
  return (
    <div>
         <Card sx={{ Width: "100%" }}>
              <CardMedia sx={{ height: 140 }} image={imagelink} title="ex1" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={navi(`/details/${id}`)}>Learn More</Button>
              </CardActions>
            </Card>
      
    </div>
  );
}
