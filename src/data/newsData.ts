/**
 * News data for NIO-Lab website
 * Separated from component to improve compilation performance
 */

export interface NewsItem {
  title: string;
  date: string;
  type: string;
  description?: string;
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Congratulations to our group members: Nguyen Dinh Phong, Tran Dang Khoa, Pham Trung Kien went to the Polytechnic University of Bari (Italy).",
    date: "January 2026",
    type: "Go Global",
    description: "We are proud to announce that our undergraduate members, Nguyen Dinh Phong, Tran Dang Khoa, and Pham Trung Kien have successfully completed their international research training programs at the Polytechnic University of Bari (Poliba) in Italy. This mobility program reflects the steady commitment of our students to learning and collaborating within global academic environments.\n\nTogether, they spent three months focusing on nanophotonics research within Poliba's Department of Electrical and Information Engineering in Puglia. Working under the guidance of Prof. Francesco Dell'Olio, they contributed to the design and optimization of dielectric metasurface geometries, specifically studying quasi-bound states in the continuum (qBIC).\n\nBy setting up a 3D full-wave numerical simulation framework in COMSOL Multiphysics with over 186,000 degrees of freedom, he worked on resolving narrow electromagnetic resonances. Their efforts focused on modeling a high-index TiO2 nanopillar system aimed at achieving a low lasing threshold of 1 kW/cm^2, with their data analysis serving as a helpful proof of concept for an ERC proposal.\n\nThe shared experiences of Pham Trung Kien, Nguyen Dinh Phong, and Tran Dang Khoa mark a meaningful step forward for our research group. Their dedication shows how undergraduate students can step out of their comfort zones to learn, contribute, and collaborate meaningfully with international peers. We congratulate them on completing this chapter and look forward to seeing how they apply these new skills to their ongoing work back home."
  },
  {
    title: "Congratulations to Dr. Hoang Van Quy on being awarded a research grant from NAFOSTED!",
    date: "December 2025",
    type: "Award",
    description: "This project focuses on advancing the efficiency of inorganic solar cells, contributing to cutting-edge research in next-generation photovoltaic technologies."
  },
  {
    title: "Welcome to two EE students joining our team: Tran Dang Khoa and Pham Tien Huy",
    date: "10th September 2025",
    type: "New Members"
  },
  {
    title: "Congratulations to our group members: Dinh Bao Dan went to ETH Zurich.",
    date: "1st September 2025",
    type: "Go Global",
    description: "We are proud to announce that our junior undergraduate student, Dinh Bao Dan, has been selected for a paid research internship at ETH Zurich, one of the world's leading institutions in science and engineering. He is the first Vietnamese student to earn this prestigious opportunity directly from Vietnam, representing a historic milestone for our research group and the training quality at VinUniversity. Over the next six months, he will be contributing to advanced research on colloidal-based photodetectors, working alongside leading scientists in the field. This achievement reflects his outstanding dedication, talent, and the growing global presence of young Vietnamese researchers. We celebrate his success and wish him a transformative journey ahead!"
  },
  {
    title: "Our team is delighted to contribute one invited talk and 5 posters at Horizon, 25-28 August 2025",
    date: "25-28 August 2025",
    type: "Conference",
    link: "https://horizons2025.vinuni.edu.vn/program/"
  },
  {
    title: "Welcome Ms. Nguyen Thi Ben, joining us from Hanoi University of Science",
    date: "15th August 2025",
    type: "New Members",
    description: "Her major is Materials Science."
  },
  {
    title: "Welcome two research assistants: Tran Thi Thu Uyen and Le Minh Khanh",
    date: "1st August 2025",
    type: "New Members",
    description: "BSc. Engineering Physics from Hanoi University of Science and Technology"
  },
  {
    title: "Welcome Dr. Hoang Van Quy, joining us as a full-time researcher",
    date: "15th July 2025",
    type: "New Members",
    description: "Dr. Quy specializes in solar cell fabrication and characterization."
  }
];
