import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { posts } from "../../posts";
import dynamic from "next/dynamic";
import Container from "../../components/statics/Container/Container";
import PostComponent from "../../components/BlogPost/Post";
import Footer from "../../components/statics/Footer/Footer";
const NavHome = dynamic(() =>
   import("../../components/statics/Navbars/NavHome")
);

const Post = () => {
   const router = useRouter();
   const [post, setPost] = useState();
   const [id, setId] = useState();

   const getPostHandler = () => {
      const postsList = posts;
      let foundedPost = postsList.filter((post) => post.id == id);
      setPost(foundedPost[0]);
   };

   useEffect(() => {
      if (router.isReady) {
         setId(router.query.id);
      }
      getPostHandler();
   }, [router.isReady, id]);

   return (
      <>
         <NavHome
            nav={[
               { title: "ویژگی ها", id: "attributes" },
               { title: "قیمت ها", id: "prices" },
               { title: "سوالات متداول", id: "questions" },
               { title: "خبرنامه", id: "newsletter" },
            ]}
            type="home"
         />
         <Container>
            {post && (
               <PostComponent
                  title={post.title}
                  image={post.image}
                  body={post.body}
                  date={post.date}
                  writer={post.writer}
               />
            )}
         </Container>
         <Footer />
      </>
   );
};

export default Post;
