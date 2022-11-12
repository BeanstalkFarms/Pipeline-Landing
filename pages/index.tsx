import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Button : React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a href={href} target="_blank" className="block" rel="noreferrer">
    <button className="block w-full px-6 py-4 border border-white hover:bg-neutral-50 hover:bg-opacity-20 rounded-sm overflow-ellipsis whitespace-nowrap overflow-hidden">
      {children}
    </button>
  </a>
)

const TITLE = "EVM Pipeline";
const DESC  = "Perform an arbitrary series of actions in the EVM in a single transaction.";
const IMAGE = "https://evmpipeline.netlify.app/meta.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:title"
          content={TITLE}
        />
        <meta
          property="og:description"
          content={DESC}
        />
        <meta
          property="og:image"
          content={IMAGE}
        />
        <meta name="twitter:image" content={IMAGE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col items-center px-4 py-8 md:py-16 space-y-12 max-w-2xl mx-auto min-h-screen justify-center">
        <div className="space-y-6 md:space-y-12">
          <Image
            src="/pipeline-white.svg"
            className="md:w-36 md:h-36 h-16 w-16 mx-auto animate-spin-slow"
            width={150}
            height={150}
            alt=""
          />
          <div className="space-y-2">
            <h1 className="text-center text-3xl font-bold">EVM Pipeline</h1>
            <p className="text-center text-lg md:block hidden">Perform an arbitrary series of actions in the EVM in a single transaction.</p>
          </div>
        </div>
        <div className="w-full space-y-4">
          <Button href="https://etherscan.io/address/">
            Whitepaper 
          </Button>
          <Button href="https://etherscan.io/address/0xc5a5C42992dECbae36851359345FE25997F5C42d">
            Pipeline &middot; <code className="text-sm">0xc5a5C42992dECbae36851359345FE25997F5C42d</code>
          </Button>
          <Button href="https://etherscan.io/address/0xeC827421505972a2AE9C320302d3573B42363C26">
            Depot &middot; <code className="text-sm">0xeC827421505972a2AE9C320302d3573B42363C26</code>
          </Button>
          <Button href="https://bean.money">
            Beanstalk
          </Button>
        </div>
      </div>
    </div>
  )
}
