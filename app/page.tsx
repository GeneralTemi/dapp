import React from 'react'

const Home = () => {
    return (
        <div className="w-screen h-screen m-0 p-0 overflow-hidden">
            <iframe
                src="/static-contents/index.html"
                title="Static Content"
                style={{
                    width: '100vw',
                    height: '100vh',
                    border: 'none',
                }}
            ></iframe>
        </div>
    )
}

export default Home