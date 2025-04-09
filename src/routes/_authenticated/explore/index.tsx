import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/explore/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/explore/"!</div>
}
