import React from 'react';
import look from '../../images/960.jpg';
import { Link } from 'react-router-dom';
const Article1 = () => (
    <div className="container foreground">
  <div className="row">
    <div className="col-lg-12">
      <div className="bs-component">
          <article>
                        <h3 className="text-center"> WHAT DATA ANALYTICS WILL LOOK LIKE IN 2021 - AND HOW TO CAPITALIZE ON IT</h3>
                          <div className="author">
                <img src={look} className="author-image" alt="tablet"/><span className="author-name"></span>
            </div>  
          <p>2020 has been a tumultuous year for many companies, but one area that has seen consistent and significant growth despite economic uncertainty and market volatility has been data analytics. Without the right tools or materials, a builder can’t properly construct a house, and without the right data and market insights, a company cannot make the best decisions. Consumers’ rapidly shifting needs are pushing companies across all sectors to need to pivot their strategies constantly in order to stay relevant and drive revenues - and the best way to do this is through data and analytics.</p>
                        <h3 className="text-center"> MAJOR TRENDS THAT WILL FLOURISH IN ADVANCED ANALYTICS MARKET IN 2021</h3>

          <p><strong>1. Cost-saving measures</strong> : will lead to a lesser reliance on consulting firms because they are expensive, slow, and moment-in-time oriented. Optimization is key. 2020 was the year of workforce disruption, and 2021 will be the year of recovery and driving efficiencies with automation and a better use of internal resources. It will not just be about collecting data, but rather about taking that data and putting it into action. The drastic shift to e-commerce, direct-to-consumer retail, and changing consumer purchase behaviors will increase the dependency on data and analytics as opposed to consuming one-time reports because of the need to constantly respond to changing market dynamics.</p>

          <p><strong>2. Consumer product companies</strong> :  will look at data from a cross-category perspective, rather than focusing just on their own sector. For example, beverage managers have to look at the entire beverage ecosystem to understand larger trends. Perhaps keto is impacting beverage categories and a manufacturer can take an ingredient from a food product and introduce it to a new beverage that will cater to keto consumers. Brands will look beyond what customers think of a product or brand to the topic in general and the associations they are making.</p>

          <p><strong>3. Organizations will want to have access to and utilize more data sources such as call centers, chatbots and other customer points of contact.</strong> In doing so, businesses will be more challenged to establish a single source of truth. This is an unarticulated unmet need, and to be successful, organizations must have the right mindset when it comes to their adoption of advanced analytics. This will also drive more data ecosystem partnerships where a full solution set and holistic practices come together - data science, analysts, technology vendors with AI and NLP capabilities, and data connectors.</p>

          <p><strong>4. Data will be perceived more as a company asset that can either be monetized to other companies or become a significant value-add in how a company operates, delivers and aligns with customer needs.</strong>  Companies will want to own and manage their own data as opposed to outsourcing or relying on third parties to source data for them and only provide insights.</p>

          <p><strong>5. The Chief Data Officer role will become more prominent, and with that, budgets that are specifically devoted to data and analytics will increase as well.</strong> Already in 2020, while many companies were scaling back on their IT spend in the wake of the pandemic, data and analytics was one of the few areas to see expanded spend, and this is expected to continue in 2021. An extension of this is the rise of the Decision Science role, whose job is to take the insights extracted by data scientists and transform them into actionable business decisions.</p>

          <div className="horizontal-center">
          
                                        <div className="date-published">
                                <p><a href="https://www.nasdaq.com/articles/what-data-analytics-will-look-like-in-2021-and-how-to-capitalize-on-it-2020-11-19">Read Full Article</a></p>
                            </div>
          </div>
        </article>
      </div>

                <ul className="pager">
                    {/* <li className="previous"><Link to="/article">← Older</Link></li> */}
                    <li className="next"><Link to="/article2">Newer →</Link></li>
                </ul>

    </div>
  </div>
</div>

);

export default Article1;