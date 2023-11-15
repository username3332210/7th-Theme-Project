import React, {useState, useEffect} from 'react'

function Bookfolio() {
    const [theme, setTheme] = useState("");
    const mode = () => {
        theme === "darktheme" ? setTheme("lighttheme") : setTheme("darktheme")
    }
    useEffect(() => {
        document.body.className = theme
    }, [theme]);

    return (
        <>
            <div>
                {
                    theme === "darktheme" ? 
                    <button onClick={mode}>Enable Light Theme</button> :
                    <button onClick={mode}>Enable dark Theme</button>
                }
                <center>
                    <div className='txt'>
                        <h1>BOOKFOLIO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='img'>
                        <img src="./public/images/Book1.png" alt="" />
                        <img src="./public/images/Book1.png" alt="" />
                        <img src="./public/images/Book1.png" alt="" />
                    </div>
                </center>
            </div>
        </>
    )
}

export default Bookfolio








// thenary condition
// condition ? output1 : output2