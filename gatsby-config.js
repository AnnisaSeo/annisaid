/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'supplier pasir dan batu jabodetabek ,aman dan terpercaya siap kirim ke semua wilayah jabodetabek',
    author: 'Annisaseo',
    siteUrl: 'https://blog.syukrieseo.com/',
    description: 'produk terlaris dengan konten "butuh pasir segera?langsung hubungi SUMBERPASIR!melayani segala kebutuhan konstruksi seperti pasir , batu , dan juga lainnya pengiriman dilakukan di hari yang sama dengan hari pemesanan. pesan pasir di SUMBERPASIR dijamin anti worry!.kenapa beli pasir dan batu dan batu di sumberpasir 1.gratis ongkos kirim Harga lebih murah jika dekat dengan lokasi kami, di nego aja 2. gratis bongkar muat Tidak ada biaya Tambahan lainnya,langsung kita bongkar muat 3. Bayar ditempat (COD) pembayar aman & nyaman bisa langsung di lokasi tujuan',
    Keyword:'digital marketing,gatsbyjs,seo'
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/templates/`,
      },
    },
    "gatsby-plugin-mdx" ,
  ],
},
    `gatsby-plungin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ']'
'}'
