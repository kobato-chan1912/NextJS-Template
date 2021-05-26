import {
  Box,
  Button,
  Card,
  createMuiTheme,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  styleBox: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(20),
    },
  },
  styleBoxDescription: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
}));

export default function TrackingOrder() {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", zIndex: "999", width: "100%" }}>
          <Header />
        </div>
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Box px={2} className={classes.styleBox}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center">
                        <b>KIỂM TRA THÔNG TIN ĐĂNG KÝ</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Tìm kiếm"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        style={{
                          backgroundColor: "rgb(234, 155, 37)",
                          borderBottomRightRadius: "10px",
                          borderBottomLeftRadius: "10px",
                          height: "62px",
                        }}
                      >
                        <Typography variant="h6" style={{ color: "white" }}>
                          <b>KIỂM TRA</b>
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Card className={classes.styleBoxDescription}>
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Tên sản phẩm</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Thời gian</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Trạng thái</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Thực hiện</b>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                    {/* Cho nay` map ra nha */}
                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Sản phẩm 1 - 100k giảm giá 50%</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>23h00 ngày 1/1/2020</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Đã trả lời</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography component="div">
                                <Link style={{ cursor: "pointer" }}>
                                  Xem chi tiết
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Sản phẩm 1 - 100k giảm giá 50%</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>23h00 ngày 1/1/2020</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Đã trả lời</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography component="div">
                                <Link style={{ cursor: "pointer" }}>
                                  Xem chi tiết
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Sản phẩm 1 - 100k giảm giá 50%</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>23h00 ngày 1/1/2020</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Đã trả lời</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography component="div">
                                <Link style={{ cursor: "pointer" }}>
                                  Xem chi tiết
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Sản phẩm 1 - 100k giảm giá 50%</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>23h00 ngày 1/1/2020</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Đã trả lời</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography component="div">
                                <Link style={{ cursor: "pointer" }}>
                                  Xem chi tiết
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>

                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <Box p={2}>
                          <Grid container spacing={2}>
                            <Grid item xs>
                              <Typography>
                                <b>Sản phẩm 1 - 100k giảm giá 50%</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>23h00 ngày 1/1/2020</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography>
                                <b>Đã trả lời</b>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography component="div">
                                <Link style={{ cursor: "pointer" }}>
                                  Xem chi tiết
                                </Link>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box my={8} className={classes.styleBoxDescription}>
              <Footer />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
