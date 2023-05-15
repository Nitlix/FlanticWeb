



export default function GradientText( {children, extraClass, ...props} ){
    return (
        <>
            <style jsx global>{`
                .gradientText {
                    background:radial-gradient(100% 706.47% at 0% 37.93%, #04FB9F 0%, #0F3FE7 100%);
                    -webkit-background-clip: text;
                    background-clip: text;

                    color: transparent !important;
                }
            `}</style>

            <div className="gradientText" {...props}>{children}</div>

        </>
    )
}