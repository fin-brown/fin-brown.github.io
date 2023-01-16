<script>

    let openTab = 1;
    
    function toggleTabs(tabNumber){
      openTab = tabNumber
    }
    
</script>
    
<div class="flex flex-wrap m-5">
    <div class="w-full">
        <ul class="relative flex -mb-2 list-none flex-wrap pt-3 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center {openTab === 1 ? 'z-10' : 'z-0'}">
                <a class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 block rounded-t-xl border border-solid border-4 leading-normal tracking-wider {openTab === 1 ? 'text-white bg-theme2 border-theme2 pb-2 mb-1':'text-theme3 bg-white border-theme1 hover:pt-4 hover:mt-0'}" on:click={() => toggleTabs(1)}>
                    Experience
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center {openTab === 2 ? 'z-10' : 'z-0'}">
                <a class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 rounded-t-xl block border border-solid border-4 leading-normal tracking-wider {openTab === 2 ? 'text-white bg-theme2 border-theme2 pb-2 mb-1':'text-theme3 bg-white border-theme1 hover:pt-4 hover:mt-0'}" on:click={() => toggleTabs(2)}>
                    Skills
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center {openTab === 3 ? 'z-10' : 'z-0'}">
                <a class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 rounded-t-xl block border border-solid border-4 leading-normal tracking-wider {openTab === 3 ? 'text-white bg-theme2 border-theme2 pb-2 mb-1':'text-theme3 bg-white border-theme1 hover:pt-4 hover:mt-0'}" on:click={() => toggleTabs(3)}>
                    Education
                </a>
            </li>
        </ul>
        <div class="relative z-1 -mt-px flex flex-col min-w-0 break-words shadow-t-3xl bg-gradient-to-b from-theme2 via-white to-white w-full mb-6 rounded-b-xl {openTab === 1 ? 'rounded-tr-xl' : openTab === 3 ? 'rounded-tl-xl' : 'rounded-t-xl'}">
            <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                    <!--- Experience -->
                    <div class="{openTab === 1 ? 'block':'hidden'} mx-5">
                        <!-- Lake Parime -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 mt-10 mb-3">
                            <div class="h-full">
                                <a href="https://www.lakeparime.com" class="text-3xl">Lake Parime</a>
                            </div>
                            <div class="h-full text-xl">Feb. 2021 - Present</div>
                        </div>

                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li class="my-2">Applied technical analytical skills across a range of commercially-oriented roles in a high-growth renewable tech start-up that helps renewable generators monetise undervalued clean energy</li>
                            <li class="my-2"><b>Data Science</b>: developed over-arching data strategy, implemented Google Cloud streaming architecture, lead data-driven product development, designed a Deep Q Learning model to strategise maintenance, conducted sector thought-leadership <a href="/articles">research</a></li>
                            <li class="my-2"><b>Product Management</b>: worked with the Chief Product Officer to create a 2-year development strategy and roadmap for product</li>
                            <li class="my-2">Integral part of cross-functional team responsible for Series A capital raise, leading intro meetings, creating corporate financial models and single-handedly creating all marketing materials (link?)</li>
                        </ul>

                        <!-- Consilium -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 mt-10 mb-3">
                            <div class="h-full">
                                <a href="https://consilium-scientific.org/" class="text-3xl">Consilium Scientific</a>
                            </div>
                            <div class="h-full text-xl">Sep. 2020 - Feb. 2021</div>
                        </div>

                        Fixed-term contract to assist an academic medical research start-up with data acquisition, cleaning, analysis and visualisation

                        <!--- Point72 -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 mt-10 mb-3">
                            <div class="h-full">
                                <a href="https:point72.com" class="text-3xl">Point72 Asset Management</a>
                            </div>
                            <div class="h-full text-xl">2017</div>
                        </div>

                        Two-month internship in a long/short equities team integrating novel alternative data sources into the existing investment process
                        
                        <!-- Cantab -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 mt-10 mb-3">
                            <div class="h-full">
                                <a href="https://en.wikipedia.org/wiki/Cantab_Capital_Partners" class="text-3xl">Cantab Capital Partners</a>
                            </div>
                            <div class="h-full text-xl">2015, 2016</div>
                        </div>

                        <ul class="list-disc list-outside pl-5">
                            <li class="my-1">Two internships spanning 6 months in the Quantitative Science team</li>
                            <li class="my-1">Researched and implemented a new trading signal for illiquid commodities futures</li>
                            <li class="my-1">Upgraded trading systems to introduce a new asset class to the existing asset universe</li>
                        </ul>
                    </div>
                    <!--- Skills -->
                    <div class="{openTab === 2 ? 'block':'hidden'}">
                        <h2>Data Science</h2>
                        <p>
                            <li><b>Deep Learning</b>: a</li>
                            <li><b>Statistics and Data Analysis</b>: a</li>
                            <li><b>Visualisation</b>:b</li>
                        </p>
                        <br>
                        <h2>Data Architecture and Cloud Computing</h2>
                        <p>
                            <li><b>Databases</b>: a</li>
                            <li><b>Cloud Data Architecture</b>: a</li>
                            <li><b>Distributed Computing</b>: a</li>
                        </p>
                        <br>
                        <h2>Business Development</h2>
                        <p>
                            <li>Passionate about business development and innovation (waffle)</li>
                            <li>2+ years experience in roles spanning a high-growth renewable tech start-up, including in Product Management and Capital Services</li>
                            <li>Worked on a Series A capital raise, leading intro meetings, creating corporate financial models and single-handedly creating all marketing materials (link?)</li>
                        </p>
                        <br>
                        <h2>Software Development</h2>
                        <p>
                            <li><b>Python</b>:</li>
                            <li><b>R</b>: d</li>
                            <li><b>SQL</b>:</li>
                            <li>Front-end development</li>
                            <li>I'm currently developing a Rasberry Pico controller-based smart home</li>
                        </p>
                    </div>
                    <!-- Education -->
                    <div class="{openTab === 3 ? 'block':'hidden'}">
                        <h2>Data Science, MSc; London School of Economics</h2>
                        <p>
                            <li>Modules of study included <i>Machine Learning and Data Mining</i>, <i>Managing and Visualising Data</i>, <i>Deep Learning and AI</i>, <i>Distributed Computing for Big Data</i>, and <i>Bayesian Machine Learning</i></li>
                            <li>Published a dissertation in partnership with <a href="https://www.linkedin.com/company/telefonica-innovacion-alpha/">Alpha Telefónica</a> that introduced a novel temporal deep learning architecture to predict psychological outcomes in subjects from passive sensory data collected via smart phones</li>
                            <li>Other <a href="/projects">projects</a> included implementing a distributed algorithm for Neural Word Embeddings, exploring and implementing Convolutional Neural Network visualisation techniques</li>    
                        </p>
                        <br>
                        <h2>Statistics, Economics and Finance, BSc; University College London</h2>
                        <p>
                            <li>Study focussed on statistical estimation, modelling, practical data models, fundamentals of economics, and stochastic financial pricing methods</li>
                            <li>Awarded a place on the <a href="https://www.ucl.ac.uk/mathematical-physical-sciences/about-faculty/faculty-prizes/deans-list-commendees">2018 Mathematical and Physical Sciences Dean's List</a>(note on Michael)</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>