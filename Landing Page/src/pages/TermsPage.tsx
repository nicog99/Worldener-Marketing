import { useEffect } from 'react'
import {
  LegalCrossLinks,
  LegalPageLayout,
  LegalSectionBlock,
  LegalToc,
} from '@/components/legal/LegalPageLayout'
import { TERMS_HIGHLIGHTS, TERMS_SECTIONS } from '@/content/terms'

export function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service — Worldener'
  }, [])

  return (
    <LegalPageLayout
      label="Legal"
      title="Terms of Service"
      subtitle="Platform Terms — last updated June 2022"
      highlights={TERMS_HIGHLIGHTS}
    >
      <LegalToc sections={TERMS_SECTIONS} />
      {TERMS_SECTIONS.map((section) => (
        <LegalSectionBlock key={section.id} {...section} />
      ))}
      <LegalCrossLinks />
    </LegalPageLayout>
  )
}
