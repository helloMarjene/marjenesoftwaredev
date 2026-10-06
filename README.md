This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Website Chat Assistant

The floating assistant answers from the website's published information using the OpenAI API. Copy `.env.example` to `.env.local`, set `OPENAI_API_KEY` to your server-side API key, then restart the development server. Keep the key private and do not prefix it with `NEXT_PUBLIC_`.

Pricing questions always link visitors to the business WhatsApp number. Without an OpenAI key, the assistant still answers common website questions locally and offers WhatsApp for unknown questions.

For direct translations, enable Google Cloud Translation and set `GOOGLE_TRANSLATE_API_KEY` in `.env.local`. If no Google key is set but `OPENAI_API_KEY` is available, the assistant can translate using OpenAI. Without either key, it opens a prefilled Google Translate page. These keys must remain server-side.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
