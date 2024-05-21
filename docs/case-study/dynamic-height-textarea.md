# Dynamic height Textarea

## Goal

In a chat app. Input box should start height with one line. If user type multiple line of messages, an inbox height should increasing according to messages. But it also should contains some limit max height.

## Solution

```tsx
const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

// Set textarea height dynamically
const adjustTextareaHeight = () => {
  if (textareaRef.current) {
    textareaRef.current.style.height = '2.5rem' // Reset height
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      144,
    )}px` // Adjust based on content
  }
}

// Initial height adjustment on mount
React.useEffect(() => {
  adjustTextareaHeight()
}, [])

// adjust textarea height when user type
<textarea
  ref={textareaRef}
  onInput={() => {adjustTextareaHeight()}}
/>
```
