import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({
  image,
  title,
  details,
  bottomBorder,
  classes,
}) {
  return (
    <Card
      sx={{ maxWidth: 345, minWidth: 250 }}
      className={`shadow-2xl rounded-xl w-full z-10 ${classes} hover:opacity-75`}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
          className={`md:h-80`}
        />
        <div
          className={`h-2 w-full`}
          style={{ backgroundColor: `${bottomBorder}` }}
        ></div>
        <CardContent className={` my-5 bg-white`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className=" text-lg text-[#7393CF]"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
