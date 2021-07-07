const fs = require('fs');
const path = require('path');
import Error from 'next/error'

const index = ({ urlSegments, content, errorCode }) => {

    if (errorCode) {
        return <Error statusCode={errorCode} />
    }

    if (urlSegments.length == 0) {
        return <div>home page</div>
    }

    return <>
        {
            urlSegments?.map(item =>
                <div key={item}>{item}</div>
            )
        }
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
}

export async function getServerSideProps({ params, res }) {
    const urlSegments = params.path || [];
    const diskSegments = [process.cwd(), 'contents'].concat(urlSegments);
    var filePath = path.join.apply(null, [...diskSegments, 'index.html']);
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.md';
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...diskSegments]) + '.html';
    }
    if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        const result = { props: { urlSegments: urlSegments, errorCode: 404 } }
        return result;
    }
    else {
        try {
            var content = fs.readFileSync(filePath, 'utf8');
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