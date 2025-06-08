// app/layout.tsx または app/(main)/layout.tsx など
import { Sidebar } from "../Components/Sidebar";

const testSidebar = () => {
  return (
  
        <div className="flex min-h-screen">
            {/* 右側：サイドバー */}
          <aside className="bg-white p-4">
            <Sidebar />
          </aside>
          {/* 左側：メインコンテンツ */}
          <main className="flex-1 bg-white p-4">
              <p>サイドバーのデモです。</p>
          </main>

        </div>

  );
}

export default testSidebar;