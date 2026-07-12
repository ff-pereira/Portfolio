import React from "react";
import HeroTabs from "./components/HeroTabs.jsx";
import Slide from "./components/Slide.jsx";
import "./index.css";

import About from "./tabs/About.jsx";
import Experience from "./tabs/Experience.jsx";
import Projects from "./tabs/Projects.jsx";
import Stack from "./tabs/Stack.jsx";
import Contact from "./tabs/Contact.jsx";

function App() {
    const slides = [
        { id: "about", title: "About", component: <About /> },
        { id: "experience", title: "Experience", component: <Experience /> },
        { id: "projects", title: "Projects", component: <Projects /> },
        { id: "stack", title: "Stack", component: <Stack /> },
        { id: "contact", title: "Contact", component: <Contact /> },
    ];

    return (
        <div className="App">
            <HeroTabs slides={slides} />
            <main className="et-main">
                {slides.map((slide) => (
                    <Slide
                        key={slide.id}
                        id={slide.id}
                        component={slide.component}
                    >
                        {slide.component}
                    </Slide>
                ))}
            </main>
        </div>
    );
}

export default App;
