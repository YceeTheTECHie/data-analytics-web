import React from 'react';
import { Link } from 'react-router-dom';
import whatdata from '../../images/whatdata.jpg';

const Article2 = () => (

    <div className="container foreground">
        <div className="row">
            <div className="col-lg-12">
                <div className="bs-component">
                    <article>
                        <h3 className="text-center">Data Scientist or Data Analyst</h3>
                        <p>So, what’s the difference between data scientists and data analysts? The definitions of these roles can vary, but it’s usually believed that a data scientist combines three key disciplines — data analysis, statistics, and Machine Learning. Machine learning involves the process of data analysis to learn and generate analytical models that can perform intelligent action on unseen data, with minimal human intervention. With such expectations, it’s clear that three-in-one is better than one-in-one, and data scientists become more desired by companies.

                        But wait…is it possible for somebody to be perfect in all three roles? Even more, do all these roles require similar skills? Or are the skills and approaches used by, let’s say, data analysts and machine learning engineers totally different?

                        In fact, the approaches of these specialists do differ significantly. Cassie Kozyrkov, Chief Decision Scientist at Google, provides a brilliant explanation of this difference. She claims that data analysts are in the company to provide quick results — for example, analyzing interesting correlations in data.

                        To meet the expectations of the decision-makers about quick and short answers, data analysts use the corresponding coding style — using fewer lines of code and producing an easy-to-interpret correlation matrix for the manager. Machine learning engineers have a totally different coding style—their goal is to build a “perfect” model, and this usually takes lots, and lots, and lots of time.

                        Statisticians also cannot provide quick results—they’ll say: “Wait, wait! We cannot draw any causal relationships from this data. We don’t even know if the results are statistically significant!” Yes, sometimes you’ll need statisticians or data scientists that are good at statistics to answer this kind of question. But do you really need these answers just to get an idea about correlations in the data?

                        Actually, no. After getting preliminary results from a data analyst, you should engage a domain expert, who can decide which of the identified patterns are indeed important for business and worth further investigation. So, as you can see, it’s better to have an opinion from a domain expert after preliminary data analysis and before in-depth hypothesis testing — something that is hard to arrange when the same person performs data analysis and in-depth testing of revealed patterns.

You can probably already see that data analysts are in some cases even more desired than data scientists. But let’s now clarify what kind of skills a data analyst should have to satisfy the needs of decision-makers and become an asset for an organization.</p>
                            <div className="author">
                                    <img src={whatdata} className="author-image" alt ="mandata"/><span className="author-name"></span>
                            </div>
                        <h3 className="text-center">What Kind of Data Analysts Do Organizations Really Need?</h3>
                        <p>The main role of data analysts in an organization is to help decision-makers by identifying interesting and important patterns in data and providing quick answers buried in tons of tables, graphs, and log files. In a nutshell, data analysts identify  areas where you may need the attention of statisticians and machine learning engineers if domain expert finds these areas important.
                            So, here are the qualities you want to see in a data analyst: Data storytelling: A good data analyst can read data and tell exciting stories around what’s. Data experts never go beyond data and always allow for a multitude of possible interpretations. For example, they can say: “It looks like we got more leads after we introduced our last advertising campaign on Facebook. This may be a signal about the effectiveness of this campaign, but the growth in the number of leads could also be due to seasonal variations.
                            More in-depth analysis is required.”</p>
                        <p><strong>Data visualization skills:</strong> The ability to create visually appealing, meaningful, and easy-to-interpret graphs is also very important for data analysts. The story always benefits from great visualizations, which make the life of a decision-maker much easier.Technical expertise: A professional data analyst can provide you with insights that are hidden in your data, using nothing more than spreadsheets. However, in order to provide fast results and create professional visualizations, data analysts will usually need technical expertise beyond spreadsheets.
                </p>

                        <p><strong>Coding style optimized for speed:</strong> You don’t need a data analyst to have the same programming skills as software engineers or machine learning engineers. Data analysts should know how to clean data using Python, how to perform data analysis, and how to present information with clear visualizations and tables.

There are some very good courses available online that teach exactly these skills. In addition, data analysts should be familiar with the most popular packages created for data analysis and use these packages to analyze data efficiently.</p>

                        <h3 className="text-center">Every Company Needs a Data Analyst</h3>

                        <p>If managers of an organization make data-driven decisions, that organization definitely needs a data analyst. Companies that are lucky enough to find a good specialist with the above-mentioned skills will have an expert for:

                        collecting the right kind of data.
                        cleaning the data.
                        performing data analysis.
                        presenting information with nice and meaningful visualizations.
                        discovering interesting patterns in data, and providing insights that may require further attention from statisticians and machine learning engineers.
when performing analysis.</p>
                        <br/>
                        <p>To sum up, a good data analyst is a primary assistant to decision-makers that translates data into meaningful stories, provides quick answers to difficult questions, and drives business in the right direction.</p>
                        <div className="horizontal-center">
                        
                            <div className="date-published">
                                <p><a href="https://dzone.com/articles/why-every-organization-needs-a-data-analyst">Read full article</a></p>
            </div>
                        </div>
                    </article>
                </div>

  <ul className="pager">
                    <li className="previous"><Link to="/article1">← Older</Link></li>
                    <li className="next"><Link to="/article3">Newer →</Link></li>
                </ul>

            </div>
        </div>
    </div>
);

export default Article2;