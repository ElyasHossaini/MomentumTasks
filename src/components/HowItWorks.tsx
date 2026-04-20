import { howItWorks, howItWorksIntro } from '../content/siteCopy'
import './HowItWorks.css'

export function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="shell how-section__inner">
        <p className="how-section__kicker">{howItWorksIntro.kicker}</p>
        <h2 id="how-it-works-heading" className="how-section__title">
          {howItWorksIntro.title}
        </h2>
        <p className="how-section__subtitle">{howItWorksIntro.subtitle}</p>

        <ol className="how-steps">
          {howItWorks.map((item) => (
            <li key={item.step} className="how-steps__item">
              <div className="how-steps__badge" aria-hidden>
                {item.step}
              </div>
              <div className="how-steps__text">
                <h3 className="how-steps__title">{item.title}</h3>
                <p className="how-steps__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
