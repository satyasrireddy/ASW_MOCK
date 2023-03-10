import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tooltip,
<<<<<<< HEAD
  Typography,
  useMediaQuery
=======
  Typography
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Slider from "react-slick";
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { default as allcustomPCData, default as customPcs } from "../../data/AllCustomProducts.json";
import { cpuCoolers, graphicsCards, hddStorages, memoryTypes, motherboards, powerSupplies, processors, ssdNvmeStorages, ssdStorages } from "./SelectDatas";

<<<<<<< HEAD
import { styled, useTheme } from "@mui/material/styles";
=======
import { styled } from "@mui/material/styles";
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a

import { tooltipClasses } from "@mui/material/Tooltip";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 200,
  },
});

const CustomFormLabel = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SliderArrow = (props) => {
  const { onClick, type, className } = props
  return (
    <Box
      sx={{
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText', padding: '8px',
        borderRadius: '50%'},
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 40 }} /> : <IconArrowBack sx={{ fontSize: 40 }} />}
    </Box>
  )
}

function AmdCustomPCItemList() {
<<<<<<< HEAD
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
=======
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
  const [selectedPc, setSelectedPc] = useState(allcustomPCData[0]);
  const [processor, setProcessor] = useState("AMD RYZEN 5 3600 EIGHT CORE CPU (3.6GHZ) 36MB CACHE");
  const [motherboard, setmotherboard] = useState("ASUS PRIME H610M-K D4 (12TH GEN MATX DDR4 LGA 1700 USB 3.2 RGB READY)");
  const [memoryType, setmemoryType] = useState("8GB CORSAIR VENGEANCE LPX 3200MHZ DDR4 (1X 8GB)");
  const [graphicsCard, setgraphicsCard] = useState("ASUS PH RTX 3050 8G ??? 1 HDMI 3 DP");
  const [hddStorage, sethddStorage] = useState("NOT REQUIRED");
  const [ssdStorage, setssdStorage] = useState("NOT REQUIRED");
  const [ssdNvmeStorage, setssdNvmeStorage] = useState("NO SELECTION");
  const [powerSupply, setpowerSupply] = useState("NO SELECTION");
  const [cpuCooler, setcpuCooler] = useState("NO SELECTION");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
<<<<<<< HEAD
    slidesToShow: matchMobileView? 2: 7,
    slidesToScroll: matchMobileView? 2: 7,
=======
    slidesToShow: 7,
    slidesToScroll: 7,
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
    initialSlide: 0,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  };
  const featureCustomization = <Box
<<<<<<< HEAD
  xs={12} sm={7} lg={7}
=======
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
    sx={{
      p: 2,
      backgroundColor: "background.paper",
      borderRadius: 4,
      transition: (theme) => theme.transitions.create(["box-shadow"]),
      "&:hover": {
        boxShadow: 2,
      },
    }}
  >
<<<<<<< HEAD
    <FormControl padding={2} fullWidth>
=======
    <FormControl padding={2}>
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
      <CustomFormLabel>PROCESSOR (CPU)</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={processor}
        onChange={(e) => setProcessor(e.target.value)}
      >
        {processors.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>MOTHERBOARD</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={motherboard}
        onChange={(e) => setmotherboard(e.target.value)}
      >
        {motherboards.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>MEMORY (RAM)</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={memoryType}
        onChange={(e) => setmemoryType(e.target.value)}
      >
        {memoryTypes.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>GRAPHICS CARD</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={graphicsCard}
        onChange={(e) => setgraphicsCard(e.target.value)}
      >
        {graphicsCards.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>HDD STORAGE</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={hddStorage}
        onChange={(e) => sethddStorage(e.target.value)}
      >
        {hddStorages.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>SSD STORAGE</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={ssdStorage}
        onChange={(e) => setssdStorage(e.target.value)}
      >
        {ssdStorages.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>SSD (NVME) STORAGE</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={ssdNvmeStorage}
        onChange={(e) => setssdNvmeStorage(e.target.value)}
      >
        {ssdNvmeStorages.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>POWER SUPPLY</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={powerSupply}
        onChange={(e) => setpowerSupply(e.target.value)}
      >
        {powerSupplies.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
      <CustomFormLabel>CPU COOLER</CustomFormLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={cpuCooler}
        onChange={(e) => setcpuCooler(e.target.value)}
      >
        {cpuCoolers.map((item, index) => <MenuItem value={item}>
          {item}
        </MenuItem>
        )}
      </Select>
    </FormControl>
  </Box>;
  return (
    <Box>
      <Stack spacing={2} padding={4}>
        <Slider {...settings} className="custom-pc">
          {customPcs?.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Box
                sx={{
                  px: 1,
                  py: 4,
                }}
              >
                <Box
                  sx={{
                    p: 2,
<<<<<<< HEAD
                    backgroundColor: "gray",
=======
                    backgroundColor: "background.paper",
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
                    borderRadius: 4,
                    transition: (theme) =>
                      theme.transitions.create(["box-shadow"]),
                    "&:hover": {
                      boxShadow: 2,
                    },
                  }}
                >
                  <CustomWidthTooltip title={item.title} placement="top">
                    <Box
                      sx={{
                        lineHeight: 0,
                        overflow: "hidden",
                        borderRadius: 3,
                        mb: 2,
                      }}
                    >
                      <img
                        src={require("../../assets/img/PCS/" + item.cover)}
<<<<<<< HEAD
                        width={matchMobileView? 150:200}
                height={matchMobileView? 150:200}
=======
                        width={200}
                        height={200}
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
                        alt={"Products " + item.id}
                        onClick={() => setSelectedPc(item)}
                      />
                    </Box>
                  </CustomWidthTooltip>
                </Box>
              </Box>
            </Grid>
          ))}
        </Slider>
      </Stack>
      <Grid container spacing={2} padding={4}>
<<<<<<< HEAD
        <Grid item xs={12} sm={5} lg={5}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "gray",
=======
        <Grid item xs={6}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "background.paper",
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
              borderRadius: 4,
              transition: (theme) => theme.transitions.create(["box-shadow"]),
              "&:hover": {
                boxShadow: 2,
              },
            }}
          >
            <Item
              padding={2}
              sx={{
                lineHeight: 0,
                overflow: "hidden",
                borderRadius: 3,
                m: 4,
              }}
            >
              <img
                src={require("../../assets/img/PCS/" + selectedPc.cover)}
<<<<<<< HEAD
                width={matchMobileView? 280:400}
                height={matchMobileView? 300:500}
=======
                width={400}
                height={500}
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
                alt={"Products " + selectedPc.id}
              />
            </Item>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h2" color="primary.main">
                  {"??" + selectedPc.price}
                </Typography>
              </Box>
<<<<<<< HEAD
              <Button variant="contained" sx={{fontSize: 24}} endIcon={<ArrowForward sx={{fontSize: 40}} />}>
=======
              <Button variant="contained" size="large" endIcon={<ArrowForward />}>
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
                Proceed
              </Button>
            </Box>
          </Box>
        </Grid>
<<<<<<< HEAD
        <Grid item xs={12} sm={7} lg={7}>
=======
        <Grid item xs={6}>
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
          {featureCustomization}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AmdCustomPCItemList;
