import { about } from "../content/site";

export default function About() {
  return (
    <section className="section section--cream-alt" id="ueber-mich">
      <div className="container">
        <div className="about__grid">
          <div className="about__photo reveal">
            <img
              src={about.photo}
              alt={about.photoAlt}
              width="480"
              height="600"
              loading="lazy"
            />
          </div>

          <div className="about__text reveal" style={{ "--reveal-delay": "100ms" }}>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 style={{ marginBottom: "1.4rem" }}>{about.heading}</h2>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="about__sig">{about.signature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
