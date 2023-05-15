



export default function Slide({children, className="", ...props}) {
    return (
        <>
            <style jsx global>{`
                .slide {
                    width: 100vw;
                    margin-left: calc(-1 * var(--page-spacing));
                    padding: 2rem var(--page-spacing);
                    min-height: 80vh;
                    display: grid;
                    grid-template-columns: 99fr 1fr;
                }

                .slide * {
                    z-index: 2;
                    position: relative;
                }

                .slide h2 {
                    font-size: 4rem;
                    font-weight: 700;
                }

                .slide p {
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            `}</style>

            <div className={"slide " + className} {...props}>
                {children}
            </div>

        </>
    )
}


export function ImageContainer({children, ...props}) {
    return (
        <>
            <style jsx>{`
                .imageContainer {
                    position: absolute;
                    right: 0;
                    width: 60vw !important;

                    z-index: 1;

                    left: 40%;
                }

                .imageContainer img {
                    width: 100%;
                }


            `}</style>
            <div className="imageContainer" {...props}>
                {children}
            </div>
        </>
    )
}