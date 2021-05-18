import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const styleBanner = {
  minWidth: "100%",
  height: "790px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url("/images/product-1.jpg")`,
  objectFit: "cover",
  fontSize: "4em",
  paddingTop: "25%",
  paddingLeft: "10%",
};

export default function CarouselBanner({ products }) {
  return (
    <Carousel
      enableAutoPlay
      disableArrowsOnEnd={false}
      breakPoints={breakPoints}
      showArrows={false}
      itemPosition="START"
    >
      {products.map((e) => (
        <div style={{ ...styleBanner, backgroundImage: `url(${e.image_url})` }}>
          <Typography variant="h5" style={{ color: "white" }}>
            <b>{e.name_product}</b>
          </Typography>
          <Typography variant="h6" style={{ color: "white" }}>
            ** Product prices with{" "}
          </Typography>
          <Typography variant="h6" style={{ color: "white" }}>
            ** Product prices with discount are available until the end of stock
          </Typography>
          <Button variant="outlined" style={{ borderColor: "#EA9B25" }}>
            <Typography variant="h6" style={{ color: "#EA9B25" }}>
              Đăng ký ngay
            </Typography>
          </Button>
          &nbsp;
          <Button variant="outlined" style={{ borderColor: "white" }}>
            <Typography variant="h6" style={{ color: "white" }}>
              Nhận tư vấn
            </Typography>
          </Button>
          <Box mt={3}>
            <Typography variant="h6" style={{ color: "white" }}>
              <b>Chi phí thiết kế</b>
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
              <b>{e.main_price} Vnđ</b>{" "}
              <Typography component="span" style={{ color: "white" }}>
                <del>{e.virtual_price} vnđ</del>
              </Typography>
            </Typography>
            <Typography style={{ color: "white" }}>
              ** Product prices with discount are available until the end of
              stock
            </Typography>
          </Box>
        </div>
      ))}
    </Carousel>
  );
}
