import React from 'react'
import Link from 'next/link'

import VueLogo from "./assets/vuejs.svg"
import NextLogo from "./assets/nextjs.svg"
import ReactLogo from "./assets/react.svg"
import RemixLogo from "./assets/remix.svg"
import FlutterLogo from "./assets/flutter.svg"
import AstroLogo from "./assets/astro.svg"
import NuxtLogo from "./assets/nuxtjs.svg"
import SvelteLogo from "./assets/svelte.svg"
import GatsbyLogo from "./assets/gatsby-logo.svg"
import AngularLogo from "./assets/angular-logo.svg"
import GolangLogo from "./assets/golang-logo.svg"

const technologies = {
  "vuejs": {
    title: "Vue.js",
    image: VueLogo
  },
  "react": {
    title: "React",
    image: ReactLogo
  },
  "remix": {
    title: "Vue.js",
    image: RemixLogo
  },
  "nextjs": {
    title: "Next.js",
    image: NextLogo
  },
  "flutter": {
    title: "Flutter",
    image: FlutterLogo
  },
  "astro": {
    title: "Astro",
    image: AstroLogo
  },
  "nuxtjs": {
    title: "Nuxt.js",
    image: NuxtLogo
  },
  "svelte": {
    title: "Svelte",
    image: SvelteLogo
  },
  "gatsby": {
    title: "Gatsby",
    image: GatsbyLogo
  },
  "angular": {
    title: "Angular",
    image: AngularLogo
  },
  "golang": {
    title: "Golang",
    image: GolangLogo
  }
}

const articles = [
  {
    tech: "nextjs",
    slug: "https://www.webiny.com/blog/build-notes-app-nextjs-webiny-headless-cms",
    project: "Build a Notes App with Next.js and Webiny Headless CMS",
    description: "Webiny’s secure, scalable, high-performance GraphQL API is a great choice to build your next project. Check out this guide to building a notes application with Webiny Headless CMS and Next.js."
  },
  {
    tech: "react",
    slug: "https://www.webiny.com/blog/implement-pagination-webiny-headless-cms-react",
    project: "How to Implement Pagination with Webiny Headless CMS in React",
    description: "In this tutorial, we are going to learn how to implement cursor-based pagination when using Webiny headless CMS in React."
  },
  {
    tech: "nuxtjs",
    slug: "https://www.webiny.com/blog/build-photo-sharing-app-nuxt-webiny-headless-cms",
    project: "Build a Photo Gallery app with Webiny and Nuxt",
    description: "We'll be building an image sharing app with Webiny and Nuxt.js 3, where users will view pictures posted by other users and be able to upload their own."
  },
  {
    tech: "astro",
    slug: "https://www.webiny.com/blog/build-blog-astro-webiny-headless-cms",
    project: "Build a Blog with Astro and Webiny Headless CMS",
    description: "Astro compiles to HTML, so little to no JavaScript is sent to the client by default. We will build a blog with Astro and Webiny."
  },
  {
    tech: "flutter",
    slug: "https://www.webiny.com/blog/build-todo-app-flutter-webiny-headless-cms",
    project: "Build a ToDo App with Flutter and Webiny Headless CMS",
    description: "Flutter is a multi-platform development toolkit. We will build a ToDo application with Flutter and Webiny Headless CMS."
  },
  {
    tech: "nextjs",
    slug: "https://www.webiny.com/blog/build-css-tricks-clone-nextjs-webiny-headless-cms",
    project: "Building a CSS Tricks Website Clone with Webiny and NextJS",
    description: "CSS Tricks is one of the most popular developer websites on the internet. Here's how you can build a clone of the CSS Tricks website using NextJS and Webiny Headless CMS."
  },
  {
    tech: "remix",
    slug: "hhttps://www.webiny.com/blog/build-blog-remix-webiny-headless-cms",
    project: "Build a Blog with Remix and Webiny Headless CMS",
    description: "Remix is a full stack web framework. In this tutorial we will create a blog with Remix and Webiny."
  },
  {
    tech: "react",
    slug: "https://www.webiny.com/blog/todo-application-react-tailwind-webiny-headless-cms",
    project: "CBuild a ToDo app with React, Tailwind and Webiny Headless CMS",
    description: "Create and destroy items on this ToDo list application using React and Tailwind with Webiny as a data source."
  },
  {
    tech: "nuxtjs",
    slug: "https://www.webiny.com/blog/create-marketplace-app-vuejs-pinia-webiny-headless-cms",
    project: "Create a Marketplace App with Vue.js and Pinia",
    description: "In this tutorial we will build a marketplace application with Vue.js, Tailwind and Pinia state management library."
  },
  {
    tech: "nextjs",
    slug: "https://www.webiny.com/blog/build-blog-nextjs-webiny-headless-cms",
    project: "Build a Blog with Next.js and Webiny Headless CMS",
    description: "Next.js is a popular tool for building isomorphic React apps. Here's how to build a blog with Next.js and Webiny."
  },
  {
    tech: "vuejs",
    slug: "https://www.webiny.com/blog/implement-pagination-webiny-headless-cms-vue",
    project: "How to Implement Pagination with Webiny Headless CMS in Vue",
    description: "We are going to learn how to implement cursor-based pagination when using Webiny headless CMS in Vue."
  },
  {
    tech: "vuejs",
    slug: "https://www.webiny.com/blog/build-job-board-application-vue-graphql",
    project: "Build a Job Board with VueJS and GraphQL",
    description: "In this tutorial we will be building a Job Board Application, integrating Webiny CMS into a Vue.js frontend using GraphQL."
  },
  {
    tech: "nuxtjs",
    slug: "https://www.webiny.com/blog/build-photo-sharing-app-nuxt-webiny-headless-cms",
    project: "Build a Photo Gallery app with Webiny and Nuxt"
  },
  {
    tech: "react",
    slug: "https://www.webiny.com/blog/build-job-board-react-graphql",
    project: "Build a Job Board with React and GraphQL",
    description: "In this tutorial, we will learn about the Webiny CMS and how we can use it in React by building a job board application."
  },
  {
    tech: "vuejs",
    project: "Create a Marketplace App with Vue.js and Pinia",
    slug: "https://www.webiny.com/blog/create-marketplace-app-vuejs-pinia-webiny-headless-cms",
  },
  {
    tech: "svelte",
    project: "Build a Blog with Svelte and Webiny Headless CMS",
    slug: "https://www.webiny.com/blog/build-blog-sveltekit-webiny-headless-cms",
    description: "In this tutorial, we will use SvelteKit as a static website generator with Webiny Headless CMS."
  },
  {
    tech: "nextjs",
    project: "Build a Trello Clone with Next.js and Webiny Headless CMS",
    slug: "https://www.webiny.com/blog/build-trello-clone-nextjs-webiny-headless-cms-1-of-2",
    description: "In this tutorial, we'll be building an Trello clone with Next.js and Webiny Headless CMS."
  },
  {
    tech: "gatsby",
    project: "Build a Blog with Gatsby and Webiny Headless CMS",
    slug: "https://www.webiny.com/blog/build-blog-gatsby-webiny-headless-cms",
    description: "In this tutorial, we will build a blog site with Gatsby and Webiny Headless CMS. We will look at how to set up Webiny and consume that data in a Gatsby project."
  },
  {
    tech: "react",
    project: "Build a Marketing Site with Forms Functionality in React using Webiny",
    slug: "https://www.webiny.com/blog/build-marketing-site-with-forms-functionality-react",
    description: "In this tutorial, we will learn about the Webiny CMS and how we can use it in React by building a job board application."
  }
]

const BlogTile = ({
  slug,
  tech,
  project,
  description
}) => {
  return (
    <div className='p-4 border-2 border-black rounded-xl'>
      <Link href={slug}><img className='my-2 transition ease-in-out w-60 hover:scale-[0.85]' src={technologies[tech].image} alt=""/></Link>
      <div>
        <h4 style={{ marginTop: 'unset' }}>{project}</h4>
        <p>{description}</p>
      </div>
      <Link href={slug}>Learn More &rarr;</Link>
    </div>
  )
}

const IntegrationsGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-8'>
      {articles.map(article => (
        <BlogTile key={article.link} { ...article } />
      ))}
    </div>
  )
}

export default IntegrationsGrid
