import { useRouter } from 'next/router'

const PostId = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(router.query)

  return <p>Post: {id}</p>
}

export default PostId