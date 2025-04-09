import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/all-users/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/all-users/"!</div>
}
