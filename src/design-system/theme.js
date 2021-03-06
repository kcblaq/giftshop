// import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { amber , grey, deepOrange} from "material-ui-colors";

let theme = createTheme({
    palette:{
        primary:{
            main: '#002D50',
            light:'#FFFFFF',
            def:'#FFFFFF',
        },

        secondary:{
            main:'#FFD7D7'
        },
        mode: 'light'
    },
   
    components:{
        MuiButton:{
            defaultProps:{
                variant:'contained',
              
            }
        },
        TextFields:{
            defaultProps:{
                variant:'outlined',
              
            }
        }
    },
    
    typography: {
        h3: {
          fontSize: '3rem',
          lineHeight: 1,
        },
        h5: {
          fontSize: '1.5rem',
          lineHeight: 1.3333333333,
        }},
        fontFamily: [
            'IBM Plex Serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
})
theme = responsiveFontSizes(theme)

export default theme