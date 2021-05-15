import { useRouter } from 'next/router'
import { get } from '@util'
import Imgix from "react-imgix";
import Head from 'next/head'

const PostId = ({title, content:{data:{data}, params}}) => {
  const router = useRouter()
  const { id } = router.query

  return (<>
    <Head>
      <title>{ title }</title>
    </Head>
    <p>Post: {id}</p>
    {data.map(e => (
      <div key={e.id}>
        <p>first name: { e.first_name}</p>
        <p>last name: { e.last_name}</p>
        <Imgix src={e.avatar} />
      </div>
    ))}
  </>)
}

export async function getServerSideProps({params, query:{id, ...query}}) {
  console.log(query)
  const data = await get({ url: `/users`, query })

  return { props: {title: 'test call api', content: {data} }}
}

export default PostId