import React from 'react' 
import { Helmet } from 'react-helmet-async';
import '../CSS/ReactSnap.css'
import img from '../Images/React-snap.webp';
import img1 from '../Images/snap1.png';
import img2 from '../Images/snap3.png';
import img3 from '../Images/snap4.avif';
import { Link } from "react-router-dom";
const ReactSnap = () => {
  return (
     <>
     <Helmet>
        <title>Pre-render routes with react-snap</title>
        <meta name="og:title" content="Pre-render routes with react-snap"/>
        <meta name="og:description" content="Learn How to use React-snap and How To Make Our Site SEO friendly Using React-Snap" />
        <meta name="image" content={img}/>
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div className='ReactSnap'> 
      <div className='ReactSnapContain'>
      <h1>Pre-render routes with react-snap</h1>
      <p>By- Rajesh Nagar</p>
      <div className='contain'>
        <img src={img} alt='img' className='imger'></img>
         <h1>React Snap</h1>
          <p>Pre-rendering your React application is useful if you want to increase SEO performance of your website and make it visible to search engines. Most of the search engine robots does not execute client side javascript code and that makes websites which are made by React is not visible on search engine results.</p>
          <p>Even if Google says it’s executing client side Javascript code, it’s better to be visible by other search engines too. One solution to this problem is pre-rendering your pages on the server-side and return this html files to the client or search engine robots.</p>

          <h1>Configuration</h1>
          <p>react-snap configuration is dead simple by doing only 3 steps</p>
          <h3>In this article, we'll cover the following steps:</h3>
           
           
          <div className='installation'>
            <h1>Step 1: Install react-snap</h1>
             
           <div className='npm'>
            <i>yarn add react-snap --dev</i>
            <br/>
            <i>npm i react-snap --dev</i>
           </div>
           <p>Once the installation completes, you can move on to importing and utilizing </p>
            <h1>Step 2: Add the npm scripts on your package.json</h1>
             
             <img src={img1} alt='img' className='mb-2'></img>

              <h1>Step 3: Change your index.jsx file</h1>
             <img src={img2} alt='img' className='mb-2'></img>
             <p>Instead of only using ReactDOM.render to render the root React element directly into the DOM, this checks to see if any child nodes are already present to determine whether HTML contents were pre-rendered (or rendered on the server). If that's the case, ReactDOM.hydrate is used instead to attach event listeners to the already created HTML instead of creating it anew.</p>
             <p>Building the application will now generate static HTML files as payloads for each route that is crawled. You can take a look at what the HTML payload looks like by clicking the URL of the HTML request and then clicking the Previews tab within Chrome DevTools.</p>
             
             <img src={img3} alt='img' className='mb-2'></img>
             <h1>Conclusion</h1>
             <p>If you are not server-side rendering routes in your application, use react-snap to pre-render static HTML to your users.</p>
             <p>1. Install it as a development dependency and begin with just the default settings.</p>
             <p>2. Use the experimental inlineCss option to inline critical CSS if it works for your site.</p>
          </div>
          <button className='butn'><Link to='/' className='Link'>Go TO Previews</Link></button>

      </div>
      </div>
      </div>
     </>
  )
}

export default ReactSnap