


export default function Button( {children, className, ...props }) {
    return (
        <>
            <style jsx global>{`
                .button {
                    background: radial-gradient(78.33% 78.33% at 21.67% 21.67%, rgba(0, 255, 148, 0.35) 0%, rgba(7, 96, 159, 0.2765) 100%);
                    padding: 1.25rem 1.75rem;
                    border-radius: 1rem;

                    border: none;
                    
                    cursor: pointer;

                    border-bottom: .2rem solid;
                    border-image-source: linear-gradient(262.49deg, rgba(7, 96, 159, 0.37) 24.74%, rgba(7, 159, 105, 0.45) 100%);

                    width: max-content;
                }

                .button h3 {
                    font-size: 1.5rem;
                }
            `}</style>

            <div className={"button " + (className)} {...props}>
                {children}
            </div>

        </>
    )
}