import { problem } from "../content/site";

export default function Problem() {
  return (
    <section className="section section--teal on-teal" id="problem">
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 0 }}>
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2>{problem.heading}</h2>
          <p className="lead">{problem.body}</p>
        </div>

        <div className="problem__grid">
          {problem.points.map((point, i) => (
            <article
              className="card reveal"
              key={point.title}
              style={{ "--reveal-delay": `${i * 70}ms` }}
            >
              <h3 className="card__title">{point.title}</h3>
              <p className="card__text">{point.text}</p>
            </article>
          ))}
        </div>

        <p className="problem__closing reveal">{problem.closing}</p>
      </div>
    </section>
  );
}
