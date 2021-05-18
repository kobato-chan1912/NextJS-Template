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
import { useRouter } from "next/router";
import { formatMoney } from "@util";

export default function ProductItem({ data }) {
  const router = useRouter();
  const { image_url, name_product, main_price, virtual_price } = data

  return (
    <CardShadowOnlyHover>
      <Card variant="outlined" style={{ position: "relative" }}>
        <CardMedia
          image={image_url}
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
                  <b>{name_product}</b>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <del>$ {formatMoney(virtual_price)}</del>
                  <Typography
                    variant="body2"
                    component="span"
                    color="textSecondary"
                  >
                    $ {formatMoney(main_price)}
                  </Typography>
                </Typography>
              </Box>
              <IconButton
                style={{ backgroundColor: "#3C5570" }}
                onClick={() => {
                  router.push("/detail");
                }}
              >
                <ArrowRightAltIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          </CardContent>
        </span>
      </Card>
    </CardShadowOnlyHover>
  );
}
