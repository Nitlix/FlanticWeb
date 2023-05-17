
import Head from "next/head";
import { vars } from "@/essentials/vars";




export default function GlobalHead() {
    return (
        <Head>
            <title>{vars.head.title}</title>
            <meta name="description" content={vars.head.desc} />


            {/* embed */}
            <meta property="og:title" content={vars.head.embed.title} />
            <meta property="og:description" content={vars.head.embed.desc} />
            <meta property="og:image" content={vars.head.embed.image} />

            <meta content={vars.url} property="og:url" />

            {/* twitter banner image */}
            <meta name="twitter:card" content="summary_large_image" />

            
        </Head>
    )
}