import GlobalHead from "@/modules/global/globalhead";
import VectorBackground from "@/modules/global/vectorBackground";
import Header from "@/modules/global/header";
import GradientText from "@/modules/global/typograhy/gradientText";
import Footer from "@/modules/global/Footer";



export default function Home() {
    return (
        <>
            <GlobalHead />
            <VectorBackground style={{'minHeight': '100vh'}} />
            <Header />

            <div className="flex v center" style={{'height': '80vh' }}>
                <GradientText><h1>Error 404</h1></GradientText>
                <h1>We're sorry but...</h1>
                <p style={{'fontSize': '1.75rem'}}>
                    We couldn't find the page you were looking for.
                </p>

            </div>

            <Footer />
        </>
    )
}