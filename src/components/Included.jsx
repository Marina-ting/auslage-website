import { included } from "../content/site";

export default function Included() {
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{included.eyebrow}</p>
          <h2>{included.heading}</h2>
          <p className="lead">{included.intro}</p>
        </div>

        <div className="grid-3">
          {included.items.map((item, i) => (
            <article
              className="card reveal"
              key={item.title}
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` }}
            >
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
