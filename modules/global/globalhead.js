
import Head from "next/head";
import { vars } from "@/essentials/vars";


const data = vars.head;


export default function GlobalHead() {
    return (
        <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.desc} />


            {/* embed */}
            <meta property="og:title" content={data.embed.title} />
            <meta property="og:description" content={data.embed.desc} />
            <meta property="og:image" content={data.embed.image} />

            {/* twitter banner image */}
            <meta name="twitter:card" content="summary_large_image" />

            
        </Head>
    )
}