import { createTheme, adaptV4Theme } from '@mui/material/styles';

// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that access to theme
//   }
// });

// function App() {
//   const classes = useStyles(); // ❌ If you have this, consider moving it inside a component that wrapped with <ThemeProvider>
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }

// declare module '@mui/material/styles' {
//   interface Theme {
//     AppHeader: {
//       height: React.CSSProperties['height']
//     },
//     AppGreyColor : {
//       line : React.CSSProperties['color'],
//       contrast : React.CSSProperties['color']
//     }
//   }
//   interface DeprecatedThemeOptions {
//     AppHeader?: {
//       height?: React.CSSProperties['height']
//     },
//     AppGreyColor? : {
//       line : React.CSSProperties['color'],
//       contrast : React.CSSProperties['color']
//     }
//   }
// }

const theme = createTheme({

  palette : {
    background : {
      default : "#ececec"
    }
  },

  // components: {
  //   MuiTypography: {
  //     defaultProps : {
  //       colorPrimary: {
  //         color: "black"
  //       }

  //     }
  //   },
  //   MuiButton : {
  //     contained : {
  //       backgroundColor : "black",
  //       color : "white"
  //     }
  //   },
  //   // Disable on hover effect 
  //   MuiIconButton : {
  //     root : {
  //       color : "inherit",
  //       "&:hover" : {
  //         backgroundColor : "transparent",
  //       }
  //     }
  //   }
  // }
});

export default theme;