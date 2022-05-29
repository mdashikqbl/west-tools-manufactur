import React from 'react';

const Portfolio = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-secondary text-5xl font-bold'>!--ABOUT--ME--!</h1>
            <div class="hero min-h-screen bg-base-200">

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='ml-28' src="https://i.ibb.co/zQq57QV/profile.png" class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-2/5 mr-40'>
                        <h1 class="text-5xl font-bold text-primary">MD ASHIK IQBAL</h1>
                        <h1 class="text-3xl py-5 font-bold text-primary">Junior Web Developer</h1>
                        <p class="py-6 text-xl text-secondary">

                            To execute a responsible position where I could use my technical & interpersonal skills, creativity and above all learning experience in order to develop my career and as well to contribute in the welfare of the organization

                            .</p>
                        <a target="_blanck" href="https://www.linkedin.com/in/ashik-iqbal-82b8a1179">  <button class="btn btn-primary">Expoler Me</button></a>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-200">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div className=' w-96 flex lg:flex-col  justify-center'>
                        <progress class="progress progress-primary w-96" value="0" max="100"></progress>
                        <progress class="progress progress-primary mt-3 w-96" value="10" max="100"></progress>
                        <progress class="progress progress-primary mt-3 w-96" value="40" max="100"></progress>
                        <progress class="progress progress-primary mt-3 w-96" value="70" max="100"></progress>
                        <progress class="progress progress-primary mt-3 w-96" value="100" max="100"></progress>
                    </div>
                    <div className='w-2/5 mr-44'>
                        <h1 className=' mb-3 uppercase text-5xl font-bold  '>TECHNICAL Skills:</h1>
                        <p className='text-3xl text-secondary font-semibold'>⦁HTML</p>
                        <progress class="progress progress-primary  w-96" value="100" max="100"></progress>
                        <p className='text-3xl text-secondary font-semibold'>⦁CSS</p>
                        <progress class="progress progress-primary  w-96" value="100" max="100"></progress>
                        <p className='text-3xl text-secondary font-semibold'>⦁JAVASCRIPT</p>
                        <progress class="progress progress-primary mt-3 w-96" value="40" max="100"></progress>
                        <p className='text-3xl text-secondary font-semibold'>⦁REACT</p>
                        <progress class="progress progress-primary mt-3 w-96" value="70" max="100"></progress>

                        <h1 class="text-5xl py-6  font-bold">COURSES & TRAINING</h1>
                        <p>⦁ Programming Hero</p>
                        <p class="py-6">⦁ JCF Technical Institute: I am successfully completed a 90 days-long training programed under of Digital Marketing.
                        </p>
                        <h1 class="text-5xl font-bold">COMPUTER SKILLS:</h1>
                        <p className='py-6'>
                            ⦁	Operating System:  Familiar with Operating System Windows 2000
                            Professional, Windows XP, Windows-7, Windows-8, Windows-10.
                        </p>
                        <p>⦁	Application Package:   Proficient in working with Microsoft Office Program.
                        </p>
                        <p>
                            ⦁	Excellent computer skill and internet knowledge, Virtual Assistant, Lead Generation, Data Entry, Data Scraping, Data Mining, YEP Scraping, B2B, e-mail, Affilite Marketing and etc.

                        </p>


                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' flex justify-center  justify-around'>
                    <div>
                        <h1 className=' mx-auto text-5xl font-bold mt-5 '>EDUCATION:</h1>
                        <h1 className='text-3xl font-bold py-3'>SSC:</h1>
                        <p >board of secondary eduction : Jashore</p>
                        <p>Name of School	:	Aliarpur Aziz Secondary School</p>
                        <p>Passing Year	:	2017</p>
                        <p>GPA	:	3.59 Out of 5.00</p>
                        <p> Group :  Humanities</p>
                    </div>
                    <div className='mt-16 w-full ml-12'>
                        <h1 className='text-3xl font-bold py-3'>HSC:</h1>
                        <p >board of secondary eduction : Jashore</p>
                        <p>Name of College	:	Badargonj College</p>
                        <p>Passing Year	:	2019</p>
                        <p>GPA	:	4.50 Out of 5.00</p>
                        <p> Group :  Humanities</p></div>
                </div>
            </div>
            <div>
                <h1 className=' text-secondary mt-12 text-center text-5xl font-bold '>CONTACTS & ADDRESS:</h1>
                <footer class=" mt-12 footer p-10  text-base-content">
                    <div className='ml-32 no-underline '>
                        <span class="footer-title">PERSONAL INFORMATION</span>
                        <li class=" link link-hover">NAME:ASHIK IQBAL</li>
                        <li class="link link-hover">DATE OF BIRTH:22/04/2000</li>
                        <li class="link link-hover">BRITH PLACE:JHENAIDAH</li>
                        <li class="link link-hover">PRESENT ADDRESS:MATIKUMRA,SHADUHATI,JHENAIDAH</li>
                        <li class="link link-hover">NATIONALITY:BANGLADESHI</li>
                        <li class="link link-hover">NID NO:4660801035</li>
                        <li class="link link-hover">GANDER:MALE</li>
                        <li class="link link-hover">HEIGHT:5.6</li>
                        <li class="link link-hover">RELIGION:ISLAM</li>

                    </div>
                    <div>
                        <span class="footer-title">CONTACTS US</span>
                        <a class="link link-hover">CALL NO:01852517355</a>
                        <a class="link link-hover">EMAIL:mdashikqbl@gmail.com</a>
                        <a class="link link-hover">phone:2378659</a>
                        <a class="link link-hover"></a>
                    </div>
                    <div>
                        <span class="footer-title">MY PROJECT LINK</span>
                        <p>https://westtool-auth.web.app/</p>
                        <p>https://soft-werehouse.web.app/</p>
                        <p>https://service-car-auth.web.app/</p>
                        <p>https://expart-photographer-auth.web.app/</p>
                    </div>
                </footer>


            </div>
        </div>
    );
};

export default Portfolio;