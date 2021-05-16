import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ButtonMenu from "@components/ButtonMenu";
import Image from "next/image";

export default function Appbar() {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={8}>
        <Grid container>
          <Grid item xs={10}>
            <Box pt={2}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs="auto">
                  <Image
                    src="/images/divanoLogo.svg"
                    alt="Picture of Logo"
                    width={150}
                    height={34}
                  ></Image>
                </Grid>
                <Grid item xs={true}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs="auto">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            {/* ----------------------- */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs="auto">
                <ButtonMenu label={<b>TRANG CHỦ</b>} />
              </Grid>
              <Grid item xs="auto">
                <ButtonMenu label={<b>LOẠI SẢN PHẨM</b>} />
              </Grid>
              <Grid item xs="auto">
                <ButtonMenu label={<b>DỰ ÁN ĐÃ LÀM</b>} />
              </Grid>
              <Grid item xs="auto">
                <ButtonMenu label={<b>LIÊN HỆ CÔNG TY</b>} />
              </Grid>
              <Grid item xs="auto">
                <ButtonMenu label={<b>BÀI VIẾT</b>} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                backgroundColor: "#EA9B25",
                color: "#FFFFFF",
                borderColor: " #EA9B25",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <b>Kiểm tra đơn đăng ký</b>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
