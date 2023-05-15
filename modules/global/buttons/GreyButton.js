




import Button from "./Button"


export default function GreyButton( {children, className, ...props} ){
    return (
        <>
            <style jsx global>{`
                .greyButton {
                    background: 
radial-gradient(78.33% 78.33% at 21.67% 21.67%, rgba(75, 86, 91, 0.35) 0%, rgba(5, 28, 40, 0.2765) 100%) !important;

                    border-image-source: linear-gradient(264.1deg, rgba(21, 44, 61, 0.37) 44.53%, rgba(132, 140, 146, 0.45) 100%) !important;




                }


                .greyButton img {
                    width: 1.5rem;
                }

                .greyButton p {
                    color: #fff;
                }
            `}</style>
            
            <Button className={`greyButton flex center gap1 ${className}`} {...props}>
                {children}
            </Button>
        </>
    )
}