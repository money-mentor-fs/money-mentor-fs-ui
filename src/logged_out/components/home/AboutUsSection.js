import React, { Component, Fragment } from "react";
import {
  Avatar,
  Grid,
  isWidthUp,
  Toolbar,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import { toAbsoluteUrl } from "../../../app/utils/UtilMethods";

const styles = (theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
});
class AboutUsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, classes = {} } = this.props;
    return (
      <>
        <Toolbar id="back-to-about-us" />
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container-fluid" id="back-to-services">
            <Typography variant="h3" align="center" className="mb-3">
              Team MMFS
            </Typography>
            <div className="container-fluid">
              <Grid container>
                {[
                  {
                    color: "#00C853",
                    headline: "Dhaval Thakkar",
                    photo: toAbsoluteUrl("images/about_us/Dhaval_Thakkar.jpg"),
                    extra:
                      "Founding Partner at Money Mentor Financial Services LLP, Having 4.5+ years of experience in Credit Rating Agency in the Business Development team and also worked as a Relationship Manager in one of the leading Private Sector Bank in Working Capital Vertical.",
                    text: "Partner",
                    mdDelay: "0",
                    smDelay: "0",
                  },
                  {
                    color: "#00C853",
                    headline: "Rohit Thakker",
                    photo: toAbsoluteUrl("images/about_us/Rohit_Thakker.jpg"),
                    text: "Partner",
                    extra:
                      "Founding Partner at Money Mentor Financial Services LLP. Having 6+ years of experience in the areas of Accounting, GST, Income Tax, Auditing & Finance in various industries such as Logistics, Warehousing, Laboratory & Steel.",
                    mdDelay: "0",
                    smDelay: "0",
                  },
                  {
                    color: "#00C853",
                    headline: "Parth Thakker",
                    photo: toAbsoluteUrl(
                      "images/about_us/Parthkumar_Thakker.jpg"
                    ),
                    text: "Partner",
                    extra:
                      "Founding Partner at Money Mentor Financial Services LLP. Having over 4.5 years of experience in the area of Credit Rating and has rated over 60,000 crores of debt. He is a management graduate and has passed CFA level 2 exam.",
                    mdDelay: "0",
                    smDelay: "0",
                  },
                ].map((element) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={4}
                      data-aos="zoom-in-up"
                      data-aos-delay={
                        isWidthUp("md", width)
                          ? element.mdDelay
                          : element.smDelay
                      }
                      key={element.headline}
                    >
                      <Fragment>
                        <div
                          // We will set color and fill here, due to some prios complications
                          className={classes.iconWrapper}
                        >
                          {/*<img src={element.photo} />*/}
                          <Avatar
                            alt="Photo "
                            src={element.photo}
                            className={classes.large}
                          />
                        </div>
                        <Typography variant="h5" paragraph>
                          {element.headline}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="textSecondary"
                          style={{ textAlign: "justify" }}
                          className={"d-flex flex-row"}
                        >
                          {element.text}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          style={{ textAlign: "justify" }}
                          className={"d-flex flex-row mr-3"}
                        >
                          {element.extra}
                        </Typography>
                      </Fragment>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(AboutUsSection)
);
