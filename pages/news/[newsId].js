import {useRouter} from 'next/router'

const DynamicPage = () => 
{
    const router = useRouter()

    console.log(router.query.newsId)

    return(
        <h1>This is meant to be a dynamic page</h1>
    )
}

export default DynamicPage