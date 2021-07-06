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
    return { props: { path: context.params.path || [] } }
}

export default index;