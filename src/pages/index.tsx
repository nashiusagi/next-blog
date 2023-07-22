import Image from 'next/image'
import Header from '@/components/Header'
import TwitterButton from '@/atoms/Top/TwitterButton'
import SubContentLabel from '@/atoms/Top/SubContentLabel.tsx'
import GlassCard from '@/components/Top/GlassCard'
import Profile from '@/components/Top/Profile'
import History from '@/components/Top/History'
import Commitment from '@/components/Top/Commitment'
import LoveList from '@/components/Top/LoveList'
import DailyList from '@/components/Top/DailyList'
import SometimesList from '@/components/Top/SometimesList'
import StudyingList from '@/components/Top/StudyingList'
import { dailyContent } from '@/data/Top/dailyContent'
import { loveContent } from '@/data/Top/loveContent'
import { sometimesContent } from '@/data/Top/sometimesContent'
import { studyingContent } from '@/data/Top/studyingContent'

export default function Home() {
  return (
    <div>
      <div className="top-0 sticky z-50 left-0 right-0">
        <Header />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <GlassCard>
          <SubContentLabel title="Profile" />
          Social Medias <br />
          <TwitterButton
            userName="NashiUsaBoy"
            link="https://twitter.com/NashiUsaBoy?ref_src=twsrc%5Etfw"
          />
          <Profile />
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="History" />
          <History />
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="Programming Skills" />
          <LoveList loveContent={loveContent} />
          <DailyList dailyContent={dailyContent} />
          <SometimesList sometimesContent={sometimesContent} />
          <StudyingList studyingContent={studyingContent} />
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="Commitments" />
          <Commitment />
        </GlassCard>
      </main>
    </div>
  )
}
