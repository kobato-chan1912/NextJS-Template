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

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ffff",
        paddingBottom: "2rem",
        zIndex: 30,
        position: "sticky",
        paddingTop: "2rem",
      }}
    >
      <Hidden smDown implementation="css">
        <Appbar />
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
          onClose={handleDrawerToggle}
        >
          <div>Mobie</div>
        </Drawer>
      </Hidden>
    </div>
  );
}
