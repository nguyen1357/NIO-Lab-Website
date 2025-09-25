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
