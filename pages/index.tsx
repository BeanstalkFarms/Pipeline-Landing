import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Button : React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a href={href} target={href.startsWith('/') ? undefined : "_blank"} className="block w-full flex-1" rel="noreferrer">
    <button className="block w-full px-6 py-4 border border-white hover:bg-neutral-50 hover:bg-opacity-20 rounded-sm overflow-ellipsis whitespace-nowrap overflow-hidden">
      {children}
    </button>
  </a>
)

const TITLE = "Pipeline";
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
            className="md:w-24 md:h-24 h-16 w-16 mx-auto animate-spin-slow"
            width={150}
            height={150}
            alt=""
          />
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Pipeline</h1>
            <p className="text-lg md:block hidden">Perform an arbitrary series of actions in the EVM in a single transaction.</p>
          </div>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-row space-x-4">
            <Button href="/pipeline.pdf">
              Whitepaper 
            </Button>
            <Button href="https://github.com/BeanstalkFarms/Pipeline">
              Code 
            </Button>
          </div>
          <Button href="/pipeline-audit-halborn.pdf">
            Halborn Audit Report
          </Button>
          <Button href="https://etherscan.io/address/0xb1bE0000C6B3C62749b5F0c92480146452D15423">
            Pipeline &middot; <code className="text-sm">0xb1bE0000C6B3C62749b5F0c92480146452D15423</code>
          </Button>
          <Button href="https://etherscan.io/address/0xDEb0f00071497a5cc9b4A6B96068277e57A82Ae2">
            Depot &middot; <code className="text-sm">0xDEb0f00071497a5cc9b4A6B96068277e57A82Ae2</code>
          </Button>
          <div className="flex flex-row space-x-4">
            <Button href="https://bean.money">
              Beanstalk
            </Button>
            <Button href="https://basin.exchange">
              Basin 
            </Button>
          </div>
        </div>
        <blockquote className="text-left space-y-4">
          <div className="text-left text-2xl">
            <em>“Leave nothing for to-morrow which can be done to-day.”</em><br/>
          </div>
          <div className="text-sm">
            <p className="text-neutral-400">
              — The Collected Works of Abraham Lincoln edited by Roy P. Basler, Volume II, “Notes for a
Law Lecture” (July 1, 1850?), p. 81</p>
          </div>
        </blockquote>
      </div>
    </div>
  )
}
