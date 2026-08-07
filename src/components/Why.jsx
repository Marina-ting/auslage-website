import { why } from "../content/site";

export default function Why() {
  return (
    <section className="section" id="warum">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{why.eyebrow}</p>
          <h2>{why.heading}</h2>
        </div>

        <div className="grid-2">
          {why.items.map((item, i) => (
            <article
              className="why__item reveal"
              key={item.title}
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` }}
            >
              <span className="shelf" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.footnote && <p className="footnote">{item.footnote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
