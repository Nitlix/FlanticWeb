



export default function Slide({children, className="", ...props}) {
    return (
        <>
            <style jsx global>{`
                .slide {
                    width: 100vw;
                    margin-left: calc(-1 * var(--page-spacing));
                    padding: 2rem var(--page-spacing);
                    min-height: 90vh;
                    display: grid;
                    grid-template-columns: 60% 40%;
                }

                .slide.reverse {
                    grid-template-columns: 50% 50%;
                }

                .slide.reverse * {
                    text-align: right;
                    align-items: flex-end;
                }

                .slide * {
                    z-index: 2;
                    position: relative;
                }

                .slide h2 {
                    font-size: 4rem;
                    font-weight: 700;

                    white-space: nowrap;
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
            <style jsx global>{`
                .imageContainer {
                    --sideback: 20rem;
                    width: calc(100% + var(--sideback));
                    display: grid;
                    place-items: center !important;

                    z-index: 1;         
                    transform: translateX(calc(-1 * var(--sideback)));
                }

                .slide.reverse .imageContainer {
                    width: 100%;
                    transform: none;
                }

                .imageContainer img {
                    width: 100%;
                    max-height: 70vh;
                }


            `}</style>
            <div className="imageContainer" {...props}>
                {children}
            </div>
        </>
    )
}