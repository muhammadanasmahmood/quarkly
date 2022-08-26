import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-text-align="center"
					text-align="center"
				>
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				width="100%"
			>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=500&q=80"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Sam Smith
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							DEVELOPER
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
					<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="12px 0px 24px 0px">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://images.unsplash.com/photo-1599870418764-c38abcfb955a?auto=format&fit=crop&w=400&q=80"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Mason Johnson
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							DESIGNER
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
					<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="12px 0px 24px 0px">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?auto=format&fit=crop&w=500&q=80"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Adriana Williams
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							ANALYST
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
					<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="12px 0px 24px 0px">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="0px 0px 0px 0px"
						/>
						<Override slot="icon-facebook" color="#000000" />
						<Override
							slot="icon"
							color="--darkL1"
							padding="10px 10px 10px 10px"
							border-color="--color-grey"
							border-style="solid"
							size="40px"
							border-radius="50px"
							background="--color-lightD2"
							border-width="0px"
						/>
					</SocialMedia>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63094f9a49c9db002348b70a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});