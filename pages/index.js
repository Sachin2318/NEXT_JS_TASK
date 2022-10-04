import { useEffect } from "react";
import OutlinedCard from "../components/Card";
import MainLayout from "../components/MainLayout";

function Home({ posts }) {
  return (
    <MainLayout>
      <div className="grid-container">
        {posts.posts.map((e, i) => {
          return <OutlinedCard key={i} data={e} />;
        })}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetch('https://dummyjson.com/posts')
    const posts = await data.json()
    return {
      props: {
        posts: posts
      }
    }
  } catch (err) {
    console.log(err, "err")
    return {
      props: {}
    }
  }
}

export default Home;
