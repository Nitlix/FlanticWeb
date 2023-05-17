import Link from "next/link";
import Logo from "./logo";






export default function Footer() {
    return (
        <>
            <style jsx>
                {`
                    footer {
                        display: grid;
                        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
                        padding: 4rem var(--page-spacing);

                        background: #1A1D2B80;

                        width: 100vw;
                        margin-left: calc(-1 * var(--page-spacing));
                        gap: 2rem;
                    }

                    footer .socialIcon {
                        --size: 2rem;
                        width: var(--size);
                        height: var(--size);
                        fill: var(--main);
                    }

                    footer h3 {
                        font-size: 1.5rem;
                    }
                `}
            </style>
            <footer>
                    <div className="flex v gap1">
                        <Logo />
                        <p>
                        Flantic is a multipurpose discord bot
                        built to enhance your discord experience!
                        </p>
                        <p>
                            © 2020-2023 Flantic. All rights reserved.
                        </p>
                        <div className="flex gap1">
                            <Link href="https://twitter.com/nitlixis">
                                <img src="/assets/icons/twitter.svg" alt="Twitter" className="socialIcon" />
                            </Link>
                            <Link href="https://github.com/Nitlix">
                                <img src="/assets/icons/github.svg" alt="Github" className="socialIcon" />
                            </Link>
                        </div>
                        
                    </div>



                    <div className="flex v gap1">
                        <h3>Features</h3>
                        <Link href="/features">
                            <p>Social Notifications</p>
                        </Link>
                        <Link href="/music">
                            <p>Music</p>
                        </Link>
                        <Link href="/timers">
                            <p>Timers</p>
                        </Link>
                        <Link href="/voicerecoding">
                            <p>Voice Recording</p>
                        </Link>
                    </div>


                    <div className="flex v gap1">
                        <h3>Support</h3>
                        <Link href="/features">
                            <p>Premium</p>
                        </Link>
                        <Link href="/music">
                            <p>Documentation</p>
                        </Link>
                        <Link href="/timers">
                            <p>Support Server</p>
                        </Link>
                        <Link href="/voicerecoding">
                            <p>Custom Bot</p>
                        </Link>
                    </div>

                    <div className="flex v gap1">
                        <h3>Company</h3>
                        <Link href="/features">
                            <p>Our Team</p>
                        </Link>
                        <Link href="/music">
                            <p>Join Us</p>
                        </Link>
                        <Link href="/timers">
                            <p>About us</p>
                        </Link>
                        <Link href="/voicerecoding">
                            <p>Imprint</p>
                        </Link>
                    </div>


                    <div className="flex v gap1">
                        <h3>Legal</h3>
                        <Link href="/features">
                            <p>Refund Policy</p>
                        </Link>
                        <Link href="/music">
                            <p>Privacy</p>
                        </Link>
                        <Link href="/voicerecoding">
                            <p>Terms of Service</p>
                        </Link>
                        <Link href="/voicerecoding">
                            <p>DMCA</p>
                        </Link>
                    </div>


                    <div style={{"gridColumnStart": "1", "gridColumnEnd": "6", "paddingTop": "2rem"}} className="flex center">
                        <p>
                            Made with 💛 by Nitlix
                        </p>
                    </div>


            </footer>
        </>
    )
}