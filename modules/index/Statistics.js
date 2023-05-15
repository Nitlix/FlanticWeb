
import GradientText from "../global/typograhy/gradientText"


export default function Statistics() {
    return (
        <>
            <style jsx>
                {`
                    .statistics {
                        background: #0D0F15;
                        width: 100vw;
                        margin-left: calc(-1 * var(--page-spacing));
                        padding: 2rem var(--page-spacing);
                    }

                    `}
            </style>
            <div className="statistics flex space center">
                <GradientText><h2>Let's talk statistics.</h2></GradientText>
                <div className="flex center gap3">
                    <div className="flex v">
                        <h2>100,000+</h2>
                        <p>Servers using Flantic</p>
                    </div>
                    <div className="flex v">
                        <h2>500 million</h2>
                        <p>Messages prosessed</p>
                    </div>
                    <div className="flex v">
                        <h2>50,000+</h2>
                        <p>New users anually</p>
                    </div>
                </div>
            </div>
        </>
    )
}