/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import Home from "./pages";

export default function App() {
    // eslint-disable-next-line no-console
    console.log(theme);

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}
