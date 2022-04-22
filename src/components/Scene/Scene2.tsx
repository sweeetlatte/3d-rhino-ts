/** @jsxImportSource theme-ui */

import "./scene.css";

interface Props {
    display: string;
    setReverse: (className: string) => void;
    reverse: string;
    setActive: (active: number) => void;
}

export function Scene2({ display, setReverse, reverse, setActive }: Props) {
    return (
        <div className={`${display}`}>
            <div
                sx={{
                    color: "white",
                    fontSize: "17px",
                    width: "max-content",
                    position: "absolute",
                    left: ["5.5vw", "-3vw", "-5vw"],
                    top: "-47vh",
                    fontFamily: "sans-serif",
                    animation: "transform 566ms ease-out both",
                }}
            >
                Select a Point
            </div>
            <div
                className="dot-hover"
                onMouseLeave={() => {
                    setReverse("transform-reverse");
                }}
            >
                <div
                    className="dot"
                    sx={{
                        "--delay": "900ms",
                        top: ["3.4rem", null, "5.25rem"],
                        left: ["-18.9rem", null, "-26.5rem"],
                        "&:hover": {
                            top: "2.75rem",
                            left: ["-19.75rem", null, "-27.75rem"],
                        },
                    }}
                >
                    <div>+</div>
                </div>
                <div className={`${reverse} title-of-dot`}>Poor Vision</div>
            </div>
            <div className="dot-hover">
                <div
                    className="dot"
                    sx={{
                        "--delay": "1066ms",
                        top: ["-7.75rem", null, "-10.75rem"],
                        left: ["-9rem", null, "-12.5rem"],
                        "&:hover": {
                            top: ["-8.5rem", null, "-12rem"],
                            left: ["-9.75rem", null, "-13.75rem"],
                        },
                    }}
                >
                    <div>+</div>
                </div>
                <div className={`title-of-dot ${reverse}`}>Average Weight</div>
            </div>
            <div className="dot-hover">
                <div
                    className="dot"
                    sx={{
                        "--delay": "1232ms",
                        top: ["-1.75rem", null, "-2.25rem"],
                        left: ["3.75rem", null, "5.25rem"],
                        "&:hover": {
                            top: ["-2.5rem", null, "-3rem"],
                            left: "3.25rem",
                        },
                    }}
                >
                    <div>+</div>
                </div>
                <div className={`title-of-dot ${reverse}`}>Color</div>
            </div>
            <div
                className="dot-hover"
                onClick={() => {
                    setActive(2);
                }}
            >
                <div
                    className="dot"
                    sx={{
                        "--delay": "1398ms",
                        top: ["-14.5rem", null, "-19.75rem"],
                        left: ["25.5rem", null, "36.25rem"],
                        "&:hover": {
                            top: ["-15rem", null, "-21rem"],
                            left: ["25rem", null, "35.5rem"],
                        },
                    }}
                >
                    <div>+</div>
                </div>
                <div className={`title-of-dot ${reverse}`}>Rhino Horn</div>
            </div>
        </div>
    );
}
