// Import React
import React from 'react';

import { theme } from './theme';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  S,
  Slide,
  Text,
  Image,
  List,
  ListItem,
  Layout,
  Fill
} from 'spectacle';

import Terminal from "spectacle-terminal";
import CodeSlide from "spectacle-code-slide";

import imgStopProg from './images/stop-prog.jpg';
import imgCros     from './images/crocs.jpg';
import imgDrova    from './images/drova.jpg';
import imgPlugins  from './images/plugins.jpg';

import imgStolovka       from './images/stolovka.jpg';
import imgStolovka1      from './images/stolovka1.jpg';
import imgProjTree       from './images/projTree.jpg';
import imgProjTreeSrc    from './images/projTreeSrc.jpg';
import imgProjTreePublic from './images/projTreePublic.jpg';
import imgGrapQL         from './images/graphql.jpg';

import imgNetlify        from './images/netlify.jpg';
import imgGhpages        from './images/ghpages.png';
import imgGitlab         from './images/gitlab.png';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        bgColor="secondary"
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GATSBY JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            И все, что нужно знать о Static Site Generator'ах
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              #prelude
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom']}>
          <Image fit src={ imgDrova } width="800px"/>
        </Slide>
        <Slide transition={['zoom']}>
          <Heading size={2} fit caps textColor="secondary">
            Сделаю на Wordpress
          </Heading>
          <Appear><Image fit src={ imgCros } /></Appear>
        </Slide>
        <Slide transition={['zoom']}>
          <Image src={ imgPlugins } />
        </Slide>
        <Slide transition={['fade']}>
          <Image src={ imgStopProg } />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading fit caps size={1} textColor="secondary">
            GATSBY
          </Heading>
          <Text textColor="primary">Blazing-fast static site generator for React</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
          <Heading size={2} fit textColor="secondary" caps>
            JAM Stack
          </Heading>
          <Text textColor="primary">
            noun \’jam-stak’\ <br/>
            Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
          </Text>
          <Text textColor="secondary">
            - jamstack.org
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Appear>
            <Heading fit caps textColor="secondary">
              <S type="underline,bold">J</S>avaScript
            </Heading>
          </Appear>
          <Appear>
            <Heading fit caps textColor="secondary">
              Reusable <S type="underline,bold">A</S>PIs
            </Heading>
          </Appear>
          <Appear>
            <Heading fit caps textColor="secondary">
              Prebuilt <S type="underline,bold">M</S>arkup
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Terminal title="[rand0me@rand0me-pc ~]" output={[
            "$ npm install --global gatsby-cli",
            <div style={{ color: '#aaa' }}>
              /usr/bin/gatsby -> /usr/lib/node_modules/gatsby-cli/lib/index.js <br/>
              + gatsby-cli@1.1.28 <br/>
            </div>,
            "$ gatsby new my-blog",
            <div style={{ color: '#aaa' }}>
              <S type="bold" textColor="#55a">info</S> Creating new site from git: git://github.com/gatsbyjs/gatsby-starter-default.git <br/>
              Cloning into 'my-blog'... <br/>
              remote: Counting objects: 704, done. <br/>
              remote: Compressing objects: 100% (19/19), done. <br/>
              remote: Total 704 (delta 10), reused 17 (delta 4), pack-reused 679 <br/>
              Receiving objects: 100% (704/704), 665.14 KiB | 837.00 KiB/s, done. <br/>
              Resolving deltas: 100% (406/406), done. <br/>
              success Created starter directory layout <br/>
              <S type="bold" textColor="#55a">info</S> Installing packages...
            </div>
          ]}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={ imgStolovka1 } />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout>
            <Fill><Image src={ imgProjTree } /></Fill>
            <Fill><Image src={ imgProjTreeSrc } /></Fill>
          </Layout>
        </Slide>
        <CodeSlide transitionDuration={0} lang="js" code={ gatsbyLayoutExample } ranges={[
          { loc: [ 0,  6] },
          { loc: [ 7,  9] },
          { loc: [ 9, 16] },
          { loc: [17, 27] },
          { loc: [34, 35] }
        ]} />
        <CodeSlide transitionDuration={0} lang="js" code={ gatsbyPageExample } ranges={[
          { loc: [ 0,  2] },
          { loc: [ 3, 11] },
          { loc: [12, 13] }
        ]} />
        <Slide transition={['fade']} bgColor="secondary">
          <Terminal title="[rand0me@rand0me-pc ~]" output={[
            "$ npm run develop",
            <div style={{ color: '#aaa' }}>
              > gatsby-starter-default@1.0.0 develop /home/rand0me/Projects/my-blog <br/>
              > gatsby develop <br/>
              <br/>
              <S type="bold" textColor="#5a5">success</S> delete html files from previous builds — 0.045 s <br/>
              ... <br/>
              <S type="bold" textColor="#5a5">success</S> onPostBootstrap — 0.002 s <br/>
              <br/>
              <S type="bold" textColor="#55a">info</S> bootstrap finished - 7.488 s <br/>
            </div>,
            <div style={{ color: '#aaa' }}>
              <S type="bold" textColor="#5a5">DONE  Compiled successfully in 10441ms</S> <br/>
              <br/>
              You can now view gatsby-starter-default in the browser. <br/>
              <br/>
                <S type="bold">http://localhost:8000/</S> <br/>
              <br/>
              View GraphiQL, an in-browser IDE, to explore your site's data and schema <br/>
              <br/>
                <S type="bold">http://localhost:8000/___graphql</S>
            </div>
          ]}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={ imgGrapQL } />
        </Slide>
        <CodeSlide transition={['fade']} transitionDuration={0} lang="js" code={ gatsbyTemplateExample } ranges={[
          { loc: [ 0,  4] },
          { loc: [39, 46] },
          { loc: [46, 60] },
          { loc: [ 7,  9] }
        ]} />
        <Slide transition={['fade']} bgColor="secondary">
          <Terminal title="[rand0me@rand0me-pc ~]" output={[
            "$ npm run build",
            <div style={{ color: '#aaa' }}>
              > gatsby-starter-default@1.0.0 build /home/rand0me/Projects/my-blog <br/>
              > gatsby build <br/>
              <br/>
              <S type="bold" textColor="#5a5">success</S> delete html files from previous builds — 0.045 s <br/>
              ... <br/>
              <S type="bold" textColor="#5a5">success</S> onPostBootstrap — 0.002 s <br/>
              <br/>
              <S type="bold" textColor="#55a">info</S> bootstrap finished - 7.488 s <br/>
            </div>,
            <div style={{ color: '#aaa' }}> <br/>
              <S type="bold" textColor="#5a5">success</S> Building CSS — 8.348 s <br/>
              <S type="bold" textColor="#5a5">success</S> Building production JavaScript bundles — 20.838 s <br/>
              <S type="bold" textColor="#5a5">success</S> Building static HTML for pages — 6.961 s <br/>
              <br/>
              <S type="bold" textColor="#55a">info</S> Done building in 40.241 sec
            </div>
          ]}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={ imgProjTreePublic }/>
        </Slide>
        <CodeSlide transition={['fade']} transitionDuration={0} lang="html" code={ gatsbyHtmlExample } ranges={[
          { loc: [ 7,  8] },
          { loc: [15, 25] }
        ]} />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading fit caps textColor="primary">Круто</Heading>
          <Heading fit caps textColor="secondary">Давай Впрод</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src={ imgNetlify } />
          <Image src={ imgGhpages } />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3}>Netlify Free Tier</Heading>
          <List>
            <Appear><ListItem>Personal or <S type="bold">commercial</S> projects</ListItem></Appear>
            <Appear><ListItem>Free custom domain</ListItem></Appear>
            <Appear><ListItem>One-click Let's Enctrypt SSL</ListItem></Appear>
            <Appear><ListItem>Global CDN Network</ListItem></Appear>
            <Appear><ListItem><S type="bold">Netlify CMS</S></ListItem></Appear>
            <Appear><ListItem>Forms, Auth, Emails</ListItem></Appear>
            <Appear><ListItem>CI/CD</ListItem></Appear>
            <Appear><ListItem>???????</ListItem></Appear>
            <Appear><ListItem>PROFIT!</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout>
            <Fill><Image src={ imgGitlab } /></Fill>
            <Fill>
              <List textColor="tertiary">
                <Appear><ListItem>Создаем проект</ListItem></Appear>
                <Appear><ListItem>Коммитим</ListItem></Appear>
                <Appear><ListItem>Авторизуемся в <S type="bold">Netlify</S> с помощью GitLab</ListItem></Appear>
                <Appear><ListItem>Выбираем проект</ListItem></Appear>
                <Appear><ListItem>CI/CD работает</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={ imgStolovka }/>
        </Slide>
      </Deck>
    );
  }
}


const gatsbyLayoutExample = `import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper`;

const gatsbyPageExample = `import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage`;

const gatsbyTemplateExample = `import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql\`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
\``

const gatsbyHtmlExample = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="preload" href="/component---src-layouts-index-js-0d0da1e2f038245a1de2.js" as="script" />
    <link rel="preload" href="/component---src-pages-page-2-js-814c3250cda4a015aef7.js" as="script" />
    <link rel="preload" href="/path---page-2-a0e39f21c11f6a62c5ab.js" as="script" />
    <link rel="preload" href="/app-32a86b6810d9ea56369b.js" as="script" />
    <link rel="preload" href="/commons-03554c3de8e6350a1b07.js" as="script" />
    <title data-react-helmet="true">Gatsby Default Starter</title>
    <meta data-react-helmet="true" name="description" content="Sample" />
    <meta data-react-helmet="true" name="keywords" content="sample, something" />
    <style id="gatsby-inlined-css">
        html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        // ...

        @media only screen and (max-width:480px) {
            html {
                font-size: 100%
            }
        }
    </style>
</head>

<body>
    <div id="___gatsby">
        <div data-reactroot="" data-reactid="1" data-react-checksum="-1393174198">
            <!-- react-empty: 2 -->
            <div style="background:rebeccapurple;margin-bottom:1.45rem;" data-reactid="3">
                <div style="margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;" data-reactid="4">
                    <h1 style="margin:0;" data-reactid="5">
                        <a style="color:white;text-decoration:none;" href="/" data-reactid="6">Gatsby</a>
                    </h1>
                </div>
            </div>
            <div style="margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;padding-top:0;" data-reactid="7">
                <div data-reactid="8">
                    <h1 data-reactid="9">Hi from the second page</h1>
                    <p data-reactid="10">Welcome to page 2</p>
                    <a href="/" data-reactid="11">Go back to the homepage</a>
                </div>
            </div>
        </div>
    </div>
    <script id="webpack-manifest">/*<![CDATA[*/window.webpackManifest = { "231608221292675": "app-32a86b6810d9ea56369b.js", "162898551421021": "component---src-pages-404-js-4503918ea3a16cfcdb75.js", "35783957827783": "component---src-pages-index-js-4de036b7fc4e26c86a08.js", "218538773642512": "component---src-pages-page-2-js-814c3250cda4a015aef7.js", "60335399758886": "path----557518bd178906f8d58a.js", "254022195166212": "path---404-a0e39f21c11f6a62c5ab.js", "142629428675168": "path---index-a0e39f21c11f6a62c5ab.js", "135728916539164": "path---page-2-a0e39f21c11f6a62c5ab.js", "178698757827068": "path---404-html-a0e39f21c11f6a62c5ab.js", "114276838955818": "component---src-layouts-index-js-0d0da1e2f038245a1de2.js" }/*]]>*/</script>
    <script>/*<![CDATA[*/!function (e, t, r) { function n() { for (; d[0] && "loaded" == d[0][f];)c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i) } for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)a = e.createElement(t), "async" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s }(document, "script", ["/commons-03554c3de8e6350a1b07.js", "/app-32a86b6810d9ea56369b.js", "/path---page-2-a0e39f21c11f6a62c5ab.js", "/component---src-pages-page-2-js-814c3250cda4a015aef7.js", "/component---src-layouts-index-js-0d0da1e2f038245a1de2.js"])/*]]>*/</script>
</body>

</html>`