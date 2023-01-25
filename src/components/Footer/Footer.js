import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";

//IMPORTING SVG'S
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import styles from "./styles";

const shops = [
  { title: "Intel Custom PCs", link: "/intel_custom_pc" },
  { title: "AMD Custom PCs", link: "/intel_custom_pc" },
  { title: "PreBuilts", link: "/pre_builts" },
  { title: "Terms Of Service", link: " " },
  { title: "Refund Policy", link: " " },
];

const companies = ["About Us", "Contact Us", "News & Updates"];

const helps = [
  "Returns",
  "Terms and Conditions",
  "Finance and Payment",
  "Delivery Information",
  "Warranty Information",
  "Privacy & Cookies",
];

const follow = [
  { title: "instagram", img: <InstagramIcon sx={styles.icon} /> },
  { title: "twitter", img: <TwitterIcon sx={styles.icon} /> },
  { title: "facebook", img: <FacebookIcon sx={styles.icon} /> },
];

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              Shop
            </Typography>
            <List>
              {shops.map((item, index) => {
                return (
                  <Link key={index} href={item.link} underline="none">
                    <ListItem sx={styles.itemList} key={index}>
                      {item.title}
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              companies
            </Typography>
            <List>
              {companies.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              Need Help
            </Typography>
            <List>
              {helps.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              follow
            </Typography>
            <List>
              {follow.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {typeof item.img === "string" ? (
                      <Box component="img" src={item.img} />
                    ) : (
                      item.img
                    )}
                    <Box component="span" sx={{ marginLeft: "5px" }}>
                      {item.title}
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
