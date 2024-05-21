# Accessibility: ARIA log role

## Goal

Chat app can display a new message real time. It's good to provide some info for a screen reader user.

## Solution

Using [ARIA: log role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)

```javascript
<div role="log">
  <MessageBox />
  <MessageBox />
  <MessageBox />
</div>
```
