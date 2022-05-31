import React from 'react'

export default function Content() {
    return (
        <div>
            <div className="card">
                <div className="card_image">
                    <img
                        className="image"
                        src="https://picsum.photos/500/300/?image=10"
                    />
                </div>
                <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card grid layout
                    </p>
                </div>
            </div>
        </div>
    )
}
