import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function OutlinedCard({ data }) {
  let cardCss = {
    width: "100%",
    backgroundColor: "red",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgb(81, 145, 213), rgb(211, 18, 151))",
    
  };
  return (
    <Card sx={cardCss}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="white">
            {data.body.slice(0, 250)}
            {/* {data.body} */}
          </Typography>
          <Box position={"relative"}>
            <Box sx={{ minWidth: 275 }} display="flex" mt={"10px"}>
              {data.tags.map((e, i) => {
                return (
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, mr: 1.5, fontWeight: "800" }}
                    key={i}
                  >
                    {e.toUpperCase()}
                  </Typography>
                );
              })}
            </Box>
            <Typography variant="body2" color="white">
              Reactions: {data.reactions}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
