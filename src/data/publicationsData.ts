/**
 * Publications data for NIO-Lab website
 * Separated from component to improve compilation performance
 */

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  volume: string;
  page: string;
  year: string;
}

export interface PublicationsData {
  vinUniversity: Publication[];
  priorToVinUniversity: Publication[];
}

export const publicationsData: PublicationsData = {
  vinUniversity: [
    {
      title: "Micrometer-Resolution Fluorescence and Lifetime Mappings of CsPbBr3 Nanocrystal Films Coupled with a TiO2 Grating",
      authors: "Nguyen Viet Anh, Wu Ye, Do Thi Thu Ha, Nguyen Linh Thi Dieu, Sergeev Aleksandr A., Zhu Ding, Valuckas Vytautas, Pham Duong, Bui Hai Xuan Son, Hoang Duy Mai, Tung Bui Son, Khuyen Bui Xuan, Nguyen Thanh Binh, Nguyen Hai Son, Lam Vu Dinh, Rogach Andrey L., Ha Son Tung, Le-Van Quynh",
      journal: "The Journal of Physical Chemistry Letters",
      volume: "15",
      page: "11291",
      year: "2024"
    },
    {
      title: "Spatial photoluminescence and lifetime mappings of quasi-2D perovskites coupled with a dielectric metasurface",
      authors: "Hai Xuan Son Bui, Tuyet Thi Doan, Nhan Ha Tri Luong, Dang Khue Luu, Ha Thi Thu Do, Linh Ha Chu, Duong Pham, Oanh Thi Kim Vu, Son Tung Bui, Thuat Tran Nguyen, Xuan Khuyen Bui, Dinh Lam Vu, Hai Son Nguyen, Tung Son Ha, and Quynh Le-Van",
      journal: "Optics Letters",
      volume: "49",
      page: "2465",
      year: "2024"
    },
    {
      title: "Direct observation of exceptional points in photonic crystal by cross-polarization imaging in momentum space",
      authors: "Viet Anh Nguyen, Viet Hoang Le, Eirini Sarelli, Loïc Malgrey, Dang-Khue Luu, Ha Linh Chu, Truong Tuan Vu, Cong Quang Tong, Dinh Lam Vu, Christian Seassal, Quynh Le-Van, Hai Son Nguyen",
      journal: "Applied Physics Letters",
      volume: "123",
      page: "191105",
      year: "2023"
    },
    {
      title: "Ultra-broadband and flexible metamaterial absorber based on MoS2 cuboids with Mie resonances",
      authors: "Duong Thi Ha, Man Hoai Nam, Bui Son Tung, Bui Xuan Khuyen, Vu Dinh Lam, Quynh Le-Van",
      journal: "Journal of the Korean Physical Society",
      volume: "82",
      page: "1047",
      year: "2023"
    },
    {
      title: "Silicon surface lattice resonances and halide perovskite semiconductors for exciton-polaritons at room temperature",
      authors: "Dinh Hai Nguyen, Sy Khiem Nguyen, Minh Quan Tran, Viet Hoang Le, Quoc Trung Trinh, Son Tung Bui, Xuan Khuyen Bui, Dinh Lam Vu, Hai-Son Nguyen, Quynh Le-Van",
      journal: "Optical Materials Express",
      volume: "13",
      page: "179",
      year: "2022"
    },
    {
      title: "Coexistence of surface lattice resonances and bound states in the continuum in a plasmonic lattice",
      authors: "Quoc Trung Trinh, Sy Khiem Nguyen, Dinh Hai Nguyen, Gia Khanh Tran, Viet Hoang Le, Hai-Son Nguyen, Quynh Le-Van",
      journal: "Optics Letters",
      volume: "47",
      page: "1510",
      year: "2022"
    },
    {
      title: "Engineering a light–matter strong coupling regime in perovskite-based plasmonic metasurface: quasi-bound state in the continuum and exceptional points",
      authors: "Leran Lu, Quynh Le-Van, Lydie Ferrier, Emmanuel Drouard, Christian Seassal, Hai Son Nguyen",
      journal: "Photonics Research",
      volume: "8",
      page: "A91",
      year: "2020"
    }
  ],
  priorToVinUniversity: [
    {
      title: "Experimental demonstration of single-mode topological valley-Hall lasing at telecommunication wavelength controlled by the degree of asymmetry",
      authors: "Wanwoo Noh, Hadiseh Nasari, Hwi-Min Kim, Quynh Le-Van, Zhetao Jia, Chi-Hsin Huang, Boubacar Kanté",
      journal: "Optics Letters",
      volume: "45",
      page: "4108-4111",
      year: "2020"
    },
    {
      title: "Doping-induced plateau of strong electromagnetic confinement in the momentum space",
      authors: "Rushin Contractor, Wanwoo Noh, Quynh Le-Van, Boubacar Kanté",
      journal: "Optics Letters",
      volume: "45",
      page: "3653-3656",
      year: "2020"
    },
    {
      title: "Strong Light-Matter Coupling: Enhanced Delayed Fluorescence in Tetracene Crystals by Strong Light-Matter Coupling (Adv. Funct. Mater. 36/2019)",
      authors: "Anton Matthijs Berghuis, Alexei Halpin, Quynh Le-Van, Mohammad Ramezani, Shaojun Wang, Shunsuke Murai, Jaime Gómez Rivas",
      journal: "Advanced Functional Materials",
      volume: "29",
      page: "1970249",
      year: "2019"
    },
    {
      title: "Enhanced Delayed Fluorescence in Tetracene Crystals by Strong Light-Matter Coupling",
      authors: "Anton Matthijs Berghuis, Alexei Halpin, Quynh Le-Van, Mohammad Ramezani, Shaojun Wang, Shunsuke Murai, Jaime Gómez Rivas",
      journal: "Advanced Functional Materials",
      volume: "29",
      page: "1901317",
      year: "2019"
    },
    {
      title: "Enhanced quality factors of surface lattice resonances in plasmonic arrays of nanoparticles",
      authors: "Quynh Le-Van, Erwin Zoethout, Erik-Jan Geluk, Mohammad Ramezani, Matthijs Berghuis, Jaime Gómez Rivas",
      journal: "Advanced Optical Materials",
      volume: "7",
      page: "1801451",
      year: "2019"
    },
    {
      title: "Limits to Strong Coupling of Excitons in Multilayer WS2 with Collective Plasmonic Resonances",
      authors: "Shaojun Wang, Quynh Le-Van, Fabio Vaianella, Bjorn Maes, Simone Eizagirre Barker, Rasmus H Godiksen, Alberto G Curto, Jaime Gomez Rivas",
      journal: "ACS Photonics",
      volume: "6",
      page: "286-293",
      year: "2019"
    },
    {
      title: "Nonlinear Emission of Molecular Ensembles Strongly Coupled to Plasmonic Lattices with Structural Imperfections",
      authors: "Mohammad Ramezani, Quynh Le-Van, Alexei Halpin, Jaime Gómez Rivas",
      journal: "Physical Review Letters",
      volume: "121",
      page: "243904",
      year: "2018"
    },
    {
      title: "Plasmonic nanoantenna arrays as efficient etendue reducers for optical detection",
      authors: "Shaojun Wang, Quynh Le-Van, Thibault Peyronel, Mohammad Ramezani, Niels Van Hoof, Tobias G Tiecke, Jaime Gómez Rivas",
      journal: "ACS Photonics",
      volume: "5",
      page: "2478-2485",
      year: "2018"
    },
    {
      title: "Electroluminescence of Colloidal Quantum Dots: Electroluminescence of Colloidal Quantum Dots in Electrical Contact with Metallic Nanoparticles (Advanced Optical Materials 2/2018)",
      authors: "Hongyue Wang, Quynh Le-Van, Abdelhanin Aassime, Xavier Le Roux, Fabrice Charra, Nicolas Chauvin, Aloyse Degiron",
      journal: "Advanced Optical Materials",
      volume: "6",
      page: "1870009",
      year: "2018"
    },
    {
      title: "Electroluminescence of Colloidal Quantum Dots in Electrical Contact with Metallic Nanoparticles",
      authors: "Hongyue Wang, Quynh Le-Van, Abdelhanin Aassime, Xavier Le Roux, Fabrice Charra, Nicolas Chauvin, Aloyse Degiron",
      journal: "Advanced Optical Materials",
      volume: "6",
      page: "1700658",
      year: "2018"
    },
    {
      title: "Electrically driven optical metamaterials",
      authors: "Quynh Le-Van, Xavier Le Roux, Abdelhanin Aassime, Aloyse Degiron",
      journal: "Nature Communications",
      volume: "7",
      page: "12017",
      year: "2016"
    },
    {
      title: "Temperature dependence of quantum dot fluorescence assisted by plasmonic nanoantennas",
      authors: "Quynh Le-Van, Xavier Le Roux, Tatiana V Teperik, Benjamin Habert, François Marquier, J-J Greffet, Aloyse Degiron",
      journal: "Physical Review B",
      volume: "91",
      page: "085412",
      year: "2015"
    },
    {
      title: "Design, fabrication and characterization of a perfect absorber using simple cut-wire metamaterials",
      authors: "Thanh Viet Do, Son Tung Bui, Le Van Quynh, Thi Hien Nguyen, Trong Tuan Nguyen, Thanh Tung Nguyen, YoungPak Lee, Dinh Lam Vu",
      journal: "Advances in Natural Sciences: Nanoscience and Nanotechnology",
      volume: "3",
      page: "045014",
      year: "2012"
    }
  ]
};