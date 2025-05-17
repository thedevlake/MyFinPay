import { createFileRoute } from '@tanstack/react-router'
import Main from '@/components/Main'
import Bottom from '@/components/Bottom'
import SecondBox from '@/components/SecondBox'
import Maximize from '@/components/Maximize'
import Mission from '@/components/Mission'
import Try from '@/components/Try'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-gradient-to-r from-[#fffcdc] to-[#d9a7c7] w-fit sm:px-28 scroll-smooth">
      <Header />
      <Main />
      <Bottom />
      <SecondBox />
      <Maximize />
      <Mission />
      <Try />
      <Footer />
    </div>
  )
}
