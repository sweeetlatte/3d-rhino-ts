import React from "react";
import { Html } from "@react-three/drei";

import "./scene.css";

interface Props {
    active: number;
    setActive: (active: number) => void;
}

export function Scene3({ active, setActive }: Props) {
    return (
        <Html>
            <div
                className="bg-[#A9B2A0] w-[43.9vw] h-screen absolute left-[50vw] top-[-50vh] 2xl:px-9 p-6 2xl:py-8"
                style={{
                    animation:
                        active === 2 ? "slideLeft 966ms both 1500ms" : "",
                }}
            >
                {/* 9.800 -> 11.300: animation xong chính diện = 1500
                -> 12.266: animation info bg xong
                -> 12.133: 01. rhino hiện ra -> 12.666 xong
                11.866 -> 12.866: title xong
                11.966 -> 13.700: text xong */}
                <div className="flex justify-between 2xl:text-xl text-sm font-sans 2xl:pb-9 pb-7 border-b border-black border-solid">
                    <div
                        className={
                            active === 2
                                ? "animate_transform_533ms_both_2333ms"
                                : ""
                        }
                    >
                        01. Rhino Horn
                    </div>
                    <div
                        className={
                            active === 2
                                ? "animate_transform_533ms_both_2599ms"
                                : ""
                        }
                        onClick={() => {
                            setActive(3);
                        }}
                    >
                        Close
                    </div>
                </div>
                <div className="2xl:px-[5.5rem] pl-[4.2rem] 2xl:pt-[15.5vh] pt-[15vh] text-left">
                    <div
                        className={
                            active === 2
                                ? "font-title 2xl:text-[100px] text-[70px] 2xl:leading-[5.75rem] leading-[4.1rem] text-slide-left 2xl:tracking-[-3px] tracking-[-1px]"
                                : "font-title 2xl:text-[100px] text-[70px] 2xl:leading-[6.75rem] leading-[4.1rem] 2xl:tracking-[-3px] tracking-[-1px]"
                        }
                    >
                        <span style={{ "--i": 0 } as React.CSSProperties}>
                            THERE ARE 5&nbsp;
                        </span>
                        <span style={{ "--i": 1 } as React.CSSProperties}>
                            SPECIES OF&nbsp;
                        </span>
                        <span style={{ "--i": 2 } as React.CSSProperties}>
                            RHINO...
                        </span>
                    </div>
                    <div
                        className={
                            active === 2
                                ? "font-sans 2xl:text-xl text-sm 2xl:pt-[4.2rem] pt-12 text-slide-left tracking-[-0.4px] leading-[1.8]"
                                : "font-sans 2xl:text-xl text-sm 2xl:pt-[4.2rem] pt-12 tracking-[-0.4px] leading-[1.8]"
                        }
                    >
                        <span style={{ "--i": 3 } as React.CSSProperties}>
                            ...Two African – black and white rhinos – and three
                            Asian – greater&nbsp;
                        </span>
                        <span style={{ "--i": 3.5 } as React.CSSProperties}>
                            one-horned, Sumatran and Javan rhinos. Three of
                            these (black,&nbsp;
                        </span>
                        <span style={{ "--i": 4 } as React.CSSProperties}>
                            Sumatran and Javan) are listed as ‘critically
                            endangered’ by IUCN&nbsp;
                        </span>
                        <span style={{ "--i": 4.5 } as React.CSSProperties}>
                            – there are thought to be fewer than 70 Javan and
                            100 Sumatran&nbsp;
                        </span>
                        <span style={{ "--i": 5 } as React.CSSProperties}>
                            rhinos left in the wild, meaning their populations
                            are truly&nbsp;
                        </span>
                        <span style={{ "--i": 5.5 } as React.CSSProperties}>
                            under threat of extinction.&nbsp;
                        </span>
                    </div>
                </div>
                <div className="flex items-end justify-between font-sans pt-[15vh]">
                    <div>02</div>
                    <div className="border border-black rounded-[50px] 2xl:py-3 py-2 px-7 2xl:px-11 2xl:text-[27px] text-xl">
                        NEXT FACT
                    </div>
                </div>
            </div>
        </Html>
    );
}
