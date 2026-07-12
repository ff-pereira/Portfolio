const About = () => {
    return (
        <div className="tab text-sm md:text-base text-primary border-b border-secondary/75 bg-teal-50">
            <div className="min-h-0 w-full grid grid-rows-2 h-screen md:h-full md:grid-rows-1 md:grid-cols-2">
                <div className="relative overflow-hidden h-full min-h-0 w-full flex flex-col justify-center items-center  border-secondary/25">
                    <svg className="hidden md:block absolute top-38 overflow-hidden opacity-75" viewBox="0 0 200 200">
                        <path fill="#0d9488" d="M42.7,-52.5C57.4,-48,72.9,-38.4,80.9,-23.9C88.9,-9.5,89.3,9.8,84,27.7C78.8,45.6,67.9,62.1,53,73.6C38,85.1,19,91.6,3.4,87C-12.2,82.3,-24.4,66.4,-33.5,52.9C-42.6,39.5,-48.5,28.6,-58.2,15.1C-67.8,1.5,-81.2,-14.6,-77.5,-24.9C-73.8,-35.2,-52.9,-39.7,-37.1,-43.8C-21.4,-48,-10.7,-51.8,1.6,-54.1C14,-56.3,27.9,-57,42.7,-52.5Z" transform="translate(100 100)" />
                    </svg>
                    <div className="z-20 flex-1 min-h-0 text-wrap mx-4 2xl:mx-12 mt-0 md:mt-8 2xl:mt-10 mb-0 md:-mb-12 2xl:mb-12 flex flex-col justify-center items-center gap-y-4 2xl:text-lg overflow-y-auto">
                        <div>Hi! My name is <strong>Filipe Fernandez Pereira.</strong></div>
                        <div>
                            I'm a <strong>System Integrator and Full-Stack Software Engineer</strong> with 2+ years of experience
                            working across <strong>Linux-based systems, backend/frontend development, and production support.</strong>
                            <br/>
                        </div>
                        <div>
                            I enjoy working in environments where I can bridge <strong>development, infrastructure, and client needs</strong>.
                        </div>
                        <div>
                            I have dual-citizenship, <strong>Portuguese and Spanish</strong>.
                            <br/> I speak <strong>Portuguese and Spanish natively</strong>, am fluent in <strong>English</strong> and have a basic level of <strong>French</strong>.
                        </div>
                        <div>
                            I'm currently based in <strong>Lisbon, Portugal.</strong>
                        </div>
                    </div>
                    <div className="z-20 hidden md:flex flex-[2] min-h-0 justify-start items-end">
                        <div className="w-8/10 2xl:w-full overflow-hidden">
                            <img src="/picture.jpg" alt="Portrait"/>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col justify-center items-center">
                    <div className="pt-1 md:pt-4 text-base md:text-xl font-bold w-full uppercase tracking-tighter border-b border-secondary/25">Education</div>
                    <div className="flex flex-col w-full h-full p-4 gap-4 md:gap-6 overflow-y-auto">
                        <div className="flex flex-col justify-center">
                            <div className="rounded-t-xl py-1 md:py-2 px-4 flex justify-between bg-secondary/50 text-primary w-full">
                                <div className="flex items-start justify-start gap-x-3">
                                    <img className="hidden md:block w-16 rounded-md object-cover" src="/iel.jpg" alt="IEL Logo"/>
                                    <div className="flex flex-col items-start">
                                        <div className="font-semibold text-start text-sm md:text-lg 2xl:text-xl">Instituto Giner de Los Ríos</div>
                                        <a href="https://ginerdelosrios.educacion.es/" className="selectable">Visit Website</a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end text-right">
                                    <div className="font-semibold text-sm md:text-lg">2005-2019</div>
                                    <div>Lisbon, PT</div>
                                </div>
                            </div>
                            <div className="py-1 md:py-2 bg-secondary/25 text-sm md:text-base 2xl:text-lg font-semibold">Basic and Secondary Education</div>
                            <div className="flex-1 py-1 md:py-2 bg-secondary/10 w-full relative rounded-b-xl shadow-md">
                                <div className="py-1 md:py-2 px-4 2xl:px-6 flex flex-col justify-start items-start text-left text-sm md:text-base 2xl:text-lg">
                                    <div>- Final average grade: <strong>18.8/20</strong></div>
                                    <div className="hidden md:block">- Awarded "Matrícula de Honor" for highest academic performance of the year.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="rounded-t-xl py-1 md:py-2 px-4 flex justify-between bg-secondary/50 text-primary w-full">
                                <div className="flex items-start justify-start gap-x-3">
                                    <img className="hidden md:block w-16 rounded-md object-cover" src="/nova.jpg" alt="NOVA SCT Logo"/>
                                    <div className="flex flex-col items-start">
                                        <div className="font-semibold text-start text-sm md:text-lg 2xl:text-xl">NOVA School of Science and Technology</div>
                                        <a href="https://www.fct.unl.pt/" className="selectable">Visit Website</a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end text-right">
                                    <div className="font-semibold text-sm md:text-lg">Sept. 2019 - Sept. 2024</div>
                                    <div>Lisbon, PT</div>
                                </div>
                            </div>
                            <div className="py-1 md:py-2 bg-secondary/25 text-sm md:text-base 2xl:text-lg font-semibold">Integrated Master's in Electrical and Computer Engineering</div>
                            <div className="flex-1 py-1 md:py-2 bg-secondary/10 w-full relative rounded-b-xl shadow-md">
                                <div className="py-1 md:py-2 px-4 2xl:px-6 flex flex-col justify-start items-start text-left text-sm md:text-base 2xl:text-lg">
                                    <div>- Final average grade: <strong>17/20</strong></div>
                                    <div>- Master's thesis grade: <strong>18/20</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;