import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#35113a"
        }
    },
    spacing: 4,
    typography: {
        fontFamily: [
            'Arial',
            'Helvetica',
            'sans-serif'
        ].join(','),
        fontSize: 16,
        fontStyle: 'italic'
    }
})