import Head from 'next/head';
import { HOST_URI } from '../constants/uri';

const Seo = () => {
  const title = 'KOALA KNIGHTS: DMTS';
  const url = HOST_URI;
  const description = 'Koala Knights is a Play-to-Earn (P2E) game that combines fun with blockchain technology.';

  const DefaultSEO = {
    appName: title,
    icon: '/favicon.ico',
    ogTitle: 'KOALA KNIGHTS - First Step to P2E with FIRMACHAIN',
    keywords: 'firma, firmachain, fct, koalaknight',
    image: `${url}/assets/images/image-carousel-1.png`,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />

      <link rel='icon' href={DefaultSEO.icon} />
      <link rel='shortcut icon' href={DefaultSEO.icon} />

      <meta name='application-name' content={DefaultSEO.appName} />
      <meta name='msapplication-tooltip' content={title} />

      <link rel='canonical' href={url} />
      <meta name='keywords' content={DefaultSEO.keywords} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={DefaultSEO.ogTitle} key='title' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={DefaultSEO.image} />
      <meta property='og:url' content={url} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={DefaultSEO.ogTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={DefaultSEO.image} />
      <meta name='twitter:domain' content={url} />
    </Head>
  );
};

export default Seo;
