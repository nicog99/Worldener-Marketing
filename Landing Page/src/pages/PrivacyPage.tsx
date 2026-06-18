import { useEffect } from 'react'
import {
  LegalCrossLinks,
  LegalPageLayout,
  LegalSectionBlock,
  LegalToc,
} from '@/components/legal/LegalPageLayout'
import { PRIVACY_HIGHLIGHTS, PRIVACY_SECTIONS } from '@/content/privacy'

export function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Worldener'
  }, [])

  return (
    <LegalPageLayout
      label="Legal"
      title="Privacy Policy"
      subtitle="Privacy Policy of Worldener GmbH — Version 1.0, June 15, 2022"
      highlights={PRIVACY_HIGHLIGHTS}
    >
      <LegalToc sections={PRIVACY_SECTIONS} />
      {PRIVACY_SECTIONS.map((section) => (
        <LegalSectionBlock key={section.id} {...section} />
      ))}
      <LegalCrossLinks />
    </LegalPageLayout>
  )
}
