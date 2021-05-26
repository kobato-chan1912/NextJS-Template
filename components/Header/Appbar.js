import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons
// core components
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ButtonMenu from "@components/ButtonMenu";
import Image from "next/image";
import ItemHeader from "./ItemHeader";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useRouter } from "next/router";

export default function Appbar({
  productCategories,
  projectCategories,
  postCategories,
}) {
  const router = useRouter();

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <Grid container justify="center">
        <Grid item xs={12} md={10} lg={8}>
          <Grid container>
            <Grid item xs={10}>
              <Box pt={2}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <Box borderRight={1} pr={1} style={{ cursor: "pointer" }}>
                      <Image
                        src="/images/divanoLogo.svg"
                        alt="Picture of Logo"
                        width={150}
                        height={34}
                      ></Image>
                    </Box>
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
                <Grid item xs="auto" style={{ paddingRight: "7rem" }}>
                  {/* <ButtonMenu label={<b>TRANG CHỦ</b>} /> */}
                  <ItemHeader
                    label={
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <b>TRANG CHỦ&nbsp;</b>
                        <ExpandMoreIcon />
                      </Box>
                    }
                    content={
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>Homepages</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>Homepages - 1</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>Homepages - 2</Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </Grid>
                <Grid item xs="auto" style={{ paddingRight: "9rem" }}>
                  {/* <ButtonMenu label={<b>LOẠI SẢN PHẨM</b>} /> */}
                  <ItemHeader
                    label={
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <b>LOẠI SẢN PHẨM&nbsp;</b>
                        <ExpandMoreIcon />
                      </Box>
                    }
                    content={
                      <Grid container spacing={2}>
                        {(productCategories || []).map((e) => (
                          <Grid key={`menu-product-${e.id}`} item xs={12}>
                            <Typography>{e.name_product_category}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                    }
                  />
                </Grid>
                <Grid item xs="auto" style={{ paddingRight: "8.5rem" }}>
                  {/* <ButtonMenu label={<b>DỰ ÁN ĐÃ LÀM</b>} /> */}
                  <ItemHeader
                    label={
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <b>DỰ ÁN ĐÃ LÀM&nbsp;</b>
                        <ExpandMoreIcon />
                      </Box>
                    }
                    content={
                      <Grid container spacing={2}>
                        {(projectCategories || []).map((e) => (
                          <Grid key={`menu-project-${e.id}`} item xs={12}>
                            <Typography>{e.name_project_category}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                    }
                  />
                </Grid>
                <Grid item xs="auto" style={{ paddingRight: "9.5rem" }}>
                  {/* <ButtonMenu label={<b>LIÊN HỆ CÔNG TY</b>} /> */}
                  <ItemHeader
                    label={
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <b>LIÊN HỆ CÔNG TY&nbsp;</b>
                        <ExpandMoreIcon />
                      </Box>
                    }
                    content={
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>Homepages</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>Homepages - 1</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>Homepages - 2</Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </Grid>
                <Grid item xs="auto" style={{ paddingRight: "7rem" }}>
                  {/* <ButtonMenu label={<b>BÀI VIẾT</b>} /> */}
                  <ItemHeader
                    label={
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <b>BÀI VIẾT&nbsp;</b>
                        <ExpandMoreIcon />
                      </Box>
                    }
                    content={
                      <Grid container spacing={2}>
                        {(postCategories || []).map((e) => (
                          <Grid key={`menu-post-${e.id}`} item xs={12}>
                            <Typography>{e.name_categories}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button
                style={{
                  width: "100%",
                  height: "170%",
                  cursor: "pointer",
                  backgroundColor: "#EA9B25",
                  color: "#FFFFFF",
                  borderColor: " #EA9B25",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                onClick={() => {
                  router.push("/trackingOrder");
                }}
              >
                <b>Kiểm tra đơn đăng ký</b>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
