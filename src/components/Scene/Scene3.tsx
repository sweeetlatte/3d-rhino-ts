/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import CanvasHtmlWithThemeProvider from "../../containers/CanvasHtmlWithThemeProvider";

import "./scene.css";

interface Props {
    active: number;
    setActive: (active: number) => void;
}

export function Scene3({ active, setActive }: Props) {
    return (
        <CanvasHtmlWithThemeProvider>
            <Flex
                sx={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    position: "absolute",
                    left: "50vw",
                    top: "-50vh",
                    width: "43.9vw",
                    height: "100vh",
                    animation:
                        active === 2 ? "slideLeft 966ms both 1500ms" : "",
                    backgroundColor: "#A9B2A0",
                    padding: ["1.5rem", null, "2.25rem 2rem"],
                }}
            >
                {/* 9.800 -> 11.300: animation xong chính diện = 1500
                -> 12.266: animation info bg xong
                -> 12.133: 01. rhino hiện ra -> 12.666 xong
                11.866 -> 12.866: title xong
                11.966 -> 13.700: text xong */}
                <Flex
                    sx={{
                        justifyContent: "space-between",
                        fontSize: ["0.875rem", null, "1.25rem"],
                        fontFamily: "sans-serif",
                        borderBottom: "1px solid black",
                        paddingBottom: ["1.75rem", null, "2.25rem"],
                    }}
                >
                    <div
                        sx={{
                            animation:
                                active === 2
                                    ? "transform 533ms both 2333ms"
                                    : "",
                        }}
                    >
                        01. Rhino Horn
                    </div>
                    <div
                        sx={{
                            animation:
                                active === 2
                                    ? "transform 533ms both 2599ms"
                                    : "",
                        }}
                        onClick={() => {
                            setActive(3);
                        }}
                    >
                        Close
                    </div>
                </Flex>
                <div
                    sx={{
                        paddingLeft: ["4.2rem", null, "5.5rem"],
                        paddingRight: [null, null, "5.5rem"],
                        paddingTop: ["15vh", null, "15.5vh"],
                        textAlign: "left",
                    }}
                >
                    <div
                        className={active === 2 ? "text-slide-left" : ""}
                        sx={{
                            fontSize: ["70px", null, "100px"],
                            lineHeight: ["4.1rem", null, "5.75rem"],
                            letterSpacing: ["-1px", null, "-3px"],
                            fontFamily: "PlayfairDisplay",
                        }}
                    >
                        <span sx={{ "--i": 0 }}>THERE ARE 5&nbsp;</span>
                        <span sx={{ "--i": 1 }}>SPECIES OF&nbsp;</span>
                        <span sx={{ "--i": 2 }}>RHINO...</span>
                    </div>
                    <div
                        className={active === 2 ? "text-slide-left" : ""}
                        sx={{
                            fontFamily: "sans-serif",
                            fontSize: ["0.875rem", null, "1.25rem"],
                            paddingTop: ["3rem", null, "4.2rem"],
                            letterSpacing: "-0.4px",
                            lineHeight: 1.8,
                        }}
                    >
                        <span sx={{ "--i": 3 }}>
                            ...Two African – black and white rhinos – and three
                            Asian – greater&nbsp;
                        </span>
                        <span sx={{ "--i": 3.5 }}>
                            one-horned, Sumatran and Javan rhinos. Three of
                            these (black,&nbsp;
                        </span>
                        <span sx={{ "--i": 4 }}>
                            Sumatran and Javan) are listed as ‘critically
                            endangered’ by IUCN&nbsp;
                        </span>
                        <span sx={{ "--i": 4.5 }}>
                            – there are thought to be fewer than 70 Javan and
                            100 Sumatran&nbsp;
                        </span>
                        <span sx={{ "--i": 5 }}>
                            rhinos left in the wild, meaning their populations
                            are truly&nbsp;
                        </span>
                        <span sx={{ "--i": 5.5 }}>
                            under threat of extinction.&nbsp;
                        </span>
                    </div>
                </div>
                <Flex
                    sx={{
                        alignItems: "end",
                        justifyContent: "space-between",
                        fontFamily: "sans-serif",
                        paddingTop: "15vh",
                    }}
                >
                    <div>02</div>
                    <div
                        sx={{
                            border: "1px solid black",
                            borderRadius: "50px",
                            fontSize: ["1.25rem", null, "27px"],
                            padding: [
                                "0.5rem 1.75rem",
                                null,
                                "0.75rem 2.75rem",
                            ], //py px
                        }}
                    >
                        NEXT FACT
                    </div>
                </Flex>
            </Flex>
        </CanvasHtmlWithThemeProvider>
    );
}
