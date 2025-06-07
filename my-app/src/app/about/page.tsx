import { Header, Learn, GotoNext } from "../Components/otobeTest"
import { Sidebar } from "../Components/Sidebar";

// app/about/page.tsx
const AboutPage = ( ) => {
  return (
    <div>
      <Sidebar />
      <Header title="このサイトについて"/>
      <p>このページは About ページです。</p>
      <Learn />
        <GotoNext title="ヘルプ・ページへ" />
      <p>Next.jsの学習用に作成されたアプリケーションです。</p>
    </div>
  );
}

export default AboutPage;