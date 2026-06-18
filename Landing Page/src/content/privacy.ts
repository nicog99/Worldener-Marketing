import type { LegalSection } from './terms'

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'about-us',
    title: 'About Us',
    content: `This privacy policy ("Privacy Policy") explains how we process and protect your personal data when you use this Website or our services provided via www.worldener.com (together, the "Website").

The Website is operated by Worldener GmbH, Rebenstrasse 12, 4112 Bättwil, Solothurn, Switzerland (the "COMPANY", "we", "our", or "us").

Unless otherwise defined in this Privacy Policy or our General Terms & Conditions, the definitions used in this Privacy Policy have the same meaning as in the Swiss Federal Act on Data Protection.`,
  },
  {
    id: 'personal-data',
    title: '1 Personal Data We Collect',
    content: `We collect the following categories of personal data when you use the contact form on our Website:
• Client requests
• Contact details
• Login details
• Payment details`,
  },
  {
    id: 'how-we-collect',
    title: '2 How We Collect Personal Data',
    content: `We collect information about our users when they use our Website, including taking certain actions within it.

Directly
• When users access, use, or otherwise interact with our Website.
• When users correspond with us by electronic means.
• When users sign up to receive our newsletter and other marketing materials.
• When users submit their data to us.

Indirectly
• From public sources, such as public directories.
• From third parties, such as social media plugins and third-party cookies`,
  },
  {
    id: 'legal-basis',
    title: '3 Legal Basis and Purposes',
    content: `Our legal basis for collecting and using the personal data described in this Privacy Policy depends on the personal data we collect and the specific purposes for which we collect it.

Contract: To perform our contractual obligations or take steps linked to a contract with you. In particular:
• To provide our services.
• To recruit.
• [ADD MORE AS APPLICABLE]

Consent: We may rely on your freely given consent at the time you provided your personal data. In particular:
• To provide users with news, special offers, newsletters, and general information about goods and services which we offer (requires explicit consent).
• [ADD MORE AS APPLICABLE]

Legitimate interests: We may rely on legitimate and/or vital interests based on our evaluation that the processing is fair and reasonable. In particular:
• To maintain and improve our Website and services.
• To develop new services.
• [ADD MORE AS APPLICABLE]

Public interest: To meet regulatory and public interest obligations. In particular:
• To comply with applicable regulations and legislation.
• [ADD MORE AS APPLICABLE]`,
  },
  {
    id: 'data-retention',
    title: '4 Data Retention',
    content: `We retain personal data for so long as it is needed for the purposes for which it was collected or in line with legal and regulatory requirements or contractual arrangements.`,
  },
  {
    id: 'service-providers',
    title: '5 Service Providers',
    content: `We may employ third party companies ("Service Providers") to facilitate the operation of our Website, assist us in analysing how our Website is used or perform Website-related services, such as payment, delivery of IT infrastructure services. These third parties have access to your personal data only and insofar as necessary to perform these tasks on our behalf.

Type(s) of service providers who might access your personal data:
• Accounting firms
• Banks
• Consultants
• Marketing firms
• Public authorities`,
  },
  {
    id: 'data-transfers',
    title: '6 Data Transfers',
    content: `We may disclose your personal data in the good faith belief that such action is necessary:
• To comply with a legal obligation (i.e., if required by law or in response to valid requests by public authorities, such as a court or government agency);
• To protect the security of the Website and defend our rights or property;
• To prevent or investigate possible wrongdoing in connection with us;
• To defend ourselves against legal liability.`,
  },
  {
    id: 'data-security',
    title: '8 Data Security',
    content: `We take reasonable technical and organisational security measures that we deem appropriate to protect your stored data against manipulation, loss, or unauthorised third-party access. Our security measures are continually adapted to technological developments.

We also take internal data privacy very seriously. Our employees and the Service Providers that we retain are required to maintain secrecy and comply with applicable data protection legislation. In addition, they are granted access to personal data only insofar as this is necessary for them to carry out their respective tasks or mandate.

The security of your personal data is important to us but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security. We recommend using antivirus software, a firewall, and other similar software to safeguard your system.`,
  },
  {
    id: 'your-rights',
    title: '9 Your Rights',
    content: `You have the below data protection rights. Please note that we may ask you to verify your identity before responding to such requests.
• Right of access: You have a right to request a copy of your personal data, which we will provide to you in an electronic form.
• Right to amendment: You have the right to ask us to correct our records if you believe they contain incorrect or incomplete information about you.
• Right to withdraw consent: If you have provided your consent to the processing of your personal data, you have the right to withdraw your consent.
• Right to erasure: You have the right to request that we delete your personal data when it is no longer necessary for the purposes for which it was collected or when it was unlawfully processed.
• Right to restriction of processing: You have the right to request the restriction of our processing of your personal data where you believe it to be inaccurate, our processing is unlawful, or where we no longer need to process it for the initial purpose.
• Right to portability: You have the right to request that we transmit your personal data to another data controller in a standard format such as Excel, where this is data which you have provided to us.`,
  },
]

export const PRIVACY_HIGHLIGHTS = [
  { title: 'Data collected', description: 'Contact, login, and payment details via the platform.' },
  { title: 'Your rights', description: 'Access, amend, erase, and portability under Swiss FADP.' },
  { title: 'Security', description: 'Technical and organizational measures to protect your data.' },
  { title: 'Service providers', description: 'Third parties may process data on our behalf only as needed.' },
]
