import Image from 'next/image'
import Header from '@/components/Header'
import TwitterButton from '@/atoms/Top/TwitterButton'
import SubContentLabel from '@/atoms/Top/SubContentLabel.tsx'
import GlassCard from '@/components/Top/GlassCard'
import History from '@/components/Top/History'
import LoveList from '@/components/Top/LoveList'
import DailyList from '@/components/Top/DailyList'
import SometimesList from '@/components/Top/SometimesList'
import StudyingList from '@/components/Top/StudyingList'

export default function Home() {
  return (
    <div>
      <div className="top-0 sticky z-50 left-0 right-0">
        <Header />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <GlassCard>
          <SubContentLabel title="Profile" />
          Social Medias <br />
          <TwitterButton
            userName="NashiUsaBoy"
            link="https://twitter.com/NashiUsaBoy?ref_src=twsrc%5Etfw"
          />
          <br />
          <div>
            Handle: 梨兎 / nashiusagi / nashiusaboy
            <br />
            Real Name: Ryogo Ito / 伊藤諒悟
            <br />
            Old Account: @Ryogo-san
            <br />
          </div>
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="History" />
          <History />
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="Programming Skills" />
          <LoveList />
          <DailyList />
          <SometimesList />
          <StudyingList />
        </GlassCard>

        <GlassCard>
          <SubContentLabel title="Commitments" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">
              International Conference (Reviewed)
            </h3>
            <ul className="list-disc ml-8 mb-4">
              <li>
                <a className="font-bold">Ryogo Ito</a>, Mitsuhiro Uchida, and
                Suguru Saito. Decision of Line Structure beyond Junctions Using
                U-Net-Based CNN for Line Drawing Rendering. SIGGRAPH Asia 2021
                Posters. 2021.
              </li>
            </ul>
            <h3 className="text-xl font-bold">
              Domestic Conference (Reviewed)
            </h3>
            <ul className="list-disc ml-8 mb-4">
              <li>
                <a className="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合 遼.
                疑似相対深度推定によるイラストへの重なりを考慮した差し込み.
                VC+VCC2022, 2022.
              </li>
            </ul>
            <h3 className="text-xl font-bold">
              Domestic Conference (UnReviewed)
            </h3>
            <ul className="list-disc ml-8 mb-4">
              <li>
                <a className="font-bold">伊藤 諒悟</a>, 齋藤 豪, 内田 光洋.
                U-NetベースのCNNを用いた結節点における線分接続判定.
                VC+VCC2021ポスター. 2021.
              </li>
              <li>
                <a className="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合 遼.
                線画像における相対深度グラフ作成手法とそれを用いた線画像の差し込み編集法.
                CGVI第189回研究発表会. 2023.
              </li>
              <li>
                <a className="font-bold">伊藤 諒悟</a>, 齋藤 豪, 森合 遼.
                相対的深度情報グラフを用いた線画像の差し込み編集法.
                情報処理学会第85回全国大会. 2023. （学生奨励賞受賞）
              </li>
            </ul>
            <h3 className="text-xl font-bold">Journal Paper</h3>
            <ul className="list-disc ml-8 mb-4">
              <li>
                Dingkun Yan, <a className="font-bold">Ryogo Ito</a>, Ryo Moriai,
                and Suguru Saito. Two-step Training: Adjustable Sketch
                Colorization via Reference Image and Text Tag. Computer Graphics
                Forum. TBD.
              </li>
            </ul>
          </div>
        </GlassCard>
      </main>
    </div>
  )
}
