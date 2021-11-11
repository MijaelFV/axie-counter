import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { esES } from '@mui/material/locale';
import { MainScreen } from './pages/Main/MainScreen';

const App = () => {
    const theme = createTheme(
        {   
            palette: {
                mode: "light",
                primary: {
                    main: '#1F2937'
                },
                secondary: {
                    main: '#3e2807'
                },
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            color: "white",
                            ":hover": {
                                backgroundColor: "#3e2807"
                            }
                        }
                    }
                }
            },

        },
        esES
    )

    return (
        <ThemeProvider theme={theme}>
            <MainScreen />
        </ThemeProvider>
    )
}

export default App;