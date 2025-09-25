/**
 * Team data for NIO-Lab website
 * Separated from component to improve compilation performance
 */

export interface TeamMember {
  name: string;
  role: string;
  research?: string;
  expertise?: string;
  email: string;
  joinDate?: string;
  education?: {
    phd?: string;
    msc?: string;
    bsc?: string;
  };
  bio?: string;
  office?: string;
}

export interface Alumnus {
  name: string;
  role: string;
  currentPosition: string;
  duration?: string;
  research?: string;
  graduationYear?: string;
  email?: string;
}

export interface Collaborator {
  name: string;
  role: string;
  research: string;
  institution: string;
  email?: string;
}

export interface TeamData {
  pi: TeamMember[];
  fullTimeResearchers: TeamMember[];
  researchAssistants: TeamMember[];
  undergraduateStudents: TeamMember[];
  alumni: {
    undergraduateStudents: Alumnus[];
    researchAssistants: Alumnus[];
  };
  collaborators: Collaborator[];
}

export const teamData: TeamData = {
  pi: [
    {
      name: "Dr. Quynh V. Le",
      role: "Principal Investigator",
      research: "Nanophotonics and Optoelectronic Integration",
      email: "quynh.lv@vinuni.edu.vn",
      office: "Room G309",
      bio: "The PI obtained a PhD degree at the University of Paris-Saclay under the supervision of Prof. Aloyse Degiron in 2016. He conducted his postdoctoral research on exciton-polariton at the Dutch Institute for Fundamental Research (2016-2018) under the supervision of Prof. Jaime Gomez Rivas and followed by another postdoctoral research on topological photonics and bound states in the continuum at the University of California, San Diego (2018) and the University of California, Berkeley (2019) both under the supervison of Prof. Boubarar Kanté. He returned to Vietnam as a founding faculty at VinUniversity since 2020.",
      education: {
        phd: "Ph.D. University of Paris-Saclay (2016)",
        msc: "MSc: Advanced Materials and Nanotechnologies, USTH-University of Paris-Sud XI (2012)",
        bsc: "BSc: Engineering Physics, UET-VNU Hanoi (2010)"
      },
      imageUrl: "https://i.postimg.cc/YqZJ1HTj/pi.jpg"
    }
  ],
  fullTimeResearchers: [
    {
      name: "Dr. Hoang Van Quy",
      role: "Full-time Researcher",
      research: "Solar Cell Fabrication and Characterization",
      bio: "Dr. Hoang Van Quy received his Engineer degree in Engineering Physics from Hanoi University of Science and Technology, Vietnam, in 2016. He earned his M.E. and Ph.D. degrees in Electronic Engineering from Gachon University, South Korea, in 2019 and 2022. From 2022 to 2025, he served as a Postdoctoral Fellow at the Research Center for Thin Film Solar Cells, Division of Energy and Environmental Technology, Daegu Gyeongbuk Institute of Science and Technology (DGIST). As a leading researcher in the field of photovoltaics, Dr. Hoang Van Quy is at the forefront of developing next-generation photovoltaic devices, including both rigid and flexible perovskite (single and tandem) solar cells. His work focused on the synthesis of carrier transport layers and fabrication of inorganic absorber layers—critical components for improving the stability and manufacturability of solar cells. At VinUniversity, Dr. Hoang Van Quy interest on an advanced laboratory dedicated to the development of cutting-edge photovoltaic technologies, including solar cells, photodetectors, and sensors. His research aims to achieve world-class advancements in thin-film solar cell technology by focusing on inorganic-based absorber layers and flexible, lightweight substrates. These innovations are intended for integration into solar panels for use in buildings and vehicles, driving forward the practical deployment of clean energy solutions.",
      education: {
        phd: "Ph.D. Electrical Engineering, Gachon  University (2022)",
        msc: "MSc: Electrical Engineering, Gachon University (2019)",
        bsc: "BSc: Engineering Physics, Hanoi University of Science and Technology (2016)"
      },
      email: "quy.hv@vinuni.edu.vn",
      joinDate: "July 2025",
      imageUrl: "https://i.postimg.cc/fRzV1Cmh/Quyjpg.jpg"
    },
    {
      name: "Dr. Nguyen Hung Son",
      role: "Emeritus professor",
      research: "Theory of electromagnetics and nanophotonics",
      joinDate: "September 2024",
      bio: "Dr. Son is an emeritous professor of theoretical physics.",
      imageUrl: "https://i.postimg.cc/FRht7V8Z/plaincolor-JPG.jpg"
    }
  ],
  researchAssistants: [
    {
      name: "Nguyen Viet Anh",
      role: "Research Assistant",
      research: "Theory of nanophotonics",
      education: {
        bsc: "BSc: Physics, HUS-VNU Hanoi (2023)"
      },
      email: "anh.nv3@vinuni.edu.vn",
      joinDate: "August 2023",
      imageUrl: "https://i.postimg.cc/FRht7V8Z/plaincolor-JPG.jpg"
    },
    {
      name: "Le Huyen Trang",
      role: "Research Assistant",
      research: "Interactions between metasurface/photonic crystals and perovskite nanocrystals",
      education: {
        bsc: "BSc: Physics, Hanoi National University of Education (2024)"
      },
      email: "trang.lh@vinuni.edu.vn",
      joinDate: "April 2024",
      imageUrl: "https://i.postimg.cc/XvfSjzHq/trang.jpg"
    },
    {
      name: "Bui Minh Quan",
      role: "Research Assistant",
      research: "Interactions between metasurface/photonic crystals and perovskite nanocrystals",
      education: {
        msc: "MSc: Advanced Materials and Nanotechnologies, USTH, Hanoi (2025)",
        bsc: "BSc: Physics, Hanoi National University of Education (2023)"
      },
      email: "quan.bm@vinuni.edu.vn",
      joinDate: "August 2025",
      imageUrl: "https://i.postimg.cc/CL65trfq/team-member-3.jpg"
    },
    {
      name: "Nguyen Thi Ben",
      role: "Research Assistant",
      research: "Theory and simulation of metasurfaces/photonic crystals and optical measurements",
      education: {
        bsc: "BSc: Materials Science, HUS-VNU Hanoi (2025)"
      },
      email: "ben.nt@vinuni.edu.vn",
      joinDate: "August 2025",
      imageUrl: "https://i.postimg.cc/4NsrPP3R/Bennt.jpg"

    },
    {
      name: "Tran Thi Thu Uyen",
      role: "Research Assistant",
      research: "Synthesis and characterizations of perovskite nanocrystals, perovskite based optoelectronic devices",
      education: {
        bsc: "BSc: Engineering Physics, Hanoi University of Science and Technology (2024)"
      },
      email: "uyen.ttt2@vinuni.edu.vnu",
      joinDate: "August 2025",
      imageUrl: "https://i.postimg.cc/zGXy43N2/uyen5jpg.jpg"
    },
    {
      name: "Le Minh Khanh",
      role: "Research Assistant",
      research: "Perovskite-based optoelectronic and electronic devices",
      education: {
        bsc: "BSc: Engineering Physics, Hanoi University of Science and Technology (2025)"
      },
      email: "khanh.lm@vinuni.edu.vn",
      joinDate: "August 2025",
      imageUrl: "https://i.postimg.cc/NjhN4qw0/khanh5jpg.jpg"
    }
  ],
  undergraduateStudents: [
    {
      name: "Dinh Bao Dan, EE Cohort 3",
      role: "Undergraduate Student",
      research: "Perovskite light-emitting diodes",
      email: "22dan.db@vinuni.edu.vn",
      joinDate: "September 2024",
      imageUrl: "https://i.postimg.cc/0jPXrTrP/DBD.jpg"
    },
    {
      name: "Pham Trung Kien, EE Cohort 4",
      role: "Undergraduate Student",
      research: "Inverse design for nanophotonic structures and Perovskite LEDs",
      email: "23kien.pt@vinuni.edu.vn",
      joinDate: "September 2024",
      imageUrl: "https://i.postimg.cc/3rd12bpc/kien2.jpg"
    },
    {
      name: "Nguyen Dinh Phong, ME Cohort 4",
      role: "Undergraduate Student",
      research: "Topological optimization of nanophotonic structures",
      email: "23phong.nd@vinuni.edu.vn",
      joinDate: "September 2025",
      imageUrl: "https://i.postimg.cc/rFZtjh9D/team-member-9-3-jpg.jpg"
    },
    {
      name: "Nguyen Ha Binh, ME Cohort 5",
      role: "Undergraduate Student",
      research: "Perovskite solar cells and nanophotonics",
      email: "24binh.nh@vinuni.edu.vn",
      joinDate: "September 2025",
      imageUrl: "https://i.postimg.cc/6qFMjj8x/habinh.jpg"
    },
    {
      name: "Tran Dang Khoa, EE Cohort 5",
      role: "Undergraduate Student",
      research: "Perovskite solar cells",
      email: "24khoa.td@vinuni.edu.vn",
      joinDate: "September 2025",
      imageUrl: "https://i.postimg.cc/4d37kqsk/khoa4jpg.jpg"
    },
    {
      name: "Pham Tien Huy, EE Cohort 5",
      role: "Undergraduate Student",
      research: "Perovskite light-emitting diodes",
      email: "24huy.pt@vinuni.edu.vn",
      joinDate: "September 2025",
      imageUrl: "https://i.postimg.cc/C15NPZq0/Ti-n-Huy-modify.jpg"
    },
    {
      name: "Luu Duc Nguyen, ME Cohort 6",
      role: "Undergraduate Student",
      research: "Perovskite light-emitting diodes",
      email: "24huy.pt@vinuni.edu.vn",
      joinDate: "September 2025",
      imageUrl: "https://i.postimg.cc/MGPqxYGs/zalo_11200539947898.jpg"
    }
  ],
  alumni: {
    undergraduateStudents: [
      {
        name: "Tran Gia Khanh",
        role: "Undergraduate Student (EE Cohort 1)",
        currentPosition: "Master of Electrical Engineering at UPenn",
        imageUrl: "https://i.postimg.cc/26pKNbDq/TGKhanh.jpg"
      },
      {
        name: "Chu Ha Linh",
        role: "Undergraduate Student (EE Cohort 2)",
        currentPosition: "Master of Electrical Engineering at UPenn",
        imageUrl: "https://i.postimg.cc/gcQ0j7LF/CHL.png"
      },
      {
        name: "Luu Dang Khue",
        role: "Undergraduate Student (ME Cohort 2)",
        currentPosition: "Master of Materials Science at UPenn",
        imageUrl: "https://i.postimg.cc/nryVWsfc/LDK.jpg"
      }
    ],
    researchAssistants: [
      {
        name: "Trinh Quoc Trung",
        role: "Research Assistant",
        duration: "2021-2022",
        currentPosition: "Ph.D. student at University of Grenoble, France",
        imageUrl: "https://i.postimg.cc/QCGprJ7R/TQT.jpg"
      },
      {
        name: "Nguyen Dinh Hai",
        role: "Research Assistant",
        duration: "2022-2023",
        currentPosition: "STEM teacher at Riverside Education",
        imageUrl: "https://i.postimg.cc/Jnbdrrrp/NDHai.jpg"
      },
      {
        name: "Nguyen Thi Dieu Linh",
        role: "Research Assistant",
        duration: "2023-2024",
        currentPosition: "PhD student at Tohoku University, Japan",
        imageUrl: "https://i.postimg.cc/FRht7V8Z/plaincolor-JPG.jpg"
      },
      {
        name: "Bui Xuan Son Hai",
        role: "Research Assistant",
        duration: "2022-2025",
        currentPosition: "Samsung Electronics, Thai Nguyen",
        imageUrl: "https://i.postimg.cc/FRht7V8Z/plaincolor-JPG.jpg"
      },
      {
        name: "Doan Tran Thuy Dung",
        role: "Research Assistant",
        duration: "2024-2025",
        currentPosition: "PhD student at University of Illinois Urbana-Champaign",
        imageUrl: "https://i.postimg.cc/PJDZsJdq/DTTDung.jpg"
      }
    ]
  },
  collaborators: [
    {
      name: "Prof. Vu Dinh Lam and his team at VAST",
      role: "Collaborating Professor",
      research: "Metamaterials",
      institution: "Graduate University of Science and Technology, Hanoi, Vietnam",
      imageUrl: "https://i.postimg.cc/wjLPnYY7/pi.jpg"
    },
    {
      name: "Prof. Hai Son Nguyen",
      role: "Collaborating Professor",
      research: "Theory and Experiment of nanophotonics",
      institution: "Ecole Centrale de Lyon, France",
      imageUrl: "https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/f1bd900d-a9a7-496f-8931-13ee98b15c7b.jpg"
    },
    {
      name: "Prof. Brian Cunningham",
      role: "Collaborating Professor",
      research: "Photonic crystals and nano-optics",
      institution: "University of Illinois Urbana-Champaign",
      imageUrl: "https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/929fdca8-b3d8-452a-b2b6-dcf415bc937c.jpg"
    },
    {
      name: "Dr. Ha Son Tung",
      role: "Collaborating Professor",
      research: "Nanophotonics",
      institution: "A*Star, Singapore",
      imageUrl: "https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/f45530a4-7e71-43b9-b405-6794f5e5d73b.jpg"
    }
  ]
};
