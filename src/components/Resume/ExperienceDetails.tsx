import { TechBadge } from './TechBadge'

interface ExperienceDetailsContentProps {
  context1: string
  context2?: string
  tasks?: string[]
  features?: string[]
  training?: string[]
  env: string
  techs?: string[]
  description?: string
  labels: {
    mainTasks: string
    mainFeatures: string
    moreTasks: string
    training?: string
    techEnv: string
    technologies: string
  }
  variant: 'inline' | 'modal'
}

export function ExperienceDetailsContent({
  context1,
  context2, 
  tasks,
  features,
  training,
  techs,
  description,
  labels,
  variant,
}: ExperienceDetailsContentProps) {
  const MAX_INLINE_TASKS = 10

  function renderBoldText(text: string) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }


  return (
    <div className="space-y-3">
      {variant === 'modal' && description && (
        <p className="text-sm text-resume-text-secondary leading-relaxed">{description}</p>
      )}

      <p className="text-sm text-resume-text-secondary italic border-l-2 border-resume-primary/30 pl-3">
        {context1}
      </p>
      <p className="text-sm text-resume-text-secondary italic border-l-2 border-resume-primary/30 pl-3">
        {context2 ? context2 : ''}
      </p>


      {variant === 'modal' && techs && techs.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-resume-text mb-2">{labels.technologies}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      )}
      {tasks && tasks.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-resume-text mb-2">{labels.mainTasks}</p>
          <ul className="text-ml text-resume-text-secondary space-y-0">
            {(variant === 'inline' ? tasks.slice(0, MAX_INLINE_TASKS) : tasks).map((task, i) => {

              // 👉 split sur '---'
              const parts = task.split('---').map(p => p.trim()).filter(Boolean)

              const main = parts[0]
              const subs = parts.slice(1)


              return (
                <li key={i} className="flex flex-col gap-1">

                  {/* bullet principal */}
                  <div className="flex items-start gap-2">
                    <span className="text-resume-primary">&#8226;</span>
                    <span>{renderBoldText(main)}</span>
                  </div>

                  {/* sous-bullets */}
                  {subs.length > 0 && (
                    <ul className="ml-2">
                      {subs.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="text-resume-primary">–</span>
                          <span>
                            {renderBoldText(sub.replace(/,$/, ''))}
                          </span>

                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              )
            })}

            {variant === 'inline' && tasks.length > MAX_INLINE_TASKS && (
              <li className="text-resume-primary italic">
                +{tasks.length - MAX_INLINE_TASKS} {labels.moreTasks}
              </li>
            )}
          </ul>
        </div>
      )}

      {features && features.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-resume-text mb-2">{labels.mainFeatures}</p>
          <ul className="text-ml text-resume-text-secondary space-y-0">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-resume-primary">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {training && training.length > 0 && labels.training && (
        <div>
          <p className="text-sm font-semibold text-resume-text mb-2">{labels.training}</p>
          <ul className="text-ml text-resume-text-secondary space-y-1">
            {training.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-resume-primary">&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <div className={variant === 'modal' ? 'pt-3 border-t border-resume-primary/20' : ''}>
        <p className="text-xs text-resume-primary">
          <span className="font-semibold">{labels.techEnv}</span> {env}
        </p>
      </div> */}
    </div>
  )
}
