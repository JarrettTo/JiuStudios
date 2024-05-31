import { Projects } from "@/types/projects";

const projectsData: Projects[] = [
  {
    id: 1,
    project_title: "AI powered SaaS tool for Influencer Marketing",
    brief_description: "Influencer Marketing SaaS tool that is now being used by multinational companies like Uber and Manscaped. They’re most popular for their  discovery tool that helps agencies find the latest and hottest talent for their brand campaigns by using AI to generate insights and reports on influencers that are otherwise not obtainable. It also serves as a CRM and tool for agencies to manage influencers and their profiles/ rates, as well as generate and track quotes intended for brand campaign partners, and collect live insights from their social media platforms using APIs.",
    tech_used: "React, NestJS, TypeORM, Postgres, Docker, AWS, Three.js, Traefik, Tailwind, Mantine, RNN, Tensorflow, Flask, BeautifulSoup",
    long_description: `Our client had a visionary idea to transform how influencer marketing agencies discover and manage talent using cutting-edge AI technology. They envisioned a comprehensive SaaS platform that not only served as a CRM but also integrated advanced AI-driven tools for influencer discovery, management, and performance analysis. Our task was to turn this concept into a fully functional reality.

    At Jiu Studios, we spearheaded the development of this innovative platform, choosing a robust tech stack to meet the complex demands of the project. Our front end was built using React for its responsive and dynamic user interfaces, while the backend was powered by NestJS, known for its scalability and efficiency. We used PostgreSQL for our database needs, managed via TypeORM for seamless data handling and operations.
    
    To enrich our platform with AI capabilities, we utilized Python for scraping vast amounts of data from popular social media platforms like TikTok, Instagram, and YouTube. This data was crucial for training our machine learning models. We employed TensorFlow to develop tailored neural network models that analyze influencer profiles, generating detailed reports on audience demographics and predicted campaign performance.
    
    Deployment was streamlined using Docker, ensuring our application was containerized and portable across any computing environment. Continuous integration and deployment were managed through GitHub Actions, which allowed us to automate our software development workflows. For hosting, we relied on AWS to leverage its powerful and scalable cloud infrastructure, with Traefik handling requests and load balancing to ensure optimal performance.
    
    Today, the platform is a vital tool for numerous influencer marketing agencies, including multinational companies like Uber and Manscaped. It's used daily by hundreds of users to discover new talent, manage influencer relations, and track the effectiveness of marketing campaigns through AI-generated insights and reports. This project not only validated our client's initial vision but also set a new standard in the influencer marketing industry for technological innovation and strategic talent management.
    `,
    image: "/images/projects/project_1.png",
    link: "/"
  },
  {
    id: 2,
    project_title: "AI Powered Sports Betting Application",
    brief_description: "We worked with a US based startup to develop a sports betting AI model which leverages 3 different types of AI models: ARIMA, XGB, and RNN to generate predictions given game and odds data. for NBA and MLB To retrieve data, we used a combination of APIs and scraping scripts and hooks. It also makes use of the Kelly Criterion which is a metric that bettors could use to maximize their risk: profit ratio. It boasts 71.1% max accuracy, and is being used by multiple DraftKings Sports Betting Alpha Groups in the U.S.",
    tech_used: "Next.js, Tailwind, RESTFUL API,  XGBoost, RNN, ARIMA, Stripe, MySQL ,Flask, Tensorflow, Docker, AWS, Nginx, Beautifulsoup",
    long_description: `We partnered with a U.S.-based startup to create an advanced sports betting AI platform, designed to elevate the betting strategies for NBA and MLB games. Our mission was to build a tool that not only provided accurate game predictions but also empowered users with smart risk management solutions.

    To achieve this, we deployed a trio of sophisticated AI models: ARIMA, XGB (XGBoost), and RNN (Recurrent Neural Networks). These models were meticulously trained to analyze historical game data and odds, enabling them to generate reliable game predictions. The integration of these models ensures that our platform covers various aspects of predictive analytics, from time-series forecasting to decision trees and deep learning techniques.
    
    Data is the backbone of any predictive model, and to ensure our AI had access to the most accurate and up-to-date information, we utilized a mix of API integrations and custom scraping scripts. These tools continuously fed our models with the latest game statistics and betting odds, maintaining the relevance and accuracy of our predictions.
    
    A standout feature of our platform is the implementation of the Kelly Criterion. This mathematical formula helps bettors determine the optimal amount to wager, maximizing their expected logarithm of wealth and thus enhancing their risk-to-profit ratio. It's a powerful tool that guides users in making more informed betting decisions based on the predicted probabilities.
    
    The technology stack was carefully chosen to support the high demands of real-time data processing and user interactions. We used Next.js and Tailwind for a responsive and intuitive user interface, RESTful APIs for seamless data integration, and Flask to serve our Python-based machine learning models. The backend was supported by MySQL, with TensorFlow powering our deep learning algorithms. Deployment was managed through Docker, with AWS for scalable cloud hosting and Nginx for robust server management. Beautifulsoup was instrumental in our data scraping efforts.
    
    Today, our platform boasts a maximum accuracy of 71.1% and is utilized by multiple DraftKings Sports Betting Alpha Groups across the U.S. It stands as a testament to how advanced AI can revolutionize even traditional domains like sports betting, providing users with a cutting-edge tool that significantly enhances their betting strategies.
    `,
    image: "/images/projects/project_2.png",
    link: "/"
  },
  {
    id: 3,
    project_title: "AI powered German e-Learning LMS platform for Corporate Software Tools",
    brief_description: "German tech company focused on providing an LMS platform for digital literacy and education to 40+ year olds by leveraging technologies such as AI and LLMs. Our team mainly focused on developing AI to assist users in learning Microsoft Office software through a chatbot, dialogue, or popup. We also built an OpenAI GPT4 AI tool for scanning emails for scams and teaching users proper practice for ensuring cybersecurity in the workspace.",
    tech_used: "OpenAI GPT4 API, OpenAI Assistant API, OpenAI Fine Tuned Models. PHP, Laravel,. phpMyAdmin, CSS, Google Cloud Platform",
    long_description: `We collaborated with a forward-thinking German tech company dedicated to enhancing digital literacy among adults over 40. This initiative aimed to bridge the technological gap by integrating advanced AI and machine learning solutions into a user-friendly Learning Management System (LMS) platform. Our focus was on developing intuitive educational tools that leveraged cutting-edge technology to facilitate learning and ensure cybersecurity.

    One of the standout features of the platform was the AI-powered assistant, designed to help users navigate and master Microsoft Office applications. Utilizing the OpenAI GPT-4 API, we developed a sophisticated chatbot that could engage in interactive dialogues and provide context-sensitive pop-up guidance. This AI assistant was finely tuned to understand the common challenges faced by older adults when learning new software, offering step-by-step assistance in a conversational manner that made digital learning less daunting and more accessible.
    
    In addition to software education, we addressed the critical need for cybersecurity training amidst rising cyber threats. We integrated OpenAI's GPT-4 technology to scan emails for potential scams, teaching users to identify and handle suspicious communications effectively. This tool was not only a preventive measure but also served as an educational resource, equipping users with the knowledge to maintain safety in their digital interactions.
    
    The backend of the platform was built using PHP with the Laravel framework, ensuring robust and scalable server-side logic. We managed the database operations through phpMyAdmin, providing a reliable and efficient system for storing and retrieving educational content and user data. All of these components were hosted on the Google Cloud Platform, which offered a secure, high-performance environment necessary for deploying AI-driven applications.
    
    Through this project, we successfully delivered an LMS that not only teaches practical software skills but also instills essential cybersecurity practices among its users. This venture into educational technology showcased our ability to blend AI innovations with user-centric design, creating a platform that empowers older adults to confidently navigate the digital world.
    `,
    image: "/images/projects/project_3.jpg",
    link: "/"
  },
  {
    id: 4,
    project_title: "eCommerce Marketplace for Hardware Tools and Supplies",
    brief_description: "Carousell-like startup that focuses on a platform built for selling large hardware units and supplies. They needed an MVP to validate and test with investors and potential partner hardware stores. This included a cart feature wherein sellers could purchase multiple varying products. from different stores Products also contained multiple variants and categories. Sellers could create separate pages with access that could be provisioned to multiple users. They could also manage all their listings and active orders.",
    tech_used: "Next.js, Tailwind, RESTFUL API,  MySQL, AWS, Docker",
    long_description: `We collaborated with a startup aiming to revolutionize the hardware industry by creating a Carousell-like marketplace specifically tailored for selling large hardware units and supplies. The primary objective was to develop a Minimum Viable Product (MVP) that could attract investors and establish partnerships with major hardware stores.

    The platform was designed to cater specifically to the needs of both individual sellers and large hardware suppliers, allowing them to list various products with multiple variants and categories. Recognizing the diverse needs of such a marketplace, we implemented a robust cart feature that enabled buyers to seamlessly purchase items from different sellers and stores in a single transaction, enhancing the user experience and mimicking the convenience of mainstream e-commerce platforms.
    
    To accommodate the operational needs of sellers, we developed a feature-rich dashboard. This dashboard allowed sellers to create and manage separate pages for their stores, where they could list products, track inventory, and handle orders. To ensure that larger suppliers could effectively manage their operations, we enabled the provision of access to multiple users under a single seller account, thereby facilitating team collaboration and division of responsibility within the platform.
    
    The technology stack was carefully selected to support the platform's requirements for scalability and flexibility. We utilized Next.js for the frontend to leverage its server-side rendering capabilities, enhancing SEO and ensuring a fast, responsive user interface. Tailwind CSS was chosen for its utility-first approach to design, which significantly sped up the development process while maintaining a sleek, modern look.
    
    For the backend, we employed RESTful APIs to ensure seamless communication between the frontend and server-side components. MySQL was used for database management due to its reliability and efficiency in handling complex queries over large datasets. The entire application was containerized using Docker, ensuring consistency across various development and production environments. Deployment was managed on AWS to take advantage of its robust, scalable infrastructure.
    
    By delivering this MVP, we provided the startup with a solid foundation to test their business model, attract investment, and begin scaling operations. This project not only demonstrated our ability to turn a visionary idea into a tangible product but also underscored our expertise in building complex, scalable marketplaces that meet specific industry needs.    
    `,
    image: "/images/projects/project_4.png",
    link: "/"
  },
  {
    id: 5,
    project_title: "AI powered Event Curation and Matching",
    brief_description: "Local startup that aims to serve as a platform that curates events and experiences for its users. Users can register and take a personality exam, and the AI model will cluster users that it believes will be compatible with each other. These clusters will then be sent to the appropriate event organizers who can also sign up on the platform. They will then create monetized events that cater to the cluster of users. The platform will then receive a portion of the ticket sales.",
    tech_used: "DBSCAN, Next.js, Tailwind, Docker, AWS, Tyepform API, RESTful API, MySQL, TypeORM, OpenAI API",
    long_description: `We partnered with an innovative local startup aimed at revolutionizing the way people discover and engage with events and experiences tailored to their personalities. The startup's vision was to leverage advanced AI to create a dynamic platform that not only curates events but also fosters community by connecting like-minded individuals.

    Our primary goal was to develop an intuitive platform where users could register and complete a personality exam. Using the DBSCAN clustering algorithm, a renowned technique for its effectiveness in identifying high-density areas in data, our AI model analyzed personality test results to group users with similar interests and behaviors. These clusters were designed to help event organizers understand the specific preferences and dynamics of potential attendees, enabling them to craft highly targeted and engaging events.
    
    To facilitate seamless interactions and transactions on the platform, we implemented Next.js and Tailwind CSS for the frontend, ensuring a responsive, modern user interface that provides an excellent user experience across all devices. The backend infrastructure was built using MySQL with TypeORM for robust database management, ensuring efficient handling of user data and event details.
    
    For event organizers, we integrated a RESTful API to connect with the platform, allowing them to easily sign up, manage their profiles, and create events that cater specifically to the user clusters generated by our AI model. We also incorporated the Typeform API to streamline the process of collecting user data and feedback, which was crucial for refining event recommendations and enhancing user satisfaction.
    
    The platform operates on a business model where it receives a portion of the ticket sales, incentivizing the creation of high-quality, personalized events. To support this, the entire application was containerized using Docker, ensuring easy deployment and scalability, and hosted on AWS to leverage its reliable, scalable cloud computing capabilities.
    
    This project not only demonstrated our technical expertise in building complex AI-driven platforms but also underscored our commitment to creating solutions that bring people together and enhance community engagement through personalized experiences.
    `,
    image: "/images/projects/project_5.png",
    link: "https://www.matchstix.ph"
  },
  {
    id: 6,
    project_title: "CRM and Chatbot Powered Landing Page for Marketing Agency",
    brief_description: "We worked with a digital marketing agency to build out a simple landing page that would be SEO optimized so that they could get more inbound clients and alleviate some of the need for constant cold calling and emailing. We also built a basic CRM and client inquiry tool to speed up the process of negotiation and onboarding of customers.",
    tech_used: "Next.js, Tailwind,  GraphQL, Stripe API, Chatbot",
    long_description: `We partnered with a digital marketing agency that was looking to enhance their online presence and streamline client interactions through a comprehensive digital solution. The agency's primary goal was to reduce reliance on traditional outbound marketing techniques, such as cold calling and emailing, by improving their online visibility and automating client engagement processes.

    To achieve this, our team developed a sleek, SEO-optimized landing page designed to attract and convert more inbound traffic into potential leads. The landing page was crafted using Next.js, known for its excellent SEO capabilities due to its server-side rendering feature, which ensures that content is indexed effectively by search engines. We paired this with Tailwind CSS for rapid, utility-first development that adhered to the latest design trends, ensuring the landing page was not only functional but also visually appealing.
    
    Beyond just the landing page, we recognized the need for a more efficient way to manage incoming inquiries and streamline the client onboarding process. To address this, we implemented a basic Customer Relationship Management (CRM) system and a client inquiry tool. This system was designed to speed up negotiation processes and facilitate smoother transitions from initial contact to full onboarding.
    
    The CRM and inquiry tool integration included a Chatbot functionality to provide immediate responses to client queries and capture essential client information before human interaction. This feature was pivotal in enhancing user engagement and increasing conversion rates by providing potential clients with instant support.
    
    For financial transactions, such as service payments and deposits, we integrated the Stripe API. This allowed the agency to handle payments securely and efficiently, providing clients with a variety of payment options that streamlined the financial aspects of the onboarding process.
    
    The entire solution was powered by GraphQL, which provided a flexible and efficient API for fetching and manipulating data, significantly improving the performance of client interactions on the platform.
    
    Through this project, we not only helped the digital marketing agency reduce its dependency on outbound marketing tactics but also provided a robust digital platform that improved their operational efficiency and client conversion rates. The integration of modern web technologies and strategic system design effectively positioned the agency to attract more clients organically and handle their needs more efficiently.    
    `,
    image: "/images/projects/project_6.png",
    link: "/"
  }
];
export default projectsData;
