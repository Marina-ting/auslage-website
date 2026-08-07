import { process } from "../content/site";

export default function Process() {
  return (
    <section className="section" id="ablauf">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2>{process.heading}</h2>
        </div>

        <div className="steps">
          {process.steps.map((step, i) => (
            <article
              className="step reveal"
              key={step.number}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <p className="step__num">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
