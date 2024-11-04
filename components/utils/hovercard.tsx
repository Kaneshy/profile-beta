import React from 'react'

const Hovercard = () => {

  const array = [1, 2, 3]
  return (
    <section >
      <div className="container ">
        {array.map((x, index) => (
          <div className="card" key={index}>
            <div className="content">
              <div className="imgBx flex items-center justify-center" >
                <img alt="" src="https://res.cloudinary.com/dztz492su/image/upload/v1729363703/books/hpwt6m5zpodhwgudvomg.png" />
              </div>
              <div className="contentBx">
                <h3>Lion<br /><span>Happy Birthday</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="">Artis Name</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hovercard

