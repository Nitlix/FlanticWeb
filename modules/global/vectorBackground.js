


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
                    background: url("/assets/UI/background/VectorBackground.svg");
                }
            `}</style>

            <div className="vectorBackground" />

        </>
    )
}