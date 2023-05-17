import GlobalHead from "@/modules/global/globalhead";
import Header from "@/modules/global/header";
import GradientText from "@/modules/global/typograhy/gradientText";
import VectorBackground from "@/modules/global/vectorBackground";

import Image from "next/image";

import Button from "@/modules/global/buttons/Button";
import GreyButton from "@/modules/global/buttons/GreyButton";
import Statistics from "@/modules/index/Statistics";
import Slide, { ImageContainer } from "@/modules/global/Slide";
import Footer from "@/modules/global/Footer";

export default function Home() {
  	return (
		<>
			<GlobalHead />
			<VectorBackground />
			<Header />
			<div className="flex v center" style={{'gap': '1.5rem', 'height': '100vh'}}>
				<div className="flex center width100" style={{'gap': '1.5rem'}}>
					<h1>Meet 
					</h1>
					<div className="flex center">
						<Image src="/assets/img/logo/icon.svg" width={62} height={62} alt="Flantic Logo" />
						<GradientText><h1>lantic</h1></GradientText>
					</div>
				</div>
				<p className="center" style={{'maxWidth': '50rem', 'lineHeight': '2rem', 'fontWeight': '600'}}>
				The ultimate solution for managing your Discord server with ease and efficiency.<br />
						With Flantic, you can take control of your server's security, moderation,<br />
						and even add fun features to keep your community engaged.
				</p>
				<div className="flex center gap1">
					<Button className="flex center gap1">
						<img src="/assets/icons/discord.svg" />
						<h3>Add to Discord</h3>
					</Button>
					<GreyButton>
						<p>
							Manage a server
						</p>
					</GreyButton>
				</div>
			</div>

			<Statistics />


			<Slide style={{'background': '#14172180'}}>
				<div className="flex v gap2 vcenter">
					<h2>Keep your server safe.</h2>
					<p>
						Flantic Security acts as a barrier against <br />
						nukers and raiders harming the server by <br />
						creating channels, mass mentions, pruning members. <br />
					</p>
					<Button className="flex center" style={{'gap': '1.5rem'}}>
						<img src="/assets/icons/discord.svg" style={{'width': '31px'}}/>
						<h3>Add to Discord</h3>
					</Button>

				
				</div>

				<ImageContainer>
					<img src="/assets/img/showcase/group.svg" />
				</ImageContainer>
			</Slide>

			<Slide style={{'background': '#0F121E80'}} className="reverse">
				<ImageContainer>
					<img src="/assets/img/showcase/automod.svg" />
				</ImageContainer>
				<div className="flex v gap2 vcenter">
					<h2>Auto Moderation</h2>
					<p>
						Flantic actively moderates your chat without any<br />
						help from moderators. It can do anything for you:<br />
						ban, kick, mute, warn and is easy to set up.<br />
					</p>

					<Button className="flex center" style={{'gap': '1.5rem'}}>
						<img src="/assets/icons/discord.svg" style={{'width': '31px'}}/>
						<h3>Add to Discord</h3>
					</Button>

				</div>



			</Slide>

			<Footer />
			
		</>
  	)
}
