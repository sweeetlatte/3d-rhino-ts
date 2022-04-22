/** @jsxImportSource theme-ui */
import { Html } from "@react-three/drei";
import { Flex } from "theme-ui";

import "./scene.css";

interface Props {
    active: number;
    setActive: (active: number) => void;
}

export function Scene3({ active, setActive }: Props) {
    return (
        <Html>
            <div
                sx={{
                    animation:
                        active === 2 ? "slideLeft 966ms both 1500ms" : "",
                    backgroundColor: "#A9B2A0",
                    width: "43.9vw",
                    height: "100vh",
                    position: "absolute",
                    left: "50vw",
                    top: "-50vh",
                    padding: "1.5rem",
                    "@media screen and (min-width: 1920px)": {
                        padding: "2.25rem 2rem",
                    },
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
                        fontSize: "0.875rem",
                        fontFamily: "sans-serif",
                        borderBottom: "1px solid black",
                        paddingBottom: "1.75rem",
                        "@media screen and (min-width: 1920px)": {
                            fontSize: "1.25rem",
                            paddingBottom: "2.25rem",
                        },
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
                        paddingLeft: "4.2rem",
                        paddingTop: "15vh",
                        textAlign: "left",
                        "@media screen and (min-width: 1920px)": {
                            paddingLeft: "5.5rem",
                            paddingRight: "5.5rem",
                            paddingTop: "15.5vh",
                        },
                    }}
                >
                    <div
                        className={active === 2 ? "text-slide-left" : ""}
                        sx={{
                            fontSize: "70px",
                            lineHeight: "4.1rem",
                            letterSpacing: "-1px",
                            fontFamily: "PlayfairDisplay",
                            "@media screen and (min-width: 1920px)": {
                                fontSize: "100px",
                                lineHeight: "5.75rem",
                                letterSpacing: "-3px",
                            },
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
                            fontSize: "0.875rem",
                            paddingTop: "3rem",
                            letterSpacing: "-0.4px",
                            lineHeight: 1.8,
                            "@media screen and (min-width: 1920px)": {
                                fontSize: "1.25rem",
                                paddingTop: "4.2rem",
                            },
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
                            fontSize: "1.25rem",
                            padding: "0.5rem 1.75rem", //py px
                            "@media screen and (min-width: 1920px)": {
                                padding: "0.75rem 2.75rem",
                                fontSize: "27px",
                            },
                        }}
                    >
                        NEXT FACT
                    </div>
                </Flex>
            </div>
        </Html>
    );
}
