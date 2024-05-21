# Beta Chat

## Tech stacks

- Web App by [Next.js](https://nextjs.org)
- Type-safe with [TypeScript](https://www.typescriptlang.org)
- Database by [Supabase](https://supabase.com)
- Styling with [TailwindCSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)
- Simple yet powerful state management by [Zustand](https://zustand-demo.pmnd.rs)
- Form management by [React Hook Form](https://react-hook-form.com)
- Deployed on [Vercel](https://vercel.com)

## Things to be improve

### Features

- [ ] Chat room
- [ ] Add message date time
- [ ] Authentication
- [ ] Edit / Remove message (Authentication required)

### Setup

- [ ] Setup Test ([Vitest](https://vitest.dev), [Testing-Library](https://testing-library.com) and [Playwright](https://playwright.dev))
- [ ] Test mock ([MSW](https://mswjs.io))
- [ ] Setup [GitHub actions](https://github.com/features/actions) (typecheck, test, etc.)
- [ ] Logging: ([Sentry](https://sentry.io))
- [ ] Analytics: ([Amplitude](https://amplitude.com))

## Interesting Parts

Due to this repo is an example of chat applicaiton. I'll dedicate this part for showing which area I found it interesting when I built this app.

- Dynamic height Textarea
- Enter to submit in Textarea
- Accessibility: tailwind `sr-only` on button submit icon
- Accessibility: [role="log"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- Form submit react-hook-form
