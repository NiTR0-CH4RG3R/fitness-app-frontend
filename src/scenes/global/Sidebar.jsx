import React from 'react';
import { useState } from 'react';
import{ProSidebar,Menu,MenuItem} from 'react-pro-sidebar';
import { Box,IconButton,Typography,useTheme } from '@mui/material';
import { Link } from 'react-router-dom';





export default function () {
  const theme= useTheme();
  const [isCollapsed,setIsCollapsed]=useState(false);
  const [selected,isSelected]=useState("Dashbordd");

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner" :{
        backgroundColor:"#000 !important"
      },
      "& .pro-icon-wrapper":{
        backgroundColor:"transparent !important"
      }
    }}
    >

    </Box>
  );
}
