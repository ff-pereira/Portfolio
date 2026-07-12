const Slide = ({ id, children }) => {
    return (
        <section className="et-slide" id={id}>
            <div className="slide-content">
                {children}
            </div>
        </section>
    );
};

export default Slide;