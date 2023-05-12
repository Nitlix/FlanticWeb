


export default function Button( {children, className, ...props }) {
    return (
        <>
            <style jsx global>{`
                div.button {
                    background: radial-gradient(78.33% 78.33% at 21.67% 21.67%, rgba(0, 255, 148, 0.35) 0%, rgba(7, 96, 159, 0.2765) 100%);
                    padding: 1rem 1.5rem;
                    border-radius: 1rem;

                    border: none;
                    
                    cursor: pointer;
                }
            `}</style>

            <div className={"button " + (className)} {...props}>
                {children}
            </div>

        </>
    )
}