import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"rank"} />
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
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" sm-padding="30px 0 30px 0" background="--color-dark">
			<Box
				margin="0px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 32px 0px"
				display="flex"
				flex-direction="row"
				align-items="center"
				sm-margin="0px 0px 10px 0px"
				justify-content="space-between"
				lg-align-items="center"
				lg-flex-direction="column"
				lg-justify-content="center"
			>
				<Text
					margin="0px 32px 0px 0px"
					font="--headline1"
					color="#ffffff"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-margin="0px 0px 12px 0px"
					flex="0 0 auto"
				>
					Comparison
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--lightD2"
					text-align="left"
					width="50%"
					md-width="100%"
					lg-width="100%"
					lg-text-align="center"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box width="100%" display="grid" grid-template-columns="repeat(4, 1fr)" grid-gap="32px">
				<Box display="flex">
					<Box
						display="flex"
						margin="0px 0px 0px 0px"
						flex-wrap="wrap"
						width="100%"
						padding="100px 0px 64px 0px"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						md-padding="92px 0px 64px 0px"
					>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 1
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 2
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 3
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 4
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 5
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 35px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 6
						</Text>
						<Text color="--light" font="--headline3" margin="0px 0px 0px 0px" md-font="normal 500 16px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Feature 7
						</Text>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Our company
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 1
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="rgba(247, 251, 255, 0.15)" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 2
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="--color-darkL1" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
					</Box>
				</Box>
				<Box sm-padding="15px 4px 15px 4px">
					<Box
						display="flex"
						flex-wrap="wrap"
						width="100%"
						background="--color-darkL2"
						border-width="1px"
						border-style="solid"
						border-radius="16px"
						padding="32px 0px 64px 0px"
						flex-direction="column"
						align-items="center"
					>
						<Text
							color="--light"
							font="--headline3"
							margin="0px 0px 0px 0px"
							lg-text-align="center"
							lg-font="normal 600 20px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							md-font="normal 500 12px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							height="72px"
							lg-height="64px"
						>
							Competitor 2
						</Text>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="--color-darkL1"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
						</Box>
						<Box
							margin="0px 0px 28px 0px"
							background="rgba(247, 251, 255, 0.15)"
							border-radius="100%"
							height="40px"
							md-margin="0px 0px 15px 0px"
							sm-margin="0px 0px 14px 0px"
						>
							<Icon
								category="io"
								icon={IoMdCheckmark}
								width="40px"
								height="40px"
								background="rgba(247, 251, 255, 0.15)"
								border-radius="100%"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
							/>
						</Box>
						<Box margin="0px 0px 0px 0px" background="--color-darkL1" border-radius="100%" height="40px">
							<Icon
								category="io"
								icon={IoMdClose}
								width="40px"
								height="40px"
								color="#F7FBFF"
								margin="0px 0px 28px 0px"
								opacity=".25"
								size="30px"
							/>
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
			<style place={"endOfHead"} rawKey={"649820fc477c3a0019b3f1d4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});