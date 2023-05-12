

import { vars } from "@/essentials/vars";

export default function VectorBackground() {
    return (
        <>
            <style jsx>{`
                .vectorBackground {
                    min-height: 100vh;
                    min-width: 100vw;
                    position: absolute;
                    z-index: -1;
                    left: 0;

                    background-image: url(${vars.ui.vectorBackground});
                    background-size: cover;
                }
            `}</style>

            <div className="vectorBackground" />

        </>
    )
}