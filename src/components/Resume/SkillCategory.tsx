interface SkillCategoryProps {
  title: string
  children: React.ReactNode
}

export function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <div>
      <p className="text-sm font-medium text-resume-text mb-4">{title}</p>
      {children}
    </div>
  )
}
