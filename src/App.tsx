import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { useProgress } from "@react-three/drei";

import "./App.css";
import "./main.css";
import "./components/Scene/scene.css";

import Loader from "./components/Loader/Loader";
import Floor from "./components/Floor/Floor";
import Model from "./components/model/Model";
import Light from "./components/Light/Light";
import { Scene1, Scene2, Scene3 } from "./components/Scene";

export default function App() {
    const { active: activeProgress, progress } = useProgress();
    const [count, setCount] = useState(0);
    function countProgress() {
        if (progress === 100 && count < 2) {
            setCount(count + 1);
            return false;
        } else if (count >= 2) return true;
        return false;
    }

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
            <div className="App bg-black">
                <div
                    className="text-xs 2xl:text-[17px] font-sans text-white absolute left-[48.15vw] top-[3vh]"
                    style={{
                        animation:
                            z === 3
                                ? "reverse-transformReverse 466ms both 334ms"
                                : "",
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
                    {countProgress() && (
                        <mesh>
                            <Scene1
                                z={z}
                                setZ={setZ}
                                delayAnimate={delayAnimate}
                            />
                        </mesh>
                    )}
                    <mesh>
                        <Scene2
                            display={display}
                            reverse={reverse}
                            setReverse={setReverse}
                            setActive={setActive}
                        />
                    </mesh>
                    <mesh>
                        <Scene3 active={active} setActive={setActive} />
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
