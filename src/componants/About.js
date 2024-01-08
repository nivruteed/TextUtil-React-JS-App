import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
        
    // })

    let myStyle = {
        color : props.mode === 'dark' ? 'white':'black',
        backgroundColor : props.mode === 'dark' ? '#042347':'white',
        
    }
   
    return (

        <div className="container " style={myStyle}>
            <h2 className="my-3">About us</h2>
            <div className="accordion " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <>This is a versatile React app designed for effortless text transformation and analysis. With features like case transformation, clear text functionality, 
                            and real-time word and character count, this user-friendly tool simplifies text processing. Additionally, the app offers dark and light modes for a personalized visual experience.
                             Perfect for writers, students, and professionals, "Analyse Your Text" streamlines the way you interact with textual content.</>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <st> This is a free-to-use React application that empowers users to effortlessly transform and analyze their text. 
                                This versatile tool comes with a range of features, including case transformation, clear text functionality, and real-time word and character count.
                                 Whether you're a writer refining articles, a student preparing academic papers, or a professional analyzing textual data,
                                  this app provides a seamless and user-friendly experience at absolutely no cost. With the added convenience of dark and light modes, 
                                  "Analyse Your Text" offers a personalized and visually comfortable environment for users of all kinds.
                                   Enjoy the freedom to enhance your text processing without any financial constraints.</st>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong> Browser-compatiblity</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <str>  This is meticulously designed to be browser-compatible, ensuring a smooth and consistent experience across various web browsers. 
                                Whether you prefer Chrome, Firefox, Safari, or any other modern browser, our React application is optimized for compatibility. 
                                Enjoy the flexibility to access and utilize the app seamlessly, regardless of your browser preference.
                                 We prioritize user accessibility, making "Analyse Your Text" a reliable and responsive tool for everyone.</str>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
