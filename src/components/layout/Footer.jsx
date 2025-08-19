import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className="bg-gray-100">
                    <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                        <div className="p-5">
                            <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
                            <a className="my-3 block" href="/#">
                                Documentation <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                            <a className="my-3 block" href="/#">
                                Tutorials <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                            <a className="my-3 block" href="/#">
                                Support <span className="text-teal-600 text-xs p-1">New</span>
                            </a>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
                            <a className="my-3 block" href="/#">
                                Help Center <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                            <a className="my-3 block" href="/#">
                                Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                            <a className="my-3 block" href="/#">
                                Conditions <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                        </div>
                        <div className="p-5">
                            <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                            <a className="my-3 block" href="/#">
                                XXX XXXX, Floor 4 San Francisco, CA
                                <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                            <a className="my-3 block" href="/#">
                                contact@company.com
                                <span className="text-teal-600 text-xs p-1"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 pt-2">
                    <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            {/* Twitter */}
                            <a href="/#" className="w-6 mx-1">
                                <svg
                                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                >
                                    <path d="M24,12c0,6.627-5.373,12-12,12S0,18.627,0,12S5.373,0,12,0s12,5.373,12,12Zm-6.465-3.192c-0.379,0.168-0.786,0.281-1.213,0.333c0.436-0.262,0.771-0.676,0.929-1.169c-0.408,0.242-0.86,0.418-1.341,0.513c-0.385-0.411-0.934-0.667-1.541-0.667c-1.167,0-2.112,0.945-2.112,2.111c0,0.166,0.018,0.327,0.054,0.482c-1.754-0.088-3.31-0.929-4.352-2.206c-0.181,0.311-0.286,0.674-0.286,1.061c0,0.733,0.373,1.379,0.94,1.757c-0.346-0.01-0.672-0.106-0.956-0.264c0,1.023,0.728,1.877,1.694,2.07c-0.177,0.049-0.364,0.075-0.556,0.075c-0.137,0-0.269-0.014-0.397-0.038c0.268,0.838,1.048,1.449,1.972,1.466c-0.723,0.566-1.633,0.904-2.622,0.904c-0.171,0-0.339-0.01-0.504-0.03c0.934,0.599,2.044,0.949,3.237,0.949c3.883,0,6.007-3.217,6.007-6.008c0-0.091-0.002-0.183-0.006-0.273c0.413-0.298,0.771-0.67,1.054-1.093Z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a href="/#" className="w-6 mx-1">
                                <svg
                                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                >
                                    <path d="M24,12c0,6.627-5.373,12-12,12S0,18.627,0,12S5.373,0,12,0s12,5.373,12,12Zm-11.278,0h1.294l0.172-1.617h-1.466l0.002-0.808c0-0.422,0.04-0.648,0.646-0.648h0.809V7.311h-1.295c-1.555,0-2.103,0.784-2.103,2.102v0.97H9.812V12h0.969v4.689h1.941V12Z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="/#" className="w-6 mx-1">
                                <svg
                                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                >
                                    <circle cx="12" cy="12" r="12"></circle>
                                    <path
                                        d="M19.05,8.362c0-0.062,0-0.125-0.063-0.187v-0.063c-0.187-0.562-0.687-0.937-1.312-0.937h0.125s-2.438-0.375-5.75-0.375-5.75,0.375-5.75,0.375h0.125c-0.625,0-1.125,0.375-1.313,0.937v0.063c0,0.062,0,0.125-0.062,0.187-0.063,0.625-0.25,1.938-0.25,3.438s0.187,2.812,0.25,3.437c0,0.063,0,0.125,0.062,0.188v0.062c0.188,0.563,0.688,0.938,1.313,0.938h-0.125s2.437,0.375,5.75,0.375,5.75-0.375,5.75-0.375h-0.125c0.625,0,1.125-0.375,1.312-0.938v-0.062c0-0.063,0-0.125,0.063-0.188c0.062-0.625,0.25-1.937,0.25-3.437s-0.125-2.813-0.25-3.438Zm-4.634,3.927-3.201,2.315c-0.068,0.068-0.137,0.068-0.205,0.068s-0.136,0-0.204-0.068c-0.136-0.068-0.204-0.204-0.204-0.34V9.683c0-0.136,0.068-0.273,0.204-0.341c0.136-0.068,0.272-0.068,0.409,0l3.201,2.316c0.068,0.068,0.136,0.204,0.136,0.34c0.068,0.136,0,0.273-0.136,0.341Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="/#" className="w-6 mx-1">
                                <svg
                                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                >
                                    <path d="M7.3,0.9C8.8,0.3,10.4,0,12,0s3.2,0.3,4.7,0.9c1.5,0.6,2.8,1.5,3.8,2.6c1,1.1,1.9,2.3,2.6,3.8c0.7,1.5,0.9,3,0.9,4.7c0,1.7-0.3,3.2-0.9,4.7c-0.6,1.5-1.5,2.8-2.6,3.8c-1.1,1-2.3,1.9-3.8,2.6c-1.5,0.7-3.1,0.9-4.7,0.9s-3.2-0.3-4.7-0.9c-1.5-0.6-2.8-1.5-3.8-2.6c-1-1.1-1.9-2.3-2.6-3.8C0.3,15.2,0,13.6,0,12c0-1.6,0.3-3.2,0.9-4.7c0.6-1.5,1.5-2.8,2.6-3.8C5.1,2.4,6.5,1.5,7.3,0.9ZM7,8c0.6,0,1.1-0.2,1.5-0.5c0.4-0.3,0.5-0.8,0.5-1.3S8.8,5.3,8.4,5c-0.4-0.3-0.8-0.5-1.4-0.5S6,4.7,5.7,5C5.3,5.3,5.1,5.7,5.1,6.2s0.2,0.9,0.5,1.3C6,7.8,6.6,8,7,8Zm1.5,10V9.5h-3V18h3Zm11,0v-4.5c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.5-1.2-2.6-1.2c-0.6,0-1.1,0.2-1.5,0.5c-0.4,0.3-0.8,0.8-0.9,1.3l-0.1-1.3h-3l0.1,2V18h3v-4.5c0-0.6,0.1-1.1,0.4-1.5c0.3-0.4,0.6-0.5,1.1-0.5s0.9,0.2,1.1,0.5c0.2,0.3,0.4,0.8,0.4,1.5V18h2.9Z" />
                                </svg>
                            </a>

                            {/* Medium */}
                            <a href="/#" className="w-6 mx-1">
                                <svg
                                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                >
                                    <path d="M12,24c6.627,0,12-5.373,12-12S18.627,0,12,0S0,5.373,0,12S5.373,24,12,24Zm6.591-15.556h-0.722c-0.189,0-0.681,0.208-0.681,0.385v6.422c0,0.178,0.492,0.323,0.681,0.323h0.722v1.426h-4.675v-1.426h0.935v-6.655h-0.163l-2.251,8.081h-1.742l-2.222-8.081h-0.168v6.655h0.935v1.426h-3.74v-1.426h0.519c0.203,0,0.416-0.145,0.416-0.323v-6.422c0-0.177-0.213-0.385-0.416-0.385h-0.519V8.444h4.847l1.583,5.704h0.042l1.598-5.704h5.021v1.426Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
