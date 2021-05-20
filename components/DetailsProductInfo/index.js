import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ReplayIcon from "@material-ui/icons/Replay";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import HomeIcon from "@material-ui/icons/Home";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import DialogCheckOrder from "components/DialogCheckOrder";

function DetailsProductInfo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box mt={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <b>TÊN SẢN PHẨM</b>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">
            <b>199.000 đ</b>
            <Typography
              color="textSecondary"
              component="span"
              variant="h6"
              style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
            >
              <del>283.000 đ</del>
            </Typography>
            <Typography
              color="error"
              component="span"
              variant="h6"
              style={{ paddingRight: "1rem" }}
            >
              <b>-30%</b>
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Đặc điểm sản phẩm:</b>
          </Typography>
        </Grid>
        {/* Chổ này, em map ra...a tạo mẫu */}

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <DoneAllIcon
              fontSize="large"
              style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
            />
            <Typography>
              Combo trải nghiệm đặc biệt, duy nhật 1 đơn hàng 1 sản phẩm
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            style={{
              backgroundColor: "rgb(234, 155, 37)",
              borderBottomRightRadius: "30px",
              borderBottomLeftRadius: "30px",
              height: "62px",
            }}
            onClick={handleClickOpen}
          >
            <Typography variant="h6" style={{ color: "white" }}>
              <b>Đăng ký nhận tư vấn</b>
            </Typography>
          </Button>
          <DialogCheckOrder open={open} onClose={handleClose} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <SettingsPhoneIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <LocalShippingIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <ReplayIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <AlarmOnIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <HomeIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                display="flex"
                alignItems="center"
                style={{ border: "1px solid #e0e0e0", padding: "4px" }}
              >
                <SentimentVerySatisfiedIcon
                  fontSize="large"
                  style={{ color: "rgb(234, 155, 37)", marginRight: "1rem" }}
                />
                <Typography>
                  Hotline <b>1900.27.27.37</b> hỗ trợ từ 8h30 - 22h00 mỗi ngày
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailsProductInfo;
