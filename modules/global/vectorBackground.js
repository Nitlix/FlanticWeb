

import { vars } from "@/essentials/vars";

export default function VectorBackground({...props}) {
    return (
        <>
            <style jsx>{`
                .vectorBackground {
                    min-height: 200vh;
                    min-width: 100vw;
                    position: absolute;
                    z-index: -1;
                    left: 0;

                    background-image: url(${vars.ui.vectorBackground});
                    background-size: cover;
                }
            `}</style>

            <div className="vectorBackground" {...props} />

        </>
    )
}