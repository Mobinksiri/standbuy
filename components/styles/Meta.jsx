import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
   return (
      <Head>
         <title>StandBuy {title}</title>
         <meta name="description" content={description} />
         <link rel="icon" href="/logo.png" />
         <meta name="keywords" content={keywords} />
         <meta name="author" content="Mobin Kasiri" />
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
         />
      </Head>
   );
};

Meta.defaultProps = {
   // title: "StandBuy",
   keywords: "StandBuy, StandBuy.ir, StandBuy.ir, StandBuy.ir, StandBuy.ir",
   description: "StandBuy.ir",
};
