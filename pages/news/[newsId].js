import {useRouter} from 'next/router'

const DynamicPage = () => 
{
    const router = useRouter()

    const newsId = router.query.newsId

    return(
        <h1>{newsId}</h1>
    )
}

export default DynamicPage