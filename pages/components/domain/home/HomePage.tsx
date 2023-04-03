import Link from 'next/link'
import Layout from '../../common/layout/Layout'
import CategoryPage from '../body/Category/Category'


function HomePage  () {
  return (
    <Layout>
      
      {/* <Link href="/components/domain/body/Category/Category">Category</Link> */}
      <CategoryPage/>
    </Layout>
  )
}
export default HomePage