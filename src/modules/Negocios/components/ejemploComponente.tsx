import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import React from "react";
import { NegocioType } from "../types/NegocioType";
import { CardMapa } from "./CardMapa";

interface EjemploComponenteProps {
  negocio: NegocioType;
}

const EjemploComponente = () => {
  /*
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "40px",

        border: "3px solid rgba(0,0,0,0.5)",
        padding: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",

          alignItems: "center",
        }}
      >
        <Card sx={{ width: "90%", height: "400px" }}>
          <CardActionArea>
            <Box
              sx={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  marginTop: "15px",
                  objectFit: "cover",
                  width: "85%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "260px",
                }}
                image="https://img.freepik.com/vector-premium/logo-barberia-calavera_43623-577.jpg"
                alt="green iguana"
              />
            </Box>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "35px", fontFamily: "bold" }}
                >
                  Monckey Barber
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Av. Periferica nro 505
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  +591 8523714
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box sx={{ width: "30%" }}>
        <CardMapa longitud={-16.49766486937273} latitud={-68.13732119607931} />
      </Box>
    </Box>
  );
};

export default EjemploComponente;*/
};
