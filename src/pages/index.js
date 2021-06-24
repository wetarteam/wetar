import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
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
		<Section height="90px" background="#2c01f7">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="normal normal 700 50px/1 --fontFamily-sansVerdana"
					color="#ffe9e9"
					width="max-content"
					min-width="max-content"
				>
					WETAR
				</Text>
			</Box>
		</Section>
		<Section
			background="#e70d0d radial-gradient(circle at center,#ff0000 0%,#ebb008 50.6%) center"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack transform="translate(3px, 3px) scale(1)" transition="all 1s ease 0s">
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" color="#ebf1f8" />
					<Text color="--dark" letter-spacing="1px" text-transform="uppercase" margin="0">
						<Strong>
							WebSITE IS the BEST MARKETING AGENT
						</Strong>
					</Text>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						margin="10px 0"
						width="max-content"
					>
						<Strong>
							WE{" "}
						</Strong>
						DESIGN. DEVELOP. MARKET.
						<br />
					</Text>
				</StackItem>
			</Stack>
			<Components.QuarklycommunityKitLoopText slides="Digital Marketing,SEO,Web Apps,Ecommerce Stores,Websites" color="#000000">
				<Override slot="After Text">
					.
				</Override>
				<Override slot="Before Text">
					We Do
				</Override>
				<Override slot="Looped Text">
					<div>
						<div transition="width 150ms linear 0s" height="50px" width="148.297px">
							<div opacity="0" transform="translateY(-49.9993px)" position="absolute">
								fastest
							</div>
							<div opacity="1" transform="translateY(0.00071887px)" position="absolute">
								coolest
							</div>
						</div>
					</div>
				</Override>
			</Components.QuarklycommunityKitLoopText>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			justify-content="space-between"
			align-content="space-around"
			flex-wrap="wrap"
		>
			<Override slot="SectionContent" lg-display="block" />
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
				border-color="#0162ea"
			>
				<Strong>
					wetar
				</Strong>
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Services and Pricings
			</Text>
			<Components.Pricings1 />
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
			<style place={"endOfHead"} rawKey={"60d350285179a1001e683fe6"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});