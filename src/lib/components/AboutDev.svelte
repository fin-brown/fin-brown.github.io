<script>

    let openTab = 1;
    
    function toggleTabs(tabNumber){
      openTab = tabNumber
    }
    
</script>
    
<div class="flex flex-wrap">
    <div class="w-full">
        <ul class="relative flex -mb-2 px-40 bg-theme1 list-none flex-wrap pt-3 flex-row">
            <li class="-mb-px text-theme1 mr-2 last:mr-0 flex-auto text-center {openTab === 1 ? 'z-10' : 'z-0'}">
                <p class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 block bg-white rounded-t-xl border-solid border-t-4 border-r-4 border-l-4 leading-normal tracking-wider {openTab === 1 ? 'text-theme2 border-theme2 pb-[11px] mb-1':'text-theme3 border-theme3 hover:pt-3 hover:mt-0'}" on:click={() => toggleTabs(1)}>
                    Experience
                </p>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center {openTab === 2 ? 'z-10' : 'z-0'}">
                <p class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 block bg-white rounded-t-xl border-solid border-t-4 border-r-4 border-l-4 leading-normal tracking-wider {openTab === 2 ? 'text-theme2 border-theme2 pb-[11px] mb-1':'text-theme3 border-theme3 hover:pt-3 hover:mt-0'}" on:click={() => toggleTabs(2)}>
                    Skills
                </p>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center {openTab === 3 ? 'z-10' : 'z-0'}">
                <p class="text-s font-bold uppercase px-5 pb-4 pt-3 mt-1 block bg-white rounded-t-xl border-solid border-t-4 border-r-4 border-l-4 leading-normal tracking-wider {openTab === 3 ? 'text-theme2 border-theme2 pb-[11px] mb-1':'text-theme3 border-theme3 hover:pt-3 hover:mt-0'}" on:click={() => toggleTabs(3)}>
                    Education
                </p>
            </li>
        </ul>
        <div class="relative z-1 -mt-px flex flex-col min-w-0 break-words shadow-t-3xl bg-white border-solid border-t-4 border-theme2 w-full mb-6">
            <div class="px-4 py-5 flex-auto">
                <div class="tab-content mx-36 tab-space">
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

                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!-- Consilium -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 my-3">
                            <div class="h-full">
                                <a href="https://consilium-scientific.org/" class="text-3xl">Consilium Scientific</a>
                            </div>
                            <div class="h-full text-xl">Sep. 2020 - Feb. 2021</div>
                        </div>

                        Fixed-term contract to assist an academic medical research start-up with data acquisition, cleaning, analysis and visualisation

                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!--- Point72 -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 my-3">
                            <div class="h-full">
                                <a href="https:point72.com" class="text-3xl">Point72 Asset Management</a>
                            </div>
                            <div class="h-full text-xl">2017</div>
                        </div>

                        Two-month internship in a long/short equities team integrating novel alternative data sources into the existing investment process
                        
                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!-- Cantab -->
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 my-3">
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

                        <!-- Data Science -->
                        <div class="text-3xl text-theme1 mt-10 mb-3">Data Science</div>
                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li class="my-2"><b>Deep Learning</b>: Extensive experience designing and deploying Deep Learning models across a number of contexts, including LSTMs and Collaborative Learning for timeseries regression, Generative Adversarial Networks for novel art generation, Natural Language Processing, and Deep Q Reinforcement Learning for maintenace strategisation.</li>
                            <li class="my-2"><b>Statistics and Statistical Modelling</b>: 4 years' academic study of statistical foundations of modelling, with expertise in timeseries, Bayesian machine learning, graphical networks and probability theory.</li>
                            <li class="my-2"><b>Visualisation and Presentation</b>: Passionate about leveraging effective communication of data-derived insight to drive real business impact.</li>
                        </ul>

                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!-- Data Arch -->
                        <div class="text-3xl text-theme1 mt-10 mb-3">Data Architecture and Cloud Computing</div>
                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li><b>Databases</b>: Extensive experience managing and using SQL and NoSQL databases including PostgreSQL and MongoDB.</li>
                            <li><b>Cloud Data Architecture</b>: Designed and implemented a real-time data streaming architecture in Google Cloud using Kafka, PubSub, Dataflow and BigQuery, to read and write Gigabytes of data daily from IoT devices.</li>
                            <li><b>Distributed Computing</b>: Experience PySpark on Google Cloud, SparkSQL, GraphX, running MapReduce computations in Hadoop and PySpark, HDFS and Hive.</li>
                        </ul>

                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!-- Bus Dev -->
                        <div class="text-3xl text-theme1 mt-10 mb-3">Innovation & Business Development</div>
                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li>Passionate about finding and executing innovative business solutions to important problems, whether at an organisation level, team level or individual level.</li>
                            <li><b>Start-ups</b>: 2+ years' experience in roles spanning a high-growth, renewable tech start-up, including in Product Management and Capital Services.</li>
                            <li><b>Capital Raising</b>: Experience working on a Series A capital raise, leading intro meetings, creating corporate financial models and single-handedly creating all marketing materials.</li>
                        </ul>
                        
                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <!-- Software -->
                        <div class="text-3xl text-theme1 mt-10 mb-3">Software Development</div>
                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li><b>Python</b>: 8+ years' experience using Python across multiple contexts with expertise in data science libraries including TensorFlow, Keras, Sci-Kit Learn, Pandas and Matplotlib.</li>
                            <li><b>R</b>: 3+ years' experience using R for data analysis, primarily in an academic setting.</li>
                            <li><b>SQL</b>: 5+ years' experience using SQL for data querying in both academia and industry.</li>
                            <li>Experience working with systems written in Go, JavaScript, C++.</li>
                            <li><b>Front-end development</b>: I built this website from scratch using SvelteKit and Tailwind CSS.</li>
                        </ul>
                    </div>
                    <!-- Education -->
                    <div class="{openTab === 3 ? 'block':'hidden'}">
                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 my-3">
                            <div class="h-full text-3xl">MSc Data Science</div>
                            <div class="h-full text-xl">London School of Economics</div>
                            <div class="h-full text-xl">2019 - 2020</div>
                        </div>
                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li>Modules of study included <i>Machine Learning and Data Mining</i>, <i>Managing and Visualising Data</i>, <i>Deep Learning and AI</i>, <i>Distributed Computing for Big Data</i>, and <i>Bayesian Machine Learning</i></li>
                            <li>Published a dissertation in partnership with <a href="https://www.linkedin.com/company/telefonica-innovacion-alpha/">Alpha Telefónica</a> that introduced a novel temporal deep learning architecture to predict psychological outcomes in subjects from passive sensory data collected via smart phones</li>
                            <li>Other <a href="/projects">projects</a> included implementing a distributed algorithm for Neural Word Embeddings, exploring and implementing Convolutional Neural Network visualisation techniques</li>    
                        </ul>

                        <hr class="h-[3px] my-10 bg-theme2 border-0">

                        <div class="flex flex-row w-full justify-between items-baseline text-theme1 my-3">
                            <div class="h-full text-3xl">BSc Statistics, Economics & Finance, BSc</div>
                            <div class="h-full text-xl">University College London</div>
                            <div class="h-full text-xl">2015 - 2018</div>
                        </div>

                        <ul class="list-disc list-outside pl-5 font-extralight">
                            <li class="my-1">Study focussed on statistical estimation, modelling, practical data models, fundamentals of economics, and stochastic financial pricing methods</li>
                            <li class="my-1">Awarded a place on the <div class="group flex relative">
                                    <a href="https://www.ucl.ac.uk/mathematical-physical-sciences/about-faculty/faculty-prizes/deans-list-commendees">2018 Mathematical and Physical Sciences Dean's List</a>
                                    <span class="group-hover:opacity-100 transition-opacity bg-theme1 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                                    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Tooltip</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>