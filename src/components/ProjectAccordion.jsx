import { useState } from "react";

function ProjectAccordion({ features, backend, frontend }) {
    const [open, setOpen] = useState("features");

    const sections = [
        {
            id: "features",
            title: "Features",
            bg: "bg-secondary/10",
            items: features,
        },
        {
            id: "backend",
            title: "Backend",
            bg: "bg-secondary/25",
            items: backend,
        },
        {
            id: "frontend",
            title: "Frontend",
            bg: "bg-secondary/50",
            items: frontend,
        },
    ];

    return (
        <div>
            {sections.map(section => (
                <div key={section.id}>
                    <button
                        className={`w-full flex items-center justify-between px-4 py-2 font-semibold cursor-pointer ${section.bg} ${
                            section.id === "frontend" && open !== "frontend"
                                ? "rounded-b-xl shadow-md"
                                : ""
                        }`}
                        onClick={() => setOpen(section.id)}
                    >
                        <span>{section.title}</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 transition-transform duration-200 ${
                                open === section.id ? "rotate-180" : ""
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>

                    {open === section.id && (
                        <div className={`${section.bg} px-4 pb-4 flex flex-col items-start justify-start text-left ${section.id === "frontend" ? "rounded-b-xl shadow-md" : ""}`}>
                            {section.items.map(item => (
                                <div className="pb-0.5" key={item}>- {item}</div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProjectAccordion;