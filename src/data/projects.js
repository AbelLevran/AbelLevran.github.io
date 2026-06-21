import isochroneImg from '../assets/Isochrone_UEA.JPG';
import comparisonImg from '../assets/comparison3ML.webp';
import sentimentWebImg from '../assets/website_deepsentiment.webp';
import profitImg from '../assets/profit.JPG';
import jobMarketImg from '../assets/jobMarket.webp';

export const projects = [
  {
    id: 1,
    title: "UAE Traffic Mobility Isochrone Map",
    description: "A geospatial analysis tool that transforms raw traffic data into interactive isochrone maps. Processes 400,000+ road segments using NetworkX and Dijkstra's algorithm to generate color-coded HTML maps for evaluating travel-time coverage.",
    image: isochroneImg,
    category: ["Geospatial Analytics", "Network Analysis", "Data Visualization"],
    techStack: ["Python", "NetworkX", "Folium", "GeoPandas", "Shapely", "PyProj"],
    githubUrl: "https://github.com/AbelLevran/UAE_Traffic_Mobility_Isochrone_Map",
    liveDemoUrl: ""
  },
  {
    id: 2,
    title: "Deepsentiment Website",
    description: "DeepSentiment is an Artificial Intelligence-based web application specifically designed to perform sentiment analysis on DeepSeek app reviews. The application uses a Support Vector Machine (SVM) model that has been custom-trained to predict whether a review is positive or negative.",
    image: sentimentWebImg,
    category: ["Web Development", "Data Science", "NLP"],
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask", "FastAPI", "Vanilla JS", "CSS", "HTML"],
    githubUrl: "https://github.com/AbelLevran/deepseek-sentiment-analyzer-website",
    liveDemoUrl: "https://deepsentiment-web.vercel.app/"
  },
  {
    id: 3,
    title: "Job Market Analysis for Data Roles",
    description: "An exploratory data analysis project examining salary trends across data-related roles (Data Scientist, Data Analyst, Data Engineer, etc.) from 2020–2022. The analysis uncovers how experience level, geographic location, company size, and remote work arrangements influence compensation patterns within the data industry through data visualization and statistical insights.",
    image: jobMarketImg,
    category: ["EDA", "Data Analytics", "Data Visualization"],
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask"],
    githubUrl: "https://github.com/AbelLevran/Job_Market_Analysis_for_Data_Roles",
    liveDemoUrl: ""
  },
  {
    id: 4,
    title: "Comparative Study of Support Vector Machine, K-Nearest Neighbor, and Naive Bayes for Sentiment Analysis on DeepSeek Application User Reviews",
    description: "Developing a machine learning based sentiment analysis system to classify DeepSeek app user reviews into positive and negative categories. Implementing an end to end pipeline from data collection, preprocessing, feature engineering, to model evaluation.",
    image: comparisonImg,
    category: ["Machine Learning", "NLP", "Data Science"],
    techStack: ["Python", "SVM", "Scikit-learn", "NLTK", "Pandas", "TF-IDF"],
    githubUrl: "https://github.com/AbelLevran/deepseek-sentiment-analysis-comparison",
    liveDemoUrl: ""
  },
  {
    id: 5,
    title: "Interactive Sales Dashboard",
    description: "A comprehensive dashboard for visualizing company sales data, highlighting key performance indicators (KPIs) and trends.",
    image: profitImg,
    category: "Dashboard Development",
    techStack: ["TIBCO Spotfire", "Excel", "Data Cleaning"],
    githubUrl: "",
    liveDemoUrl: ""
  },
];
