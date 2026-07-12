const Experience = () => {
    return (
        <div className="tab text-sm 2xl:text-base bg-teal-50">
            <div className="absolute -top-[48px] text-white text-xl uppercase tracking-tight">Experience</div>
            <div className="hidden 2xl:block 2xl:p-6 text-wrap bg-white border-b border-secondary/25 w-full">
                Relevant experience in system integration, software development, and production support, with a focus on Linux-based environments and client-facing work.
            </div>
            <div className="h-screen md:h-full w-full flex flex-row md:flex-col overflow-x-auto snap-x snap-mandatory md:snap-none gap-4 p-4 md:justify-center md:items-center">
                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative">
                    <div className="absolute md:hidden left-0 bottom-3 text-primary flex items-center justify-between w-full px-4">
                        <div></div>
                        <div>Scroll horizontally for more</div>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </div>
                    <div
                        className="flex flex-col md:flex-row items-start justify-between py-1 md:py-2 px-4 bg-secondary/50 rounded-t-xl">
                        <div className="flex items-start justify-start gap-x-3">
                            <img className="mt-1 md:mt-0 w-12 2xl:w-16 rounded-md object-cover" src="/sixfloor.jpg" alt="Company Logo"/>
                            <div className="flex flex-col items-start">
                                <div className="text-start font-semibold text-lg md:text-xl">System Integrator and Full-Stack Software Engineer</div>
                                <a href="https://sixfloorsolutions.com" className="selectable text-sm md:text-base">Six Floor Solutions</a>
                            </div>
                        </div>
                        <div className="mt-1 md:mt-0 pt-1 md:pt-0 border-t border-secondary flex flex-row md:flex-col justify-between w-full md:w-auto items-end text-right">
                            <div className="font-semibold md:text-xl">Sept. 2024 - Present</div>
                            <div className="text-sm md:text-base">Lisbon, PT</div>
                        </div>
                    </div>
                    <div className="flex flex-col text-left gap-y-1 p-2 md:p-4 bg-secondary/25 rounded-b-xl shadow-md">
                        <div>- Delivered and installed video-analysis software solutions at client sites, covering full deployment lifecycle from hardware provisioning to configuration and upgrades.</div>
                        <div>- Executed system installations and configurations across Linux production and pre-production environments, including network setup based on HLD/LLD specifications (IP addressing, multicast configuration, routing).</div>
                        <div>- Coordinated between QA, development teams, and clients to ensure deployments met system specifications and performed reliably in production.</div>
                        <div>- Developed and maintained backend applications using Java Spring Boot and Flask, including PostgreSQL database design and ORM-based data modeling.</div>
                        <div>- Built and supported frontend applications using Angular (TypeScript) and lightweight HTML/JavaScript interfaces.</div>
                        <div>- Automated operational tasks and integration workflows using Python and Bash scripting.</div>
                        <div>- Mentored and guided two software engineering interns during 3-month placements.</div>
                    </div>
                </div>

                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative">
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

                    <div className="flex flex-col md:flex-row items-start justify-between py-1 md:py-2 px-4 bg-secondary/50 rounded-t-xl">
                        <div className="flex items-start justify-start gap-x-3">
                            <img className="mt-1 md:mt-0 w-12 2xl:w-16 rounded-md object-cover" src="/sixfloor.jpg" alt="Company Logo"/>
                            <div className="flex flex-col items-start">
                                <div className="text-start font-semibold text-lg md:text-xl">MSc Thesis Intern</div>
                                <a href="https://sixfloorsolutions.com" className="selectable text-sm md:text-base">Six Floor Solutions</a>
                            </div>
                        </div>
                        <div className="mt-1 md:mt-0 pt-1 md:pt-0 border-t border-secondary flex flex-row md:flex-col justify-between w-full md:w-auto items-end text-right">
                            <div className="font-semibold md:text-xl">Sept. 2023 - Sept. 2024</div>
                            <div className="text-sm md:text-base">Lisbon, PT</div>
                        </div>
                    </div>
                    <div className="flex flex-col text-left gap-y-1 p-2 md:p-4 bg-secondary/25 rounded-b-xl shadow-md">
                        <div>- Developed a full-stack video origin server to ingest, store, and stream live and on-demand content, supporting multiple input protocols and secure playback.</div>
                        <div>- Built backend services in Python with PostgreSQL to handle media ingestion, storage management, and video processing pipelines automation.</div>
                        <div>- Implemented a lightweight HTML/JavaScript interface for configuration, monitoring, and control of video channels.</div>
                        <div>- Worked with media streaming protocols and video delivery technologies, including HLS, DASH, UDP, SRT, multicast, and unicast.</div>
                    </div>
                </div>

                <div className="px-4 md:px-0 w-screen h-full flex-shrink-0 snap-start md:w-full md:h-auto relative">
                    <div className="absolute md:hidden left-0 bottom-3 text-primary flex items-center justify-between w-full px-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>
                        <div>Scroll horizontally for more</div>
                        <div></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between py-1 md:py-2 px-4 bg-secondary/50 rounded-t-xl">
                        <div className="flex items-start justify-start gap-x-3">
                            <img className="mt-1 md:mt-0 w-12 2xl:w-16 rounded-md object-cover" src="/sixfloor.jpg" alt="Company Logo"/>
                            <div className="flex flex-col items-start">
                                <div className="text-start font-semibold text-lg md:text-xl">Summer Internship</div>
                                <a href="https://sixfloorsolutions.com" className="selectable text-sm md:text-base">Six Floor Solutions</a>
                            </div>
                        </div>
                        <div className="mt-1 md:mt-0 pt-1 md:pt-0 border-t border-secondary flex flex-row md:flex-col justify-between w-full md:w-auto items-end text-right">
                            <div className="font-semibold md:text-xl">July 2022 - August 2022</div>
                            <div className="text-sm md:text-base">Lisbon, PT</div>
                        </div>
                    </div>
                    <div className="flex flex-col text-left gap-y-1 p-2 md:p-4 bg-secondary/25  rounded-b-xl shadow-md">
                        <div>- Conducted a study on Automatic Speech Recognition (ASR) for European Portuguese and initiated development using DeepSpeech, a deep learning framework for speech-to-text conversion.</div>
                        <div>- Received hands-on training in system integration and practical deployment workflows.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;