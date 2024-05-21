# Beta Chat

An example of web real time app chat. Built by [Next.js](https://nextjs.org) and [Supabase](https://supabase.com).

## Getting started

1. Install the dependencies in the root of the repo.

    ```bash
    npm install
    ```

2. Copy the example .env.local.example to .env.local. Update variables via [Supabase API settings](https://app.supabase.com/project/_/settings/api)

3. After that you can run the apps simultaneously with the following.

```bash
npm run dev
```

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
- [ ] Handling error

### More setup

- [ ] Setup Test ([Vitest](https://vitest.dev), [Testing-Library](https://testing-library.com) and [Playwright](https://playwright.dev))
- [ ] Test mock ([MSW](https://mswjs.io))
- [ ] Setup [GitHub actions](https://github.com/features/actions) (typecheck, test, etc.)
- [ ] Logging: ([Sentry](https://sentry.io))
- [ ] Analytics: ([Amplitude](https://amplitude.com))

## Interesting Parts

Due to this repo is an example of chat applicaiton. I'll dedicate this part for showing which area I found it interesting when I built this app.

- [Dynamic height Textarea](./docs/case-study/dynamic-height-textarea.md)
- [Enter to submit in Textarea](./docs/case-study/enter-to-submit-in-textarea.md)
- [Accessibility: TailwindCSS sr-only on icon submit button](./docs/case-study/accessibility-screen-reader-submit-button.md)
- [Accessibility: ARIA log role](./docs/case-study/accessibility-log-role.md)
- [HTTP request and state management](./docs/case-study/http-request-and-state-management.md)
