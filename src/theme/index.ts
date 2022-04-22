/** @jsxImportSource theme-ui */
// eslint-disable-next-line import/named
import { Theme } from "@theme-ui/css";

const makeTheme = <ExactTheme extends Theme>(t: ExactTheme): ExactTheme => {
    return t;
};

const theme = makeTheme({
    breakpoints: ["1440px", "1920px", "1366px"],
});

export default theme;
// export type MyTheme = typeof theme;
