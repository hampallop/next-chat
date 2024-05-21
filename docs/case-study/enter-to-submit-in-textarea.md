# Enter to submit in textarea

## Goal

In chat app. A message input should be able to type multiple lines. To archive that behavior, textarea is a right choice for the input.

But for textarea behavior, normally when you press "Enter" on your keyboard. It'll behave as put a new line in your message.

We want;

- When user press "Enter". Textarea will submit a form.
- When user press "Shift + Enter". Textarea will put a new line.

## Solution

```tsx
<textarea
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault() // This is to prevent textarea for putting a new line.

      handleSubmit() // Called handle submit function
    }
  }}
/>
```
