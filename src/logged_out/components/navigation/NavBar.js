import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import {
  scrollToAboutUs,
  scrollToContactUs,
  scrollToHome,
  scrollToServices,
  toAbsoluteUrl,
} from "../../../app/utils/UtilMethods";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CallIcon from "@material-ui/icons/Call";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
    isImage = false,
  } = props;
  const menuItems = [
    {
      link: "/home",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
      onClick: () => {
        scrollToHome();
      },
    },
    {
      name: "Services",
      icon: <HomeIcon className="text-white" />,
      onClick: () => {
        scrollToServices();
      },
    },
    {
      name: "Our Team",
      icon: <PeopleAltIcon className="text-white" />,
      onClick: () => {
        scrollToAboutUs();
      },
    },
    {
      name: "Contact Us",
      icon: <CallIcon className="text-white" />,
      onClick: () => {
        scrollToContactUs();
      },
    },

    // { link: "/home", name: "About Us" },
    // { link: "/home", name: "Services" },
    // { link: "/home", name: "Contact Us" },
    // {
    //   link: "/home",
    //   name: "Home 2",
    //   icon: <HomeIcon className="text-white" />,
    // },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isImage && (
            <img
              src={toAbsoluteUrl("/images/Money_Mentor_Small.jpg")}
              alt={"Money Mentor Fs Logo"}
              style={{ height: "75px", width: "210px" }}
            />
          )}
          {!isImage && (
            <div>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                Money
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                MentorFs
              </Typography>
            </div>
          )}
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{
                          text: classes.menuButtonText,
                        }}
                        style={{ color: "#3b77a1" }}
                        onClick={() => {
                          element?.onClick();
                        }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    style={{ color: "#3b77a1" }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
  isImage: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
