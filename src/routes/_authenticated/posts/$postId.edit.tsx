import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/posts/$postId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/posts/$postId/edit"!</div>
}
