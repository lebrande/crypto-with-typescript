import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Token } from '../../interfaces'
import { tokens } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Token[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Tokens List | Next.js + TypeScript Example">
    <h1>Tokens List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /tokens</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Token[] = tokens
  return { props: { items } }
}

export default WithStaticProps
