import React from "react";
import { Html } from "@react-three/drei";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
// eslint-disable-next-line import/named
import { HtmlProps } from "@react-three/drei/web/Html";

export default function CanvasHtmlWithThemeProvider(
    props: HtmlProps,
): JSX.Element {
    return (
        <Html {...props}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </Html>
    );
}
