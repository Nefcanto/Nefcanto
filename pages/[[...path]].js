const fs = require('fs');
const path = require('path');
import Error from 'next/error';
import Breadcrumb from '../components/Breadcrumb';
const marked = require("marked");

const index = ({ urlSegments, content, errorCode }) => {

    // set title from <h1> or first line with # in markdowns
    // include disqus maybe

    if (errorCode) {
        return <Error statusCode={errorCode} />
    }

    if (urlSegments.length == 0) {
        return <div dangerouslySetInnerHTML={{ __html: content }}></div>
    }

    return <>
        <Breadcrumb urlSegments={urlSegments} />
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
}

export async function getServerSideProps({ params, res }) {
    const urlSegments = params.path || [];
    const diskSegments = [process.cwd(), 'contents'].concat(urlSegments);
    var filePath = path.join.apply(null, [...diskSegments, 'index.html']);
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments, 'index.md']);
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.md';
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.html';
    }
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        const result = { props: { urlSegments: urlSegments, errorCode: 404 } }
        return result;
    }
    else {
        try {
            var content = fs.readFileSync(filePath, 'utf8');
            if (filePath.endsWith('.md')) {
                if (content.charCodeAt(0) == 65279) {
                    content = content.slice(1);
                }
                content = marked(content);
            }
            const result = { props: { urlSegments: urlSegments, content: content } };
            return result;
        } catch (e) {
            console.log(e);
            res.statusCode = 500;
            const result = { props: { urlSegments: urlSegments, errorCode: 500 } }
            return result;
        }
    }
}

export default index;

// algabra => 