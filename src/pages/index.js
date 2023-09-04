
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
import Navbar from '@/components/Navbar'
import Utilities from '@/components/Utilities'
import localFont from 'next/font/local'
import Head from 'next/head'

const myFont = localFont({src: '../customFonts/Palatino-Linotype.ttf'})
export const metadata = {
  title: 'HOGTHERIDER | $HOG',
  description: '',
  imageUrl:'https://firebasestorage.googleapis.com/v0/b/gpuxdrops.appspot.com/o/image-2.png?alt=media&token=a940b37b-5829-464b-9a0b-d229698968bc',
};

export default function Home() {
  return (
    <main className={myFont.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} /> {/* Add OG image tag */}

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} /> {/* Add Twitter image tag */}
      </Head>
      
       <Navbar/>
       <Hero/>
       <Information/>
       <Utilities/>
       <Footer/>
    </main>
  )
}
