<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- <link rel="shortcut icon" type="image/x-icon" href="http://www.thecodefac.com/favicon.png"> -->
    <link rel='stylesheet' id='font-awesome-css' href='resources/css/font-awesome.min.css?ver=4.9.8' type='text/css'
          media='all'/>
    <link rel='stylesheet' id='bootstrap-css' href='resources/lib/bootstrap-3.3.7/css/bootstrap.min.css?ver=4.9.8'
          type='text/css' media='all'/>
    <link rel='stylesheet' id='bz9tbe-default-css' href='resources/css/bz9tbe-default.css?ver=4.9.8' type='text/css'
          media='all'/>
    <link rel='stylesheet' id='animate-css' href='resources/css/animate.min.css?ver=4.9.8' type='text/css' media='all'/>
    <link rel='stylesheet' id='bz9tbe-style-css' href='resources/css/style.css?ver=4.9.8' type='text/css' media='all'/>
    <link rel='stylesheet' id='bz9tbe-style-css' href='resources/fonts/NotosansCJKKr/css/noto-sans-scott.css?ver=4.9.8'
          type='text/css' media='all'/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet">
</head>
<body>
<div id="home-wrapper">
    <header class="header-v1">
        <div class="header position-relative clearfix">
            <div class="container container-center ">
                <div class="main-menu clearfix">
                    <div class="logo bz9tbe-flex-box bz9tbe-flex-box-ai-center">
                        <a href="#"><img src="resources/images/logo.png" alt=""/></a>
                    </div>
                    <div class="menu-bars-mobi open" style="display:none;">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a class="button button-header" href="#" style="display:none;">서비스 문의</a>
                </div>
            </div>
        </div>
    </header>
    <section class="banner-header">
        <img src="resources/images/background-header.jpg" alt=""/>
        <img class="mobi" src="resources/images/image-s1-m.jpg" alt=""/>
        <div class="container container-center ">
            <div class="content">
                <div class="title">
                    <h2>codeFac</h2>
                    <p>We are Mobile Application Gateway for Fun & Value</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section-one">
        <div class="container">
            <img src="resources/images/image-s1.jpg" alt=""/>
            <img class="mobi" src="resources/images/s1-mobi.jpg" alt=""/>
            <h2>새로운 가치를 만나다</h2>
            <p>
                codeFac에서 제공하는 서비스, 기타 평범한 서비스들과 같았다면 저희는 시장에서 없어졌을 것입니다.<br>
                모바일에서 제공되는 모든 서비스에 재미와 감동, 그 이상의 새로운 가치를 담았습니다.<br>
                <span>그것이 codeFac이 제일 잘하는 일입니다.</span>
            </p>
        </div>
    </section>
    <section class="section-two">
        <div class="container">
            <div class="title">
                <h2>Our Service</h2>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="box">
                        <div class="box-img">
                            <img src="resources/images/icon1.png" alt=""/>
                        </div>
                        <div class="box-content">
                            <h2>어플리케이션 개발</h2>
                            <p>통신, 방송, 교육, 미디어/출판, e마케팅 분야의<br>
                                다양한 어플리케이션(ios, 안드로이드) 개발</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="box">
                        <div class="box-img">
                            <img src="resources/images/icon3.png" alt=""/>
                        </div>
                        <div class="box-content">
                            <h2>웹서비스 개발</h2>
                            <p>방송, 증권, 영상 미디어, 쇼핑몰 등<br>
                                PC/Mobile 홈페이지 제작</p>
                        </div>
                    </div>
                </div>
		<div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="box">
                        <div class="box-img">
                            <img src="resources/images/icon2.png" alt=""/>
                        </div>
                        <div class="box-content">
                            <h2>게임 개발</h2>
                            <p>Unity 3D를 활용한 N-Screen 개발 역량 보유<br>
                                물리엔진, 자이로스코프 등을 활용한 소셜 게임.<br>
				게임을 교육에 접목한 G-Learning 분야 지향</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-three">
        <div class="container">
            <div class="box-title">
                <h2>History</h2>
                <p>모든 고객과 진심으로 마주하며, 함께 성장하는 기업이 되겠습니다.</p>
            </div>
            <div class="content-faq">
		<div class="box-faq active">
                    <div class="title clearfix">
                        <div class="date">
                            2019
                        </div>
                        <ul>
                            <li><span>08</span>마이뮤직테이스트 신규 서비스 구축 사업 수주</li>
			    <li><span>05</span>계단왕 어플리케이션 구축 사업 수주</li>
                            <li><span>01</span>KB증권 방송 플랫폼 구축 사업 수주</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                </div>
                <div class="box-faq active">
                    <div class="title clearfix">
                        <div class="date">
                            2018
                        </div>
                        <ul>
                            <li><span>12</span>VREZ Cinema 홈페이지 및 HMD연동 시스템 개발 사업 수주</li>
                            <li><span>10</span>메조미디어 QFeat 실시간 라이브 퀴즈쇼 어플리케이션 개발</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li style="display:none;"><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li style="display:none;"><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
		<div class="box-faq active">
                    <div class="title clearfix">
                        <div class="date">
                            2017
                        </div>
                        <ul>
                            <li><span>07</span>아마존 인공지능 해외직구 "쇼핑을 부탁해" 서비스 런칭</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li style="display:none;"><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li style="display:none;"><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq active">
                    <div class="title clearfix">
                        <div class="date">
                            2016
                        </div>
                        <ul>
                            <li><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>03</span>SM Mobile 커뮤니케이션즈 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li style="display:none;"><span>02</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                            <li style="display:none;"><span>01</span>Aidibao 중국 관광객 배송 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2015
                        </div>
                        <ul>
                            <li><span>07</span> Take a trip 여행 웹 구축 프로젝트 수주</li>
                            <li><span>06</span>KT UMS 시스템 구축 프로젝트 수주</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>05</span>모바일 분할결제 시스템 구축 프로젝트 수주</li>
                            <li><span>04</span>신세계사이먼 프리미엄아울렛 홈페이지 구축 프로젝트 수주</li>
                            <li><span>03</span>2048월드챔피언십 게임 런칭 (Appstore, Google Play)</li>
                            <li><span>02</span>방송 프로그램 시작/종료점 자동 추출 솔루션, EvenMarker 개발</li>
                            <li><span>01</span>PICSEN 메신저 개발</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2014
                        </div>
                        <ul>
                            <li><span>12</span>코레일 모바일 앱 개발프로젝트 수주<br>
                                꿈꾸는 모바일 폐쇄형 복지몰 어플리케이션 개발프로젝트 수주</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2013
                        </div>
                        <ul>
                            <li><span>06</span>(유)잡코리아 구인/구직 모바일 SNS Welldone.to iOS 앱 공급</li>
                            <li><span>05</span>삼성SDS 기업용 SNS Cellz 모바일 앱 공급</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2012
                        </div>
                        <ul>
                            <li><span>05</span>SKP 모바일 SNS 위스코어, 스타일북 개발 공급계약 체결</li>
                            <li><span>04</span>모바일 회원 명부 수첩 “포켓피플” 론칭</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>03</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>02</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2010
                        </div>
                        <ul>
                            <li><span>06</span>LG U+ 어플리케이션 공급계약 체결</li>
                            <li><span>05</span>빅뱅,2NE1 어플리케이션 공급계약 체결</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
                <div class="box-faq" style="display:none;">
                    <div class="title clearfix">
                        <div class="date">
                            2009
                        </div>
                        <ul>
                            <li><span>01</span>모바일 게임 개발 스튜디오 ‘폴리패닉’ 설립</li>
                        </ul>
                        <span class="fa icon"></span>
                    </div>
                    <div class="toggle clearfix">
                        <ul>
                            <li><span>04</span>해외 직구, 해외 구매대행 오픈마켓 네고프라이스 서비스 런칭</li>
                            <li><span>03</span>Take a trip 여행 모바일 어플리케이션 구축 프로젝트 수주</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-four">
        <div class="container">
            <div class="box-title">
                <h2>CLIENTS</h2>
                <p style="text-transform:none !important;">codeFac의 주요 협력사를 안내합니다.</p>
            </div>
            <div class="box-content">
                <ul class="clearfix ">
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon1.png" alt=""/>
                        </div>
                        <h3>통신/포털</h3>
                        <p class="f12">SK텔레콤<br>LG U+<br>SK플래닛<br>카카오톡<br>잡코리아<br>네오위즈</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon2.png" alt=""/>
                        </div>
                        <h3>공공</h3>
                        <p class="f12">한국철도공사<br>보건복지부<br>법제처</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon3.png" alt=""/>
                        </div>
                        <h3>IT 서비스</h3>
                        <p class="f12">삼성SDS<br>SK C&C<br>CDNetworks<br>메가존<br>대상정보기술<br>후지쯔</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon4.png" alt=""/>
                        </div>
                        <h3>신문/방송</h3>
                        <p class="f12">중앙일보<br>KBS미디어<br>SBS콘텐츠허브<br>티브로드<br>경기방송</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon5.png" alt=""/>
                        </div>
                        <h3>제조</h3>
                        <p class="f12">LG전자<br>팔도(Paldo)<br>대웅제약<br>한국와이어스<br>㈜에뛰드</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon6.png" alt=""/>
                        </div>
                        <h3>여행</h3>
                        <p class="f12">아시아나항공<br>아주오토렌탈</p>
                    </li>
                    <!-- <li style="display:none;">
                        <div class="box-img">
                            <img src="resources/images/client-icon7.png" alt=""/>
                        </div>
                        <h3>연예/광고</h3>
                        <p class="f12">YG엔터테인먼트<br>DSP미디어<br>제일기획</p>
                    </li> -->
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon8.png" alt=""/>
                        </div>
                        <h3>출판/교육</h3>
                        <p class="f12">대교<br>재능교육<br>길벗 출판사</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon9.png" alt=""/>
                        </div>
                        <h3>금융</h3>
                        <p class="f12">SC제일은행</p>
                    </li>
                    <li>
                        <div class="box-img">
                            <img src="resources/images/client-icon10.png" alt=""/>
                        </div>
                        <h3>쇼핑</h3>
                        <p class="f12">현대Hmall<br>이마트</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="section-five" style="display:none;">
        <div class="container">
            <div class="box-title">
                <h2>CONTACT US</h2>
                <p>고객님께서 궁금하신 부분은 언제든지 문의해주세요.</p>
            </div>
            <div class="box-form">
                <form>
                    <div class="clearfix box">
                        <input type="text" placeholder="이름 *">
                        <input type="text" placeholder="연락처">
                        <input type="text" placeholder="이메일 *">
                    </div>
                    <input type="text" placeholder="제목 *">
                    <textarea placeholder="상담내용 *"></textarea>
                    <p><span>*</span>부분은 필수 입력사항입니다.</p>
                    <button type="submit" value="Submit">보내기</button>
                </form>
            </div>
        </div>
    </section>
    <footer>
        <div class="container container-center ">
            <div class="logo">
                <a href="#"><img src="resources/images/logo.png" alt=""/></a>
            </div>
            <div class="content-footer">
                <!-- <p>ADD. 서울시 강남구 테헤란로 116, 10층 H1027호  |  TEL. 0000-0000  |  E-mail. support@thecodefac.com<br>
                    COPYTIGHT © codeFac, All rights reserved.</p> -->
                 <p>ADD. 서울시 강남구 테헤란로 116, 10층 H1027호&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;E-mail. support@thecodefac.com<br>
                    COPYTIGHT © codeFac, All rights reserved.</p>   
            </div>
        </div>
    </footer>
</div>
<script type='text/javascript' src='resources/lib/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='resources/js/ultimate.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='resources/lib/bootstrap-3.3.7/js/bootstrap.min.js?ver=4.9.8'></script>
<script type='text/javascript' src='resources/js/script.js'></script>
</body>
</html>