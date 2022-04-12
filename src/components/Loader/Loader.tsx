import React from "react";
import { a as b } from "@react-spring/web";
import { useTransition } from "@react-spring/core";

import "./loader.css";

interface Props {
    active: boolean;
    progress: number;
}

export default function Loader({ active, progress }: Props) {
    const transition = useTransition(active, {
        from: { opacity: 1, progress: 0 },
        leave: { opacity: 0 },
        update: { progress },
    });
    return transition(
        ({ progress, opacity }, active) =>
            active && (
                <b.div className="loading" style={{ opacity }}>
                    <div className="loading-bar-container">
                        <b.div
                            className="loading-bar"
                            style={{ width: progress }}
                        ></b.div>
                    </div>
                </b.div>
            ),
    );
}
