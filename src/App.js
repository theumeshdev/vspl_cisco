import React from "react";
import { Box, Button, Slider, Typography, Grid, Switch } from "@mui/material";


const App = () => {
  const handleCallAction = (action) => {
    alert(`Call ${action}`);
  };

  const handleVolumeChange = (event, newValue) => {
    console.log(`Volume set to: ${newValue}`);
  };

  const toggleSetting = (event) => {
    console.log(`${event.target.name} toggled to: ${event.target.checked}`);
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Cisco Touch Panel UI
      </Typography>

      {/* Call Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          marginBottom: 3,
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => handleCallAction("Started")}
        >
          Start Call
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleCallAction("Ended")}
        >
          End Call
        </Button>
      </Box>

      {/* Volume Control */}
      <Box sx={{ width: "80%", marginBottom: 3 }}>
        <Typography variant="h6">Volume Control</Typography>
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onChange={handleVolumeChange}
        />
      </Box>

      {/* Device Settings */}
      <Box sx={{ width: "80%", marginBottom: 3 }}>
        <Typography variant="h6">Device Settings</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Microphone</Typography>
          </Grid>
          <Grid item xs={6}>
            <Switch name="Microphone" onChange={toggleSetting} />
          </Grid>
          <Grid item xs={6}>
            <Typography>Camera</Typography>
          </Grid>
          <Grid item xs={6}>
            <Switch name="Camera" onChange={toggleSetting} />
          </Grid>
        </Grid>
      </Box>

      {/* Content Sharing */}
      <Button
        variant="outlined"
        onClick={() => alert("Content Sharing Started")}
      >
        Share Content
      </Button>
    </Box>
  );
};

export default App;
