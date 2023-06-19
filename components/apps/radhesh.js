import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { project_list, tag_colors } from '../../projects.config';

export class AboutRadhesh extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "portfolio": <Portfolio />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about radhesh" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="portfolio" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "portfolio" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about shubham" src="./themes/Yaru/status/portfolio.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Portfolio</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="radhesh' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="radhesh' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="radhesh' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="radhesh's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/radhesh1/button" title="Sponsor radhesh1" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutRadhesh;

export const displayAboutRadhesh = () => {
    return <AboutRadhesh />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/profile.png" alt="shubham Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Radhesh Goel</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">OS Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Undergraduate Student</span> currently pursuing Computer Science. I am a contributor at <u className=' cursor-pointer '> <a href="https://en.wikipedia.org/wiki/AlmaLinux" target={"_blank"}>AlmaLinux</a> </u>, and now I'm looking for some internship opportunities! ( Hit me up <a className='text-underline' href='mailto:radhesh036916@gmail.com'><u>@radhesh036916@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome things that use my creativity.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, learning a new language or watching <a href="https://www.youtube.com/@RasOrgUk" target="_blank" rel="noreferrer"> Royal Astronomical Society's lectures.</a></li>
                <li className=" mt-3 list-star"> And I also have interest in Languages, Physics, Chemistry ,and Mathematics!</li>
            </ul>
        </>
    )
}
function Portfolio() {
    return (
        <iframe src="https://pontiff.vercel.app/" frameBorder="0" title="My Portfolio" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Thapar Institute of Engineering and Technology- TIET
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                    <div className=" text-sm md:text-base">Computer Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 7.86/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (CBSE)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 95.6%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages and fields.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">operating system development, C and RISC-V!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Other Tools</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="radhesh c" />
                        <img className="m-1" src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white" alt="radhesh c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="radhesh c#" />
                        <img className="m-1" src="https://img.shields.io/badge/Shell_Script-121011?style=flat&logo=gnu-bash&logoColor=white" alt="radhesh bash" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="radhesh HTML" /></a>
                        <img src="https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white" alt="radhesh rust" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="radhesh git" className="m-1" />
                        <img src="https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white" alt="radhesh markdown" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Raspberry%20Pi-A22846?style=flat&logo=Raspberry%20Pi&logoColor=white" alt="radhesh raspberrypi" />
                        <img className=" m-1" src="	https://img.shields.io/badge/Arduino-00979D?style=flat&logo=Arduino&logoColor=white" alt="radhesh arduino" />
                        <img className="m-1" src="https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=flat&logo=gnu-emacs&logoColor=white" alt="radhesh emacs" />
                        <img className="m-1" src="https://img.shields.io/badge/replit-667881?style=flat&logo=replit&logoColor=white" alt="radhesh replit" />
                        <img src="https://img.shields.io/badge/VIM-%2311AB00.svg?&style=flat&logo=vim&logoColor=white" alt="radhesh vim" className="m-1" />
                        <img src="	https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=flat&logo=Canva&logoColor=white" alt="radhesh canva" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/VIM-%2311AB00.svg?&style=flat&logo=vim&logoColor=white" alt="radhesh gimp" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="radhesh linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "June 2023",
            link: "https://github.com/radhesh1/Portfolio",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "primus-os",
            date: "May 2023",
            link: "https://github.com/radhesh1/primus-os",
            description: [
                "A simple bare-bones 32-bit operating system written in Assembly x86 and C for educational purposes.",
            ],
            domains: ["Assembly","Shell", "C"]
        },
        {
            name: "LearnerOS1",
            date: "May 2023",
            link: "https://github.com/radhesh1/LearnerOS1",
            description: [
                "A simple OS which shows the implementation of Kernel and Bootloader",
            ],
            domains: ["Assembly","Shell", "C"]
        },
        {
            name: "LearnerOS",
            date: "May 2023",
            link: "https://github.com/radhesh1/LeanerOS",
            description: [
                "A small hello world - like OS usng C , Shell and assembly code.",
            ],
            domains: ["Assembly","Shell", "C"]
        },
        {
            name: "Python-scraper-basic",
            date: "Oct 2022",
            link: "https://github.com/radhesh1/Python-scraper-basic",
            description: [
                "A scraper to scrap off images",
            ],
            domains: ["python"]
        },
        {
            name: "code-server",
            date: "Mar 2023",
            link: "https://github.com/radhesh1/code-server",
            description: [
                "A self-hostable server of coding IDE on my raspberry pi using docker.",
            ],
            domains: ["javascript", "shell", "typescript", "docker"]
        },
        {
            name: "ClockWork",
            date: "Oct 2022",
            link: "https://github.com/radhesh1/ClockWork",
            description: [
                "A digital and analog clock to used a minimalistic screensaver.",
            ],
            domains: ["Python", "tk"]
        },
        {
            name: "Panicking",
            date: "June 2023",
            link: "https://github.com/radhesh1/panicking",
            description: [
                "A module to make kernel panic.",
            ],
            domains: ["C", "CMake"]
        },
        {
            name: "hello_world",
            date: "June 2023",
            link: "https://github.com/radhesh1/hello_world",
            description: [
                "A basic \"Hello World\" kernel module.",
            ],
            domains: ["C", "CMake"]
        },
        {
            name: "Tic Tac Toe",
            date: "June 2023",
            link: "https://github.com/radhesh1/tic-tac-toe",
            description: [
                "the timeless game we all know and love comes to life with a simple and intuitive interface. Challenge your friends or family to exciting matches and enjoy the nostalgia of this classic game..",
            ],
            domains: ["html5", "javaScript", "css"]
        },
        {
            name: "Flexbox Froggy Game",
            date: "June 2023",
            link: "https://github.com/radhesh1/Flexbox-Froggy-Game",
            description: [
                "a captivating game that makes learning Flexbox an enjoyable experience! This project is a clone of the popular game Flexbox Froggy, designed to help developers understand and master the power of CSS Flexbox",
            ],
            domains: ["html5", "javaScript", "css"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "rust": "gray-700",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <iframe src="https://github.com/sponsors/radhesh1/card" title="Sponsor radhesh1" className='my-4 w-5/6 md:w-3/4' ></iframe>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        {project.noview ? "" : <iframe src={`https://ghbtns.com/github-btn.html?user=radhesh1&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Radhesh-Goel-Resume.pdf" title="Radhesh Goel resume" frameBorder="0"></iframe>
    )
}