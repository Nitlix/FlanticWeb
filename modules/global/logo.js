

export default function Logo({showBack = true}) {
    return (
        <>
            <style jsx>{`
                .logo {
                    --size: 3.75rem;
                    width: var(--size);
                    height: var(--size);
                    display: grid;
                    place-items: center;
                }
                .logo img {
                    width: calc(var(--size) * 0.55);
                    position: absolute;
                    z-index: 2;
                }
                .logo img.back {
                    z-index: 1;
                    width: var(--size);
                }

                .logoWrapper h2 {
                    font-size: 1.25rem;
                }
            `}</style>
            <div className="flex gap1 center logoWrapper">
                <div className="logo">
                    <img src="/assets/logo/icon.svg" alt="Flantic Logo" />
                    {showBack && <img className="back" src="/assets/logo/button.svg" alt="Flantic Logo Background" />}
                </div>
                <h2>
                    Flantic
                </h2>
            </div>
            
        </>
    )
}