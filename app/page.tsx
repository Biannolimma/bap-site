import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <div className="flex gap-8">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/docs" className="hover:underline">
              Docs
            </Link>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </nav>
      </div>

      <div className="relative flex place-items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
            Block And Play
          </h1>
          <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Decentralized Gaming Ecosystem
          </p>
          <p className="text-lg max-w-2xl mb-12 text-gray-600 dark:text-gray-400">
            Bem-vindo ao Block And Play! Um ecossistema descentralizado inovador
            que conecta jogos blockchain, dApps e uma comunidade vibrante de jogadores.
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <Link 
              href="/docs"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Começar
            </Link>
            <Link 
              href="/login"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors font-semibold"
            >
              Entrar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🎮 Gaming</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jogos blockchain integrados com NFTs e tokens
              </p>
            </div>
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🔗 dApps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ecossistema de aplicações descentralizadas
              </p>
            </div>
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">👥 Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comunidade ativa de desenvolvedores e jogadores
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Sobre{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Conheça mais sobre o projeto Block And Play
          </p>
        </div>

        <Link
          href="/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Documentação{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Guias, tutoriais e referência da API
          </p>
        </Link>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Ecossistema{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore os dApps do ecossistema BAP
          </p>
        </div>

        <Link
          href="/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Conectar{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Conecte sua carteira e entre no ecossistema
          </p>
        </Link>
      </div>
    </main>
  )
}
