//About

import { Header, Learn, GotoNext } from "../Components/otobeTest"

// app/about/page.tsx
const AboutPage = ( ) => {
  return (
    <div>
          <p>このページは About ページです。</p>
          <Learn />
            <GotoNext title="ヘルプ・ページへ" />
          <p>Next.jsの学習用に作成されたアプリケーションです。</p>
    </div>
  );
}

export default AboutPage;