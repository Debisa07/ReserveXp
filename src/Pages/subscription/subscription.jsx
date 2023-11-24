import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./subscription.css"


const YourComponent = () => {

    return (
        <div >
            <div id="root">
                <div className="MuiBox-root css-k008qs" style={{ "background-color": "#EEF2F6" }}>
                    <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-g77yx4">
                    </header>
                    <nav className="MuiBox-root css-rs0zx6" aria-label="mailbox folders" style={{ backgroundColor: "#EEF2F6", marginLeft: "-100px" }}>
                        <div className="MuiDrawer-root MuiDrawer-docked css-6pxj5d" />
                    </nav>
                    <main theme="[object Object]" layout="vertical" className="css-kip9m9">
                        <div className="MuiContainer-root css-1t39kmw">
                            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-vowo2z">
                            </div>
                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 css-1twzmnh">
                                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-2bvito">
                                        <div className="MuiCardContent-root css-18mhetb">
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-ecerd0">
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiBox-root css-1yyb6k3"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwoWheelerTwoToneIcon">
                                                        <path d="M4.17 11H4h.17m9.24-6H9v2h3.59l2 2H11l-4 2-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4l2 2h3l3.49-6.1 1.01 1.01c-.91.73-1.5 1.84-1.5 3.09 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5zM20 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                                        </path>
                                                    </svg></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <h6 className="MuiTypography-root MuiTypography-h6 css-1mbm6w6">Standard</h6>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <p className="MuiTypography-root MuiTypography-body2 css-a03o2d">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiTypography-root MuiTypography-body2 css-e8ocnq">
                                                        <sup>$</sup>69<span>/Per Month</span></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <ul className="MuiList-root MuiList-padding css-1pepmqj">
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">No
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor </span>
                                                            </div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Figma
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create a
                                                                SaaS Project</span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                    </ul>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-yhqsk5" tabIndex={0} type="button">Order Now<span className="MuiTouchRipple-root css-w0pj6f" /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 css-1twzmnh">
                                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-d303ro">
                                        <div className="MuiCardContent-root css-18mhetb">
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-ecerd0">
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiBox-root css-1yyb6k3"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirportShuttleTwoToneIcon">
                                                        <path d="M3 14h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1h7.56c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-2H3v2z" opacity=".3" />
                                                        <path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zm-2 2h1l3 3h-4V7zM9 7h4v3H9V7zM3 7h4v3H3V7zm3 10.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm12 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18v2z">
                                                        </path>
                                                    </svg></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <h6 className="MuiTypography-root MuiTypography-h6 css-1mbm6w6">Standard Plus</h6>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <p className="MuiTypography-root MuiTypography-body2 css-a03o2d">Create Lorem ipsum dolor   for a client,
                                                        transfer that end  to your client, charge them for your services. The license is then
                                                        transferred to the client.</p>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiTypography-root MuiTypography-body2 css-e8ocnq">
                                                        <sup>$</sup>129<span>/Per Year</span></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <ul className="MuiList-root MuiList-padding css-1pepmqj">
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">No
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor </span>
                                                            </div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Figma
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create a
                                                                SaaS Project</span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                    </ul>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-yhqsk5" tabIndex={0} type="button">Order Now<span className="MuiTouchRipple-root css-w0pj6f" /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 css-1twzmnh">
                                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-2bvito">
                                        <div className="MuiCardContent-root css-18mhetb">
                                            <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-ecerd0">
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiBox-root css-1yyb6k3"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DirectionsBoatTwoToneIcon">
                                                        <path d="M6.49 15.68 8 13.96l1.51 1.72c.34.4 1.28 1.32 2.49 1.32 1.21 0 2.15-.92 2.49-1.32L16 13.96l1.51 1.72c.2.23.6.64 1.14.94l1.12-3.97-2.39-.78L12 10.11l-5.38 1.77-2.4.79 1.13 3.96c.55-.31.94-.72 1.14-.95zM11 3h2v1h-2z" opacity=".3" />
                                                        <path d="M3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM11 3h2v1h-2V3zM6 6h12v3.97L12 8 6 9.97V6zm.62 5.87L12 10.11l5.38 1.77 2.39.78-1.12 3.97c-.54-.3-.94-.71-1.14-.94L16 13.96l-1.51 1.72c-.34.4-1.28 1.32-2.49 1.32-1.21 0-2.15-.92-2.49-1.32L8 13.96l-1.51 1.72c-.2.23-.6.63-1.14.93l-1.13-3.96 2.4-.78zM8 22.01c1.26.64 2.63.97 4 .97s2.74-.32 4-.97c1.26.65 2.62.99 4 .99h2v-2h-2c-1.39 0-2.78-.47-4-1.32-1.22.85-2.61 1.28-4 1.28s-2.78-.43-4-1.28C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99z">
                                                        </path>
                                                    </svg></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <h6 className="MuiTypography-root MuiTypography-h6 css-1mbm6w6">Extended</h6>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <p className="MuiTypography-root MuiTypography-body2 css-a03o2d">You are licensed to use the CONTENT
                                                        to create Lorem ipsum dolor   for yourself or for one client (a “single application”), and the end
                                                         may be sold or distributed for free.</p>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <div className="MuiTypography-root MuiTypography-body2 css-e8ocnq">
                                                        <sup>$</sup>599<span>/Lifetime</span></div>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                    <ul className="MuiList-root MuiList-padding css-1pepmqj">
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">No
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum dolor </span>
                                                            </div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Figma
                                                                Lorem ipsum dolor </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-18yaaxc">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Create a
                                                                SaaS Project</span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bvsulh">
                                                            <div className="MuiListItemIcon-root css-1wmnb35"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-169n2xt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckTwoToneIcon">
                                                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                            </svg></div>
                                                            <div className="MuiListItemText-root css-sqh3xd"><span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-41k7xt">Lorem ipsum 
                                                                Lorem ipsum </span></div>
                                                        </li>
                                                        <hr className="MuiDivider-root MuiDivider-fullWidth css-yasiti" />
                                                    </ul>
                                                </div>
                                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-yhqsk5" tabIndex={0} type="button">Order Now<span className="MuiTouchRipple-root css-w0pj6f" /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MuiCardContent-root css-kmix4v"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1l08wgo" tabIndex={0} type="button">Order Now<span className="MuiTouchRipple-root css-w0pj6f" /></button></div>

                    </main>

                </div>
            </div>
        </div>


    );
};

export default YourComponent;




