interface SectionHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}: SectionHeaderProps) {
  const alignment =
    align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'

  const titleSize =
    Tag === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'

  return (
    <header className={`mb-8 md:mb-12 ${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-ui text-xs uppercase tracking-widest text-harvest-gold mb-3">
          {eyebrow}
        </p>
      )}
      <Tag className={`font-display text-harvest-bark ${titleSize}`}>{title}</Tag>
      {description && (
        <p className="mt-4 text-lg text-harvest-earth">{description}</p>
      )}
    </header>
  )
}
