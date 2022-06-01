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
                    {/* <div className="card" >
                        <img className="card-img-top" src="assets/img/img1.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">100% cloud native health infrastructure for clinics, surgeries and hospitals.</p>
                        </div>
                    </div> */}
                    <div className="row">
                    <div className="col-lg-4">
                            <div class="card"  >
                                <img class="card-img-top" src="assets/img/img2.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">100% cloud native health infrastructure for clinics, surgeries and hospitals.</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card"  >
                                <img class="card-img-top" src="assets/img/img2.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">The technology challenge that confronts the health care industry is legacy systems.</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card"  >
                                <img class="card-img-top" src="assets/img/img2.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">With OX.DH, patients can securely access the care they need, accompanied by their health records.</p>
                                    </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Title</h5>
                                    {/* <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p> */}

                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Start Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Brandon Jacob</td>
                                                <td>Designer</td>
                                                <td>28</td>
                                                <td>2016-05-25</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bridie Kessler</td>
                                                <td>Developer</td>
                                                <td>35</td>
                                                <td>2014-12-05</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ashleigh Langosh</td>
                                                <td>Finance</td>
                                                <td>45</td>
                                                <td>2011-08-12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Angus Grady</td>
                                                <td>HR</td>
                                                <td>34</td>
                                                <td>2012-06-11</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Raheem Lehner</td>
                                                <td>Dynamic Division Officer</td>
                                                <td>47</td>
                                                <td>2011-04-19</td>
                                            </tr>
                                        </tbody>
                                    </table>


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