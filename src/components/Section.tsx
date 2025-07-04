const Section = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 ${className}`} data-aos="fade-up">
            {children}
        </section>
    );
};

export default Section;