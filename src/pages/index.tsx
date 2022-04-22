/** @jsxImportSource theme-ui */
import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Html, useProgress } from "@react-three/drei";
import { ThemeProvider } from "theme-ui";

import "../App.css";
import "../main.css";
import "../components/Scene/scene.css";
import theme from "../theme";

import Loader from "../components/Loader/Loader";
import Floor from "../components/Floor/Floor";
import Model from "../components/model/Model";
import Light from "../components/Light/Light";
import { Scene1, Scene2, Scene3 } from "../components/Scene";

export default function Home() {
    const { active: activeProgress, progress } = useProgress();
    let count = useRef(0);

    useEffect(() => {
        if (progress === 100 && count.current < 2) {
            count.current += 1;
        }
    }, [progress]);

    const [active, setActive] = useState(0);
    const [z, setZ] = useState(1);
    const [display, setDisplay] = useState("hidden");
    const [reverse, setReverse] = useState("");

    function delayAnimate() {
        setTimeout(function () {
            setActive(1);
        }, 1182);
        setTimeout(function () {
            setDisplay("block");
        }, 1734);
    }

    function updateDisplay() {
        if (active === 2) {
            setDisplay("hidden");
        } else if (active === 1 || active === 3) {
            setTimeout(function () {
                setDisplay("block");
            }, 800);
        }
    }
    useEffect(() => updateDisplay(), [active]);

    return (
        <>
            <div
                className="App"
                sx={{
                    backgroundColor: "black",
                }}
            >
                <div
                    sx={{
                        animation:
                            z === 3
                                ? "reverse-transformReverse 466ms both 334ms"
                                : "",
                        fontSize: ["12px", null, "17px"],
                        fontFamily: "sans-serif",
                        color: "white",
                        position: "absolute",
                        left: "48.15vw",
                        top: "3vh",
                    }}
                >
                    Endangered
                </div>
                <Canvas
                    className="custom"
                    camera={{
                        position: [0, 0, 6],
                        left: 0,
                        right: 0,
                        far: 10,
                    }}
                    shadows
                >
                    {count.current === 2 && (
                        <mesh>
                            <Html scale={1} position={[-7, 1.7, 0]}>
                                <ThemeProvider theme={theme}>
                                    <Scene1
                                        z={z}
                                        setZ={setZ}
                                        delayAnimate={delayAnimate}
                                    />
                                </ThemeProvider>
                            </Html>
                        </mesh>
                    )}
                    <mesh>
                        <Html>
                            <ThemeProvider theme={theme}>
                                <Scene2
                                    display={display}
                                    reverse={reverse}
                                    setReverse={setReverse}
                                    setActive={setActive}
                                />
                                <Scene3 active={active} setActive={setActive} />
                            </ThemeProvider>
                        </Html>
                    </mesh>
                    <Suspense fallback={null}>
                        <mesh position={[0.2, -1.5, 3]}>
                            <Model active={active} />
                        </mesh>
                        <Light active={active} />
                        <Physics>
                            <Floor
                                position={[0, -1.5, 0]}
                                rotation={[
                                    (-Math.PI / 180) * (90 - 1.333),
                                    (-Math.PI / 180) * -0.5,
                                    (-Math.PI / 180) * 30,
                                ]}
                                args={[10, 10]}
                                active={active}
                            />
                        </Physics>
                    </Suspense>
                </Canvas>
            </div>
            <Loader active={activeProgress} progress={progress} />
        </>
    );
}
