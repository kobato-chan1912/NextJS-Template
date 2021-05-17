import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";

export default function ProductItem() {
  return (
    <CardShadowOnlyHover>
      <Card variant="outlined" style={{ position: "relative" }}>
        <CardMedia
          image="/images/product-10.jpg"
          style={{
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            marginTop: "5%",
            marginLeft: "5%",
            backgroundColor: "#efb700",
            color: "white",
            padding: "2px",
            borderRadius: "4px",
          }}
        >
          -20%
        </span>
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "5%",
            marginRight: "5%",
            backgroundColor: "#000000",
            opacity: "0.3",
            color: "white",
            padding: "4px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FavoriteBorderIcon />
        </span>
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "15%",
            marginRight: "5%",
            backgroundColor: "#000000",
            opacity: "0.3",
            color: "white",
            padding: "4px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <VisibilityIcon />
        </span>
        <span>
          <CardContent>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h6">
                  <b>Mẫu sản phẩm 1</b>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <del>$ 500.000VNĐ</del>
                  <Typography
                    variant="body2"
                    component="span"
                    color="textSecondary"
                  >
                    $ 1.000.000VNĐ
                  </Typography>
                </Typography>
              </Box>
              <IconButton style={{ backgroundColor: "#3C5570" }}>
                <ArrowRightAltIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          </CardContent>
        </span>
      </Card>
    </CardShadowOnlyHover>
  );
}
