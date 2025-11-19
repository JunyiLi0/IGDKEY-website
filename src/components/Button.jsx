/**
 * A reusable CTA button component with simple color change animation.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("counter");

    // Only scroll if we found the section and an ID is passed in
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper group`}
    >
      <div className="cta-button">
        <p className="button-text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
