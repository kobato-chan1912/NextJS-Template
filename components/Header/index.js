import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import IconButton from "@material-ui/core/IconButton";
import Appbar from "./Appbar";
import { AppBar, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import HideOnScroll from "./HideOnScroll";
import Image from "next/image";

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <HideOnScroll slideProps={{ direction: "down" }}>
        <AppBar color="inherit">
          <Hidden mdDown>
            <Hidden smDown implementation="css">
              <Appbar {...props} />
            </Hidden>{" "}
          </Hidden>
          <Hidden lgUp>
            <Hidden mdUp>
              <Grid container>
                <Grid item xs="auto">
                  <IconButton onClick={handleDrawerToggle}>
                    <Menu />
                  </IconButton>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden mdUp implementation="js">
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <div style={{ padding: "1rem" }}>
                  <Image
                    src="/images/divanoLogo.svg"
                    alt="Picture of Logo"
                    width={150}
                    height={34}
                  ></Image>
                  <List component="nav">
                    <ListItem button>
                      <ListItemText primary="TRANG CHỦ" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="LOẠI SẢN PHẨM" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="DỰ ÁN ĐÃ LÀM" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="LIÊN HỆ CÔNG TY" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="BÀI VIẾT" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </Hidden>
          </Hidden>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
