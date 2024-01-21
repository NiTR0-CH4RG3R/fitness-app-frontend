import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import YouTube from "react-youtube";
import Carousel from "react-material-ui-carousel";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';



export default function Details() {

  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState(1);

  const images = [
    "data:image/jpeg;base64,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",
    "data:image/png;base64,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",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
  ];
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{ height: "20rem", padding: "0 20% 0 20%" }}>
                <Carousel style={{ width: "100%" }}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "20rem",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Carousel>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: "2rem" }}>
                <p>
                  Exercise is defined as any movement that makes your muscles
                  work and requires your body to burn calories. There are many
                  types of physical activity, including swimming, running, and
                  walking, to name a few. Being active has been shown to have
                  many health benefits, both physically and mentally
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <YouTube videoId="AWl3WBAU4h8" opts={{ width: "560", height: "315" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" ,padding:"2rem 0 0 0"}}>
      <FormControl>
      <FormLabel>Your comment</FormLabel>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button sx={{ ml: 'auto' }}>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </FormControl>
      </div>
      <div style={{ display: "flex", justifyContent: "center" ,padding:"1rem"}}>
        
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
      </div>
    </div>
  );
}
