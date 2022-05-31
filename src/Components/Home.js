import React from 'react'
import Content from './Content';

export function Home() {
    const Data = [{}, {}, {}, {}];
    return (
        <div >
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Home Page</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="card" >
                        <img className="card-img-top" src="assets/img/img1.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">100% cloud native health infrastructure for clinics, surgeries and hospitals.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Example Card</h5>
                                    <img className="card-img-top" src="assets/img/img2.png" alt="Card image cap" />
                                    <p>The technology challenge that confronts the healthcare industry is legacy systems.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Example Card</h5>
                                    <img className="card-img-top" src="assets/img/img3.png" alt="Card image cap" />

                                    <p>With OX.DH, patients can securely access the care they need, accompanied by their health records.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            {/* <div className="">
          {Data.map((data) => (
            <Content />
          ))}
        </div> */}
        </div>
    );
}
export default Home;