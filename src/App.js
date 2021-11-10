import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { esES } from '@mui/material/locale';
import { MainScreen } from './pages/Main/MainScreen';

const App = () => {
    const theme = createTheme(
        {   
            palette: {
                mode: "dark",
                primary: {
                    main: '#FFFFFF'
                },
                secondary: {
                    main: '#0b101f'
                },
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            ":hover": {
                                backgroundColor: "#be9770"
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