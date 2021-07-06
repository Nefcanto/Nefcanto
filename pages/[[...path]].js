const fs = require('fs');
const path = require('path');

const index = (props) => {
    const path = props.path;

    return (
        <>
            {
                path.length == 0
                    ?
                    <div>home page</div>
                    :
                    path?.map(item => <div key={item}>{item}</div>)
            }
        </>
    );
}

export async function getServerSideProps(context) {
    const urlPaths = context.params.path || [];
    var filePath = path.join.apply(null, [...urlPaths, 'index.html']);
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...urlPaths, '.md']);
    }
    if (!fs.existsSync(filePath)) {
        filePath = path.join.apply(null, [...urlPaths, 'index.html']);
    }
    const content = "";
    fs.readFileSync(__dirname + '/../contents/' + filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            content = data;
        }
    });
    return { props: { path: urlPaths, content: contnet } }
}

export default index;