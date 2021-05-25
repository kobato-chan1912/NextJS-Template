import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const styleBanner = makeStyles(() => ({
  styleCard: {
    minWidth: "100%",
    height: "790px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    fontSize: "4em",

    cursor: "pointer",
    position: "relative",
    transition: "all 1s ease",
    "& > div": {
      position: "absolute",
      bottom: 0,
      left: '10%',
      width: "100%",
      height: 0,
      overflow: "hidden",
    },
    "&:hover": {
      opacity: 0.9,
      // transform: 'scale(1.5,1.5)',
      boxShadow: `0px 3px 20px 0px rgba(44, 101, 144, 0.3)`,
      "& > div": {
        height: "65%",
        transition: "all 1s ease",
        color: "white",
      },
    },
  },
}));

export default function CarouselBanner({ banners }) {
  const classes = styleBanner();

  return (
    <Carousel
      enableAutoPlay
      disableArrowsOnEnd={false}
      breakPoints={breakPoints}
      showArrows={false}
      itemPosition="flex-start"
    >
      {banners.map((e) => (
        <div
          key={`banner-${e.id}`}
          style={{ backgroundImage: `url(${e.img_url})` }}
          className={classes.styleCard}
        >
          <div>
            <Typography variant="h5" style={{ color: "white" }}>
              <b>Mẫu sản phẩm số 1</b>
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              ** Product prices with{" "}
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              ** Product prices with discount are available until the end of
              stock
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
                <b>4000000 Vnđ</b>{" "}
                <Typography component="span" style={{ color: "white" }}>
                  <del>7000000 vnđ</del>
                </Typography>
              </Typography>
              <Typography style={{ color: "white" }}>
                ** Product prices with discount are available until the end of
                stock
              </Typography>
            </Box>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
