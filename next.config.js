module.exports = {
  target: "serverless",
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
};
