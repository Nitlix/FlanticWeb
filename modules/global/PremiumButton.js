
import Button from "./Button"


export default function PremiumButton( {extraClass } ){
    return (
        <>
            <style jsx global>{`
                .premiumButton {
                    background: linear-gradient(97.18deg, rgba(255, 153, 0, 0.217) 0%, rgba(255, 153, 0, 0.35) 65.1%, rgba(159, 108, 7, 0.259) 100%) !important;
                }

                .premiumButton img {
                    width: 1.5rem;
                }

                .premiumButton i {
                    fill: #F8BE2A;
                }

                .premiumButton p {
                    color: #F8BE2A;
                }
            `}</style>
            
            <Button className={`premiumButton flex center gap1 ${extraClass}`}>
                <img src='assets/UI/icons/crown.svg' />
                <p>Premium</p>
            </Button>
        </>
    )
}