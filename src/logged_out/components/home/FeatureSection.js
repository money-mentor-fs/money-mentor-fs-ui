import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  isWidthUp,
  Toolbar,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FeatureCard from "./FeatureCard";
import WaveBorder from "../../../shared/components/WaveBorder";

const iconSize = 30;

const styles = (theme) => ({
  waveBorder: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(6),
  },
});

const features = [
  {
    color: "#00C853",
    headline: "Ratings Advisory",
    text:
      "Your organisation’s credit rating is fundamental to its financial strength. We  are one of the few advisors to provide you with dedicated Rating Advisory support. With an extensive capital market and rating agency background, our Rating Advisory team supports you in all ratings considerations, including first-time ratings, rating upgrade/defense, capital structure optimisation and debt capacity analysis.",
    // icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Debt Syndication",
    text:
      "MMFS acts as an advisor for arranging funds through various types of debt instruments and assists customers in strengthening their balance sheets by delivering capital structure alternatives designed for maximum profits. We at MMFS, build a strong long term relationship with customers by providing them timely and tailored solutions to fulfil their financial goals. MMFS has developed an extensive network of Financial Institutions and banks and built strong relationships with them which enable us to provide customized solutions to the customer requirement. To fulfil all the liquidity needs of the clients, we provide innovative solutions for both fund and non-fund based requirements creating tangible value for the customers. We assist our customers throughout the transaction process from initial strategy formulation to implementation.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Tax Advisory & Regulatory Services",
    text:
      "A crucial aspect of doing business in India is the ever-changing and complex nature of corporate taxation and regulatory compliances. It is important to understand the developments in regulatory and tax requirements, their impact on your business and use them strategically to your advantage. Keeping pace with new compliances and meeting them becomes a daunting task for most businesses. In a highly competitive landscape, aligning your tax strategy to your business strategy is a critical part of optimising profit margins.  Our Direct Tax Practice draws on experience and relationships across virtually all industries, to ensure that our clients derive the greatest tax benefit possible. Our services span the full spectrum of tax planning, compliance, and advisory, helping clients keep up with the tax laws and other regulatory changes. Our methods are both immersive and holistic; and everything is approached with awareness of the total tax and financial position.",
    // icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Accounting & Book Keeping",
    text:
      "Accounting is the process of tracking income and expenses. An accountant is responsible for offering strategic financial advice in addition to being aware of the company's financial situation.Bookkeeping services is the process of keeping records of financial transactions and preparing financial statements, such as balance sheets and income statements. In day-to-day operations, a bookkeeper would make sure employees are filing invoices and expenses correctly and handling payroll. Keeping clear business records is important. It helps you understand how much money is owed to you, how much you owe and will prevent you from making costly – not to mention illegal – errors. It can also help you monitor your business and identify sources of income.",
    // icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  // {
  //   color: "#DD2C00",
  //   headline: "Feature 5",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   // icon: <BarChartIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "0",
  // },
  // {
  //   color: "#64DD17",
  //   headline: "Feature 6",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "200"
  // },
  // {
  //   color: "#304FFE",
  //   headline: "Feature 7",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "0",
  //   smDelay: "0"
  // },
  // {
  //   color: "#C51162",
  //   headline: "Feature 8",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "200"
  // },
  // {
  //   color: "#00B8D4",
  //   headline: "Feature 9",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "0"
  // }
];

function FeatureSection(props) {
  const { width, classes = {} } = props;
  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-fluid">
          <Toolbar id="back-to-services" />
          <Typography variant="h3" align="center" className="mb-3">
            Services
          </Typography>
          <div className="container-fluid">
            <Grid container spacing={2}>
              {features.map((element) => (
                <Grid
                  item
                  xs={6}
                  md={6}
                  data-aos="zoom-in-up"
                  data-aos-delay={
                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                  }
                  key={element.headline}
                >
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <WaveBorder
        // upperColor={"#6784b3"}
        upperColor={"#476d70"}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
