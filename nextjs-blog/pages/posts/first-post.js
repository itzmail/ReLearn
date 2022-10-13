import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src={"/images/profile.jpg"}
        height={144}
        width={144}
        alt="Dummy Image"
      />
    </div>
  )
}
