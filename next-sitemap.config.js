// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.subrataghosh.in', // Replace with your website's URL
    generateRobotsTxt: true,            // Generates a robots.txt file
    sitemapSize: 5000,                   // Limits the maximum number of URLs per sitemap file
    changefreq: 'weekly',                // Update frequency (e.g., daily, weekly, monthly)
    priority: 0.7,                       // Default priority for all URLs
    exclude: ['/admin/*'],               // Exclude specific routes if needed
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allows all bots to crawl the site
      ],
    },
  };
  