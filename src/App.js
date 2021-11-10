import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { esES } from '@mui/material/locale';
import { Main } from './pages/main';

export const App = () => {
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
                                backgroundColor: "none"
                            },
                        }
                    }
                }
            }
        },
        esES
    )

    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    )
}