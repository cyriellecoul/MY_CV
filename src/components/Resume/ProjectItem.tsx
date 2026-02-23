import { TechBadge } from './TechBadge'
import { GooglePlayIcon, ExternalLinkIcon, AppleStoreIcon } from '@/components/icons'

interface ProjectItemProps {
  title: string
  description: string
  techs: string[]
  url?: string
  googlePlay?: string
  appleStore?: string
}

export function ProjectItem({ title, description, techs, url, googlePlay, appleStore }: ProjectItemProps) {
  return (
    <div className="py-3 px-3 -mx-3 rounded-lg hover:bg-resume-primary/5 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-semibold text-resume-text">{title}</h3>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}>
            <ExternalLinkIcon className="text-resume-primary" />
          </a>
        )}
        {googlePlay && (
          <a href={googlePlay} target="_blank" rel="noopener noreferrer" aria-label={`${title} on Google Play`}>
            <GooglePlayIcon className="text-resume-primary" />
          </a>
        )}
        {appleStore && (
          <a href={appleStore} target="_blank" rel="noopener noreferrer" aria-label={`${title} on Apple Store`}>
            <AppleStoreIcon className="text-resume-primary" />
          </a>
        )}
      </div>
      <p className="text-xs text-resume-text-secondary mb-2">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {techs.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
    </div>
  )
}
