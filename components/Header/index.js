import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Box, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ButtonMenu from "@components/ButtonMenu";

const useStyles = makeStyles((theme) => ({
  styleHeader: {
    top: 0,
    width: "100%",
    position: "fixed",
    backgroundColor: "#FFFFFF",
    paddingBottom: theme.spacing(1),
  },
  styleButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EA9B25",
    color: "#FFFFFF",
    borderColor: " #EA9B25",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  styleImage: {
    paddingRight: "1rem",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.styleHeader}>
      <Hidden smDown implementation="css">
        <Grid container justify="center">
          <Grid item xs={12} md={10} lg={8}>
            <Grid container>
              <Grid item xs={10}>
                <Box pt={2}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs="auto">
                      <img
                        src=""
                        alt="imageLogo"
                        className={classes.styleImage}
                      />
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
                <button className={classes.styleButton}>
                  <Typography><b>Kiểm tra đơn đăng ký</b></Typography>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
      </Hidden>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>Mobie</div>
        </Drawer>
      </Hidden>
    </div>
  );
}
