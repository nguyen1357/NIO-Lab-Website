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
    title: "Welcome two EE students join our team: Tran Dang Khoa and Pham Tien Huy",
    date: "10th September 2025",
    type: "New Members"
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
