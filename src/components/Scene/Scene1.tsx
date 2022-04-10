/** @jsxImportSource @emotion/react */
import { Html } from "@react-three/drei";
import { Box, Flex } from "theme-ui";

import "./scene.css";

interface Props {
    z: number;
    setZ: (z: number) => void;
    delayAnimate: () => void;
}

export function Scene1({ z, setZ, delayAnimate }: Props) {
    return (
        <Html scale={1} position={[-7, 1.7, 0]}>
            <Box
                sx={{
                    fontSize: "160px",
                    width: "85.1vw",
                    color: "white",
                    lineHeight: 0.87,
                    letterSpacing: "-4px",
                    "@media screen and (min-width: 1440px)": {
                        width: "80.1vw",
                    },
                    "@media screen and (min-width: 1920px)": {
                        fontSize: "216px",
                        width: "86vw",
                        lineHeight: 0.9,
                        letterSpacing: "0px",
                    },
                }}
            >
                <Flex sx={{ justifyContent: "space-between" }}>
                    {/* 1.166 -> 1.400: xong dash
                    -> 1500: close xong
                    1600: start wavy
                    2333: i letter disapear */}
                    <div className={z === 3 ? "wavy close-reverse" : ""}>
                        <span css={{ "--i": 5 }}>R</span>
                        <span css={{ "--i": 1 }}>H</span>
                        <span css={{ "--i": 0 }}>I</span>
                        <span css={{ "--i": 1 }}>N</span>
                        <span css={{ "--i": 5 }}>O</span>
                    </div>
                    <div className={z === 3 ? "dash shorten-dash" : "dash"}>
                        —
                    </div>
                    <div
                        className={z === 3 ? "wavy close" : ""}
                        css={{ letterSpacing: "-8px" }}
                    >
                        <span css={{ "--i": 5 }}>C</span>
                        <span css={{ "--i": 2 }}>L</span>
                        <span css={{ "--i": 1 }}>O</span>
                        <span css={{ "--i": 2 }}>S</span>
                        <span css={{ "--i": 5 }}>E</span>
                    </div>
                </Flex>
                <div
                    className={z === 3 ? "wavy" : ""}
                    css={{
                        width: "86vw",
                        "@media screen and (min-width: 1440px)": {
                            width: "81vw",
                        },
                        "@media screen and (min-width: 1920px)": {
                            width: "86vw",
                        },
                    }}
                >
                    <span css={{ "--i": 10 }}>T</span>
                    <span css={{ "--i": 8 }}>O</span>
                    <span css={{ "--i": 8 }}>&nbsp;</span>
                    <span css={{ "--i": 7 }}>E</span>
                    <span css={{ "--i": 6 }}>X</span>
                    <span css={{ "--i": 5 }}>T</span>
                    <span css={{ "--i": 3 }}>I</span>
                    <span css={{ "--i": 5 }}>N</span>
                    <span css={{ "--i": 6 }}>C</span>
                    <span css={{ "--i": 7 }}>T</span>
                    <span css={{ "--i": 5 }}>I</span>
                    <span css={{ "--i": 8 }}>O</span>
                    <span css={{ "--i": 10 }}>N</span>
                </div>
            </Box>
            <div
                className={z === 3 ? "wavy" : ""}
                css={{
                    marginTop: "12.1vh",
                    marginLeft: "3vw",
                    "@media screen and (min-width: 1440px)": {
                        marginLeft: 0,
                    },
                    "@media screen and (min-width: 1920px)": {
                        marginTop: "12.7vh",
                        marginLeft: "2vw",
                    },
                }}
            >
                <div
                    className="btn"
                    css={{
                        "--i": 2,
                        fontSize: "22px",
                        width: "max-content",
                        margin: "auto",
                        padding: "5px 33px",
                        "@media screen and (min-width: 1920px)": {
                            fontSize: "27px",
                            padding: "8px 56px",
                        },
                    }}
                    onClick={() => {
                        setZ(3);
                        delayAnimate();
                    }}
                >
                    EXPLORE
                </div>
            </div>
        </Html>
    );
}
