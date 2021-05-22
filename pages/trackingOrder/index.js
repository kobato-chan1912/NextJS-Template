import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function TrackingOrder() {
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                <b>KIỂM TRA THÔNG TIN ĐĂNG KÝ</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" label="Tìm kiếm" />
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
            </Grid>
            {/* Cho nay` map ra nha */}
            <Grid item xs={12}>
              <div>
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
                        <Link style={{ cursor: "pointer" }}>Xem chi tiết</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
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
                        <Link style={{ cursor: "pointer" }}>Xem chi tiết</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
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
                        <Link style={{ cursor: "pointer" }}>Xem chi tiết</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div>
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
                        <Link style={{ cursor: "pointer" }}>Xem chi tiết</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
