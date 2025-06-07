import { Header, Learn, GotoNext } from "../Components/otobeTest"
import { Sidebar } from "../Components/Sidebar";

// app/about/page.tsx
const AboutPage = ( ) => {
  return (
    <div className="flex min-h-screen">
        <aside className="flex-1 bg-white p-4">
          <Sidebar />
        </aside>

         <main className="flex-1 bg-white p-4">
          <p>このページは About ページです。</p>
          <Learn />
            <GotoNext title="ヘルプ・ページへ" />
          <p>Next.jsの学習用に作成されたアプリケーションです。</p>
      </main>
    </div>
  );
}

export default AboutPage;