import React, { useState } from 'react';
import "./admindashbord.css";
import revenue from "../../assets/icons/revenue.png";
import Nav from "../../components/Admin/AdminNav"


export default function AdminDashbord() {

  return (
    <>
      <div id="app" >
        <Nav/>
       
      </div>
      <>
  <div id="root" style={{backgroundColor:"#F9FAFB", marginLeft:"-70px"}}>
    <div className="MuiBox-root css-11u0gue">
      <div className="MuiBox-root css-1y6sui9">
        <div className="MuiBox-root css-1a6vgkv" />
      </div>
      <main className="MuiBox-root css-1o415lm">
        <div className="MuiContainer-root MuiContainer-maxWidthXl css-1ekb41w">
          <h4 className="MuiTypography-root MuiTypography-h4 css-1axpcc0">
            Hi, Welcome back Admin 👋
          </h4>
          <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-3 css-v57kt1">
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-6 MuiGrid2-grid-md-3 css-7no1he">
              
              <div className="MuiStack-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1srzu06">
               
                <div className="MuiBox-root css-1wsuzl7">
                <img
                    className="logo-dark"
                    src={revenue}
                  />                   </div>
                
                <div className="MuiStack-root css-4jin6z">
                  <h4 className="MuiTypography-root MuiTypography-h4 css-sko12q">
                    714k
                  </h4>
                  <h6 className="MuiTypography-root MuiTypography-subtitle2 css-xppb4g">
                    Revenue
                  </h6>
                </div>
              </div>
            </div>
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-6 MuiGrid2-grid-md-3 css-7no1he">
              <div className="MuiStack-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1srzu06">
                <div className="MuiBox-root css-1wsuzl7">
                <img
                    className="logo-dark"
                    src={revenue}
                  />                        </div>
                <div className="MuiStack-root css-4jin6z">
                  <h4 className="MuiTypography-root MuiTypography-h4 css-sko12q">
                    1.35M
                  </h4>
                  <h6 className="MuiTypography-root MuiTypography-subtitle2 css-xppb4g">
                    Earning
                  </h6>
                </div>
              </div>
            </div>
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-6 MuiGrid2-grid-md-3 css-7no1he">
              <div className="MuiStack-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1srzu06">
                <div className="MuiBox-root css-1wsuzl7">
                <img
                    className="logo-dark"
                    src={revenue}
                  />                        </div>
                <div className="MuiStack-root css-4jin6z">
                  <h4 className="MuiTypography-root MuiTypography-h4 css-sko12q">
                    1.72m
                  </h4>
                  <h6 className="MuiTypography-root MuiTypography-subtitle2 css-xppb4g">
                    Bookings
                  </h6>
                </div>
              </div>
            </div>
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-sm-6 MuiGrid2-grid-md-3 css-7no1he">
              <div className="MuiStack-root MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1srzu06">
              <div className="card-media">
                    
                <img
                    className="logo-dark"
                    src={revenue}
                  />                        </div>
                <div className="MuiStack-root css-4jin6z">
                  <h4 className="MuiTypography-root MuiTypography-h4 css-sko12q">
                    234
                  </h4>
                  <h6 className="MuiTypography-root MuiTypography-subtitle2 css-xppb4g">
                    Services
                  </h6>
                </div>
              </div>
            </div>
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-md-6 MuiGrid2-grid-lg-8 css-109bujx">
              <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-vpcbt9">
                <div className="MuiCardHeader-root css-15x3obx">
                  <div className="MuiCardHeader-content css-11qjisw">
                    <span className="MuiTypography-root MuiTypography-h6 MuiCardHeader-title css-jef1j">
                    Earning statistics                    </span>
                    <span className="MuiTypography-root MuiTypography-body2 MuiCardHeader-subheader css-mret7">
                      (+43%) than last year
                    </span>
                  </div>
                </div>
                <div className="MuiBox-root css-1j30m50">
                  <div
                    dir="ltr"
                    type="line"
                    series="[object Object],[object Object],[object Object]"
                    options="[object Object]"
                    width="100%"
                    height={364}
                    className="css-1fcvf5u"
                    style={{ minHeight: 379 }}
                  >
                    <div
                      id="apexchartsm8lpdzfq"
                      className="apexcharts-canvas apexchartsm8lpdzfq apexcharts-theme-light"
                      style={{ width: 584, height: 364 }}
                    >
                      <svg
                        id="SvgjsSvg1001"
                        width={584}
                        height={364}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        className="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <foreignObject x={0} y={0} width={584} height={364}>
                          <div
                            className="apexcharts-legend apexcharts-align-right apx-legend-position-top"
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                              right: 0,
                              position: "absolute",
                              left: 0,
                              top: 4,
                              maxHeight: 182
                            }}
                          >
                            <div
                              className="apexcharts-legend-series"
                              style={{ margin: "2px 8px" }}
                              rel={1}
                              seriesname="TeamxA"
                              data:collapsed="false"
                            >
                              <span
                                className="apexcharts-legend-marker"
                                style={{
                                  background: "rgb(24, 119, 242) ",
                                  color: "rgb(24, 119, 242)",
                                  height: 12,
                                  width: 12,
                                  left: 0,
                                  top: 0,
                                  borderWidth: 0,
                                  borderColor: "rgb(255, 255, 255)",
                                  borderRadius: 12
                                }}
                                rel={1}
                                data:collapsed="false"
                              />
                              <span
                                className="apexcharts-legend-text"
                                style={{
                                  color: "rgb(33, 43, 54)",
                                  fontSize: 13,
                                  fontWeight: 500,
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                                rel={1}
                                i={0}
                                data:default-text="Team%20A"
                                data:collapsed="false"
                              >
                                Total Revenue
                              </span>
                            </div>
                            <div
                              className="apexcharts-legend-series"
                              style={{ margin: "2px 8px" }}
                              rel={2}
                              seriesname="TeamxB"
                              data:collapsed="false"
                            >
                              <span
                                className="apexcharts-legend-marker"
                                style={{
                                  background: "rgb(255, 171, 0) ",
                                  color: "rgb(255, 171, 0)",
                                  height: 12,
                                  width: 12,
                                  left: 0,
                                  top: 0,
                                  borderWidth: 0,
                                  borderColor: "rgb(255, 255, 255)",
                                  borderRadius: 12
                                }}
                                rel={2}
                                data:collapsed="false"
                              />
                              <span
                                className="apexcharts-legend-text"
                                style={{
                                  color: "rgb(33, 43, 54)",
                                  fontSize: 13,
                                  fontWeight: 500,
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                                rel={2}
                                i={1}
                                data:default-text="Team%20B"
                                data:collapsed="false"
                              >
                                Total Fees
                              </span>
                            </div>
                            <div
                              className="apexcharts-legend-series"
                              style={{ margin: "2px 8px" }}
                              rel={3}
                              seriesname="TeamxC"
                              data:collapsed="false"
                            >
                              <span
                                className="apexcharts-legend-marker"
                                style={{
                                  background: "rgb(0, 184, 217) ",
                                  color: "rgb(0, 184, 217)",
                                  height: 12,
                                  width: 12,
                                  left: 0,
                                  top: 0,
                                  borderWidth: 0,
                                  borderColor: "rgb(255, 255, 255)",
                                  borderRadius: 12
                                }}
                                rel={3}
                                data:collapsed="false"
                              />
                              <span
                                className="apexcharts-legend-text"
                                style={{
                                  color: "rgb(33, 43, 54)",
                                  fontSize: 13,
                                  fontWeight: 500,
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                                rel={3}
                                i={2}
                                data:default-text="Team%20C"
                                data:collapsed="false"
                              >
                                Total Earning
                              </span>
                            </div>
                          </div>
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                            .apexcharts-legend {\n                              display: flex;\n                              overflow: auto;\n                              padding: 0 10px;\n                            }\n\n                            .apexcharts-legend.apx-legend-position-bottom,\n                            .apexcharts-legend.apx-legend-position-top {\n                              flex-wrap: wrap\n                            }\n\n                            .apexcharts-legend.apx-legend-position-right,\n                            .apexcharts-legend.apx-legend-position-left {\n                              flex-direction: column;\n                              bottom: 0;\n                            }\n\n                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                            .apexcharts-legend.apx-legend-position-right,\n                            .apexcharts-legend.apx-legend-position-left {\n                              justify-content: flex-start;\n                            }\n\n                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                              justify-content: center;\n                            }\n\n                            .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                            .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                              justify-content: flex-end;\n                            }\n\n                            .apexcharts-legend-series {\n                              cursor: pointer;\n                              line-height: normal;\n                            }\n\n                            .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,\n                            .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {\n                              display: flex;\n                              align-items: center;\n                            }\n\n                            .apexcharts-legend-text {\n                              position: relative;\n                              font-size: 14px;\n                            }\n\n                            .apexcharts-legend-text *,\n                            .apexcharts-legend-marker * {\n                              pointer-events: none;\n                            }\n\n                            .apexcharts-legend-marker {\n                              position: relative;\n                              display: inline-block;\n                              cursor: pointer;\n                              margin-right: 3px;\n                              border-style: solid;\n                            }\n\n                            .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,\n                            .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {\n                              display: inline-block;\n                            }\n\n                            .apexcharts-legend-series.apexcharts-no-click {\n                              cursor: auto;\n                            }\n\n                            .apexcharts-legend .apexcharts-hidden-zero-series,\n                            .apexcharts-legend .apexcharts-hidden-null-series {\n                              display: none ;\n                            }\n\n                            .apexcharts-inactive-legend {\n                              opacity: 0.45;\n                            }\n                          "
                            }}
                          />
                        </foreignObject>
                        <rect
                          id="SvgjsRect1007"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          id="SvgjsG1110"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(13.066665649414062, 0)"
                        >
                          <g
                            id="SvgjsG1111"
                            className="apexcharts-yaxis-texts-g"
                          >
                            <text
                              id="SvgjsText1113"
                              fontFamily="Public Sans, sans-serif"
                              x={20}
                              y="53.4"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#919eab"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Public Sans, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1114">80</tspan>
                              <title>80</title>
                            </text>
                            <text
                              id="SvgjsText1116"
                              fontFamily="Public Sans, sans-serif"
                              x={20}
                              y="123.45"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#919eab"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Public Sans, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1117">60</tspan>
                              <title>60</title>
                            </text>
                            <text
                              id="SvgjsText1119"
                              fontFamily="Public Sans, sans-serif"
                              x={20}
                              y="193.5"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#919eab"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Public Sans, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1120">40</tspan>
                              <title>40</title>
                            </text>
                            <text
                              id="SvgjsText1122"
                              fontFamily="Public Sans, sans-serif"
                              x={20}
                              y="263.54999999999995"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#919eab"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Public Sans, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1123">20</tspan>
                              <title>20</title>
                            </text>
                            <text
                              id="SvgjsText1125"
                              fontFamily="Public Sans, sans-serif"
                              x={20}
                              y="333.59999999999997"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#919eab"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Public Sans, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1126">0</tspan>
                              <title>0</title>
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1003"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(57.28285279391105, 52)"
                        >
                          <defs id="SvgjsDefs1002">
                            <clipPath id="gridRectMaskm8lpdzfq">
                              <rect
                                id="SvgjsRect1021"
                                width="539.500960061592"
                                height="283.2"
                                x="-15.5"
                                y="-1.5"
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <clipPath id="forecastMaskm8lpdzfq" />
                            <clipPath id="nonForecastMaskm8lpdzfq" />
                            <clipPath id="gridRectMarkerMaskm8lpdzfq">
                              <rect
                                id="SvgjsRect1022"
                                width="514.500960061592"
                                height="284.2"
                                x={-2}
                                y={-2}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <linearGradient
                              id="SvgjsLinearGradient1027"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                            >
                              <stop
                                id="SvgjsStop1028"
                                stopOpacity="0.4"
                                stopColor="rgba(255,171,0,0.4)"
                                offset={0}
                              ></stop>
                              <stop
                                id="SvgjsStop1029"
                                stopOpacity={0}
                                stopColor="rgba(255,171,0,0)"
                                offset={1}
                              ></stop>
                              <stop
                                id="SvgjsStop1030"
                                stopOpacity={0}
                                stopColor="rgba(255,171,0,0)"
                                offset={1}
                              ></stop>
                            </linearGradient>
                          </defs>
                          <line
                            id="SvgjsLine1008"
                            x1="97.07748895932214"
                            y1={0}
                            x2="97.07748895932214"
                            y2="280.2"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x="97.07748895932214"
                            y={0}
                            width={1}
                            height="280.2"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g id="SvgjsG1065" className="apexcharts-grid">
                            <g
                              id="SvgjsG1066"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1070"
                                x1="-10.216187144496985"
                                y1="70.05"
                                x2="520.717147206089"
                                y2="70.05"
                                stroke="rgba(145, 158, 171, 0.2)"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1071"
                                x1="-10.216187144496985"
                                y1="140.1"
                                x2="520.717147206089"
                                y2="140.1"
                                stroke="rgba(145, 158, 171, 0.2)"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1072"
                                x1="-10.216187144496985"
                                y1="210.14999999999998"
                                x2="520.717147206089"
                                y2="210.14999999999998"
                                stroke="rgba(145, 158, 171, 0.2)"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1067"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1075"
                              x1={0}
                              y1="280.2"
                              x2="510.50096006159197"
                              y2="280.2"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              id="SvgjsLine1074"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="280.2"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g
                            id="SvgjsG1068"
                            className="apexcharts-grid-borders"
                          >
                            <line
                              id="SvgjsLine1069"
                              x1="-10.216187144496985"
                              y1={0}
                              x2="520.717147206089"
                              y2={0}
                              stroke="rgba(145, 158, 171, 0.2)"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1073"
                              x1="-10.216187144496985"
                              y1="280.2"
                              x2="520.717147206089"
                              y2="280.2"
                              stroke="rgba(145, 158, 171, 0.2)"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG1023"
                            className="apexcharts-area-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1024"
                              className="apexcharts-series"
                              seriesname="TeamxB"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={1}
                            >
                              <path
                                id="SvgjsPath1031"
                                d="M0 280.2L0 126.09C5.605781626311927 121.94120160420908 35.91469240695009 85.1187348739328 52.05766369049128 87.5625C68.20063497403248 90.0062651260672 84.39632361632032 141.78327063077256 99.07748895932212 136.5975C113.75865430232393 131.41172936922743 139.56510280645196 37.55342465909689 151.1351526498134 45.5325C162.70520249317482 53.51157534090311 191.6783699950684 194.70805169226756 201.51353686641787 203.14499999999998C211.34870373776732 211.5819483077324 236.55637792920035 128.6003599302211 253.57120055690916 129.5925C270.58602318461794 130.5846400697789 287.0200488649928 205.090813620605 303.9495847735136 206.64749999999998C320.8791206820344 208.20418637939497 348.73556444262357 145.15932838199393 356.00724846400493 136.5975C363.2789324853863 128.03567161800606 394.44490310814234 77.20249777456814 408.0649121544962 84.06C421.68492120085006 90.91750222543186 444.45796689976925 179.0615381577773 458.44329637110064 185.6325C472.42862584243204 192.20346184222268 506.48202373017233 133.91887917352204 510.50096006159197 129.5925C510.50096006159197 129.5925 510.50096006159197 280.2 510.50096006159197 280.2C510.50096006159197 280.2 0 280.2 0 280.2M0 126.09C0 126.09 0 126.09 0 126.09 "
                                fill="url(#SvgjsLinearGradient1027)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={1}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 0 280.2 L 0 126.09C5.605781626311927, 121.9412016042091, 35.91469240695009, 85.11873487393281, 52.05766369049128, 87.5625S84.39632361632032, 141.78327063077256, 99.07748895932212, 136.5975S139.56510280645196, 37.553424659096876, 151.1351526498134, 45.5325S191.6783699950684, 194.70805169226756, 201.51353686641787, 203.14499999999998S236.55637792920035, 128.6003599302211, 253.57120055690916, 129.5925S287.0200488649928, 205.090813620605, 303.9495847735136, 206.64749999999998S348.73556444262357, 145.15932838199393, 356.00724846400493, 136.5975S394.44490310814234, 77.20249777456816, 408.0649121544962, 84.06S444.45796689976925, 179.0615381577773, 458.44329637110064, 185.6325S506.48202373017233, 133.91887917352204, 510.50096006159197, 129.5925 L 510.50096006159197 280.2 L 0 280.2M 0 126.09z"
                                pathfrom="M -1 280.2 L -1 280.2 L 52.05766369049128 280.2 L 99.07748895932212 280.2 L 151.1351526498134 280.2 L 201.51353686641787 280.2 L 253.57120055690916 280.2 L 303.9495847735136 280.2 L 356.00724846400493 280.2 L 408.0649121544962 280.2 L 458.44329637110064 280.2 L 510.50096006159197 280.2"
                              ></path>
                              <path
                                id="SvgjsPath1032"
                                d="M0 126.09C5.605781626311927 121.94120160420908 35.91469240695009 85.1187348739328 52.05766369049128 87.5625C68.20063497403248 90.0062651260672 84.39632361632032 141.78327063077256 99.07748895932212 136.5975C113.75865430232393 131.41172936922743 139.56510280645196 37.55342465909689 151.1351526498134 45.5325C162.70520249317482 53.51157534090311 191.6783699950684 194.70805169226756 201.51353686641787 203.14499999999998C211.34870373776732 211.5819483077324 236.55637792920035 128.6003599302211 253.57120055690916 129.5925C270.58602318461794 130.5846400697789 287.0200488649928 205.090813620605 303.9495847735136 206.64749999999998C320.8791206820344 208.20418637939497 348.73556444262357 145.15932838199393 356.00724846400493 136.5975C363.2789324853863 128.03567161800606 394.44490310814234 77.20249777456814 408.0649121544962 84.06C421.68492120085006 90.91750222543186 444.45796689976925 179.0615381577773 458.44329637110064 185.6325C472.42862584243204 192.20346184222268 506.48202373017233 133.91887917352204 510.50096006159197 129.5925C510.50096006159197 129.5925 510.50096006159197 129.5925 510.50096006159197 129.5925 "
                                fill="none"
                                fillOpacity={1}
                                stroke="#ffab00"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={1}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 0 126.09C5.605781626311927, 121.9412016042091, 35.91469240695009, 85.11873487393281, 52.05766369049128, 87.5625S84.39632361632032, 141.78327063077256, 99.07748895932212, 136.5975S139.56510280645196, 37.553424659096876, 151.1351526498134, 45.5325S191.6783699950684, 194.70805169226756, 201.51353686641787, 203.14499999999998S236.55637792920035, 128.6003599302211, 253.57120055690916, 129.5925S287.0200488649928, 205.090813620605, 303.9495847735136, 206.64749999999998S348.73556444262357, 145.15932838199393, 356.00724846400493, 136.5975S394.44490310814234, 77.20249777456816, 408.0649121544962, 84.06S444.45796689976925, 179.0615381577773, 458.44329637110064, 185.6325S506.48202373017233, 133.91887917352204, 510.50096006159197, 129.5925"
                                pathfrom="M -1 280.2 L -1 280.2 L 52.05766369049128 280.2 L 99.07748895932212 280.2 L 151.1351526498134 280.2 L 201.51353686641787 280.2 L 253.57120055690916 280.2 L 303.9495847735136 280.2 L 356.00724846400493 280.2 L 408.0649121544962 280.2 L 458.44329637110064 280.2 L 510.50096006159197 280.2"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1025"
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data:realindex={1}
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1130"
                                    r={0}
                                    cx="201.51353686641787"
                                    cy="203.14499999999998"
                                    className="apexcharts-marker wzcpakham"
                                    stroke="#ffffff"
                                    fill="#ffab00"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1033"
                            className="apexcharts-bar-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1034"
                              className="apexcharts-series"
                              rel={1}
                              seriesname="TeamxA"
                              data:realindex={0}
                            >
                              <path
                                id="SvgjsPath1039"
                                d="M-3.7615860215064667 280.20099999999996L-3.7615860215064667 202.6435C-3.7615860215064667 201.1435 -2.2615860215064667 199.6435 -0.7615860215064667 199.6435L-0.7615860215064667 199.6435C0 199.6435 0.7615860215064667 201.1435 0.7615860215064667 202.6435L0.7615860215064667 280.20099999999996L-3.7615860215064667 280.20099999999996C-3.7615860215064667 280.20099999999996 -3.7615860215064667 280.20099999999996 -3.7615860215064667 280.20099999999996C-3.7615860215064667 280.20099999999996 -3.7615860215064667 280.20099999999996 -3.7615860215064667 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M -3.7615860215064667 280.20099999999996 L -3.7615860215064667 202.6435 C -3.7615860215064667 201.1435 -2.2615860215064667 199.6435 -0.7615860215064667 199.6435 L -0.7615860215064667 199.6435 C 0 199.6435 0.7615860215064667 201.1435 0.7615860215064667 202.6435 L 0.7615860215064667 280.20099999999996 z "
                                pathfrom="M -3.7615860215064667 280.20099999999996 L -3.7615860215064667 280.20099999999996 L 0.7615860215064667 280.20099999999996 L 0.7615860215064667 280.20099999999996 L 0.7615860215064667 280.20099999999996 L 0.7615860215064667 280.20099999999996 L 0.7615860215064667 280.20099999999996 L -3.7615860215064667 280.20099999999996 z"
                                cy="199.64249999999998"
                                cx="2.2615860215064667"
                                j={0}
                                val={23}
                                barheight="80.55749999999999"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1041"
                                d="M48.296077668984815 280.20099999999996L48.296077668984815 244.6735C48.296077668984815 243.1735 49.796077668984815 241.6735 51.296077668984815 241.6735L51.296077668984815 241.6735C52.05766369049128 241.6735 52.81924971199775 243.1735 52.81924971199775 244.6735L52.81924971199775 280.20099999999996L48.296077668984815 280.20099999999996C48.296077668984815 280.20099999999996 48.296077668984815 280.20099999999996 48.296077668984815 280.20099999999996C48.296077668984815 280.20099999999996 48.296077668984815 280.20099999999996 48.296077668984815 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 48.296077668984815 280.20099999999996 L 48.296077668984815 244.6735 C 48.296077668984815 243.1735 49.796077668984815 241.6735 51.296077668984815 241.6735 L 51.296077668984815 241.6735 C 52.05766369049128 241.6735 52.81924971199775 243.1735 52.81924971199775 244.6735 L 52.81924971199775 280.20099999999996 z "
                                pathfrom="M 48.296077668984815 280.20099999999996 L 48.296077668984815 280.20099999999996 L 52.81924971199775 280.20099999999996 L 52.81924971199775 280.20099999999996 L 52.81924971199775 280.20099999999996 L 52.81924971199775 280.20099999999996 L 52.81924971199775 280.20099999999996 L 48.296077668984815 280.20099999999996 z"
                                cy="241.67249999999999"
                                cx="54.31924971199775"
                                j={1}
                                val={11}
                                barheight="38.527499999999996"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1043"
                                d="M95.31590293781566 280.20099999999996L95.31590293781566 206.146C95.31590293781566 204.646 96.81590293781566 203.146 98.31590293781566 203.146L98.31590293781566 203.146C99.07748895932212 203.146 99.8390749808286 204.646 99.8390749808286 206.146L99.8390749808286 280.20099999999996L95.31590293781566 280.20099999999996C95.31590293781566 280.20099999999996 95.31590293781566 280.20099999999996 95.31590293781566 280.20099999999996C95.31590293781566 280.20099999999996 95.31590293781566 280.20099999999996 95.31590293781566 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 95.31590293781566 280.20099999999996 L 95.31590293781566 206.146 C 95.31590293781566 204.646 96.81590293781566 203.146 98.31590293781566 203.146 L 98.31590293781566 203.146 C 99.07748895932212 203.146 99.8390749808286 204.646 99.8390749808286 206.146 L 99.8390749808286 280.20099999999996 z "
                                pathfrom="M 95.31590293781566 280.20099999999996 L 95.31590293781566 280.20099999999996 L 99.8390749808286 280.20099999999996 L 99.8390749808286 280.20099999999996 L 99.8390749808286 280.20099999999996 L 99.8390749808286 280.20099999999996 L 99.8390749808286 280.20099999999996 L 95.31590293781566 280.20099999999996 z"
                                cy="203.14499999999998"
                                cx="101.3390749808286"
                                j={2}
                                val={22}
                                barheight="77.05499999999999"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1045"
                                d="M147.37356662830692 280.20099999999996L147.37356662830692 188.6335C147.37356662830692 187.1335 148.87356662830692 185.6335 150.37356662830692 185.6335L150.37356662830692 185.6335C151.1351526498134 185.6335 151.89673867131984 187.1335 151.89673867131984 188.6335L151.89673867131984 280.20099999999996L147.37356662830692 280.20099999999996C147.37356662830692 280.20099999999996 147.37356662830692 280.20099999999996 147.37356662830692 280.20099999999996C147.37356662830692 280.20099999999996 147.37356662830692 280.20099999999996 147.37356662830692 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 147.37356662830692 280.20099999999996 L 147.37356662830692 188.6335 C 147.37356662830692 187.1335 148.87356662830692 185.6335 150.37356662830692 185.6335 L 150.37356662830692 185.6335 C 151.1351526498134 185.6335 151.89673867131984 187.1335 151.89673867131984 188.6335 L 151.89673867131984 280.20099999999996 z "
                                pathfrom="M 147.37356662830692 280.20099999999996 L 147.37356662830692 280.20099999999996 L 151.89673867131984 280.20099999999996 L 151.89673867131984 280.20099999999996 L 151.89673867131984 280.20099999999996 L 151.89673867131984 280.20099999999996 L 151.89673867131984 280.20099999999996 L 147.37356662830692 280.20099999999996 z"
                                cy="185.6325"
                                cx="153.39673867131984"
                                j={3}
                                val={27}
                                barheight="94.5675"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1047"
                                d="M197.7519508449114 280.20099999999996L197.7519508449114 237.6685C197.7519508449114 236.1685 199.2519508449114 234.6685 200.7519508449114 234.6685L200.7519508449114 234.6685C201.51353686641784 234.6685 202.2751228879243 236.1685 202.2751228879243 237.6685L202.2751228879243 280.20099999999996L197.7519508449114 280.20099999999996C197.7519508449114 280.20099999999996 197.7519508449114 280.20099999999996 197.7519508449114 280.20099999999996C197.7519508449114 280.20099999999996 197.7519508449114 280.20099999999996 197.7519508449114 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 197.7519508449114 280.20099999999996 L 197.7519508449114 237.6685 C 197.7519508449114 236.1685 199.2519508449114 234.6685 200.7519508449114 234.6685 L 200.7519508449114 234.6685 C 201.51353686641784 234.6685 202.2751228879243 236.1685 202.2751228879243 237.6685 L 202.2751228879243 280.20099999999996 z "
                                pathfrom="M 197.7519508449114 280.20099999999996 L 197.7519508449114 280.20099999999996 L 202.2751228879243 280.20099999999996 L 202.2751228879243 280.20099999999996 L 202.2751228879243 280.20099999999996 L 202.2751228879243 280.20099999999996 L 202.2751228879243 280.20099999999996 L 197.7519508449114 280.20099999999996 z"
                                cy="234.6675"
                                cx="203.7751228879243"
                                j={4}
                                val={13}
                                barheight="45.5325"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1049"
                                d="M249.8096145354027 280.20099999999996L249.8096145354027 206.146C249.8096145354027 204.646 251.3096145354027 203.146 252.8096145354027 203.146L252.8096145354027 203.146C253.57120055690916 203.146 254.3327865784156 204.646 254.3327865784156 206.146L254.3327865784156 280.20099999999996L249.8096145354027 280.20099999999996C249.8096145354027 280.20099999999996 249.8096145354027 280.20099999999996 249.8096145354027 280.20099999999996C249.8096145354027 280.20099999999996 249.8096145354027 280.20099999999996 249.8096145354027 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 249.8096145354027 280.20099999999996 L 249.8096145354027 206.146 C 249.8096145354027 204.646 251.3096145354027 203.146 252.8096145354027 203.146 L 252.8096145354027 203.146 C 253.57120055690916 203.146 254.3327865784156 204.646 254.3327865784156 206.146 L 254.3327865784156 280.20099999999996 z "
                                pathfrom="M 249.8096145354027 280.20099999999996 L 249.8096145354027 280.20099999999996 L 254.3327865784156 280.20099999999996 L 254.3327865784156 280.20099999999996 L 254.3327865784156 280.20099999999996 L 254.3327865784156 280.20099999999996 L 254.3327865784156 280.20099999999996 L 249.8096145354027 280.20099999999996 z"
                                cy="203.14499999999998"
                                cx="255.8327865784156"
                                j={5}
                                val={22}
                                barheight="77.05499999999999"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1051"
                                d="M300.18799875200716 280.20099999999996L300.18799875200716 153.6085C300.18799875200716 152.1085 301.68799875200716 150.6085 303.18799875200716 150.6085L303.18799875200716 150.6085C303.9495847735136 150.6085 304.7111707950201 152.1085 304.7111707950201 153.6085L304.7111707950201 280.20099999999996L300.18799875200716 280.20099999999996C300.18799875200716 280.20099999999996 300.18799875200716 280.20099999999996 300.18799875200716 280.20099999999996C300.18799875200716 280.20099999999996 300.18799875200716 280.20099999999996 300.18799875200716 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 300.18799875200716 280.20099999999996 L 300.18799875200716 153.6085 C 300.18799875200716 152.1085 301.68799875200716 150.6085 303.18799875200716 150.6085 L 303.18799875200716 150.6085 C 303.9495847735136 150.6085 304.7111707950201 152.1085 304.7111707950201 153.6085 L 304.7111707950201 280.20099999999996 z "
                                pathfrom="M 300.18799875200716 280.20099999999996 L 300.18799875200716 280.20099999999996 L 304.7111707950201 280.20099999999996 L 304.7111707950201 280.20099999999996 L 304.7111707950201 280.20099999999996 L 304.7111707950201 280.20099999999996 L 304.7111707950201 280.20099999999996 L 300.18799875200716 280.20099999999996 z"
                                cy="150.6075"
                                cx="306.2111707950201"
                                j={6}
                                val={37}
                                barheight="129.5925"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1053"
                                d="M352.2456624424985 280.20099999999996L352.2456624424985 209.64849999999998C352.2456624424985 208.14849999999998 353.7456624424985 206.64849999999998 355.2456624424985 206.64849999999998L355.2456624424985 206.64849999999998C356.007248464005 206.64849999999998 356.76883448551143 208.14849999999998 356.76883448551143 209.64849999999998L356.76883448551143 280.20099999999996L352.2456624424985 280.20099999999996C352.2456624424985 280.20099999999996 352.2456624424985 280.20099999999996 352.2456624424985 280.20099999999996C352.2456624424985 280.20099999999996 352.2456624424985 280.20099999999996 352.2456624424985 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 352.2456624424985 280.20099999999996 L 352.2456624424985 209.64849999999998 C 352.2456624424985 208.14849999999998 353.7456624424985 206.64849999999998 355.2456624424985 206.64849999999998 L 355.2456624424985 206.64849999999998 C 356.007248464005 206.64849999999998 356.76883448551143 208.14849999999998 356.76883448551143 209.64849999999998 L 356.76883448551143 280.20099999999996 z "
                                pathfrom="M 352.2456624424985 280.20099999999996 L 352.2456624424985 280.20099999999996 L 356.76883448551143 280.20099999999996 L 356.76883448551143 280.20099999999996 L 356.76883448551143 280.20099999999996 L 356.76883448551143 280.20099999999996 L 356.76883448551143 280.20099999999996 L 352.2456624424985 280.20099999999996 z"
                                cy="206.64749999999998"
                                cx="358.26883448551143"
                                j={7}
                                val={21}
                                barheight="73.5525"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1055"
                                d="M404.30332613298975 280.20099999999996L404.30332613298975 129.091C404.30332613298975 127.59100000000001 405.80332613298975 126.09100000000001 407.30332613298975 126.09100000000001L407.30332613298975 126.09100000000001C408.06491215449626 126.09100000000001 408.8264981760027 127.59100000000001 408.8264981760027 129.091L408.8264981760027 280.20099999999996L404.30332613298975 280.20099999999996C404.30332613298975 280.20099999999996 404.30332613298975 280.20099999999996 404.30332613298975 280.20099999999996C404.30332613298975 280.20099999999996 404.30332613298975 280.20099999999996 404.30332613298975 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 404.30332613298975 280.20099999999996 L 404.30332613298975 129.091 C 404.30332613298975 127.59100000000001 405.80332613298975 126.09100000000001 407.30332613298975 126.09100000000001 L 407.30332613298975 126.09100000000001 C 408.06491215449626 126.09100000000001 408.8264981760027 127.59100000000001 408.8264981760027 129.091 L 408.8264981760027 280.20099999999996 z "
                                pathfrom="M 404.30332613298975 280.20099999999996 L 404.30332613298975 280.20099999999996 L 408.8264981760027 280.20099999999996 L 408.8264981760027 280.20099999999996 L 408.8264981760027 280.20099999999996 L 408.8264981760027 280.20099999999996 L 408.8264981760027 280.20099999999996 L 404.30332613298975 280.20099999999996 z"
                                cy="126.09"
                                cx="410.3264981760027"
                                j={8}
                                val={44}
                                barheight="154.10999999999999"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1057"
                                d="M454.6817103495942 280.20099999999996L454.6817103495942 206.146C454.6817103495942 204.646 456.1817103495942 203.146 457.6817103495942 203.146L457.6817103495942 203.146C458.4432963711007 203.146 459.20488239260715 204.646 459.20488239260715 206.146L459.20488239260715 280.20099999999996L454.6817103495942 280.20099999999996C454.6817103495942 280.20099999999996 454.6817103495942 280.20099999999996 454.6817103495942 280.20099999999996C454.6817103495942 280.20099999999996 454.6817103495942 280.20099999999996 454.6817103495942 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 454.6817103495942 280.20099999999996 L 454.6817103495942 206.146 C 454.6817103495942 204.646 456.1817103495942 203.146 457.6817103495942 203.146 L 457.6817103495942 203.146 C 458.4432963711007 203.146 459.20488239260715 204.646 459.20488239260715 206.146 L 459.20488239260715 280.20099999999996 z "
                                pathfrom="M 454.6817103495942 280.20099999999996 L 454.6817103495942 280.20099999999996 L 459.20488239260715 280.20099999999996 L 459.20488239260715 280.20099999999996 L 459.20488239260715 280.20099999999996 L 459.20488239260715 280.20099999999996 L 459.20488239260715 280.20099999999996 L 454.6817103495942 280.20099999999996 z"
                                cy="203.14499999999998"
                                cx="460.70488239260715"
                                j={9}
                                val={22}
                                barheight="77.05499999999999"
                                barwidth="7.523172043012933"
                              />
                              <path
                                id="SvgjsPath1059"
                                d="M506.7393740400855 280.20099999999996L506.7393740400855 178.126C506.7393740400855 176.626 508.2393740400855 175.126 509.7393740400855 175.126L509.7393740400855 175.126C510.50096006159197 175.126 511.2625460830984 176.626 511.2625460830984 178.126L511.2625460830984 280.20099999999996L506.7393740400855 280.20099999999996C506.7393740400855 280.20099999999996 506.7393740400855 280.20099999999996 506.7393740400855 280.20099999999996C506.7393740400855 280.20099999999996 506.7393740400855 280.20099999999996 506.7393740400855 280.20099999999996 "
                                fill="rgba(24,119,242,1)"
                                fillOpacity={1}
                                stroke="#1877f2"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-bar-area"
                                index={0}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 506.7393740400855 280.20099999999996 L 506.7393740400855 178.126 C 506.7393740400855 176.626 508.2393740400855 175.126 509.7393740400855 175.126 L 509.7393740400855 175.126 C 510.50096006159197 175.126 511.2625460830984 176.626 511.2625460830984 178.126 L 511.2625460830984 280.20099999999996 z "
                                pathfrom="M 506.7393740400855 280.20099999999996 L 506.7393740400855 280.20099999999996 L 511.2625460830984 280.20099999999996 L 511.2625460830984 280.20099999999996 L 511.2625460830984 280.20099999999996 L 511.2625460830984 280.20099999999996 L 511.2625460830984 280.20099999999996 L 506.7393740400855 280.20099999999996 z"
                                cy="175.125"
                                cx="512.7625460830984"
                                j={10}
                                val={30}
                                barheight="105.07499999999999"
                                barwidth="7.523172043012933"
                              />
                              <g
                                id="SvgjsG1036"
                                className="apexcharts-bar-goals-markers"
                              >
                                <g
                                  id="SvgjsG1038"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1040"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1042"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1044"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1046"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1048"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1050"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1052"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1054"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1056"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                                <g
                                  id="SvgjsG1058"
                                  classname="apexcharts-bar-goals-groups"
                                  className="apexcharts-hidden-element-shown"
                                  clipPath="url(#gridRectMarkerMaskm8lpdzfq)"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG1037"
                                className="apexcharts-bar-shadows apexcharts-hidden-element-shown"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1060"
                            className="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1061"
                              className="apexcharts-series"
                              seriesname="TeamxC"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={2}
                            >
                              <path
                                id="SvgjsPath1064"
                                d="M0 175.125C7.794214854357609 177.74701908346242 36.45468421784008 196.4054838970436 52.05766369049128 192.6375C67.66064316314248 188.86951610295637 83.24842035898504 157.4000834072808 99.07748895932212 154.11C114.9065575596592 150.81991659271924 135.64460364440333 180.07555500409356 151.1351526498134 175.125C166.62570165522345 170.17444499590644 185.00597516324004 125.6417817254559 201.51353686641787 122.5875C218.0210985695957 119.53321827454411 241.80641719550138 165.51479024587837 253.57120055690916 157.6125C265.33598391831697 149.71020975412165 291.44497385078 63.59790047529782 303.9495847735136 56.04000000000002C316.4541956962472 48.48209952470222 339.13212843413936 95.23155587311729 356.00724846400493 98.07C372.8823684938705 100.9084441268827 395.11283240095634 66.24700386720394 408.0649121544962 73.55250000000001C421.01699190803606 80.85799613279607 445.6874248225322 146.68944841151225 458.44329637110064 154.11C471.1991679196691 161.53055158848778 502.06305500692423 145.0207250243799 510.50096006159197 143.6025C510.50096006159197 143.6025 510.50096006159197 143.6025 510.50096006159197 143.6025 "
                                fill="none"
                                fillOpacity={1}
                                stroke="rgba(0,184,217,1)"
                                strokeOpacity={1}
                                strokeLinecap="round"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-line"
                                index={2}
                                clipPath="url(#gridRectMaskm8lpdzfq)"
                                pathto="M 0 175.125C7.794214854357609, 177.74701908346242, 36.45468421784008, 196.4054838970436, 52.05766369049128, 192.6375S83.24842035898504, 157.4000834072808, 99.07748895932212, 154.11S135.64460364440333, 180.07555500409356, 151.1351526498134, 175.125S185.00597516324004, 125.6417817254559, 201.51353686641787, 122.5875S241.80641719550138, 165.51479024587837, 253.57120055690916, 157.6125S291.44497385078, 63.59790047529781, 303.9495847735136, 56.04000000000002S339.13212843413936, 95.23155587311729, 356.00724846400493, 98.07S395.11283240095634, 66.24700386720393, 408.0649121544962, 73.55250000000001S445.6874248225322, 146.68944841151225, 458.44329637110064, 154.11S502.06305500692423, 145.0207250243799, 510.50096006159197, 143.6025"
                                pathfrom="M -1 280.2 L -1 280.2 L 52.05766369049128 280.2 L 99.07748895932212 280.2 L 151.1351526498134 280.2 L 201.51353686641787 280.2 L 253.57120055690916 280.2 L 303.9495847735136 280.2 L 356.00724846400493 280.2 L 408.0649121544962 280.2 L 458.44329637110064 280.2 L 510.50096006159197 280.2"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1062"
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data:realindex={2}
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1131"
                                    r={0}
                                    cx="201.51353686641787"
                                    cy="122.5875"
                                    className="apexcharts-marker w6swey1v2"
                                    stroke="#ffffff"
                                    fill="#00b8d9"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1026"
                              className="apexcharts-datalabels"
                              data:realindex={1}
                            />
                            <g
                              id="SvgjsG1035"
                              className="apexcharts-datalabels apexcharts-hidden-element-shown"
                              data:realindex={0}
                            />
                            <g
                              id="SvgjsG1063"
                              className="apexcharts-datalabels"
                              data:realindex={2}
                            />
                          </g>
                          <line
                            id="SvgjsLine1076"
                            x1="-10.216187144496985"
                            y1={0}
                            x2="520.717147206089"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1077"
                            x1="-10.216187144496985"
                            y1={0}
                            x2="520.717147206089"
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1078"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1079"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1081"
                                fontFamily="Public Sans, sans-serif"
                                x="1.6792794738868158"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={600}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1082">2003</tspan>
                                <title>2003</title>
                              </text>
                              <text
                                id="SvgjsText1084"
                                fontFamily="Public Sans, sans-serif"
                                x="53.736943164378104"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1085">Feb '03</tspan>
                                <title>Feb '03</title>
                              </text>
                              <text
                                id="SvgjsText1087"
                                fontFamily="Public Sans, sans-serif"
                                x="152.81443212370024"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1088">Apr '03</tspan>
                                <title>Apr '03</title>
                              </text>
                              <text
                                id="SvgjsText1090"
                                fontFamily="Public Sans, sans-serif"
                                x="203.19281634030472"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1091">May '03</tspan>
                                <title>May '03</title>
                              </text>
                              <text
                                id="SvgjsText1093"
                                fontFamily="Public Sans, sans-serif"
                                x="255.250480030796"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1094">Jun '03</tspan>
                                <title>Jun '03</title>
                              </text>
                              <text
                                id="SvgjsText1096"
                                fontFamily="Public Sans, sans-serif"
                                x="305.6288642474005"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1097">Jul '03</tspan>
                                <title>Jul '03</title>
                              </text>
                              <text
                                id="SvgjsText1099"
                                fontFamily="Public Sans, sans-serif"
                                x="357.68652793789175"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1100">Aug '03</tspan>
                                <title>Aug '03</title>
                              </text>
                              <text
                                id="SvgjsText1102"
                                fontFamily="Public Sans, sans-serif"
                                x="409.744191628383"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1103">Sep '03</tspan>
                                <title>Sep '03</title>
                              </text>
                              <text
                                id="SvgjsText1105"
                                fontFamily="Public Sans, sans-serif"
                                x="460.1225758449875"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1106">Oct '03</tspan>
                                <title>Oct '03</title>
                              </text>
                              <text
                                id="SvgjsText1108"
                                fontFamily="Public Sans, sans-serif"
                                x="512.1802395354788"
                                y="309.2"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#919eab"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Public Sans, sans-serif"
                                }}
                              >
                                <tspan id="SvgjsTspan1109" />
                                <title />
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1127"
                            className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1128"
                            className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1129"
                            className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                          />
                        </g>
                      </svg>
                      <div
                        className="apexcharts-tooltip apexcharts-theme-false"
                        style={{ left: "160.86px", top: "199.2px" }}
                      >
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12
                          }}
                        >
                          28 Feb
                        </div>
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-active"
                          style={{ order: 1, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(24, 119, 242)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Public Sans, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                Total Revenue:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                22 visits
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-active"
                          style={{ order: 2, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(255, 171, 0)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Public Sans, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                Total Fees:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                41 visits
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="apexcharts-tooltip-series-group apexcharts-active"
                          style={{ order: 3, display: "flex" }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(0, 184, 217)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Public Sans, sans-serif",
                              fontSize: 12
                            }}
                          >
                            <div className="apexcharts-tooltip-y-group">
                              <span className="apexcharts-tooltip-text-y-label">
                                Total Earning:{" "}
                              </span>
                              <span className="apexcharts-tooltip-text-y-value">
                                36 visits
                              </span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                              <span className="apexcharts-tooltip-text-goals-label" />
                              <span className="apexcharts-tooltip-text-goals-value" />
                            </div>
                            <div className="apexcharts-tooltip-z-group">
                              <span className="apexcharts-tooltip-text-z-label" />
                              <span className="apexcharts-tooltip-text-z-value" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-false"
                        style={{ left: "123.994px", top: "334.2px" }}
                      >
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12,
                            minWidth: "35.9333px"
                          }}
                        >
                          28 Feb
                        </div>
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-false">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-md-6 MuiGrid2-grid-lg-4 css-tql0na">
              <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-vpcbt9">
                <div className="MuiCardHeader-root css-jimaw6">
                  <div className="MuiCardHeader-content css-11qjisw">
                    <span className="MuiTypography-root MuiTypography-h6 MuiCardHeader-title css-jef1j">
                      Current Visits
                    </span>
                  </div>
                </div>
                <div
                  dir="ltr"
                  type="pie"
                  series="4344,5435,1443,4443"
                  options="[object Object]"
                  width="100%"
                  height={280}
                  className="css-13ai803"
                  style={{ minHeight: "274.85px" }}
                >
                  <div
                    id="apexchartsucmqz8fb"
                    className="apexcharts-canvas apexchartsucmqz8fb apexcharts-theme-light"
                    style={{ width: 304, height: "274.85px" }}
                  >
                    <svg
                      id="SvgjsSvg1132"
                      width={304}
                      height="274.84999999999997"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject
                        x={0}
                        y={0}
                        width={304}
                        height="274.84999999999997"
                      >
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            inset: "auto 0px 1px",
                            position: "absolute",
                            maxHeight: 140
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 8px" }}
                            rel={1}
                            seriesname="America"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(24, 119, 242) ",
                                color: "rgb(24, 119, 242)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={1}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(33, 43, 54)",
                                fontSize: 13,
                                fontWeight: 500,
                                fontFamily: "Public Sans, sans-serif"
                              }}
                              rel={1}
                              i={0}
                              data:default-text="America"
                              data:collapsed="false"
                            >
                              America
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 8px" }}
                            rel={2}
                            seriesname="Asia"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(255, 171, 0) ",
                                color: "rgb(255, 171, 0)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={2}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(33, 43, 54)",
                                fontSize: 13,
                                fontWeight: 500,
                                fontFamily: "Public Sans, sans-serif"
                              }}
                              rel={2}
                              i={1}
                              data:default-text="Asia"
                              data:collapsed="false"
                            >
                              Asia
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 8px" }}
                            rel={3}
                            seriesname="Europe"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(0, 184, 217) ",
                                color: "rgb(0, 184, 217)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={3}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(33, 43, 54)",
                                fontSize: 13,
                                fontWeight: 500,
                                fontFamily: "Public Sans, sans-serif"
                              }}
                              rel={3}
                              i={2}
                              data:default-text="Europe"
                              data:collapsed="false"
                            >
                              Europe
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 8px" }}
                            rel={4}
                            seriesname="Africa"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(255, 86, 48) ",
                                color: "rgb(255, 86, 48)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={4}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(33, 43, 54)",
                                fontSize: 13,
                                fontWeight: 500,
                                fontFamily: "Public Sans, sans-serif"
                              }}
                              rel={4}
                              i={3}
                              data:default-text="Africa"
                              data:collapsed="false"
                            >
                              Africa
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                          .apexcharts-legend {\n                            display: flex;\n                            overflow: auto;\n                            padding: 0 10px;\n                          }\n\n                          .apexcharts-legend.apx-legend-position-bottom,\n                          .apexcharts-legend.apx-legend-position-top {\n                            flex-wrap: wrap\n                          }\n\n                          .apexcharts-legend.apx-legend-position-right,\n                          .apexcharts-legend.apx-legend-position-left {\n                            flex-direction: column;\n                            bottom: 0;\n                          }\n\n                          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                          .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                          .apexcharts-legend.apx-legend-position-right,\n                          .apexcharts-legend.apx-legend-position-left {\n                            justify-content: flex-start;\n                          }\n\n                          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                          .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                            justify-content: center;\n                          }\n\n                          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                          .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                            justify-content: flex-end;\n                          }\n\n                          .apexcharts-legend-series {\n                            cursor: pointer;\n                            line-height: normal;\n                          }\n\n                          .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,\n                          .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {\n                            display: flex;\n                            align-items: center;\n                          }\n\n                          .apexcharts-legend-text {\n                            position: relative;\n                            font-size: 14px;\n                          }\n\n                          .apexcharts-legend-text *,\n                          .apexcharts-legend-marker * {\n                            pointer-events: none;\n                          }\n\n                          .apexcharts-legend-marker {\n                            position: relative;\n                            display: inline-block;\n                            cursor: pointer;\n                            margin-right: 3px;\n                            border-style: solid;\n                          }\n\n                          .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,\n                          .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {\n                            display: inline-block;\n                          }\n\n                          .apexcharts-legend-series.apexcharts-no-click {\n                            cursor: auto;\n                          }\n\n                          .apexcharts-legend .apexcharts-hidden-zero-series,\n                          .apexcharts-legend .apexcharts-hidden-null-series {\n                            display: none ;\n                          }\n\n                          .apexcharts-inactive-legend {\n                            opacity: 0.45;\n                          }\n                        "
                          }}
                        />
                      </foreignObject>
                      <g
                        id="SvgjsG1134"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(12, 0)"
                      >
                        <defs id="SvgjsDefs1133">
                          <clipPath id="gridRectMaskucmqz8fb">
                            <rect
                              id="SvgjsRect1135"
                              width={287}
                              height={283}
                              x="-3.5"
                              y="-1.5"
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskucmqz8fb" />
                          <clipPath id="nonForecastMaskucmqz8fb" />
                          <clipPath id="gridRectMarkerMaskucmqz8fb">
                            <rect
                              id="SvgjsRect1136"
                              width={284}
                              height={284}
                              x={-2}
                              y={-2}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <g id="SvgjsG1137" className="apexcharts-pie">
                          <g
                            id="SvgjsG1138"
                            transform="translate(0, 0) scale(1)"
                          >
                            <g id="SvgjsG1139" className="apexcharts-slices">
                              <g
                                id="SvgjsG1140"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="America"
                                rel={1}
                                data:realindex={0}
                              >
                                <path
                                  id="SvgjsPath1141"
                                  d="M 140 6.414634146341456 A 133.58536585365854 133.58536585365854 0 0 1 271.6240737627753 162.80686686827667 L 140 140 L 140 6.414634146341456"
                                  fill="rgba(24,119,242,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={3}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-0"
                                  index={0}
                                  j={0}
                                  data:angle="99.830194701564"
                                  data:startangle={0}
                                  data:strokewidth={3}
                                  data:value={4344}
                                  data:pathorig="M 140 6.414634146341456 A 133.58536585365854 133.58536585365854 0 0 1 271.6240737627753 162.80686686827667 L 140 140 L 140 6.414634146341456"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1144"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Asia"
                                rel={2}
                                data:realindex={1}
                              >
                                <path
                                  id="SvgjsPath1145"
                                  d="M 271.6240737627753 162.80686686827667 A 133.58536585365854 133.58536585365854 0 0 1 45.982346727194354 234.89852919476834 L 140 140 L 271.6240737627753 162.80686686827667"
                                  fill="rgba(255,171,0,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={3}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-1"
                                  index={0}
                                  j={1}
                                  data:angle="124.90264921800191"
                                  data:startangle="99.830194701564"
                                  data:strokewidth={3}
                                  data:value={5435}
                                  data:pathorig="M 271.6240737627753 162.80686686827667 A 133.58536585365854 133.58536585365854 0 0 1 45.982346727194354 234.89852919476834 L 140 140 L 271.6240737627753 162.80686686827667"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1148"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Europe"
                                rel={3}
                                data:realindex={2}
                              >
                                <path
                                  id="SvgjsPath1149"
                                  d="M 45.982346727194354 234.89852919476834 A 133.58536585365854 133.58536585365854 0 0 1 9.385074243284635 168.0141239346072 L 140 140 L 45.982346727194354 234.89852919476834"
                                  fill="rgba(0,184,217,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={3}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-2"
                                  index={0}
                                  j={2}
                                  data:angle="33.161825726141075"
                                  data:startangle="224.7328439195659"
                                  data:strokewidth={3}
                                  data:value={1443}
                                  data:pathorig="M 45.982346727194354 234.89852919476834 A 133.58536585365854 133.58536585365854 0 0 1 9.385074243284635 168.0141239346072 L 140 140 L 45.982346727194354 234.89852919476834"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1152"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Africa"
                                rel={4}
                                data:realindex={3}
                              >
                                <path
                                  id="SvgjsPath1153"
                                  d="M 9.385074243284635 168.0141239346072 A 133.58536585365854 133.58536585365854 0 0 1 139.97668495545207 6.41463618096293 L 140 140 L 9.385074243284635 168.0141239346072"
                                  fill="rgba(255,86,48,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={3}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-3"
                                  index={0}
                                  j={3}
                                  data:angle="102.10533035429302"
                                  data:startangle="257.894669645707"
                                  data:strokewidth={3}
                                  data:value={4443}
                                  data:pathorig="M 9.385074243284635 168.0141239346072 A 133.58536585365854 133.58536585365854 0 0 1 139.97668495545207 6.41463618096293 L 140 140 L 9.385074243284635 168.0141239346072"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1142"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1143"
                                  fontFamily="Public Sans, sans-serif"
                                  x="221.76397959948912"
                                  y="71.18514970576452"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Public Sans, sans-serif"
                                  }}
                                >
                                  27.7%
                                </text>
                              </g>
                              <g
                                id="SvgjsG1146"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1147"
                                  fontFamily="Public Sans, sans-serif"
                                  x="172.52433092702213"
                                  y="241.798820615532"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Public Sans, sans-serif"
                                  }}
                                >
                                  34.7%
                                </text>
                              </g>
                              <g
                                id="SvgjsG1150"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1151"
                                  fontFamily="Public Sans, sans-serif"
                                  x="46.24856760265729"
                                  y="191.29815692995408"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Public Sans, sans-serif"
                                  }}
                                >
                                  9.2%
                                </text>
                              </g>
                              <g
                                id="SvgjsG1154"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1155"
                                  fontFamily="Public Sans, sans-serif"
                                  x="56.88595408210705"
                                  y="72.82197269849244"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Public Sans, sans-serif"
                                  }}
                                >
                                  28.4%
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine1156"
                          x1={0}
                          y1={0}
                          x2={280}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1157"
                          x1={0}
                          y1={0}
                          x2={280}
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-false">
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(24, 119, 242)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(255, 171, 0)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 3 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(0, 184, 217)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 4 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(255, 86, 48)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <svg
    id="SvgjsSvg1372"
    width={2}
    height={0}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev"
    style={{
      overflow: "hidden",
      top: "-100%",
      left: "-100%",
      position: "absolute",
      opacity: 0
    }}
  >
    <defs id="SvgjsDefs1373" />
    <polyline id="SvgjsPolyline1374" points="0,0" />
    <path
      id="SvgjsPath1375"
      d="M-1 280.2L-1 280.2C-1 280.2 52.05766369049128 280.2 52.05766369049128 280.2C52.05766369049128 280.2 99.07748895932212 280.2 99.07748895932212 280.2C99.07748895932212 280.2 151.1351526498134 280.2 151.1351526498134 280.2C151.1351526498134 280.2 201.51353686641787 280.2 201.51353686641787 280.2C201.51353686641787 280.2 253.57120055690916 280.2 253.57120055690916 280.2C253.57120055690916 280.2 303.9495847735136 280.2 303.9495847735136 280.2C303.9495847735136 280.2 356.00724846400493 280.2 356.00724846400493 280.2C356.00724846400493 280.2 408.0649121544962 280.2 408.0649121544962 280.2C408.0649121544962 280.2 458.44329637110064 280.2 458.44329637110064 280.2C458.44329637110064 280.2 510.50096006159197 280.2 510.50096006159197 280.2C510.50096006159197 280.2 510.50096006159197 280.2 510.50096006159197 280.2C510.50096006159197 280.2 510.50096006159197 280.2 510.50096006159197 280.2 "
    ></path>
  </svg>
</>

    </>

  );
}
