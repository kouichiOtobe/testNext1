import Image from "next/image";
import { Sidebar } from "./Components/Sidebar";
import { GotoNext, Learn } from "./Components/otobeTest";

const Home = () => {
  return (
    <div>

        <p>☰ ホーム ページです。</p>
        <p>サイドバー表示改良？</p>
        <Learn />
        <GotoNext title="ヘルプ・ページへ" />
        <p>Next.jsの学習用に作成されたアプリケーションです。</p>

    </div>
  );
}
export default Home;