import React from "react";

export default function CompanyDashbord() {
 
  return (
    <div>
      

      <>
  {/* App preloader*/}
  {/* Page Wrapper */}
  <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900" style={{ marginTop: "20px" }} >
    {/* Sidebar */}
    <div className="sidebar print:hidden">
      {/* Main Sidebar */}
      <div className="main-sidebar">
        <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
          {/* Application Logo */}
          <div className="flex pt-4">
            <a href=""></a>
          </div>
          <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
            {/* Dashobards */}
            <a
              href=""
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity=".3"
                  d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                />
                <path
                  fill="currentColor"
                  d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                />
                <path
                  fill="currentColor"
                  d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                />
                <path
                  fill="currentColor"
                  d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </a>
            {/* Apps */}
            <a
              href="apps-list.html"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path
                  d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <rect
                  x={4}
                  y={8}
                  width={16}
                  height={3}
                  rx={1}
                  fill="currentColor"
                />
                <path
                  d="M12 11V15"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            {/* Pages And Layouts */}
            <a
              href="pages-card-user-1.html"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
                  fill="currentColor"
                />
                <path
                  d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path
                  d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path
                  d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </a>
            {/* Forms */}
            <a
              href="form-input-text.html"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillOpacity="0.25"
                  d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
                  fill="currentColor"
                />
                <path
                  fillOpacity="0.5"
                  d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
                  fill="currentColor"
                />
                <path
                  d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Components */}
            <a
              href="components-accordion.html"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillOpacity="0.5"
                  d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
                  fill="currentColor"
                />
                <path
                  d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
                  fill="currentColor"
                />
                <path
                  fillOpacity="0.3"
                  d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* Elements */}
            <a
              href="elements-avatar.html"
              className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3111 14.75H5.03356C3.36523 14.75 2.30189 12.9625 3.10856 11.4958L5.24439 7.60911L7.24273 3.96995C8.07689 2.45745 10.2586 2.45745 11.0927 3.96995L13.1002 7.60911L14.0627 9.35995L15.2361 11.4958C16.0427 12.9625 14.9794 14.75 13.3111 14.75Z"
                  fill="currentColor"
                />
                <path
                  fillOpacity="0.3"
                  d="M21.1667 15.2083C21.1667 18.4992 18.4992 21.1667 15.2083 21.1667C11.9175 21.1667 9.25 18.4992 9.25 15.2083C9.25 15.0525 9.25917 14.9058 9.26833 14.75H13.3108C14.9792 14.75 16.0425 12.9625 15.2358 11.4958L14.0625 9.36C14.4292 9.28666 14.8142 9.25 15.2083 9.25C18.4992 9.25 21.1667 11.9175 21.1667 15.2083Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          {/* Bottom Links */}
        </div>
      </div>
      {/* Sidebar Panel */}
      <div className="sidebar-panel">
        <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
          {/* Sidebar Panel Header */}
          <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
            <p className="text-base tracking-wider text-slate-800 dark:text-navy-100">
              Dashboards
            </p>
            <button className="btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          {/* Sidebar Panel Body */}
          <div
            className="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6 simplebar-scrollable-y"
            x-init="$el._x_simplebar = new SimpleBar($el);"
            data-simplebar="init"
          >
            <div
              className="simplebar-wrapper"
              style={{ margin: "0px 0px -24px" }}
            >
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "0px 0px 24px" }}
                    >
                      <ul className="flex flex-1 flex-col px-4 font-inter">
                        <li>
                          <a
                            x-data="navLink"
                            href=""
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out font-medium text-primary dark:text-accent-light"
                          >
                            CRM Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-orders.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Orders
                          </a>
                        </li>
                      </ul>
                      <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500" />
                      <ul className="flex flex-1 flex-col px-4 font-inter">
                        <li>
                          <a>
                            <span>Cryptocurrency</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-slate-400 transition-transform ease-in-out"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                          <ul
                            x-collapse=""
                            x-show="expanded"
                            style={{
                              display: "none",
                              height: 0,
                              overflow: "hidden"
                            }}
                            hidden=""
                          >
                            <li>
                              <a
                                x-data="navLink"
                                href="dashboards-crypto-1.html"
                                className="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40" />
                                  <span>Cryptocurrency v1</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                x-data="navLink"
                                href="dashboards-crypto-2.html"
                                className="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40" />
                                  <span>Cryptocurrency v2</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li x-data="accordionItem('menu-item-2')">
                          <a
                            className="flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out text-slate-600 dark:text-navy-200 hover:text-slate-800 dark:hover:text-navy-50"
                            href="javascript:"
                          >
                            <span>Banking</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-slate-400 transition-transform ease-in-out"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                          <ul
                            x-collapse=""
                            x-show="expanded"
                            style={{
                              display: "none",
                              height: 0,
                              overflow: "hidden"
                            }}
                            hidden=""
                          >
                            <li>
                              <a
                                x-data="navLink"
                                href="dashboards-banking-1.html"
                                className="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40" />
                                  <span>Banking v1</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                x-data="navLink"
                                href="dashboards-banking-2.html"
                                className="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40" />
                                  <span>Banking v2</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-personal.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Personal
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-cms-analytics.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            CMS Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-influencer.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Influencer
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-travel.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Travel
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-teacher.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Teacher
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-education.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Education
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-authors.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Authors
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-doctor.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Doctors
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-employees.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Employees
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-workspace.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Workspaces
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-meeting.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Meetings
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-project-boards.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Project Boards
                          </a>
                        </li>
                      </ul>
                      <div className="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500" />
                      <ul className="flex flex-1 flex-col px-4 font-inter">
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-widget-ui.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Widget UI
                          </a>
                        </li>
                        <li>
                          <a
                            x-data="navLink"
                            href="dashboards-widget-contacts.html"
                            className="flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out text-slate-600 hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50"
                          >
                            Widget Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: 240, height: 686 }}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ width: 0, display: "none" }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: 497,
                  display: "block",
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* App Header Wrapper*/}
    <main className="main-content w-full pb-8">
      <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center justify-between space-x-2">
            <h2 className="text-base font-medium tracking-wide text-slate-800 line-clamp-1 dark:text-navy-100">
              Booking Overview
            </h2>
            <div className="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
              <div className="tabs-list flex p-1">
                <button className="btn shrink-0 px-3 py-1 text-xs+ font-medium bg-white shadow dark:bg-navy-500 dark:text-navy-100">
                  Last month
                </button>
                <button className="btn shrink-0 px-3 py-1 text-xs+ font-medium hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100">
                  Last year
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-7">
            <div className="mt-4 flex shrink-0 flex-col items-center sm:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <div className="mt-4">
                <div className="flex items-center space-x-1">
                  <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                    $6,556.55
                  </p>
                  <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-400 dark:text-navy-300">
                  this month
                </p>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <div className="ax-transparent-gridline w-28">
                  <div
                    x-init="$nextTick(() => { $el._x_chart = new ApexCharts($el,pages.charts.analyticsBookingThisMonth); $el._x_chart.render() });"
                    style={{ minHeight: 60 }}
                  >
                    <div
                      id="apexchartsfgnei3qh"
                      className="apexcharts-canvas apexchartsfgnei3qh apexcharts-theme-light"
                      style={{ width: 112, height: 60 }}
                    >
                      <svg
                        id="SvgjsSvg1012"
                        width={112}
                        height={60}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        className="apexcharts-svg apexcharts-zoomable"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <foreignObject x={0} y={0} width={112} height={60}>
                          <div
                            className="apexcharts-legend"
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{ maxHeight: 30 }}
                          />
                        </foreignObject>
                        <rect
                          id="SvgjsRect1016"
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
                          id="SvgjsG1047"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(-18, 0)"
                        />
                        <g
                          id="SvgjsG1014"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(0, 10)"
                        >
                          <defs id="SvgjsDefs1013">
                            <clipPath id="gridRectMaskfgnei3qh">
                              <rect
                                id="SvgjsRect1018"
                                width={119}
                                height={48}
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
                            <clipPath id="forecastMaskfgnei3qh" />
                            <clipPath id="nonForecastMaskfgnei3qh" />
                            <clipPath id="gridRectMarkerMaskfgnei3qh">
                              <rect
                                id="SvgjsRect1019"
                                width={116}
                                height={49}
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
                          <line
                            id="SvgjsLine1017"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={45}
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x={0}
                            y={0}
                            width={1}
                            height={45}
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g id="SvgjsG1025" className="apexcharts-grid">
                            <g
                              id="SvgjsG1026"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1030"
                                x1={0}
                                y1={9}
                                x2={112}
                                y2={9}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1031"
                                x1={0}
                                y1={18}
                                x2={112}
                                y2={18}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1032"
                                x1={0}
                                y1={27}
                                x2={112}
                                y2={27}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1033"
                                x1={0}
                                y1={36}
                                x2={112}
                                y2={36}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1027"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1036"
                              x1={0}
                              y1={45}
                              x2={112}
                              y2={45}
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              id="SvgjsLine1035"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2={45}
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g
                            id="SvgjsG1028"
                            className="apexcharts-grid-borders"
                          >
                            <line
                              id="SvgjsLine1029"
                              x1={0}
                              y1={0}
                              x2={112}
                              y2={0}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1034"
                              x1={0}
                              y1={45}
                              x2={112}
                              y2={45}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG1020"
                            className="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1021"
                              className="apexcharts-series"
                              seriesname="Booking"
                              data:longestseries="true"
                              rel={1}
                              data:realindex={0}
                            >
                              <path
                                id="SvgjsPath1024"
                                d="M0 15.57C7.84 15.57 14.559999999999999 8.100000000000001 22.4 8.100000000000001C30.24 8.100000000000001 36.96 40.41 44.8 40.41C52.64 40.41 59.36 20.7 67.2 20.7C75.03999999999999 20.7 81.75999999999999 38.07 89.6 38.07C97.44 38.07 104.16 17.369999999999997 112 17.369999999999997C112 17.369999999999997 112 17.369999999999997 112 17.369999999999997 "
                                fill="none"
                                fillOpacity={1}
                                stroke="rgba(68,103,239,0.85)"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={3}
                                strokeDasharray={0}
                                className="apexcharts-line"
                                index={0}
                                clipPath="url(#gridRectMaskfgnei3qh)"
                                pathto="M 0 15.57C 7.839999999999999 15.57 14.559999999999999 8.100000000000001 22.4 8.100000000000001C 30.24 8.100000000000001 36.96 40.41 44.8 40.41C 52.64 40.41 59.36 20.7 67.2 20.7C 75.03999999999999 20.7 81.75999999999999 38.07 89.6 38.07C 97.44 38.07 104.16 17.369999999999997 112 17.369999999999997"
                                pathfrom="M -1 45 L -1 45 L 22.4 45 L 44.8 45 L 67.2 45 L 89.6 45 L 112 45"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1022"
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data:realindex={0}
                              >
                                <g className="apexcharts-series-markers">
                                  <circle
                                    id="SvgjsCircle1051"
                                    r={0}
                                    cx={0}
                                    cy={0}
                                    className="apexcharts-marker wxmlrel6n no-pointer-events"
                                    stroke="#ffffff"
                                    fill="#4467ef"
                                    fillOpacity={1}
                                    strokeWidth={2}
                                    strokeOpacity="0.9"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1023"
                              className="apexcharts-datalabels"
                              data:realindex={0}
                            />
                          </g>
                          <line
                            id="SvgjsLine1037"
                            x1={0}
                            y1={0}
                            x2={112}
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1038"
                            x1={0}
                            y1={0}
                            x2={112}
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1039"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1040"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            />
                          </g>
                          <g
                            id="SvgjsG1048"
                            className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1049"
                            className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1050"
                            className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                          />
                          <rect
                            id="SvgjsRect1052"
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
                            className="apexcharts-zoom-rect"
                          />
                          <rect
                            id="SvgjsRect1053"
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
                            className="apexcharts-selection-rect"
                          />
                        </g>
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-light">
                        <div
                          className="apexcharts-tooltip-title"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-series-group"
                          style={{ order: 1 }}
                        >
                          <span
                            className="apexcharts-tooltip-marker"
                            style={{ backgroundColor: "rgb(68, 103, 239)" }}
                          />
                          <div
                            className="apexcharts-tooltip-text"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
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
                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                        <div
                          className="apexcharts-xaxistooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        />
                      </div>
                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                  <p className="text-sm+ text-slate-800 dark:text-navy-100">
                    3.2%
                  </p>
                </div>
              </div>
              <button className="btn mt-8 space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 text-slate-400 dark:text-navy-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
                <span> Download Report</span>
              </button>
            </div>
            <div className="ax-transparent-gridline grid w-full grid-cols-1">
              <div
                x-init="$nextTick(() => { $el._x_chart = new ApexCharts($el,pages.charts.analyticsBookingOverview); $el._x_chart.render() });"
                style={{ minHeight: 255 }}
              >
                <div
                  id="apexchartszfn61u7y"
                  className="apexcharts-canvas apexchartszfn61u7y apexcharts-theme-light"
                  style={{ width: 535, height: 255 }}
                >
                  <svg
                    id="SvgjsSvg1054"
                    width={535}
                    height={255}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev"
                    className="apexcharts-svg"
                    xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <foreignObject x={0} y={0} width={535} height={255}>
                      <div
                        className="apexcharts-legend"
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{ maxHeight: "127.5px" }}
                      />
                    </foreignObject>
                    <g
                      id="SvgjsG1172"
                      className="apexcharts-yaxis"
                      rel={0}
                      transform="translate(-18, 0)"
                    />
                    <g
                      id="SvgjsG1056"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 30)"
                    >
                      <defs id="SvgjsDefs1055">
                        <linearGradient
                          id="SvgjsLinearGradient1058"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            id="SvgjsStop1059"
                            stopOpacity="0.4"
                            stopColor="rgba(216,227,240,0.4)"
                            offset={0}
                          />
                          <stop
                            id="SvgjsStop1060"
                            stopOpacity="0.5"
                            stopColor="rgba(190,209,230,0.5)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1061"
                            stopOpacity="0.5"
                            stopColor="rgba(190,209,230,0.5)"
                            offset={1}
                          />
                        </linearGradient>
                        <clipPath id="gridRectMaskzfn61u7y">
                          <rect
                            id="SvgjsRect1063"
                            width={539}
                            height="195.73"
                            x={-2}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMaskzfn61u7y" />
                        <clipPath id="nonForecastMaskzfn61u7y" />
                        <clipPath id="gridRectMarkerMaskzfn61u7y">
                          <rect
                            id="SvgjsRect1064"
                            width={539}
                            height="199.73"
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
                      <rect
                        id="SvgjsRect1062"
                        width="7.802083333333334"
                        height="195.73"
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        strokeDasharray={3}
                        fill="url(#SvgjsLinearGradient1058)"
                        className="apexcharts-xcrosshairs"
                        y2="195.73"
                        filter="none"
                        fillOpacity="0.9"
                      />
                      <g id="SvgjsG1122" className="apexcharts-grid">
                        <g
                          id="SvgjsG1123"
                          className="apexcharts-gridlines-horizontal"
                        >
                          <line
                            id="SvgjsLine1127"
                            x1={0}
                            y1="65.24333333333333"
                            x2={535}
                            y2="65.24333333333333"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1128"
                            x1={0}
                            y1="130.48666666666665"
                            x2={535}
                            y2="130.48666666666665"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1129"
                            x1={0}
                            y1="195.72999999999996"
                            x2={535}
                            y2="195.72999999999996"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1124"
                          className="apexcharts-gridlines-vertical"
                        />
                        <line
                          id="SvgjsLine1131"
                          x1={0}
                          y1="195.73"
                          x2={535}
                          y2="195.73"
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1130"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2="195.73"
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g id="SvgjsG1125" className="apexcharts-grid-borders">
                        <line
                          id="SvgjsLine1126"
                          x1={0}
                          y1={0}
                          x2={535}
                          y2={0}
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        />
                      </g>
                      <g
                        id="SvgjsG1065"
                        className="apexcharts-bar-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1066"
                          className="apexcharts-series"
                          rel={1}
                          seriesname="Booking"
                          data:realindex={0}
                        >
                          <path
                            id="SvgjsPath1071"
                            d="M14.489583333333334 191.731L14.489583333333334 108.39033333333333C14.489583333333334 106.39033333333333 16.489583333333332 104.39033333333333 18.489583333333332 104.39033333333333L18.489583333333332 104.39033333333333C20.390625 104.39033333333333 22.291666666666668 106.39033333333333 22.291666666666668 108.39033333333333L22.291666666666668 191.731C22.291666666666668 193.731 20.291666666666668 195.731 18.291666666666668 195.731L18.291666666666668 195.731C16.390625 195.731 14.489583333333334 193.731 14.489583333333334 191.731C14.489583333333334 191.731 14.489583333333334 191.731 14.489583333333334 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 14.489583333333334 191.731 L 14.489583333333334 108.39033333333333 C 14.489583333333334 106.39033333333333 16.489583333333332 104.39033333333333 18.489583333333332 104.39033333333333 L 18.489583333333332 104.39033333333333 C 20.390625 104.39033333333333 22.291666666666668 106.39033333333333 22.291666666666668 108.39033333333333 L 22.291666666666668 191.731 C 22.291666666666668 193.731 20.291666666666668 195.731 18.291666666666668 195.731 L 18.291666666666668 195.731 C 16.390625 195.731 14.489583333333334 193.731 14.489583333333334 191.731 Z "
                            pathfrom="M 14.489583333333334 195.731 L 14.489583333333334 195.731 L 22.291666666666668 195.731 L 22.291666666666668 195.731 L 22.291666666666668 195.731 L 22.291666666666668 195.731 L 22.291666666666668 195.731 L 14.489583333333334 195.731 Z"
                            cy="104.38933333333333"
                            cx="59.07291666666667"
                            j={0}
                            val={28}
                            barheight="91.34066666666666"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1073"
                            d="M59.07291666666667 191.731L59.07291666666667 52.93350000000001C59.07291666666667 50.93350000000001 61.07291666666667 48.93350000000001 63.07291666666667 48.93350000000001L63.07291666666667 48.93350000000001C64.97395833333334 48.93350000000001 66.875 50.93350000000001 66.875 52.93350000000001L66.875 191.731C66.875 193.731 64.875 195.731 62.875 195.731L62.875 195.731C60.973958333333336 195.731 59.07291666666667 193.731 59.07291666666667 191.731C59.07291666666667 191.731 59.07291666666667 191.731 59.07291666666667 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 59.07291666666667 191.731 L 59.07291666666667 52.9335 C 59.07291666666667 50.9335 61.07291666666667 48.9335 63.07291666666667 48.9335 L 63.07291666666667 48.9335 C 64.97395833333334 48.9335 66.875 50.9335 66.875 52.9335 L 66.875 191.731 C 66.875 193.731 64.875 195.731 62.875 195.731 L 62.875 195.731 C 60.973958333333336 195.731 59.07291666666667 193.731 59.07291666666667 191.731 Z "
                            pathfrom="M 59.07291666666667 195.731 L 59.07291666666667 195.731 L 66.875 195.731 L 66.875 195.731 L 66.875 195.731 L 66.875 195.731 L 66.875 195.731 L 59.07291666666667 195.731 Z"
                            cy="48.932500000000005"
                            cx="103.65625"
                            j={1}
                            val={45}
                            barheight="146.79749999999999"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1075"
                            d="M103.65625 191.731L103.65625 85.55516666666666C103.65625 83.55516666666666 105.65625 81.55516666666666 107.65625 81.55516666666666L107.65625 81.55516666666666C109.55729166666666 81.55516666666666 111.45833333333333 83.55516666666666 111.45833333333333 85.55516666666666L111.45833333333333 191.731C111.45833333333333 193.731 109.45833333333333 195.731 107.45833333333333 195.731L107.45833333333333 195.731C105.55729166666666 195.731 103.65625 193.731 103.65625 191.731C103.65625 191.731 103.65625 191.731 103.65625 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 103.65625 191.731 L 103.65625 85.55516666666666 C 103.65625 83.55516666666666 105.65625 81.55516666666666 107.65625 81.55516666666666 L 107.65625 81.55516666666666 C 109.55729166666666 81.55516666666666 111.45833333333333 83.55516666666666 111.45833333333333 85.55516666666666 L 111.45833333333333 191.731 C 111.45833333333333 193.731 109.45833333333333 195.731 107.45833333333333 195.731 L 107.45833333333333 195.731 C 105.55729166666666 195.731 103.65625 193.731 103.65625 191.731 Z "
                            pathfrom="M 103.65625 195.731 L 103.65625 195.731 L 111.45833333333333 195.731 L 111.45833333333333 195.731 L 111.45833333333333 195.731 L 111.45833333333333 195.731 L 111.45833333333333 195.731 L 103.65625 195.731 Z"
                            cy="81.55416666666666"
                            cx="148.23958333333334"
                            j={2}
                            val={35}
                            barheight="114.17583333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1077"
                            d="M148.23958333333334 191.731L148.23958333333334 36.622666666666674C148.23958333333334 34.622666666666674 150.23958333333334 32.622666666666674 152.23958333333334 32.622666666666674L152.23958333333334 32.622666666666674C154.140625 32.622666666666674 156.04166666666669 34.622666666666674 156.04166666666669 36.622666666666674L156.04166666666669 191.731C156.04166666666669 193.731 154.04166666666669 195.731 152.04166666666669 195.731L152.04166666666669 195.731C150.140625 195.731 148.23958333333334 193.731 148.23958333333334 191.731C148.23958333333334 191.731 148.23958333333334 191.731 148.23958333333334 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 148.23958333333334 191.731 L 148.23958333333334 36.62266666666667 C 148.23958333333334 34.62266666666667 150.23958333333334 32.62266666666667 152.23958333333334 32.62266666666667 L 152.23958333333334 32.62266666666667 C 154.140625 32.62266666666667 156.04166666666669 34.62266666666667 156.04166666666669 36.62266666666667 L 156.04166666666669 191.731 C 156.04166666666669 193.731 154.04166666666669 195.731 152.04166666666669 195.731 L 152.04166666666669 195.731 C 150.140625 195.731 148.23958333333334 193.731 148.23958333333334 191.731 Z "
                            pathfrom="M 148.23958333333334 195.731 L 148.23958333333334 195.731 L 156.04166666666669 195.731 L 156.04166666666669 195.731 L 156.04166666666669 195.731 L 156.04166666666669 195.731 L 156.04166666666669 195.731 L 148.23958333333334 195.731 Z"
                            cy="32.62166666666667"
                            cx="192.82291666666669"
                            j={3}
                            val={50}
                            barheight="163.10833333333332"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1079"
                            d="M192.82291666666669 191.731L192.82291666666669 95.34166666666667C192.82291666666669 93.34166666666667 194.82291666666669 91.34166666666667 196.82291666666669 91.34166666666667L196.82291666666669 91.34166666666667C198.72395833333337 91.34166666666667 200.62500000000003 93.34166666666667 200.62500000000003 95.34166666666667L200.62500000000003 191.731C200.62500000000003 193.731 198.62500000000003 195.731 196.62500000000003 195.731L196.62500000000003 195.731C194.72395833333337 195.731 192.82291666666669 193.731 192.82291666666669 191.731C192.82291666666669 191.731 192.82291666666669 191.731 192.82291666666669 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 192.82291666666669 191.731 L 192.82291666666669 95.34166666666667 C 192.82291666666669 93.34166666666667 194.82291666666669 91.34166666666667 196.82291666666669 91.34166666666667 L 196.82291666666669 91.34166666666667 C 198.72395833333337 91.34166666666667 200.62500000000003 93.34166666666667 200.62500000000003 95.34166666666667 L 200.62500000000003 191.731 C 200.62500000000003 193.731 198.62500000000003 195.731 196.62500000000003 195.731 L 196.62500000000003 195.731 C 194.72395833333337 195.731 192.82291666666669 193.731 192.82291666666669 191.731 Z "
                            pathfrom="M 192.82291666666669 195.731 L 192.82291666666669 195.731 L 200.62500000000003 195.731 L 200.62500000000003 195.731 L 200.62500000000003 195.731 L 200.62500000000003 195.731 L 200.62500000000003 195.731 L 192.82291666666669 195.731 Z"
                            cy="91.34066666666666"
                            cx="237.40625000000003"
                            j={4}
                            val={32}
                            barheight="104.38933333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1081"
                            d="M237.40625000000003 191.731L237.40625000000003 20.31183333333334C237.40625000000003 18.31183333333334 239.40625000000003 16.31183333333334 241.40625000000003 16.31183333333334L241.40625000000003 16.31183333333334C243.30729166666669 16.31183333333334 245.20833333333337 18.31183333333334 245.20833333333337 20.31183333333334L245.20833333333337 191.731C245.20833333333337 193.731 243.20833333333337 195.731 241.20833333333337 195.731L241.20833333333337 195.731C239.30729166666669 195.731 237.40625000000003 193.731 237.40625000000003 191.731C237.40625000000003 191.731 237.40625000000003 191.731 237.40625000000003 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 237.40625000000003 191.731 L 237.40625000000003 20.311833333333336 C 237.40625000000003 18.311833333333336 239.40625000000003 16.311833333333336 241.40625000000003 16.311833333333336 L 241.40625000000003 16.311833333333336 C 243.30729166666669 16.311833333333336 245.20833333333337 18.311833333333336 245.20833333333337 20.311833333333336 L 245.20833333333337 191.731 C 245.20833333333337 193.731 243.20833333333337 195.731 241.20833333333337 195.731 L 241.20833333333337 195.731 C 239.30729166666669 195.731 237.40625000000003 193.731 237.40625000000003 191.731 Z "
                            pathfrom="M 237.40625000000003 195.731 L 237.40625000000003 195.731 L 245.20833333333337 195.731 L 245.20833333333337 195.731 L 245.20833333333337 195.731 L 245.20833333333337 195.731 L 245.20833333333337 195.731 L 237.40625000000003 195.731 Z"
                            cy="16.310833333333335"
                            cx="281.98958333333337"
                            j={5}
                            val={55}
                            barheight="179.41916666666665"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1083"
                            d="M281.98958333333337 191.731L281.98958333333337 124.70116666666667C281.98958333333337 122.70116666666667 283.98958333333337 120.70116666666667 285.98958333333337 120.70116666666667L285.98958333333337 120.70116666666667C287.890625 120.70116666666667 289.7916666666667 122.70116666666667 289.7916666666667 124.70116666666667L289.7916666666667 191.731C289.7916666666667 193.731 287.7916666666667 195.731 285.7916666666667 195.731L285.7916666666667 195.731C283.890625 195.731 281.98958333333337 193.731 281.98958333333337 191.731C281.98958333333337 191.731 281.98958333333337 191.731 281.98958333333337 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 281.98958333333337 191.731 L 281.98958333333337 124.70116666666667 C 281.98958333333337 122.70116666666667 283.98958333333337 120.70116666666667 285.98958333333337 120.70116666666667 L 285.98958333333337 120.70116666666667 C 287.890625 120.70116666666667 289.7916666666667 122.70116666666667 289.7916666666667 124.70116666666667 L 289.7916666666667 191.731 C 289.7916666666667 193.731 287.7916666666667 195.731 285.7916666666667 195.731 L 285.7916666666667 195.731 C 283.890625 195.731 281.98958333333337 193.731 281.98958333333337 191.731 Z "
                            pathfrom="M 281.98958333333337 195.731 L 281.98958333333337 195.731 L 289.7916666666667 195.731 L 289.7916666666667 195.731 L 289.7916666666667 195.731 L 289.7916666666667 195.731 L 289.7916666666667 195.731 L 281.98958333333337 195.731 Z"
                            cy="120.70016666666666"
                            cx="326.5729166666667"
                            j={6}
                            val={23}
                            barheight="75.02983333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1085"
                            d="M326.5729166666667 191.731L326.5729166666667 4.001000000000005C326.5729166666667 2.0010000000000048 328.5729166666667 0.0010000000000047748 330.5729166666667 0.0010000000000047748L330.5729166666667 0.0010000000000047748C332.47395833333337 0.0010000000000047748 334.375 2.0010000000000048 334.375 4.001000000000005L334.375 191.731C334.375 193.731 332.375 195.731 330.375 195.731L330.375 195.731C328.47395833333337 195.731 326.5729166666667 193.731 326.5729166666667 191.731C326.5729166666667 191.731 326.5729166666667 191.731 326.5729166666667 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 326.5729166666667 191.731 L 326.5729166666667 4.001 C 326.5729166666667 2.0010000000000003 328.5729166666667 0.001 330.5729166666667 0.001 L 330.5729166666667 0.001 C 332.47395833333337 0.001 334.375 2.001 334.375 4.001 L 334.375 191.731 C 334.375 193.731 332.375 195.731 330.375 195.731 L 330.375 195.731 C 328.47395833333337 195.731 326.5729166666667 193.731 326.5729166666667 191.731 Z "
                            pathfrom="M 326.5729166666667 195.731 L 326.5729166666667 195.731 L 334.375 195.731 L 334.375 195.731 L 334.375 195.731 L 334.375 195.731 L 334.375 195.731 L 326.5729166666667 195.731 Z"
                            cy={0}
                            cx="371.15625"
                            j={7}
                            val={60}
                            barheight="195.73"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1087"
                            d="M371.15625 191.731L371.15625 108.39033333333333C371.15625 106.39033333333333 373.15625 104.39033333333333 375.15625 104.39033333333333L375.15625 104.39033333333333C377.05729166666663 104.39033333333333 378.9583333333333 106.39033333333333 378.9583333333333 108.39033333333333L378.9583333333333 191.731C378.9583333333333 193.731 376.9583333333333 195.731 374.9583333333333 195.731L374.9583333333333 195.731C373.05729166666663 195.731 371.15625 193.731 371.15625 191.731C371.15625 191.731 371.15625 191.731 371.15625 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 371.15625 191.731 L 371.15625 108.39033333333333 C 371.15625 106.39033333333333 373.15625 104.39033333333333 375.15625 104.39033333333333 L 375.15625 104.39033333333333 C 377.05729166666663 104.39033333333333 378.9583333333333 106.39033333333333 378.9583333333333 108.39033333333333 L 378.9583333333333 191.731 C 378.9583333333333 193.731 376.9583333333333 195.731 374.9583333333333 195.731 L 374.9583333333333 195.731 C 373.05729166666663 195.731 371.15625 193.731 371.15625 191.731 Z "
                            pathfrom="M 371.15625 195.731 L 371.15625 195.731 L 378.9583333333333 195.731 L 378.9583333333333 195.731 L 378.9583333333333 195.731 L 378.9583333333333 195.731 L 378.9583333333333 195.731 L 371.15625 195.731 Z"
                            cy="104.38933333333333"
                            cx="415.7395833333333"
                            j={8}
                            val={28}
                            barheight="91.34066666666666"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1089"
                            d="M415.7395833333333 191.731L415.7395833333333 52.93350000000001C415.7395833333333 50.93350000000001 417.7395833333333 48.93350000000001 419.7395833333333 48.93350000000001L419.7395833333333 48.93350000000001C421.640625 48.93350000000001 423.54166666666663 50.93350000000001 423.54166666666663 52.93350000000001L423.54166666666663 191.731C423.54166666666663 193.731 421.54166666666663 195.731 419.54166666666663 195.731L419.54166666666663 195.731C417.640625 195.731 415.7395833333333 193.731 415.7395833333333 191.731C415.7395833333333 191.731 415.7395833333333 191.731 415.7395833333333 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 415.7395833333333 191.731 L 415.7395833333333 52.9335 C 415.7395833333333 50.9335 417.7395833333333 48.9335 419.7395833333333 48.9335 L 419.7395833333333 48.9335 C 421.640625 48.9335 423.54166666666663 50.9335 423.54166666666663 52.9335 L 423.54166666666663 191.731 C 423.54166666666663 193.731 421.54166666666663 195.731 419.54166666666663 195.731 L 419.54166666666663 195.731 C 417.640625 195.731 415.7395833333333 193.731 415.7395833333333 191.731 Z "
                            pathfrom="M 415.7395833333333 195.731 L 415.7395833333333 195.731 L 423.54166666666663 195.731 L 423.54166666666663 195.731 L 423.54166666666663 195.731 L 423.54166666666663 195.731 L 423.54166666666663 195.731 L 415.7395833333333 195.731 Z"
                            cy="48.932500000000005"
                            cx="460.32291666666663"
                            j={9}
                            val={45}
                            barheight="146.79749999999999"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1091"
                            d="M460.32291666666663 191.731L460.32291666666663 85.55516666666666C460.32291666666663 83.55516666666666 462.32291666666663 81.55516666666666 464.32291666666663 81.55516666666666L464.32291666666663 81.55516666666666C466.22395833333326 81.55516666666666 468.12499999999994 83.55516666666666 468.12499999999994 85.55516666666666L468.12499999999994 191.731C468.12499999999994 193.731 466.12499999999994 195.731 464.12499999999994 195.731L464.12499999999994 195.731C462.22395833333326 195.731 460.32291666666663 193.731 460.32291666666663 191.731C460.32291666666663 191.731 460.32291666666663 191.731 460.32291666666663 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 460.32291666666663 191.731 L 460.32291666666663 85.55516666666666 C 460.32291666666663 83.55516666666666 462.32291666666663 81.55516666666666 464.32291666666663 81.55516666666666 L 464.32291666666663 81.55516666666666 C 466.22395833333326 81.55516666666666 468.12499999999994 83.55516666666666 468.12499999999994 85.55516666666666 L 468.12499999999994 191.731 C 468.12499999999994 193.731 466.12499999999994 195.731 464.12499999999994 195.731 L 464.12499999999994 195.731 C 462.22395833333326 195.731 460.32291666666663 193.731 460.32291666666663 191.731 Z "
                            pathfrom="M 460.32291666666663 195.731 L 460.32291666666663 195.731 L 468.12499999999994 195.731 L 468.12499999999994 195.731 L 468.12499999999994 195.731 L 468.12499999999994 195.731 L 468.12499999999994 195.731 L 460.32291666666663 195.731 Z"
                            cy="81.55416666666666"
                            cx="504.90624999999994"
                            j={10}
                            val={35}
                            barheight="114.17583333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1093"
                            d="M504.90624999999994 191.731L504.90624999999994 36.622666666666674C504.90624999999994 34.622666666666674 506.90624999999994 32.622666666666674 508.90624999999994 32.622666666666674L508.90624999999994 32.622666666666674C510.80729166666663 32.622666666666674 512.7083333333333 34.622666666666674 512.7083333333333 36.622666666666674L512.7083333333333 191.731C512.7083333333333 193.731 510.70833333333326 195.731 508.70833333333326 195.731L508.70833333333326 195.731C506.80729166666663 195.731 504.90624999999994 193.731 504.90624999999994 191.731C504.90624999999994 191.731 504.90624999999994 191.731 504.90624999999994 191.731 "
                            fill="rgba(76,78,231,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={0}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 504.90624999999994 191.731 L 504.90624999999994 36.62266666666667 C 504.90624999999994 34.62266666666667 506.90624999999994 32.62266666666667 508.90624999999994 32.62266666666667 L 508.90624999999994 32.62266666666667 C 510.80729166666663 32.62266666666667 512.7083333333333 34.62266666666667 512.7083333333333 36.62266666666667 L 512.7083333333333 191.731 C 512.7083333333333 193.731 510.70833333333326 195.731 508.70833333333326 195.731 L 508.70833333333326 195.731 C 506.80729166666663 195.731 504.90624999999994 193.731 504.90624999999994 191.731 Z "
                            pathfrom="M 504.90624999999994 195.731 L 504.90624999999994 195.731 L 512.7083333333333 195.731 L 512.7083333333333 195.731 L 512.7083333333333 195.731 L 512.7083333333333 195.731 L 512.7083333333333 195.731 L 504.90624999999994 195.731 Z"
                            cy="32.62166666666667"
                            cx="549.4895833333333"
                            j={11}
                            val={50}
                            barheight="163.10833333333332"
                            barwidth="7.802083333333334"
                          />
                          <g
                            id="SvgjsG1068"
                            className="apexcharts-bar-goals-markers"
                          >
                            <g
                              id="SvgjsG1070"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1072"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1074"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1076"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1078"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1080"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1082"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1084"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1086"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1088"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1090"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1092"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                          </g>
                          <g
                            id="SvgjsG1069"
                            className="apexcharts-bar-shadows apexcharts-hidden-element-shown"
                          />
                        </g>
                        <g
                          id="SvgjsG1094"
                          className="apexcharts-series"
                          rel={2}
                          seriesname="Profit"
                          data:realindex={1}
                        >
                          <path
                            id="SvgjsPath1099"
                            d="M22.291666666666668 191.731L22.291666666666668 154.06066666666666C22.291666666666668 152.06066666666666 24.291666666666668 150.06066666666666 26.291666666666668 150.06066666666666L26.291666666666668 150.06066666666666C28.192708333333336 150.06066666666666 30.09375 152.06066666666666 30.09375 154.06066666666666L30.09375 191.731C30.09375 193.731 28.09375 195.731 26.09375 195.731L26.09375 195.731C24.192708333333336 195.731 22.291666666666668 193.731 22.291666666666668 191.731C22.291666666666668 191.731 22.291666666666668 191.731 22.291666666666668 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 22.291666666666668 191.731 L 22.291666666666668 154.06066666666666 C 22.291666666666668 152.06066666666666 24.291666666666668 150.06066666666666 26.291666666666668 150.06066666666666 L 26.291666666666668 150.06066666666666 C 28.192708333333336 150.06066666666666 30.09375 152.06066666666666 30.09375 154.06066666666666 L 30.09375 191.731 C 30.09375 193.731 28.09375 195.731 26.09375 195.731 L 26.09375 195.731 C 24.192708333333336 195.731 22.291666666666668 193.731 22.291666666666668 191.731 Z "
                            pathfrom="M 22.291666666666668 195.731 L 22.291666666666668 195.731 L 30.09375 195.731 L 30.09375 195.731 L 30.09375 195.731 L 30.09375 195.731 L 30.09375 195.731 L 22.291666666666668 195.731 Z"
                            cy="150.05966666666666"
                            cx="66.875"
                            j={0}
                            val={14}
                            barheight="45.67033333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1101"
                            d="M66.875 191.731L66.875 118.17683333333333C66.875 116.17683333333333 68.875 114.17683333333333 70.875 114.17683333333333L70.875 114.17683333333333C72.77604166666666 114.17683333333333 74.67708333333333 116.17683333333333 74.67708333333333 118.17683333333333L74.67708333333333 191.731C74.67708333333333 193.731 72.67708333333333 195.731 70.67708333333333 195.731L70.67708333333333 195.731C68.77604166666666 195.731 66.875 193.731 66.875 191.731C66.875 191.731 66.875 191.731 66.875 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 66.875 191.731 L 66.875 118.17683333333333 C 66.875 116.17683333333333 68.875 114.17683333333333 70.875 114.17683333333333 L 70.875 114.17683333333333 C 72.77604166666666 114.17683333333333 74.67708333333333 116.17683333333333 74.67708333333333 118.17683333333333 L 74.67708333333333 191.731 C 74.67708333333333 193.731 72.67708333333333 195.731 70.67708333333333 195.731 L 70.67708333333333 195.731 C 68.77604166666666 195.731 66.875 193.731 66.875 191.731 Z "
                            pathfrom="M 66.875 195.731 L 66.875 195.731 L 74.67708333333333 195.731 L 74.67708333333333 195.731 L 74.67708333333333 195.731 L 74.67708333333333 195.731 L 74.67708333333333 195.731 L 66.875 195.731 Z"
                            cy="114.17583333333333"
                            cx="111.45833333333333"
                            j={1}
                            val={25}
                            barheight="81.55416666666666"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1103"
                            d="M111.45833333333333 191.731L111.45833333333333 134.48766666666666C111.45833333333333 132.48766666666666 113.45833333333333 130.48766666666666 115.45833333333333 130.48766666666666L115.45833333333333 130.48766666666666C117.359375 130.48766666666666 119.26041666666666 132.48766666666666 119.26041666666666 134.48766666666666L119.26041666666666 191.731C119.26041666666666 193.731 117.26041666666666 195.731 115.26041666666666 195.731L115.26041666666666 195.731C113.359375 195.731 111.45833333333333 193.731 111.45833333333333 191.731C111.45833333333333 191.731 111.45833333333333 191.731 111.45833333333333 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 111.45833333333333 191.731 L 111.45833333333333 134.48766666666666 C 111.45833333333333 132.48766666666666 113.45833333333333 130.48766666666666 115.45833333333333 130.48766666666666 L 115.45833333333333 130.48766666666666 C 117.359375 130.48766666666666 119.26041666666666 132.48766666666666 119.26041666666666 134.48766666666666 L 119.26041666666666 191.731 C 119.26041666666666 193.731 117.26041666666666 195.731 115.26041666666666 195.731 L 115.26041666666666 195.731 C 113.359375 195.731 111.45833333333333 193.731 111.45833333333333 191.731 Z "
                            pathfrom="M 111.45833333333333 195.731 L 111.45833333333333 195.731 L 119.26041666666666 195.731 L 119.26041666666666 195.731 L 119.26041666666666 195.731 L 119.26041666666666 195.731 L 119.26041666666666 195.731 L 111.45833333333333 195.731 Z"
                            cy="130.48666666666665"
                            cx="156.04166666666669"
                            j={2}
                            val={20}
                            barheight="65.24333333333334"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1105"
                            d="M156.04166666666669 191.731L156.04166666666669 118.17683333333333C156.04166666666669 116.17683333333333 158.04166666666669 114.17683333333333 160.04166666666669 114.17683333333333L160.04166666666669 114.17683333333333C161.94270833333337 114.17683333333333 163.84375000000003 116.17683333333333 163.84375000000003 118.17683333333333L163.84375000000003 191.731C163.84375000000003 193.731 161.84375000000003 195.731 159.84375000000003 195.731L159.84375000000003 195.731C157.94270833333337 195.731 156.04166666666669 193.731 156.04166666666669 191.731C156.04166666666669 191.731 156.04166666666669 191.731 156.04166666666669 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 156.04166666666669 191.731 L 156.04166666666669 118.17683333333333 C 156.04166666666669 116.17683333333333 158.04166666666669 114.17683333333333 160.04166666666669 114.17683333333333 L 160.04166666666669 114.17683333333333 C 161.94270833333337 114.17683333333333 163.84375000000003 116.17683333333333 163.84375000000003 118.17683333333333 L 163.84375000000003 191.731 C 163.84375000000003 193.731 161.84375000000003 195.731 159.84375000000003 195.731 L 159.84375000000003 195.731 C 157.94270833333337 195.731 156.04166666666669 193.731 156.04166666666669 191.731 Z "
                            pathfrom="M 156.04166666666669 195.731 L 156.04166666666669 195.731 L 163.84375000000003 195.731 L 163.84375000000003 195.731 L 163.84375000000003 195.731 L 163.84375000000003 195.731 L 163.84375000000003 195.731 L 156.04166666666669 195.731 Z"
                            cy="114.17583333333333"
                            cx="200.62500000000003"
                            j={3}
                            val={25}
                            barheight="81.55416666666666"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1107"
                            d="M200.62500000000003 191.731L200.62500000000003 160.585C200.62500000000003 158.585 202.62500000000003 156.585 204.62500000000003 156.585L204.62500000000003 156.585C206.52604166666669 156.585 208.42708333333337 158.585 208.42708333333337 160.585L208.42708333333337 191.731C208.42708333333337 193.731 206.42708333333337 195.731 204.42708333333337 195.731L204.42708333333337 195.731C202.52604166666669 195.731 200.62500000000003 193.731 200.62500000000003 191.731C200.62500000000003 191.731 200.62500000000003 191.731 200.62500000000003 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 200.62500000000003 191.731 L 200.62500000000003 160.585 C 200.62500000000003 158.585 202.62500000000003 156.585 204.62500000000003 156.585 L 204.62500000000003 156.585 C 206.52604166666669 156.585 208.42708333333337 158.585 208.42708333333337 160.585 L 208.42708333333337 191.731 C 208.42708333333337 193.731 206.42708333333337 195.731 204.42708333333337 195.731 L 204.42708333333337 195.731 C 202.52604166666669 195.731 200.62500000000003 193.731 200.62500000000003 191.731 Z "
                            pathfrom="M 200.62500000000003 195.731 L 200.62500000000003 195.731 L 208.42708333333337 195.731 L 208.42708333333337 195.731 L 208.42708333333337 195.731 L 208.42708333333337 195.731 L 208.42708333333337 195.731 L 200.62500000000003 195.731 Z"
                            cy="156.584"
                            cx="245.20833333333337"
                            j={4}
                            val={12}
                            barheight="39.146"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1109"
                            d="M245.20833333333337 191.731L245.20833333333337 134.48766666666666C245.20833333333337 132.48766666666666 247.20833333333337 130.48766666666666 249.20833333333337 130.48766666666666L249.20833333333337 130.48766666666666C251.10937500000006 130.48766666666666 253.0104166666667 132.48766666666666 253.0104166666667 134.48766666666666L253.0104166666667 191.731C253.0104166666667 193.731 251.0104166666667 195.731 249.0104166666667 195.731L249.0104166666667 195.731C247.10937500000006 195.731 245.20833333333337 193.731 245.20833333333337 191.731C245.20833333333337 191.731 245.20833333333337 191.731 245.20833333333337 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 245.20833333333337 191.731 L 245.20833333333337 134.48766666666666 C 245.20833333333337 132.48766666666666 247.20833333333337 130.48766666666666 249.20833333333337 130.48766666666666 L 249.20833333333337 130.48766666666666 C 251.10937500000006 130.48766666666666 253.0104166666667 132.48766666666666 253.0104166666667 134.48766666666666 L 253.0104166666667 191.731 C 253.0104166666667 193.731 251.0104166666667 195.731 249.0104166666667 195.731 L 249.0104166666667 195.731 C 247.10937500000006 195.731 245.20833333333337 193.731 245.20833333333337 191.731 Z "
                            pathfrom="M 245.20833333333337 195.731 L 245.20833333333337 195.731 L 253.0104166666667 195.731 L 253.0104166666667 195.731 L 253.0104166666667 195.731 L 253.0104166666667 195.731 L 253.0104166666667 195.731 L 245.20833333333337 195.731 Z"
                            cy="130.48666666666665"
                            cx="289.7916666666667"
                            j={5}
                            val={20}
                            barheight="65.24333333333334"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1111"
                            d="M289.7916666666667 191.731L289.7916666666667 150.7985C289.7916666666667 148.7985 291.7916666666667 146.7985 293.7916666666667 146.7985L293.7916666666667 146.7985C295.69270833333337 146.7985 297.59375 148.7985 297.59375 150.7985L297.59375 191.731C297.59375 193.731 295.59375 195.731 293.59375 195.731L293.59375 195.731C291.69270833333337 195.731 289.7916666666667 193.731 289.7916666666667 191.731C289.7916666666667 191.731 289.7916666666667 191.731 289.7916666666667 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 289.7916666666667 191.731 L 289.7916666666667 150.7985 C 289.7916666666667 148.7985 291.7916666666667 146.7985 293.7916666666667 146.7985 L 293.7916666666667 146.7985 C 295.69270833333337 146.7985 297.59375 148.7985 297.59375 150.7985 L 297.59375 191.731 C 297.59375 193.731 295.59375 195.731 293.59375 195.731 L 293.59375 195.731 C 291.69270833333337 195.731 289.7916666666667 193.731 289.7916666666667 191.731 Z "
                            pathfrom="M 289.7916666666667 195.731 L 289.7916666666667 195.731 L 297.59375 195.731 L 297.59375 195.731 L 297.59375 195.731 L 297.59375 195.731 L 297.59375 195.731 L 289.7916666666667 195.731 Z"
                            cy="146.79749999999999"
                            cx="334.375"
                            j={6}
                            val={15}
                            barheight="48.9325"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1113"
                            d="M334.375 191.731L334.375 134.48766666666666C334.375 132.48766666666666 336.375 130.48766666666666 338.375 130.48766666666666L338.375 130.48766666666666C340.27604166666663 130.48766666666666 342.1770833333333 132.48766666666666 342.1770833333333 134.48766666666666L342.1770833333333 191.731C342.1770833333333 193.731 340.1770833333333 195.731 338.1770833333333 195.731L338.1770833333333 195.731C336.27604166666663 195.731 334.375 193.731 334.375 191.731C334.375 191.731 334.375 191.731 334.375 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 334.375 191.731 L 334.375 134.48766666666666 C 334.375 132.48766666666666 336.375 130.48766666666666 338.375 130.48766666666666 L 338.375 130.48766666666666 C 340.27604166666663 130.48766666666666 342.1770833333333 132.48766666666666 342.1770833333333 134.48766666666666 L 342.1770833333333 191.731 C 342.1770833333333 193.731 340.1770833333333 195.731 338.1770833333333 195.731 L 338.1770833333333 195.731 C 336.27604166666663 195.731 334.375 193.731 334.375 191.731 Z "
                            pathfrom="M 334.375 195.731 L 334.375 195.731 L 342.1770833333333 195.731 L 342.1770833333333 195.731 L 342.1770833333333 195.731 L 342.1770833333333 195.731 L 342.1770833333333 195.731 L 334.375 195.731 Z"
                            cy="130.48666666666665"
                            cx="378.9583333333333"
                            j={7}
                            val={20}
                            barheight="65.24333333333334"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1115"
                            d="M378.9583333333333 191.731L378.9583333333333 154.06066666666666C378.9583333333333 152.06066666666666 380.9583333333333 150.06066666666666 382.9583333333333 150.06066666666666L382.9583333333333 150.06066666666666C384.859375 150.06066666666666 386.76041666666663 152.06066666666666 386.76041666666663 154.06066666666666L386.76041666666663 191.731C386.76041666666663 193.731 384.76041666666663 195.731 382.76041666666663 195.731L382.76041666666663 195.731C380.859375 195.731 378.9583333333333 193.731 378.9583333333333 191.731C378.9583333333333 191.731 378.9583333333333 191.731 378.9583333333333 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 378.9583333333333 191.731 L 378.9583333333333 154.06066666666666 C 378.9583333333333 152.06066666666666 380.9583333333333 150.06066666666666 382.9583333333333 150.06066666666666 L 382.9583333333333 150.06066666666666 C 384.859375 150.06066666666666 386.76041666666663 152.06066666666666 386.76041666666663 154.06066666666666 L 386.76041666666663 191.731 C 386.76041666666663 193.731 384.76041666666663 195.731 382.76041666666663 195.731 L 382.76041666666663 195.731 C 380.859375 195.731 378.9583333333333 193.731 378.9583333333333 191.731 Z "
                            pathfrom="M 378.9583333333333 195.731 L 378.9583333333333 195.731 L 386.76041666666663 195.731 L 386.76041666666663 195.731 L 386.76041666666663 195.731 L 386.76041666666663 195.731 L 386.76041666666663 195.731 L 378.9583333333333 195.731 Z"
                            cy="150.05966666666666"
                            cx="423.54166666666663"
                            j={8}
                            val={14}
                            barheight="45.67033333333333"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1117"
                            d="M423.54166666666663 191.731L423.54166666666663 118.17683333333333C423.54166666666663 116.17683333333333 425.54166666666663 114.17683333333333 427.54166666666663 114.17683333333333L427.54166666666663 114.17683333333333C429.44270833333326 114.17683333333333 431.34374999999994 116.17683333333333 431.34374999999994 118.17683333333333L431.34374999999994 191.731C431.34374999999994 193.731 429.34374999999994 195.731 427.34374999999994 195.731L427.34374999999994 195.731C425.44270833333326 195.731 423.54166666666663 193.731 423.54166666666663 191.731C423.54166666666663 191.731 423.54166666666663 191.731 423.54166666666663 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 423.54166666666663 191.731 L 423.54166666666663 118.17683333333333 C 423.54166666666663 116.17683333333333 425.54166666666663 114.17683333333333 427.54166666666663 114.17683333333333 L 427.54166666666663 114.17683333333333 C 429.44270833333326 114.17683333333333 431.34374999999994 116.17683333333333 431.34374999999994 118.17683333333333 L 431.34374999999994 191.731 C 431.34374999999994 193.731 429.34374999999994 195.731 427.34374999999994 195.731 L 427.34374999999994 195.731 C 425.44270833333326 195.731 423.54166666666663 193.731 423.54166666666663 191.731 Z "
                            pathfrom="M 423.54166666666663 195.731 L 423.54166666666663 195.731 L 431.34374999999994 195.731 L 431.34374999999994 195.731 L 431.34374999999994 195.731 L 431.34374999999994 195.731 L 431.34374999999994 195.731 L 423.54166666666663 195.731 Z"
                            cy="114.17583333333333"
                            cx="468.12499999999994"
                            j={9}
                            val={25}
                            barheight="81.55416666666666"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1119"
                            d="M468.12499999999994 191.731L468.12499999999994 134.48766666666666C468.12499999999994 132.48766666666666 470.12499999999994 130.48766666666666 472.12499999999994 130.48766666666666L472.12499999999994 130.48766666666666C474.02604166666663 130.48766666666666 475.92708333333326 132.48766666666666 475.92708333333326 134.48766666666666L475.92708333333326 191.731C475.92708333333326 193.731 473.92708333333326 195.731 471.92708333333326 195.731L471.92708333333326 195.731C470.02604166666663 195.731 468.12499999999994 193.731 468.12499999999994 191.731C468.12499999999994 191.731 468.12499999999994 191.731 468.12499999999994 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 468.12499999999994 191.731 L 468.12499999999994 134.48766666666666 C 468.12499999999994 132.48766666666666 470.12499999999994 130.48766666666666 472.12499999999994 130.48766666666666 L 472.12499999999994 130.48766666666666 C 474.02604166666663 130.48766666666666 475.92708333333326 132.48766666666666 475.92708333333326 134.48766666666666 L 475.92708333333326 191.731 C 475.92708333333326 193.731 473.92708333333326 195.731 471.92708333333326 195.731 L 471.92708333333326 195.731 C 470.02604166666663 195.731 468.12499999999994 193.731 468.12499999999994 191.731 Z "
                            pathfrom="M 468.12499999999994 195.731 L 468.12499999999994 195.731 L 475.92708333333326 195.731 L 475.92708333333326 195.731 L 475.92708333333326 195.731 L 475.92708333333326 195.731 L 475.92708333333326 195.731 L 468.12499999999994 195.731 Z"
                            cy="130.48666666666665"
                            cx="512.7083333333333"
                            j={10}
                            val={20}
                            barheight="65.24333333333334"
                            barwidth="7.802083333333334"
                          />
                          <path
                            id="SvgjsPath1121"
                            d="M512.7083333333333 191.731L512.7083333333333 118.17683333333333C512.7083333333333 116.17683333333333 514.7083333333333 114.17683333333333 516.7083333333333 114.17683333333333L516.7083333333333 114.17683333333333C518.609375 114.17683333333333 520.5104166666666 116.17683333333333 520.5104166666666 118.17683333333333L520.5104166666666 191.731C520.5104166666666 193.731 518.5104166666666 195.731 516.5104166666666 195.731L516.5104166666666 195.731C514.609375 195.731 512.7083333333333 193.731 512.7083333333333 191.731C512.7083333333333 191.731 512.7083333333333 191.731 512.7083333333333 191.731 "
                            fill="rgba(14,165,233,0.85)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="round"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-bar-area"
                            index={1}
                            clipPath="url(#gridRectMaskzfn61u7y)"
                            pathto="M 512.7083333333333 191.731 L 512.7083333333333 118.17683333333333 C 512.7083333333333 116.17683333333333 514.7083333333333 114.17683333333333 516.7083333333333 114.17683333333333 L 516.7083333333333 114.17683333333333 C 518.609375 114.17683333333333 520.5104166666666 116.17683333333333 520.5104166666666 118.17683333333333 L 520.5104166666666 191.731 C 520.5104166666666 193.731 518.5104166666666 195.731 516.5104166666666 195.731 L 516.5104166666666 195.731 C 514.609375 195.731 512.7083333333333 193.731 512.7083333333333 191.731 Z "
                            pathfrom="M 512.7083333333333 195.731 L 512.7083333333333 195.731 L 520.5104166666666 195.731 L 520.5104166666666 195.731 L 520.5104166666666 195.731 L 520.5104166666666 195.731 L 520.5104166666666 195.731 L 512.7083333333333 195.731 Z"
                            cy="114.17583333333333"
                            cx="557.2916666666666"
                            j={11}
                            val={25}
                            barheight="81.55416666666666"
                            barwidth="7.802083333333334"
                          />
                          <g
                            id="SvgjsG1096"
                            className="apexcharts-bar-goals-markers"
                          >
                            <g
                              id="SvgjsG1098"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1100"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1102"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1104"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1106"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1108"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1110"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1112"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1114"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1116"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1118"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                            <g
                              id="SvgjsG1120"
                              classname="apexcharts-bar-goals-groups"
                              className="apexcharts-hidden-element-shown"
                              clipPath="url(#gridRectMarkerMaskzfn61u7y)"
                            />
                          </g>
                          <g
                            id="SvgjsG1097"
                            className="apexcharts-bar-shadows apexcharts-hidden-element-shown"
                          />
                        </g>
                        <g
                          id="SvgjsG1067"
                          className="apexcharts-datalabels apexcharts-hidden-element-shown"
                          data:realindex={0}
                        />
                        <g
                          id="SvgjsG1095"
                          className="apexcharts-datalabels apexcharts-hidden-element-shown"
                          data:realindex={1}
                        />
                      </g>
                      <line
                        id="SvgjsLine1132"
                        x1={0}
                        y1={0}
                        x2={535}
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1133"
                        x1={0}
                        y1={0}
                        x2={535}
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      />
                      <g
                        id="SvgjsG1134"
                        className="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1135"
                          className="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        >
                          <text
                            id="SvgjsText1137"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="22.291666666666668"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1138">Jan</tspan>
                            <title>Jan</title>
                          </text>
                          <text
                            id="SvgjsText1140"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="66.875"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1141">Feb</tspan>
                            <title>Feb</title>
                          </text>
                          <text
                            id="SvgjsText1143"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="111.45833333333333"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1144">Mar</tspan>
                            <title>Mar</title>
                          </text>
                          <text
                            id="SvgjsText1146"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="156.04166666666669"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1147">Apr</tspan>
                            <title>Apr</title>
                          </text>
                          <text
                            id="SvgjsText1149"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="200.62500000000003"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1150">May</tspan>
                            <title>May</title>
                          </text>
                          <text
                            id="SvgjsText1152"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="245.20833333333334"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1153">Jun</tspan>
                            <title>Jun</title>
                          </text>
                          <text
                            id="SvgjsText1155"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="289.79166666666663"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1156">Jul</tspan>
                            <title>Jul</title>
                          </text>
                          <text
                            id="SvgjsText1158"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="334.37499999999994"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1159">Aug</tspan>
                            <title>Aug</title>
                          </text>
                          <text
                            id="SvgjsText1161"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="378.95833333333326"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1162">Sep</tspan>
                            <title>Sep</title>
                          </text>
                          <text
                            id="SvgjsText1164"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="423.5416666666666"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1165">Oct</tspan>
                            <title>Oct</title>
                          </text>
                          <text
                            id="SvgjsText1167"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="468.1249999999999"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1168">Nov</tspan>
                            <title>Nov</title>
                          </text>
                          <text
                            id="SvgjsText1170"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="512.7083333333333"
                            y="224.73"
                            textAnchor="middle"
                            dominantBaseline="auto"
                            fontSize="12px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1171">Dec</tspan>
                            <title>Dec</title>
                          </text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG1173"
                        className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                      />
                      <g
                        id="SvgjsG1174"
                        className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                      />
                      <g
                        id="SvgjsG1175"
                        className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                      />
                    </g>
                  </svg>
                  <div className="apexcharts-tooltip apexcharts-theme-light">
                    <div
                      className="apexcharts-tooltip-title"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 12
                      }}
                    />
                    <div
                      className="apexcharts-tooltip-series-group"
                      style={{ order: 1 }}
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        style={{ backgroundColor: "rgb(76, 78, 231)" }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
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
                        style={{ backgroundColor: "rgb(14, 165, 233)" }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
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
                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div className="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2">
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between space-x-1">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  $67.6k
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Income</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  12.6K
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Completed</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  143
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-warning"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Pending</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  651
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-info"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Dispatch</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between space-x-1">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  46k
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">vendor</p>
            </div>
            <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
              <div className="flex justify-between">
                <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                  8.8k
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="mt-1 text-xs+">Customers</p>
            </div>
          </div>
        </div>
        <div className="card col-span-12 lg:col-span-8">
          <div className="flex items-center justify-between py-3 px-4">
            <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
              Post Status
            </h2>
            <div className="inline-flex">
              <button
                x-ref="popperRef"
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
              <div
                x-ref="popperRoot"
                className="popper-root"
                style={{
                  position: "fixed",
                  inset: "0px 0px auto auto",
                  margin: 0,
                  transform: "translate(-459px, 445px)"
                }}
                data-popper-placement="bottom-end"
              >
                <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Another Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Something else
                      </a>
                    </li>
                  </ul>
                  <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Separated Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 pb-3 sm:grid-cols-3">
            <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
              <div>
                <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                  Hotel
                </p>
                <p className="text-xs text-slate-400 dark:text-navy-300">
                  Event
                </p>
                <div className="badge mt-2 bg-info/10 text-info dark:bg-info/15">
                  Travel
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-inter">
                    <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                      %55.
                    </span>
                    <span className="text-xs">23</span>
                  </p>
                  <p className="mt-1 text-xs">June 08, 2021</p>
                </div>
                <div className="mt-8 flex items-center justify-between space-x-2">
                  <div className="flex -space-x-3">
                  <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        jd
                      </div>
                    </div>
                    <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        jd
                      </div>
                    </div>
                    <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        jd
                      </div>
                    </div>
                  </div>
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between border-4 border-transparent border-l-secondary px-4">
              <div>
                <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                  Trour
                </p>
                <p className="text-xs text-slate-400 dark:text-navy-300">
                  Boat
                </p>
                <div className="badge mt-2 bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">
                  speace
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-inter">
                    <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                      %14.
                    </span>
                    <span className="text-xs">84</span>
                  </p>
                  <p className="mt-1 text-xs">May 01, 2021</p>
                </div>
                <div className="mt-8 flex items-center justify-between space-x-2">
                  <div className="flex -space-x-3">
                  <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        uh
                      </div>
                    </div>
                    <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        uh
                      </div>
                    </div>
                   <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        uh
                      </div>
                    </div>
                  </div>
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between border-4 border-transparent border-l-warning px-4">
              <div>
                <p className="text-base font-medium text-slate-600 dark:text-navy-100">
                  Flight
                </p>
                <p className="text-xs text-slate-400 dark:text-navy-300">
tour                </p>
                <div className="mt-2 flex space-x-1.5">
                  <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                    travel
                  </div>
                  <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                    trip
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-inter">
                    <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">
                      %87.
                    </span>
                    <span className="text-xs">40</span>
                  </p>
                  <p className="mt-1 text-xs">September 16, 2021</p>
                </div>
                <div className="mt-8 flex items-center justify-between space-x-2">
                  <div className="flex -space-x-3">
                  <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        pm
                      </div>
                    </div>
                    <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        pm
                      </div>
                    </div>
                    <div className="avatar h-8 w-8 hover:z-10">
                      <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        pm
                      </div>
                    </div>
                  </div>
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
              Customer Satisfaction
            </h2>
            <div className="inline-flex">
              <button
                x-ref="popperRef"
                className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
              <div
                x-ref="popperRoot"
                className="popper-root"
                style={{
                  position: "fixed",
                  inset: "0px 0px auto auto",
                  margin: 0,
                  transform: "translate(-64px, 433px)"
                }}
                data-popper-placement="bottom-end"
              >
                <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Another Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Something else
                      </a>
                    </li>
                  </ul>
                  <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >
                        Separated Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>
              <span className="text-3xl text-slate-700 dark:text-navy-100">
                9.7
              </span>
              <span className="text-xs text-success">+2.1%</span>
            </p>
            <p className="text-xs+">Performance score</p>
          </div>
          <div className="mt-4 flex h-2 space-x-1">
            <div className="w-5/12 rounded-full bg-primary dark:bg-accent" />
            <div className="w-2/12 rounded-full bg-success" />
            <div className="w-2/12 rounded-full bg-info" />
            <div className="w-2/12 rounded-full bg-warning" />
            <div className="w-1/12 rounded-full bg-error" />
          </div>
          <div className="is-scrollbar-hidden mt-4 min-w-full overflow-x-auto">
            <table className="w-full font-inter">
              <tbody>
                <tr>
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-primary dark:border-accent" />
                      <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Exellent
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">
                    <p className="font-medium text-slate-700 dark:text-navy-100">
                      1 029
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">42%</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-success" />
                      <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Very Good
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">
                    <p className="font-medium text-slate-700 dark:text-navy-100">
                      426
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">18%</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-info" />
                      <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Good
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">
                    <p className="font-medium text-slate-700 dark:text-navy-100">
                      326
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">14%</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-warning" />
                      <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Poor
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">
                    <p className="font-medium text-slate-700 dark:text-navy-100">
                      395
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">17%</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-error" />
                      <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                        Very Poor
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">
                    <p className="font-medium text-slate-700 dark:text-navy-100">
                      129
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-2 text-right">9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"></div>
    </main>
  </div>
</>


      
    </div>
  );
}
