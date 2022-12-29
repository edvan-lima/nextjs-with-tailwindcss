import Head from 'next/head';

import { Blog } from '@/components/blog';
import { CallToAction } from '@/components/call-to-action';
import { Features } from '@/components/features';
import { HeroSection } from '@/components/hero-section';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';

import { Header } from '../components/header';

export default function Home() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Sidebar */}
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        <Header />
        <main className="mb-40 space-y-40">
          <HeroSection />
          <Features />
          <Stats />
          <Testimonials />
          <CallToAction />
          <Blog />
        </main>
      </main>
    </>
  );
}