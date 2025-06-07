import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import { GotoNext, Learn } from "./Components/otobeTest";

const Home = () => {
  return (
    <div className="flex min-h-screen">
            <aside className="flex-1 bg-white p-4">
              <Sidebar />
            </aside>
    
             <main className="flex-1 bg-white p-4">
              <p>ホーム ページです。</p>
              <Learn />
                <GotoNext title="ヘルプ・ページへ" />
              <p>Next.jsの学習用に作成されたアプリケーションです。</p>
          </main>
    </div>
  );
}
export default Home;