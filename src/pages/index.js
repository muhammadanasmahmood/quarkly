import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Image, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia, Formspree } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
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
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
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
				<Override
					slot="link"
					text-decoration="none"
					color="--dark"
					padding="6px 12px"
					user-select="auto"
					pointer-events="auto"
				>
					Home
				</Override>
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
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
		<Section padding="80px 0 80px 0" background="--color-darkL1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 33px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="#ffffff"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Price
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="stretch"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				justify-items="center"
				pointer-events="auto"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Monopoly
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$59
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					border-width="2px"
					border-style="solid"
					border-color="--color-secondary"
					lg-padding="48px 35px 56px 35px"
					position="relative"
				>
					<Text
						padding="1px 26px 5px 24px"
						color="#04080C"
						background="--color-secondary"
						font="--base"
						position="absolute"
						transform="rotate(90deg)"
						right="-38px"
						left="auto"
						top="70px"
						bottom="auto"
						border-radius="0px 0px 12px 12px"
					>
						Popular
					</Text>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Startup
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$12
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Freelance
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$9
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Override slot="SectionContent" md-align-items="center" />
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" width="100%">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box sm-display="flex" sm-flex-direction="column" sm-align-items="flex-start">
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Visit us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								4998 Hanover Street, New York, 10011
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link
									href="mailto:hello@company.com"
									text-decoration="none"
									hover-text-decoration="underline"
									color="--light"
									sm-width="100%"
								>
									hello@company.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
							sm-padding="64px 0 0 0"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdPhone}
								sm-display="block"
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" sm-width="100%">
								+1 (234) 567-89-00
								<br />
								+1 (234) 567-89-00
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
						>
							<Icon
								category="fa"
								icon={FaFacebookF}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaTwitter}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
							<Icon
								category="fa"
								icon={FaLinkedinIn}
								width="48px"
								height="48px"
								size="24px"
								margin-right="16px"
								background="--color-primary"
								border-radius="50%"
							/>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%" sm-padding="0px 0px 0px 0px">
					<Box>
						<Box
							max-width="360px"
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							sm-padding="24px 12px 36px 12px"
						>
							<Text
								as="h3"
								font="--headline3"
								margin="0 0 20px 0"
								sm-padding="0px 8px 0px 8px"
								sm-margin="0 0 8px 0"
							>
								Leave us message
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Name
										</Text>
										<Input width="100%" name="name" type="text" />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Email
										</Text>
										<Input width="100%" type="email" name="email" />
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Message
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" />
									</Box>
									<Box
										padding="8px 8px 8px 8px"
										width="100%"
										display="flex"
										flex-direction="column"
										align-items="flex-end"
									>
										<Button background="--color-dark">
											Send
										</Button>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
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