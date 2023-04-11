import React from 'react' 
import { Helmet } from 'react-helmet-async';
import '../CSS/Home.css'
import img from '../Images/react-helmet.png';
import img1 from '../Images/React.png';
import img2 from '../Images/react2.png';
import img3 from '../Images/react3.png';
import { Link } from "react-router-dom";
const Home = () => {
  return (
     <>
     <Helmet>
        <title>How to use React-Helmet in Reactjs With Example</title>
        <meta name="msapplication-TileImage" content="https://stefaniq.com/wp-content/uploads/2021/01/meta-tags-reactjs.png"></meta>
        <meta name="og:title" content="How to use React-Helmet in Reactjs With Example"/>
        <meta name="og:description" content="Learn How to use React-Helmet and How To Change the Title and Metadata with React Helmet" />
        {/* <meta name="image" content={img1}/> */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta property="og:image" itemprop="image" content="https://stefaniq.com/wp-content/uploads/2021/01/meta-tags-reactjs.png"></meta>
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div className='Home'> 
      <div className='HomeContain'>
      <h1>How to use React-Helmet in Reactjs With Example</h1>
      <p>By- Rajesh Nagar</p>
      <div className='contain'>
        <img src={img} alt='img' className='imger'></img>
         <h1>React Helmet</h1>
         <p>Every developer aspires that his website should appear at the top of the search results pages in a browser. Unfortunately, there are certain instances where the search engine crawler cannot prove to be reliable. This problem occurs because of the inability of the browser to render JavaScript. This means that SPA build on the React or Angular platform cannot favor the search engine crawlers. This is one of the most significant issues the developers face to bring their pages to the top of the webpage. So, to solve the problem, Server Side Rendering may be used, but it generally has limitations to adapt. This is where React Helmet comes to the rescue.</p>
          <h1>What is React Helmet?</h1>
          <p>React Helmet can be termed as the document head manager for React-based applications. Using it, it becomes very easy for developers to update meta tags present on the server-side and the client-side. This library can be termed perfect for applications where SEO plays a crucial role. It is also a media-friendly library with different dependencies and features that make its usage easy in any React app. We will study all the aspects in this tutorial and see how you can add React Helmet into your project</p>
          <h3>In this article, we'll cover the following steps:</h3>
           
          <ol className='orderlist'>
          <li>How to install and import the React Helmet library</li>
          <li>Basic usage for client and server side rendering (CSR vs SSR).</li>
          <li>More advanced usage of Helmet for setting up an SEO component.</li>
          </ol>
          <div className='installation'>
            <h1>React Helmet Installation and Setup</h1>
            <p>However, before demonstrating, it's important to note that the standard react-helmet library is now considered deprecated. Instead, you should use react-helmet-async.</p>
            <p>This is because react-helmet led to a few bugs that resulted in memory leaks and poor data integrity. Suffice it to say, when React developers mention Helmet, they're almost always referring to react-helmet-async.</p>
            <p>Now to the installation. Simply navigate to your project's directory in the terminal, and install react-helmet-async with your package manager of choice. Here's the syntax for yarn and npm:</p>
           <p>Now to the installation. Simply navigate to your project's directory in the terminal, and install react-helmet-async with your package manager of choice. Here's the syntax for yarn and npm:</p>
           <div className='npm'>
            <i>yarn add react-helmet-async</i>
            <br/>
            <i>npm i react-helmet-async</i>
           </div>
           <p>Once the installation completes, you can move on to importing and utilizing the Helmet component library.</p>
            <h1>React Helmet Basic Concepts and Usage</h1>
            <p>The two components we'll be importing from react-helmet-async are called Helmet and HelmetProvider.</p>
            <p>1. HelmetProvider will wrap the entire app component in order to create context and prevent memory leaks. Therefore, this component will only need to be imported in the root App component.</p>
            <p>2. Helmet will be imported into any page component where you want to implement meta tags. Think of Helmet as the head tag for the page in question.</p>
            <p>We're going to start with basic usage of both client side rendering (CSR) and server side rendering (SSR). Let's start by seeing how things work in a basic CSR implementation:</p>
             <img src={img1} alt='img' className='mb-2'></img>

             <p>As you can see, in the App component we only imported the HelmetProvider component from react-helmet-async. Pretty simple.</p>
             <p>The SSR implementation is very similar, with one small addition. Let's have a look and see if you can spot the difference:</p>
             <img src={img2} alt='img' className='mb-2'></img>
             <p>If you noticed the addition of the helmetContext variable being passed as a prop to our HelmetProvider, you nailed it!</p>
             <p>This paradigm is found using most popular state management systems such as Redux, and helps ensure that context is never scoped outside of the current instance of your app.</p>
             <p>Now, let's assume the following page component is the landing page for your React app:</p>
             <img src={img3} alt='img' className='mb-2'></img>
             <h1>Conclusion</h1>
             <p>In this article we went over why React Helmet is a useful addition to your React app. You learned not only basic setup and usage, but also a more advanced implementation that helps abstract away much of the repetitive work involved in metadata tags.</p>
             <p>Hopefully you now feel confident enough to enhance your React SEO and social media performance by implementing the React Helmet Async library. Good luck and happy coding!</p>
            
          </div>
          <button className='butn'><Link to='/React-snap' className='Link'>Go TO Next Page</Link></button>

      </div>
      </div>
      </div>
     </>
  )
}

export default Home