const features = [
  {
    title: "高速な体験",
    description: "Next.js App Router と最適化されたレンダリングで、快適な初期表示を実現。",
  },
  {
    title: "モダンUI",
    description: "グラデーション、ガラスモーフィズム、余白設計で洗練されたデザイン。",
  },
  {
    title: "拡張しやすい構成",
    description: "コンポーネント中心設計で、機能追加やカスタマイズがスムーズ。",
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />

      <section className="hero-card">
        <p className="badge">✨ Next.js Welcome</p>
        <h1>ようこそ、モダンなWeb体験へ。</h1>
        <p className="lead">
          このページは Next.js で構築された、現代的なウェルカムページです。
          プロダクトの第一印象を高めるための、シンプルで美しい構成にしています。
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="#features">
            特長を見る
          </a>
          <a className="btn btn-ghost" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js Docs
          </a>
        </div>
      </section>

      <section id="features" className="features">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
