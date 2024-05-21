# HTTP request and state management

## Problem

When define state management doing some http request. It can start with something simple like this

```tsx
const [status, setStatus] = React.useState('idle')
const [data, setData] = React.useState([])

React.useEffect(() => {
  fetchData().then(
    (data) => {
      setStatus('fetched')
      setData(data)
    },
    (error) => {
      setStatus('error')
    },
  )
}, [])

if (status === 'idle') {
  return <div>loading</div>
}

if (state.status === 'error') {
  return <div>error</div>
}

return <SomeComponent data={data} />
```

Problem from the above example is, if you set state of data and status of data separately. When line 7 has been triggered (status has changed), your React component can pass through if statement on line 16 and try to render on line 24 which required `data` but your app might haven't run on line 8 yet, so it can lead to error in this case.

## What should we do instead?

When dealing with this case, it's better to wrap status and data in the same state.

```tsx
const [state, setState] = React.useState({ status: 'idle', data: [] })

React.useEffect(() => {
  fetchData().then(
    (data) => {
      setState({ status: 'fetched', data })
    },
    (error) => {
      setState({ status: 'error' })
    },
  )
}, [])

if (state.status === 'idle') {
  return <div>loading</div>
}

if (state.status === 'error') {
  return <div>error</div>
}

return <SomeComponent data={state.data} />
```
