import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import darkTheme from "./app/dark.theme";
import { AuthContext } from "./app/auth/auth-context";
import { ReactElement } from "react";

interface ProvidersProps {
  children: ReactElement[];
  authenticated: boolean;
}

export default function Providers({ children, authenticated }: ProvidersProps) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
                <AuthContext.Provider value={ authenticated }>
                    {children}
                </AuthContext.Provider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}