/** @jsxImportSource theme-ui */
import { Html } from "@react-three/drei";
import { Box, Flex, ThemeProvider } from "theme-ui";
import theme from "../../theme";

import "./scene.css";

interface Props {
    z: number;
    setZ: (z: number) => void;
    delayAnimate: () => void;
}

export function Scene1({ z, setZ, delayAnimate }: Props) {
    return (
        <Html scale={1} position={[-7, 1.7, 0]}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        fontSize: ["160px", null, "216px"],
                        width: ["85.1vw", "80.1vw", "86vw"],
                        color: "white",
                        lineHeight: [0.87, null, 0.9],
                        letterSpacing: ["-4px", null, "0px"],
                    }}
                >
                    <Flex sx={{ justifyContent: "space-between" }}>
                        {/* 1.166 -> 1.400: xong dash
                    -> 1500: close xong
                    1600: start wavy
                    2333: i letter disapear */}
                        <div className={z === 3 ? "wavy close-reverse" : ""}>
                            <span sx={{ "--i": 5 }}>R</span>
                            <span sx={{ "--i": 1 }}>H</span>
                            <span sx={{ "--i": 0 }}>I</span>
                            <span sx={{ "--i": 1 }}>N</span>
                            <span sx={{ "--i": 5 }}>O</span>
                        </div>
                        <div className={z === 3 ? "dash shorten-dash" : "dash"}>
                            —
                        </div>
                        <div
                            className={z === 3 ? "wavy close" : ""}
                            sx={{ letterSpacing: "-8px" }}
                        >
                            <span sx={{ "--i": 5 }}>C</span>
                            <span sx={{ "--i": 2 }}>L</span>
                            <span sx={{ "--i": 1 }}>O</span>
                            <span sx={{ "--i": 2 }}>S</span>
                            <span sx={{ "--i": 5 }}>E</span>
                        </div>
                    </Flex>
                    <div
                        className={z === 3 ? "wavy" : ""}
                        sx={{
                            width: ["86vw", "81vw", "86vw"],
                        }}
                    >
                        <span sx={{ "--i": 10 }}>T</span>
                        <span sx={{ "--i": 8 }}>O</span>
                        <span sx={{ "--i": 8 }}>&nbsp;</span>
                        <span sx={{ "--i": 7 }}>E</span>
                        <span sx={{ "--i": 6 }}>X</span>
                        <span sx={{ "--i": 5 }}>T</span>
                        <span sx={{ "--i": 3 }}>I</span>
                        <span sx={{ "--i": 5 }}>N</span>
                        <span sx={{ "--i": 6 }}>C</span>
                        <span sx={{ "--i": 7 }}>T</span>
                        <span sx={{ "--i": 5 }}>I</span>
                        <span sx={{ "--i": 8 }}>O</span>
                        <span sx={{ "--i": 10 }}>N</span>
                    </div>
                </Box>
                <div
                    className={z === 3 ? "wavy" : ""}
                    sx={{
                        marginTop: ["12.1vh", null, "12.7vh"],
                        marginLeft: ["3vw", 0, "2vw"],
                    }}
                >
                    <div
                        className="btn"
                        sx={{
                            "--i": 2,
                            fontSize: ["22px", null, "27px"],
                            width: "max-content",
                            margin: "auto",
                            padding: ["5px 33px", "8px 56px"],
                        }}
                        onClick={() => {
                            setZ(3);
                            delayAnimate();
                        }}
                    >
                        EXPLORE
                    </div>
                </div>
            </ThemeProvider>
        </Html>
    );
}
