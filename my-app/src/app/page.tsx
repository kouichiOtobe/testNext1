import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import { GotoNext, Learn } from "./Components/otobeTest";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white p-4 border-r">
        <Sidebar />
      </aside>

      <main className="flex-1 bg-blue p-4">
        <p>☰ ホーム ページです。</p>
        <p>サイドバー表示改良？</p>
        <Learn />
        <GotoNext title="ヘルプ・ページへ" />
        <p>Next.jsの学習用に作成されたアプリケーションです。</p>
      </main>
    </div>
  );
}
export default Home;