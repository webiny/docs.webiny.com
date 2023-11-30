import React from "react";
import { ExternalLink } from "../ExternalLink";

import VueLogo from "./assets/vuejs.svg";
import NextLogo from "./assets/nextjs.svg";
import ReactLogo from "./assets/react.svg";
import RemixLogo from "./assets/remix.svg";
import FlutterLogo from "./assets/flutter.svg";
import AstroLogo from "./assets/astro.svg";
import NuxtLogo from "./assets/nuxtjs.svg";
import SvelteLogo from "./assets/svelte.svg";
import GatsbyLogo from "./assets/gatsby-logo.svg";
import AngularLogo from "./assets/angular-logo.svg";
import GolangLogo from "./assets/golang-logo.svg";
import PelicanLogo from "./assets/pelican.png";
import ScullyLogo from "./assets/scully.png";
import ReactNativeLogo from "./assets/react-native.png";
import AlanLogo from "./assets/alan.png";
import EleventyLogo from "./assets/eleventy.png";

const Integrations = () => {
    return (
        <div>
            <img className="my-2 h-10" src={ReactLogo} alt="React" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-job-board-react-graphql">
                        Build a Job Board with React and GraphQL
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-marketing-site-with-forms-functionality-react">
                        Build a Marketing Site with Forms Functionality in React using Webiny
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/implement-pagination-webiny-headless-cms-react">
                        How to Implement Pagination with Webiny Headless CMS in React?
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/todo-application-react-tailwind-webiny-headless-cms">
                        Build a ToDo app with React, Tailwind and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-7" src={NextLogo} alt="Next.js" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-trello-clone-nextjs-webiny-headless-cms-1-of-2">
                        Build a Trello Clone with Next.js and Webiny Headless CMS
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-chat-application-nextjs-socketio">
                        Build a Chat app with NextJS, Socket.io and Webiny
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-notes-app-nextjs-webiny-headless-cms">
                        Build a Notes App with Next.js and Webiny Headless CMS
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-css-tricks-clone-nextjs-webiny-headless-cms">
                        Building a CSS Tricks Website Clone with Webiny and NextJS
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-nextjs-webiny-headless-cms">
                        Build a Blog with Next.js and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-10" src={VueLogo} alt="Vue.js" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-job-board-application-vue-graphql">
                        Build a Job Board with VueJS and GraphQL
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/implement-pagination-webiny-headless-cms-vue">
                        How to Implement Pagination with Webiny Headless CMS in Vue
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/create-marketplace-app-vuejs-pinia-webiny-headless-cms">
                        Create a Marketplace App with Vue.js and Pinia
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-8" src={NuxtLogo} alt="Nuxt.js" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-photo-sharing-app-nuxt-webiny-headless-cms">
                        Build a Photo Gallery app with Webiny and Nuxt
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-11" src={AngularLogo} alt="Angular" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-quiz-app-angular-webiny">
                        Build a Quiz app with Angular and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-11" src={GatsbyLogo} alt="Gatsby" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-gatsby-webiny-headless-cms">
                        Build a Blog with Gatsby and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-11" src={FlutterLogo} alt="Flutter" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-todo-app-flutter-webiny-headless-cms">
                        Build a ToDo App with Flutter and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-8" src={RemixLogo} alt="Remix" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-remix-webiny-headless-cms">
                        Build a Blog with Remix and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-12" src={AstroLogo} alt="Astro" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-astro-webiny-headless-cms">
                        Build a Blog with Astro and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-10" src={SvelteLogo} alt="Svelte" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-sveltekit-webiny-headless-cms">
                        Build a Blog with Svelte and Webiny Headless CMS
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/implement-pagination-webiny-headless-cms-svelte">
                        Implement Pagination with Webiny Headless CMS in Svelte
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-8" src={GolangLogo} alt="Golang" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-golang-hugo-webiny">
                        Build a Blog with Golang and Hugo with Webiny
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-16" src={ScullyLogo} alt="Scully" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-scully-webiny-headless-cms">
                        Build a blog with Scully, the Angular Static Site Generator and Webiny
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-16" src={ReactNativeLogo} alt="ReactNative" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-notes-app-react-native-webiny-headless-cms">
                        Build Notes Taking App with React Native and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-2 h-20" src={AlanLogo} alt="Alan" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-voice-controlled-news-app-alanai-webiny">
                        Building a Voice Controlled News Application using React, Alan AI, and
                        Webiny CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-14" src={EleventyLogo} alt="Eleventy" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-eleventy-webiny-headless-cms">
                        Build a Blog with Eleventy (11ty) and Webiny Headless CMS
                    </ExternalLink>
                </li>
            </ul>

            <img className="my-102 h-12" src={PelicanLogo} alt="Pelican" />
            <ul>
                <li>
                    <ExternalLink href="https://www.webiny.com/blog/build-blog-with-pelican-webiny-headless-cms">
                        Build a blog with Pelican, a Python Static Site Generator and Webiny
                    </ExternalLink>
                </li>
            </ul>
        </div>
    );
};

export default Integrations;
