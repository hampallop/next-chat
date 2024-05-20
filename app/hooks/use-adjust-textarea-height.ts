import * as React from 'react'

export function useAdjustTextareaHeight() {
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
    console.log('use effect')
    adjustTextareaHeight()
  }, [])

  return {
    textareaRef,
    handleInput(
      handler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    ) {
      adjustTextareaHeight()
      return handler
    },
  }
}
