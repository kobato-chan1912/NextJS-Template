import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import {
    Box,
  Button,
  Card,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

export default function DialogCheckOrder(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              <b>ĐĂNG KÝ DỊCH VỤ</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Tên" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Số điện thoại" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={5}
              fullWidth
              variant="outlined"
              label="Yêu cầu thêm (Nếu có)"
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <Box p={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <img
                      src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                      alt="image"
                      width="100%"
                      height="auto"
                      style={{ borderRadius: "10px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md>
                    <Typography variant="h6">
                      <b>TÊN SẢN PHẨM</b>
                    </Typography>
                    <Typography variant="h6">
                      <b>199.000 đ</b>
                      <Typography
                        color="textSecondary"
                        component="span"
                        style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
                      >
                        <del>283.000 đ</del>
                      </Typography>
                      <Typography
                        color="error"
                        component="span"
                        style={{ paddingRight: "1rem" }}
                      >
                        <b>-30%</b>
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              style={{
                backgroundColor: "rgb(234, 155, 37)",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
                height: "62px",
                marginTop: "3rem",
              }}
            >
              <Typography variant="h6" style={{ color: "white" }}>
                <b>Đăng ký nhận tư vấn</b>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

DialogCheckOrder.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
