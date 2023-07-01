import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { BsArrowRight } from "react-icons/bs";
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
		<Section
			background="radial-gradient(75% 75% at 52.09% 50%,rgba(4, 8, 12, 0.4) 0%,#04080C 100%),url(https://uploads.quarkly.io/649820fc477c3a0019b3f1d6/images/bg04.png?v=2023-06-25T11:17:48.186Z) center center/cover no-repeat"
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
					font="normal 300 20px/1.5 --fontFamily-googleKanit"
					width="100%"
					sm-margin="0px 0px 12px 0px"
					letter-spacing="2px"
				>
					N I T R O G E N K R
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
					font="normal 900 72px/1.2 --fontFamily-googleBlackHanSans"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Nitrogen.
				</Text>
				<Text
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					color="#FFFFFF"
					font="normal 300 20px/1.5 --fontFamily-googleKanit"
					width="30%"
					lg-width="100%"
				>
					Team. Nitrogen의 3번째 프로젝트 서버.
				</Text>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			sm-padding="60px 0 80px 0"
			quarkly-title="Content-9"
			color="#000000"
			background="#0a0b0c"
		>
			<Override
				slot="SectionContent"
				padding="0px 0 0px 0px"
				lg-padding="0px 0 0px 0px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				align-items="start"
				lg-grid-template-columns="1fr"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				padding="160px 35px 50px 35px"
				border-color="#ffffff"
				margin="0px 80px 0 0"
				lg-margin="40px 0px 35px 0"
				background="linear-gradient(180deg,rgba(93, 155, 235, 0.63) 0%,rgba(107, 133, 133, 0.71) 100%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/649820fc477c3a0019b3f1d6/images/bg0331.png?v=2023-07-01T21:09:38.810Z) 50% 50% /cover repeat scroll padding-box"
				border-radius="25px"
				sm-padding="50px 25px 30px 25px"
			>
				<Text margin="0px 0px 25px 0px" font="normal 400 22px/1.5 --fontFamily-sans" color="--light">
					<br />
					<br />
					<br />
				</Text>
				<Image
					src="https://uploads.quarkly.io/649820fc477c3a0019b3f1d6/images/logo.png?v=2023-07-01T21:13:30.641Z"
					display="block"
					width="80px"
					margin="0px 0px 00px 0px"
					object-position="25% 25%"
				/>
			</Box>
			<Box min-width="100px" min-height="100px" border-color="#ffffff">
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-googleKanit" color="#ffffff">
					서버 소개
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 400 42px/1.2 --fontFamily-googleBlackHanSans" color="#ffffff">
					NitrogenMC
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#d3d3d3">
					NitrogenMC는 2020년부터 활동 중인 Team. Nitrogen에서 개발, 운영을 하고 있는 서버입니다.{" "}
				</Text>
				<Text margin="0px 0px 25px 0px" font="1em --fontFamily-googleKanit" color="#d3d3d3">
					NitrogenMC의 대표 서버인 약탈 서버는 고성능 단독서버를 사용하고 서버가 국내에 위치해있어 국내 기준 빠른 15ms 핑을 유지하여 쾌적한 플레이를 제공합니다. 또한 X-Ray를 허용하고 있어 빠른 아이템 획득이 가능합니다. 수많은 이코노미 시스템으로 기존 야생보다 더욱 재미있게 플레이 할 수 있습니다!
				</Text>
				<Text margin="0px 0px 35px 0px" font="1em --fontFamily-googleKanit" color="#d3d3d3">
					NitrogenPvP는 최신버전은 물론, 1.8 하위 버전까지 지원하는 PvP 서버입니다. 다양한 게임모드들이 준비되어 있으며, 경쟁전, 미니게임, 1v1 등 추가로 재밌는 모드도 서버에 있답니다.
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="16px 16px"
					padding="15px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					margin="0px 0px 30px 0px"
					sm-grid-template-columns="repeat(2, 1fr)"
				>
					<Box min-width="100px" min-height="100px" color="#ffffff">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-googleKanit">
							누적 접속자
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-googleKanit">
							12270+
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" color="#ffffff">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-googleKanit">
							디스코드 인원
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-googleKanit">
							440+
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" color="#ffffff">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-googleKanit">
							운영 기간
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-googleKanit">
							10M+
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" color="#ffffff">
						<Text margin="0px 0px 15px 0px" font="normal 400 16px/1.5 --fontFamily-googleKanit">
							서버 개발자
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-googleKanit">
							2
						</Text>
					</Box>
				</Box>
				<Link color="#ffffff" font="normal 200 20px/1.5 --fontFamily-googleBlackHanSans" text-decoration-line="initial" href="https://minelist.nitrogen.kr">
					서버 자세히 알아보기(마인리스트) &gt;&gt;
				</Link>
			</Box>
		</Section>
		<Section padding="100px 0 100px 0" background="#0a0b0c" quarkly-title="FAQ-4" font="16px --fontFamily-googleKanit">
			<Text margin="0px 0px 15px 0px" font="normal 400 42px/1.2 --fontFamily-googleBlackHanSans" color="--light">
				자주 묻는 질문
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 300 20px/1.5 --fontFamily-googleKanit" color="#b2bac1" sm-margin="0px 0px 50px 0px">
				디스코드 서버에 참가하여 더욱 다양한 방법을 찾아볼 수 있습니다.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-gap="50px 50px"
				md-grid-template-columns="1fr"
				sm-grid-gap="35px 0"
			>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						X-Ray 사용 가능하나요?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						빠른 아이템 파밍을 위해 리소스팩 형태의 X-Ray를 허용하고 있습니다.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						접속할 수 있는 버전을 알려주세요!
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						약탈 서버는 1.19부터 최신버전까지 지원하고, PvP 서버는 1.8부터 최신버전까지 지원합니다.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						서버의 개선했으면 하는 사항이 있어요!
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						니젠 디스코드 커뮤니티에 참가하여 티켓(문의 채널)을 여시거나, support@nitrogen.kr로 이메일을 전송하여 서버에 도움을 주실 수 있습니다.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						니젠 커뮤니티가 있나요?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						네, 디스코드와 카카오톡 오픈채팅방을 운영하고 있습니다. 아래 링크를 통해 참가하실 수 있습니다.
						<br />
						<br />
						Discord:{" "}
						<Link
							href="https://aztra.xyz/invite/5s0mLBVY"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							https://aztra.xyz/invite/5s0mLBVY
						</Link>
						{" "}(보안 초대링크)
						<br />
						Discord(iLunar):{" "}
						<Link
							href="https://aztra.xyz/invite/81cLsp5S"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							https://aztra.xyz/invite/81cLsp5S
						</Link>
						{" "}(보안 초대링크)
						<br />
						Kakao Open Chat:{" \n"}
						<Link href="https://open.kakao.com/o/geiAlgzd">
							https://open.kakao.com/o/geiAlgzd
						</Link>
						{" "}(Code: 1004)
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						Team. Nitrogen 에 지원하고 싶어요!
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						<Link href="https://team.nitrogen.kr">
							durl
						</Link>
						{" "}에 방문해서 조건과 신청서릃 확인하실 수 있습니다.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleKanit" color="--light">
						후원 방법을 알려주세요!
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleKanit" color="#b2bac1">
						<Link href="https://donate.nitrogen.kr">
							durl
						</Link>
						{" "}에 방문하여 후원 방법과 혜택을 확인하실 수 있습니다.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 30px 0" background="#0a0b0c" quarkly-title="Footer-14">
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 80px 0px"
				sm-flex-direction="column"
				sm-margin="0px 0px 60px 0px"
				md-margin="0px 0px 45px 0px"
			>
				<Icon
					category="bs"
					icon={BsArrowRight}
					size="74px"
					color="--light"
					margin="0px 50px 0px 0px"
					md-margin="0px 35px 0px 0px"
					sm-margin="0px 0 0px 0px"
				/>
				<Text
					margin="0px 450px 0px 0px"
					border-color="--color-light"
					color="--light"
					font="normal 400 102px/1.2 --fontFamily-googleBlackHanSans"
					lg-margin="0px 0 0px 0px"
					md-font="normal 400 72px/1.2 --fontFamily-sans"
					sm-font="normal 400 52px/1.2 --fontFamily-sans"
				>
					지금 바로 접속하세요.
				</Text>
			</Box>
			<Box
				display="flex"
				margin="0px 0px 80px 0px"
				md-margin="0px 0px 45px 0px"
				justify-content="space-between"
				align-items="flex-start"
				md-flex-direction="column"
				md-display="flex"
				md-grid-gap="32px"
				font="16px --fontFamily-googleKanit"
			>
				<Link
					margin="0px 0px 0px 0px"
					font="normal 600 40px/1.2 --fontFamily-googleKanit"
					color="--light"
					md-margin="0px 0px 0 0px"
					md-width="30%"
					display="inline-block"
					text-decoration-line="initial"
					href="#"
					text-align="right"
				>
					{"                                                    "}
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						font="600 50px/48px Kanit, sans-serif"
					>
						Nitrogen.kr
					</Span>
					<br />
					<Span font-weight="normal">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							1.8 ~ 1.20.x
						</Span>
						{" "}
					</Span>
				</Link>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(3, 1fr)"
					grid-gap="36px 54px"
					lg-align-items="start"
					md-grid-template-columns="repeat(3, 1fr)"
					md-grid-gap="36px 34px"
					sm-grid-template-columns="1fr"
					sm-grid-gap="36px 24px"
					md-width="100%"
					sm-width="100%"
					sm-display="flex"
					sm-flex-direction="column"
				>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="#c3c8d0" letter-spacing="1px" />
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="#c3c8d0" letter-spacing="1px">
							PARTNERS
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="https://cookiepl.xyz"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
						>
							CookiePl
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
						>
							-
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							-
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							-
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="#c3c8d0" letter-spacing="1px">
							COMMUNITY
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="https://aztra.xyz/invite/5s0mLBVY"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
						>
							Discord
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="https://aztra.xyz/invite/81cLsp5S"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#ffffff"
						>
							Discord(iLunar)
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="https://open.kakao.com/o/geiAlgzd"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Kakao Open Chat
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						/>
						<Link
							margin="0px 0 0px 0"
							hover-color="#ffffff"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						/>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				align-items="center"
				md-flex-direction="column"
				md-align-items="flex-start"
				justify-content="space-between"
				font="16px --fontFamily-googleKanit"
			>
				<Text
					font="--base"
					color="#c3c8d0"
					md-margin="0px 0px 0 0px"
					width="30%"
					md-width="100%"
					margin="0 0px 0 0px"
				>
					© 2020-2023 NitrogenKR. 모든 권리 보유.
				</Text>
				<Box
					align-items="flex-start"
					margin="0px 0px 0px -"
					justify-content="flex-start"
					display="grid"
					lg-margin="0px 0px 0px 0px"
					flex-direction="row"
					flex-wrap="wrap"
					md-order="-1"
					md-margin="0px 0px 25px 0px"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="0 24px"
					sm-grid-template-columns="1fr"
					sm-grid-gap="10px 0"
					md-display="flex"
				>
					<Link
						border-color="--color-primary"
						display="flex"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						margin="0px 0 0px 0"
						lg-margin="0px 6px 0px 0px"
						lg-border-width="0px 0px 0px 2px"
						href="#"
						text-decoration-line="initial"
						color="#c3c8d0"
						hover-color="#ffffff"
						sm-padding="0 0 0 0"
						sm-margin="0px 12px 0px 0px"
					/>
					<Link
						border-color="--color-primary"
						display="flex"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						margin="0px 0 0px 0"
						lg-margin="0px 6px 0px 0px"
						lg-border-width="0px 0px 0px 2px"
						href="#"
						text-decoration-line="initial"
						color="#c3c8d0"
						hover-color="#ffffff"
						sm-padding="0 0 0 0"
						sm-margin="0px 12px 0px 0px"
					/>
					<Link
						margin="0px 0 0px 0"
						lg-margin="0px 6px 0px 0px"
						display="flex"
						href="https://nitrogenmc.notion.site/dfa58fc31128454fa6b2ef51b02a8e7a"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						text-decoration-line="initial"
						color="#c3c8d0"
						hover-color="#ffffff"
						sm-padding="0 0 0 0"
						sm-margin="0px 12px 0px 0px"
					>
						개인 정보 정책
					</Link>
					<Link
						padding="0 0 0 0"
						margin="0px 0 0px 0"
						hover-color="#ffffff"
						lg-margin="0px 6px 0px 0px"
						href="https://nitrogenmc.notion.site/da2beea6e8b24997bcbd267ac81f5320"
						text-decoration-line="initial"
						color="#c3c8d0"
						font="normal 400 16px/24px --fontFamily-googleRoboto"
						display="flex"
					>
						이용 약관
					</Link>
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