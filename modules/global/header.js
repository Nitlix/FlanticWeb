import PremiumButton from "./PremiumButton";
import Logo from "./logo";







export default function Header() {
    return (
        <>
            <style jsx>{`
                .header {
                    padding: 2.5rem;
                }
            `}</style>
            <div className="header flex space">
                <div className="flex center gap3">
                    <Logo />

                    <div className="flex center gap2">
                        <a href="/docs">Guide</a>
                        <a href="/invite">Support</a>
                        <a href="/support">Status</a>
                    </div>
                </div>
                <div className="flex center gap2">
                    <PremiumButton />
                </div>
            </div>
        </>
    )
}