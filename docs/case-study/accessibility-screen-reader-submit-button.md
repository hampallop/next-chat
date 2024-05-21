# Accessibility: TailwindCSS sr-only on icon submit button

## Goal

In chat app. A sending message button some times instead of having a text "send" in a button we usually use an icon instead.

To ensure it still serve a good accessibility in this case, we should provide screen reader an option to understand what this button do.

## Solution

Provide html element and use [Screen Reader](https://tailwindcss.com/docs/screen-readers) to help navigate user.

```tsx
<button type="submit">
  <ArrowUp className="h-6 w-6" />
  <span className="sr-only">Send</span>
</button>
```
