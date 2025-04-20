import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/$userId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/$userId/edit"!</div>
}
