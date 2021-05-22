import React from "react";
import {
  Box,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";
import { useRouter } from "next/router";
import { formatMoney } from "@util";
import CardHoverShowAnimationProduct from "components/CardHoverShowAnimationProduct";

export default function ProductItem({ data }) {
  const router = useRouter();
  const { image_url, name_product, main_price, virtual_price } = data;

  return (
    <CardShadowOnlyHover>
      <CardHoverShowAnimationProduct
        image={image_url}
        span1="-20%"
        span2={<FavoriteBorderIcon />}
        span3={<VisibilityIcon />}
        content={
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs>
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
              </Grid>
              <Grid item xs="auto">
                <IconButton
                  style={{ backgroundColor: "#3C5570" }}
                  onClick={() => {
                    router.push("/detail");
                  }}
                >
                  <ArrowRightAltIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        }
      />
    </CardShadowOnlyHover>
  );
}
