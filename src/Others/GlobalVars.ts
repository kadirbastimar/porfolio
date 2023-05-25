import { OurIcons } from "./OurIcons"
import { NavBottomLinksInterface, TitledListItemInterface, ExperiencesListItemInterface } from "./Interfaces"
import { WebImages } from "./Images"

export const myGithubUsername = "kadirbastimar"

export class GlobalVars {

    static primaryColor = "#414D0B"
    static otherColors: Array<string> = [
        '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
        '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853',
        '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00',
        '#DD2C00', '#414D0B'
    ]
    static myName = 'Kadir Bastimar'
    static myOccupation = 'Software Developer'
    static myDetails = 'I\'m Kadir, a software professional with over 4 years of experience in the industry. Throughout my career, I have been driven by a deep passion for creating software solutions that make a positive impact on society. I thrive on challenges and am proud of my ability to quickly adapt to new technologies and processes to deliver high-quality results.\
    As a backend developer, I specialize in designing and implementing robust and scalable server-side applications. I have extensive experience with Node.js and other relevant technologies, and am committed to staying up-to-date with the latest industry trends and best practices.\
    I have a proven track record of delivering successful projects on time and within budget, and am known for my strong communication and collaboration skills. Whether working independently or as part of a team, I always strive to exceed expectations and deliver exceptional results.'
    static myLeftAvatarImage = null
    static myRightAvatarImage = null

    static routes: Array<string> = [
        "About",
        "Skills",
        "Projects",
        "Contact",
        "Experiences"
    ]

    static bottomLinks: Array<NavBottomLinksInterface> = [

        {
            svgPath: OurIcons.emailIcon,
            link: 'kadirbastimar36@gmail.com'
        },
        {
            svgPath: OurIcons.linkedInIcon,
            link: 'https://www.linkedin.com/in/kadirbastimar'
        }
    ]

    static skills: Array<TitledListItemInterface> = [
        {
            text: "Programming/Markup Languages",
            arr: [
                {
                    title: 'NodeJS',
                    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'SQL',
                    logo: 'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png',
                },
                {
                    title: 'Windows Batch',
                    logo: 'https://icon-library.com/images/batch-icon/batch-icon-13.jpg',
                },
                {
                    title: 'Bash/Shell/PowerShell',
                    logo: 'https://docs.microsoft.com/en-us/powershell/media/index/powershell_128.svg',
                },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
                },
                {
                    title: 'PHP',
                    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
                },
                {
                    title: 'Golang',
                    logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"
                },

            ]
        },
        {
            text: "Libraries/Frameworks/Techs",
            arr: [

                {
                    title: 'ExpressJS',
                    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
                },
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'Mongoose',
                    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4'
                },
                {
                    title: 'OAuth2',
                    logo: 'https://oauth.net/images/oauth-logo-square.png'
                },
                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Beautiful soup',
                    logo: 'https://play-lh.googleusercontent.com/yMjUC6LBh7uOCK6wUcIEf5MHZQmSqDPXoInOQLZzw0DWQsPJuvkwSymX2zI4Ok7i_BY=w240-h480'
                },
                {
                    title: 'Bootstrap',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'Adonis JS',
                    logo: 'https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg'
                },
                {
                    title: 'VueJS',
                    logo: 'https://vuejs.org/images/logo.png'
                },
                {
                    title: 'Flask',
                    logo: 'https://static.javatpoint.com/tutorial/flask/images/flask-tutorial.png'
                },
                {
                    title: 'Puppeteer',
                    logo: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png'
                },
                {
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'NgInx',
                    logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg'
                }

            ]
        },
        {
            text: "Human Languages",
            arr: [
                {
                    title: 'English',
                    desc: "B1",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_e_99510.webp',
                }
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Vim',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/544px-Vimlogo.svg.png?20150726190850'
                },
                {
                    title: 'GitHub',
                    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
                },
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Automation',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841378-9644305f-c7d1-44f1-bd5f-d626e056601a.png'
                },
                {
                    title: 'Jira',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png'
                },
                {
                    title: 'Yarn',
                    logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
                },
                {
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
                {
                    title: 'Linux',
                    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png'
                }
            ]
        },
    ]

    static works: Array<TitledListItemInterface> = [
        {
            text: "Projects",
            arr: [
                {
                    title: "Bet Assistant For Professional Bet Players",
                    link: "https://t.me/keydobot",
                    logo: "https://cdn4.telegram-cdn.org/file/DS4lOt-VhJ5MJagOHqmeMn5dEuc9TXvXF3BAJ0quRsjBnHCA6WeXAIvWrnnSL3HkhdJMHvj06zkAknzjlfCEb-ZbXoRl_pkBIObx-1LAbkoFJp_GJ0K2t7FasHW5_VPID2RDdpCyvYJldXVMdjfLPnZ8UCAUkQPhAb-ExYHACdcrpJOWXDBR9r08lv_J3hpTJY6CU-fLojD9umL3V4O9GjA13rwPWKkU3Qj6UmpAEJ6dIeivYtCz_xRLJsvfYtb09pA55o4921PDNIM8CwPm9skcBi9T-ZOfA31QbCu0lO5KDJHJGvjDQZKQZ-UbLrzOYxwXh7M-zgXaXQUOIaUQsQ.jpg",
                    desc: "The project was about betting odds. I created a bot and the purpose of this bot was to collect data from the websites of many betting companies. Analysis is performed in this created data pool, and then the results of the analysis are sent to the user via notification."
                },
                {
                    title: "Dropshipping Automation",
                    logo: "https://ds.teslayazilim.com/favicon.png",
                    desc: 'Dropshipping automation from end to end. Connect your amazon stores, search product and add selecting store. This software, managment all another proccess.',
                    link: "https://ds.teslayazilim.com/login"
                },
                {
                    title: "Computer OS Management For Public Use ",
                    desc: "When need computer for customer, workplaces wants safe computers. This project was about this computer's. Set whitelist websites & blacklist websites and more. Manage all computers from one.",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg",
                    link: "https://teslayazilim.com"

                },
                {
                    title: "Amazon Product Search Sevice",
                    link: "https://amazonsearch.teslayazilim.com/",
                    logo: "https://amazonsearch.teslayazilim.com/assets/images/favicon.ico",
                    desc: "Amazon Product Search with proxy."
                }
            ]
        },
        {
            text: "NPM Packages",
            arr: [
                {
                    title: 'index-matcher',
                    logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
                    desc: 'Complucate data indexing',
                    link: 'https://www.npmjs.com/package/index-matcher'
                },
            ]
        },
    ]

    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'Phone(GSM)',
                    logo: 'https://static.vecteezy.com/system/resources/previews/005/043/127/large_2x/a-phone-icon-in-a-round-circle-free-vector.jpg',
                    desc: '+90 530 730 36 77',
                    link: 'phone:905307303788'
                },
                {
                    title: 'Skype',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                    desc: 'live:.cid.292b03ff236dd002',
                    link: 'skype:live:.cid.292b03ff236dd002?chat'
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'kadirbastimar36@gmail.com',
                    link: 'mailto:kadirbastimar36@gmail.com'
                },
            ]
        },
        {
            text: "Web Profiles",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://github.com/kadirbastimar/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/kadirbastimar/'
                },
                {
                    title: "Medium",
                    logo: "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png",
                    link: "https://medium.com/@kbastimar"
                },

            ]
        }
    ]

    static experiences: Array<ExperiencesListItemInterface> = [
        {
            title: "Back End Developer",
            link: "Manim Finance Technology",
            logo: "",
            date: "02/2022 – Current",
            desc: "I started to work at this company as back-end devoloper. This company, is making platforms for restaurants and hotel businesses. I'm appointed as API developer for this project. For the project I created an app and this app is about reading QR by user. User will read the code via his phone and create order. This QR codes it could be anywhere. When restourant's customers want an order they don't need any employeer, this app will be enought.",
            techStuffs: [
                "Back-end: Node.js (Express.js)",
                "Database: MongoDB",
                "Server: Ubuntu 18.04"
            ]
        },
        {
            title: "Back End Developer ",
            link: "Matrix Technology",
            logo: "",
            date: "07/2021 – 02/2022",
            desc: "I started to work at this company as back-end devoloper. This company, is making platforms for restaurants and hotel businesses. I'm appointed as API developer for this project. For the project I created an app and this app is about reading QR by user. User will read the code via his phone and create order. This QR codes it could be anywhere. When restourant's customers want an order they don't need any employeer, this app will be enought.",
            techStuffs: [
                "Back-end: TypeScript (Express.js)",
                "Database: MongoDB",
                "Server: Ubuntu 18.04"
            ]
        }
    ]

}
