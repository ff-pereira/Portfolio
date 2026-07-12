const Contact = () => {
    return (
        <div className="tab text-primary border-y border-secondary/75 bg-teal-50">
            <div className="absolute -top-[48px] text-white text-base md:text-xl uppercase tracking-tight">Contact</div>
            <div className="absolute bottom-[21px] text-white tracking-tight text-base md:text-xl flex justify-between w-full px-4">
                <div>ffpereira.com</div>
                <div className="hidden md:block">Filipe Pereira</div>
                <div>2026</div>
            </div>
            <div className="h-screen md:h-full overflow-hidden w-full grid md:grid-cols-3 items-center justify-center md:gap-2 px-12">

                <a href="mailto:ff.pereira101@gmail.com" className="relative flex selectable flex-col gap-2 justify-center items-center">
                    <svg className="absolute opacity-25 z-0 h-[33vh] md:h-auto" viewBox="0 0 200 200">
                        <path fill="#0D9488" d="M38.8,-51C51.6,-44,64.3,-34.5,71.8,-21.1C79.3,-7.6,81.5,9.8,77,25.4C72.5,41.1,61.2,54.9,47.3,65.6C33.3,76.3,16.6,83.9,1.5,81.9C-13.6,79.8,-27.2,68,-42,57.5C-56.7,47.1,-72.5,37.9,-76.5,25C-80.5,12.1,-72.6,-4.4,-66.2,-20.7C-59.8,-37,-55,-53.1,-44.2,-60.7C-33.5,-68.4,-16.7,-67.7,-1.9,-65.1C13,-62.5,25.9,-58,38.8,-51Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="z-20 h-12 md:h-28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                    </svg>
                    <div className="text-lg md:text-xl font-semibold">Email</div>
                    <div className="-mt-2 md:mt-0 text-sm">ff.pereira101@gmail.com</div>
                </a>

                <a href="https://www.linkedin.com/in/filipefernandezpereira/" target="_blank" rel="noopener noreferrer"
                   className="relative flex selectable flex-col gap-2 justify-center items-center">
                    <svg className="absolute opacity-25 z-0 h-[33vh] md:h-auto" viewBox="0 0 200 200">
                        <path fill="#0D9488" d="M49.1,-69.7C60.6,-59.3,64.7,-40.8,69.6,-23.2C74.5,-5.6,80.2,11.2,75.3,23.9C70.4,36.7,54.9,45.5,40.6,56.8C26.3,68.2,13.1,82.1,-2.4,85.4C-17.9,88.7,-35.9,81.4,-46.8,68.9C-57.8,56.5,-61.8,38.9,-66.7,22.1C-71.6,5.2,-77.4,-10.9,-75.9,-27.6C-74.5,-44.3,-65.9,-61.5,-52,-71.1C-38.1,-80.7,-19.1,-82.6,-0.1,-82.4C18.8,-82.3,37.7,-80,49.1,-69.7Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="h-12 md:h-28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    <div className="text-lg md:text-xl font-semibold">LinkedIn</div>
                    <div className="-mt-2 md:mt-0 text-sm">filipefernandezpereira</div>
                </a>

                <a href="/CV_Filipe_Pereira.pdf" download className="relative flex selectable flex-col gap-2 justify-center items-center">
                    <svg className="absolute opacity-25 z-0 h-[33vh] md:h-auto" viewBox="0 0 200 200">
                        <path fill="#0D9488" d="M52.4,-70.9C66.3,-62.1,74.7,-44.6,78.5,-26.9C82.2,-9.3,81.3,8.4,75.4,23.9C69.5,39.3,58.6,52.5,45.2,62.7C31.8,72.9,15.9,80.1,1.8,77.6C-12.3,75.1,-24.6,63,-37.7,52.7C-50.7,42.4,-64.5,33.9,-72.4,20.8C-80.4,7.8,-82.5,-9.8,-77.6,-25.3C-72.7,-40.7,-60.7,-54,-46.6,-62.6C-32.5,-71.3,-16.3,-75.4,1.5,-77.5C19.3,-79.6,38.6,-79.6,52.4,-70.9Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="h-12 md:h-28" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                    <div className="text-lg md:text-xl font-semibold">Download my CV</div>
                    <div className="-mt-2 md:mt-0 text-sm">Download</div>
                </a>

            </div>
        </div>
    );
};

export default Contact;