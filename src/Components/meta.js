import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Metatag = ({ title, ogtitle, description, image, meta = [] }) => {
    const location = useLocation();

    return (
        <Helmet
            title={title}
            htmlAttributes={{ lang: 'en' }}
            meta={[
                // standard meta tag
                {
                    name: 'description',
                    content: description,
                },
                // facebook meta tag
                {
                    property: 'og:title',
                    content: ogtitle,
                },
                {
                    property: 'og:description',
                    content: description,
                },
                {
                    property: 'og:image',
                    content:
                        'https://stefaniq.com/wp-content/uploads/2021/01/meta-tags-reactjs.png',
                },
                {
                    property: 'og:url',
                    content: `https://rajesh-appsdeployer.github.io/BlogCheck${location.pathname}`,
                },
                {
                    property: 'og:image:width',
                    content: '140',
                },
                {
                    property: 'og:image:height',
                    content: '140',
                },
                {
                    property: 'theme-color',
                    content: '#008f68',
                },
                //  twitter meta tag
                {
                    property: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'twitter:creator',
                    content: 'Appsdeployer',
                },
                {
                    property: 'twitter:title',
                    content: ogtitle,
                },
                {
                    property: 'twitter:description',
                    content: description,
                },
                {
                    property: 'twitter:image',
                    content:
                        'https://stefaniq.com/wp-content/uploads/2021/01/meta-tags-reactjs.png',
                },
                {
                    property: 'twitter:url',
                    content: `https://rajesh-appsdeployer.github.io/BlogCheck${location.pathname}`,
                },
                ...meta,
            ]}
        />
    );
};

export default Metatag;
