import Head from "next/head";

 const SEO = ({ title, img, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content="Shop Advanta seeds by Advanta is a step to help the farmers of the nation get their favourite Advanta seeds delivered right at their doorstep." />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="theme-color" content="#008000" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://master.d1qvtcs90w5zpi.amplifyapp.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Shop Advanta seeds by Advanta is a step to help the farmers of the nation get their favourite Advanta seeds delivered right at their doorstep." />
      <meta property="og:image" content="https://advantaseeds.com/wp-content/uploads/2019/10/logo-mini.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://master.d1qvtcs90w5zpi.amplifyapp.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content="Shop Advanta seeds by Advanta is a step to help the farmers of the nation get their favourite Advanta seeds delivered right at their doorstep." />
      <meta property="twitter:image" content="https://advantaseeds.com/wp-content/uploads/2019/10/logo-mini.png" />
    </Head>
  );
};

export default SEO;