import isochroneImg from '../assets/Isochrone_UEA.JPG';
import comparisonImg from '../assets/comparison.JPG';
import sentimentWebImg from '../assets/website_analysis_sentiment.JPG';
import profitImg from '../assets/profit.JPG';

export const projects = [
  {
    id: 1,
    title: "Isochrone Map for Traffic (UAE) Mobility Data",
    description: "A geospatial analysis tool that transforms raw traffic data into interactive isochrone maps. Processes 400,000+ road segments using NetworkX and Dijkstra's algorithm to generate color-coded HTML maps for evaluating travel-time coverage.",
    image: isochroneImg,
    category: ["Data Analysis", "Visualization"],
    techStack: ["Python", "NetworkX", "Folium", "GeoPandas", "Shapely", "PyProj"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: 2,
    title: "Sentiment Analysis of DeepSeek App Reviews",
    description: "Developing a machine learning based sentiment analysis system to classify DeepSeek app user reviews into positive and negative categories. Implementing an end to end pipeline from data collection, preprocessing, feature engineering, to model evaluation. Conducting a comparative study of the performance of three main classification algorithms: SVM, K-NN, and Naive Bayes.",
    image: comparisonImg,
    category: "Data Science",
    techStack: ["Python", "SVM", "Scikit-learn", "NLTK", "Pandas"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: 3,
    title: "DeepSeek AI Reviews Sentiment Analysis",
    description: "An interactive web application that classifies DeepSeek app user reviews into positive or negative sentiment using a trained SVM model. The dashboard visualizes sentiment distribution with a pie chart, displays word clouds, and allows users to test live predictions. Built for evaluating user feedback at scale with interpretable results.",
    image: sentimentWebImg,
    category: "Data Science",
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    id: 4,
    title: "Interactive Sales Dashboard",
    description: "A comprehensive dashboard for visualizing company sales data, highlighting key performance indicators (KPIs) and trends.",
    image: profitImg,
    category: "Visualization",
    techStack: ["TIBCO Spotfire", "Excel", "Data Cleaning"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
];
