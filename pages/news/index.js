import Link from 'next/link'

const newsPage = () =>
{
  return <>
    <h1>The News Page</h1>
    <ul>
      <li>
        <Link href="/news/nextjs-is-a-great-framework">
          NextJS is a great framework
        </Link>
      </li>
      <li>
        <Link href="/news/something-in-the-way">
          Something in the way
        </Link>
      </li>
    </ul>
  </>
};

export default newsPage;
