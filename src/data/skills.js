import { FaPython, FaDatabase, FaCode, FaChartBar, FaChartLine, FaGitAlt, FaProjectDiagram, FaBrain, FaSearch, FaChartPie } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn, SiJupyter } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

export const skills = {
  Languages: [
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: FaDatabase },
    { name: "R (Basic)", icon: FaCode }
  ],
  Libraries: [
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Matplotlib", icon: FaChartBar },
    { name: "Seaborn", icon: FaChartLine }
  ],
  Tools: [
    { name: "Jupyter", icon: SiJupyter },
    { name: "VS Code", icon: TbBrandVscode },
    { name: "Tableau", icon: FaChartPie },
    { name: "Git", icon: FaGitAlt }
  ],
  Concepts: [
    { name: "Data Mining", icon: FaProjectDiagram },
    { name: "Machine Learning", icon: FaBrain },
    { name: "EDA", icon: FaSearch },
    { name: "Data Visualization", icon: FaChartPie }
  ]
};
