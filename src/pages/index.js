import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong, Icon, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
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
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
					color="#f8eeee"
				>
					<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" font="700 16px/24px --fontFamily-sans" color="#ffffff" />
					<Override slot="link-index">
						Home
					</Override>
				</Menu>
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
							WebSITE is the BEST MARKETING AGENT
						</Strong>
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
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
			<Stack
				margin-top="40px"
				margin="0 0px 0 0px"
				display="flex"
				justify-content="space-around"
				width="max-content"
				max-width="max-content"
				flex-wrap="wrap"
				min-width="max-content"
				lg-flex-wrap="wrap"
				lg-justify-content="space-between"
				lg-display="grid"
			>
				<StackItem
					width="50%"
					lg-width="100%"
					sm-width="100%"
					background="#f4dd54"
					border-style="solid"
					border-width="8px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/64323-web-design.gif?v=2021-06-23T16:11:22.496Z) 50% 0/cover no-repeat" />
					<Text color="#DE350B" margin="0" font="16px --fontFamily-sans" text-align="center">
						For personal sites, Hobby sites, Business sites, Product sites.
						<br />
						{"\n\n"}
					</Text>
					<Text
						as="h3"
						font="normal 500 20px/1.0 --fontFamily-googleOpenSans"
						margin="5px 0 20px 0"
						text-align="center"
						text-transform="uppercase"
						letter-spacing="initial"
						background="#090000"
						color="#ece0e0"
						padding="15px 0px 15px 0px"
					>
						Website Starter
						<br />
						{"\n\n"}
					</Text>
					<List font="200 16px sans-serif">
						<Text>
							<Strong>
								Static website,
							</Strong>
						</Text>
						<Text>
							<Strong>
								Unlimited Bandwith{" "}
							</Strong>
						</Text>
						<Text>
							<Strong>
								Free SSL
							</Strong>
						</Text>
						<Text>
							<Strong>
								High Load time and Speed
							</Strong>
						</Text>
						<Text>
							<Strong>
								99.9% Uptime and{" \n"}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Unmatched performance
								</Span>
								{" \n\n"}
							</Strong>
						</Text>
					</List>
				</StackItem>
				<StackItem
					width="50%"
					lg-width="100%"
					sm-width="100%"
					background="#f4dd54"
					border-style="solid"
					border-width="8px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/64323-web-design.gif?v=2021-06-23T16:11:22.496Z) 50% 0/cover no-repeat" />
					<Text color="#DE350B" margin="0" font="16px --fontFamily-sans" text-align="center">
						For personal sites, Hobby sites, Business sites, Product sites.
						<br />
						{"\n\n"}
					</Text>
					<Text
						as="h3"
						font="normal 500 20px/1.0 --fontFamily-googleOpenSans"
						margin="5px 0 20px 0"
						text-align="center"
						text-transform="uppercase"
						letter-spacing="initial"
						background="#090000"
						color="#ece0e0"
						padding="15px 0px 15px 0px"
					>
						Website Starter
						<br />
						{"\n\n"}
					</Text>
					<List font="200 16px sans-serif">
						<Text>
							<Strong>
								Static website,
							</Strong>
						</Text>
						<Text>
							<Strong>
								Unlimited Bandwith{" "}
							</Strong>
						</Text>
						<Text>
							<Strong>
								Free SSL
							</Strong>
						</Text>
						<Text>
							<Strong>
								High Load time and Speed
							</Strong>
						</Text>
						<Text>
							<Strong>
								99.9% Uptime and{" \n"}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Unmatched performance
								</Span>
								{" \n\n"}
							</Strong>
						</Text>
					</List>
				</StackItem>
			</Stack>
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