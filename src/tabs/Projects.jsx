import ProjectAccordion from "../components/ProjectAccordion";

const Projects = () => {
    return (
        <div className="tab text-sm md:text-base text-primary border-y border-secondary/75 bg-teal-50">
            <div className="absolute -top-[48px] text-white text-xl uppercase tracking-tight">Projects</div>
            <div className="hidden md:block p-4 2xl:p-4 text-wrap bg-white border-y border-secondary/25 w-full">
                The personal projects showcased below were created out of curiosity, with a focus
                on learning and experimentation. <br/> Throughout their development, I
                applied full-stack engineering skills, from frontend design to backend
                implementation and deployment. <br/> <strong>All of these projects, including this
                website, are self-hosted on a Raspberry Pi, where I handle deployment, server
                management, and system configuration.</strong>
            </div>
            <div className="h-screen md:h-full w-full flex flex-row overflow-x-auto snap-x snap-mandatory md:snap-none md:grid md:grid-cols-3 md:gap-x-4 p-4 relative overflow-hidden">

                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative flex flex-col">
                    <div className="absolute md:hidden left-0 bottom-3 text-primary flex items-center justify-between w-full px-4">
                        <div></div>
                        <div>Scroll horizontally for more</div>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </div>

                    <div className="rounded-t-xl bg-[#FFD13E] py-2 relative">
                        <div className="font-semibold text-base 2xl:text-lg">RadioStats</div>
                        <img src="/radiostatsLogo.png" alt="radiostats logo" className="absolute top-3 left-2 h-5"/>
                        <div className="absolute top-9 left-2 tracking-tight">2025</div>
                        <svg className="absolute top-2 right-2 w-7" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        <a href="https://radiostats.ffpereira.com/" className="relative inline-block selectable">https://radiostats.ffpereira.com/</a>
                    </div>
                    <div className="2xl:flex-1 border-x border-secondary/25 bg-white w-full grid 2xl:grid-rows-4 justify-center items-center text-wrap p-2">
                        <div className="h-full flex items-center justify-center">
                            RadioStats is a full-stack personal project designed to analyze and visualize the most frequently
                            played songs on Portuguese radio stations owned by the Bauer Media Group.
                        </div>
                        <div className="hidden 2xl:row-span-3 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-x-2">
                            <img className="h-44 2xl:h-58 object-cover rounded-sm shadow-md" src="/radiostatsDesktop.jpg" alt="radiostatsDesktop"/>
                            <img className="h-44 2xl:h-58 object-cover rounded-sm shadow-md" src="/radiostatsMobile.jpg" alt="radiostatsMobile"/>
                        </div>
                    </div>
                    <ProjectAccordion
                        features={[
                            "Interactive charts for songs, artists, and radio stations",
                            "Daily automated data collection and updates",
                            "Hoverable vinyl cases with audio snippets",
                            "AI-generated artist descriptions and nationalities",
                            "Filtering by radio station, date range, and search by song or artist",
                        ]}
                        backend={[
                            "Flask for REST API",
                            "PostgreSQL database with ORM via Flask-Alchemical",
                            "API Fairy for automatic API documentation",
                            "Pytest for testing",
                            "Python scripts in cron jobs for scheduled data updates"
                        ]}
                        frontend={[
                            "React 19.1 (via Vite)",
                            "TailwindCSS 4.1 for responsive design",
                            "GSAP 3.13 for animations",
                            "ApexCharts 1.7 for interactive charts",
                            "Codepen design inspiration for vinyl cases"
                        ]}
                    />
                </div>

                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative flex flex-col">
                    <div className="absolute md:hidden left-0 bottom-3 text-primary flex items-center justify-between w-full px-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>
                        <div>Scroll horizontally for more</div>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </div>

                    <div className="rounded-t-xl bg-[#EBDBC1] py-2 relative">
                        <div className="font-semibold text-base 2xl:text-lg">Estreias</div>
                        <img src="/estreiasLogo.png" alt="estreias logo" className="absolute top-2 left-3 w-6"/>
                        <div className="absolute top-9 left-2 tracking-tight">2026</div>
                        <svg className="absolute top-2 right-2 w-7" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        <a href="https://estreias.ffpereira.com/" className="relative inline-block selectable">https://estreias.ffpereira.com/</a>
                    </div>
                    <div className="2xl:flex-1 border-x border-secondary/25 bg-white w-full grid 2xl:grid-rows-4 justify-center items-center text-wrap p-2">
                        <div className="2xl:h-full flex items-center justify-center">
                            Estreias is a full-stack personal project that tracks and presents film releases in
                            Portuguese cinemas, including upcoming and past titles, cinema screenings across the country, and
                            aggregated insights on the individuals most frequently involved in released productions.
                        </div>
                        <div className="hidden 2xl:row-span-3 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-x-2">
                            <img className="h-44 2xl:h-58 object-cover rounded-sm shadow-md" src="/estreiasDesktop.jpg" alt="estreiasDesktop"/>
                            <img className="h-44 2xl:h-58 object-cover rounded-sm shadow-md" src="/estreiasMobile.jpg" alt="estreiasMobile"/>
                        </div>
                    </div>
                    <ProjectAccordion
                        features={[
                            "User-friendly interface to explore film releases in Portuguese cinemas",
                            "Comprehensive statistics about films, cast, crew and countries",
                            "Easy visualization of all screenings in every Portuguese district",
                            "Integration with TMDB API for data collection",
                            "Archival of all releases since 2011",
                        ]}
                        backend={[
                            "Flask for REST API",
                            "PostgreSQL database with ORM via Flask-Alchemical",
                            "API Fairy for automatic API documentation",
                            "Pytest for testing",
                            "Python scripts in cron jobs for scheduled data updates"
                        ]}
                        frontend={[
                            "React 19.1 (via Vite)",
                            "TailwindCSS 4.1 for responsive design",
                            "GSAP 3.13 for animations",
                            "ApexCharts 1.7 for interactive charts",
                            "Waves and assets created with Haikei App"
                        ]}
                    />
                </div>

                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative flex flex-col gap-y-2">
                    <div className="absolute md:hidden left-0 bottom-3 text-primary flex items-center justify-between w-full px-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>
                        <div>Scroll horizontally for more</div>
                        <div></div>
                    </div>

                    <div className="rounded-xl">
                        <div className="rounded-t-xl bg-secondary/25 py-2 relative">
                            <div className="font-semibold text-base 2xl:text-lg">Portfolio</div>
                            <img src="/ffpereira.png" alt="ffpereira logo" className="absolute top-1 left-2 w-9"/>
                            <div className="absolute top-9 left-2 tracking-tight">2026</div>
                            <svg className="absolute top-2 right-2 w-7" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            <a href="https://ffpereira.com/" className="relative inline-block selectable">https://ffpereira.com/</a>
                        </div>
                        <div className="rounded-b-xl flex flex-col border-b border-x border-secondary/25 bg-white justify-center items-start text-wrap p-4">
                            <div>Personal portfolio website built with React and Tailwind CSS.</div>
                        </div>
                    </div>
                    <div className="rounded-xl">
                        <div className="rounded-t-xl bg-red-100 py-2 relative">
                            <div className="font-semibold text-sm md:text-base 2xl:text-lg">E-commerce Website Setup (Shopify)</div>
                            <div className="absolute top-2 left-2 tracking-tight">2025</div>
                        </div>
                        <div className="rounded-b-xl flex flex-col border-b border-x border-secondary/25 bg-white justify-center items-start text-wrap p-4">
                            <div>- Configured custom domain via Cloudflare DNS</div>
                            <div>- Set up business email for a small e-commerce business.</div>
                            <div>- Provided technical support during Shopify store launch.</div>
                        </div>
                    </div>

                </div>

                <svg className="hidden md:block absolute opacity-75 -bottom-[20vh] -right-[4vw] z-0 w-[30vw]" viewBox="0 0 200 200">
                    <path fill="#0D9488" d="M33.9,-39.4C45.8,-30.5,58.4,-21.5,67,-6.8C75.6,7.9,80.1,28.4,71.5,39.4C62.9,50.4,41.2,52,23.6,53.6C6,55.2,-7.6,56.7,-24.3,55.5C-40.9,54.3,-60.6,50.3,-64.3,39.3C-67.9,28.4,-55.5,10.4,-51.1,-8C-46.6,-26.3,-50,-45,-42.8,-54.7C-35.6,-64.4,-17.8,-65.2,-3.4,-61.2C11,-57.2,22.1,-48.3,33.9,-39.4Z" transform="translate(100 100)" />
                </svg>

            </div>
        </div>
    );
};

export default Projects;