import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { TermsPage } from '@/pages/TermsPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { FaqsPage } from '@/pages/FaqsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="terms-of-service" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="faqs" element={<FaqsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
