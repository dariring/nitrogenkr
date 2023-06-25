import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
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
		<Section
			background="radial-gradient(50% 50% at 52.09% 50%, rgba(4, 8, 12, 0.4) 0%, #04080C 100%),url(https://images.unsplash.com/photo-1629134219887-9da081682376?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="120px 0 88px 0"
			md-padding="140px 0 96px 0"
			sm-padding="60px 0 96px 0"
			quarkly-title="Hero-22"
			padding="88px 0 88px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="0px 0px 0px 0px"
				lg-justify-content="center"
				width="100%"
				flex-direction="row"
				align-items="flex-start"
				lg-align-items="center"
				lg-flex-direction="column"
				display="flex"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
			>
				<Text
					lg-width="100%"
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					color="#FFFFFF"
					font="--lead"
					width="100%"
					sm-margin="0px 0px 12px 0px"
					letter-spacing="2px"
				>
					AWESOME STORY
				</Text>
			</Box>
			<Box
				md-margin="0px 0px 0px 0px"
				width="100%"
				flex-direction="row"
				align-items="flex-end"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				lg-justify-content="center"
				display="flex"
				lg-align-items="center"
				padding="0px 0px 0px 0px"
				justify-content="space-between"
				lg-flex-direction="column"
			>
				<Text
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-width="100%"
					margin="0px 0px 0px 0px"
					lg-width="100%"
					lg-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					color="--light"
					width="30%"
					lg-text-align="center"
					lg-margin="0px 0px 20px 0px"
					font="--headline1"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					My journey through Thailand
				</Text>
				<Text
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					color="#FFFFFF"
					font="--lead"
					width="30%"
					lg-width="100%"
				>
					Our classes program provides a gateway into the world of dance connecting young people and communities to artistic practice and engaging them.
				</Text>
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
			<style place={"endOfHead"} rawKey={"649820fc477c3a0019b3f1d4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});