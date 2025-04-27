import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#2196F3",
      light: "#64B5F6",
      dark: "#1976D2",
    },
    secondary: {
      main: "#81D4FA",
      light: "#B3E5FC",
      dark: "#4FC3F7",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#757575",
    },
    background: {
      paper: "rgba(255, 255, 255, 0.85)",
      default: "#F5F7FA",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "64px",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderRightWidth: 2,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#0448af",
          color: "#fff",
          fontWeight: "bold",
          paddingLeft: "32px",
        },
      },
    },
  },
};
