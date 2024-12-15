import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./slotsync.png";


import cross_icon from "./cross_icon.png";

import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./doc1.png";
import Gastroenterologist from "./doc2.png";
import General_physician from "./doc3.png";
import Gynecologist from "./Obstetrician.png";
import Neurologist from "./doc11.png";
import Pediatricians from "./Pediatricians.png";
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import slide4 from './slide4.jpg'
import satyamimg from './satyamimgblack.png'

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,



  profile_pic,

  contact_image,
  about_image,

  cross_icon,

  upload_icon,
  stripe_logo,
  razorpay_logo,
  slide1,
  slide2,
  slide3,
  slide4,
  satyamimg,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
  {
    speciality: "Orthopedic",
    image: Gastroenterologist,
  },
  {
    speciality: "Cardiologist",
    image: Neurologist,
  }
  
  

];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Arun Kumar",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "8 Years",
    about:
      "Dr. Arun Kumar is a renowned physician in Sultanpur, specializing in preventive care and holistic health solutions.",
    fees: 300,
    address: {
      line1: "Civil Lines",
      line2: "Near District Hospital, Sultanpur",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Priya Singh",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Priya Singh provides expert gynecological care and counseling for women in Sultanpur.",
    fees: 400,
    address: {
      line1: "Amhat Road",
      line2: "Opposite City Mall, Sultanpur",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Rajesh Verma",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "5 Years",
    about:
      "Dr. Rajesh Verma is a trusted dermatologist treating skin conditions with precision and care.",
    fees: 350,
    address: {
      line1: "Lal Diggi",
      line2: "Near SBI Branch, Sultanpur",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Kavita Sharma",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Kavita Sharma is dedicated to providing comprehensive healthcare for children in Sultanpur.",
    fees: 300,
    address: {
      line1: "Chowk",
      line2: "Near Saraswati Vidya Mandir, Sultanpur",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Anil Tiwari",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM",
    experience: "10 Years",
    about:
      "Dr. Anil Tiwari specializes in neurological disorders, providing advanced care and treatment.",
    fees: 500,
    address: {
      line1: "Bara Road",
      line2: "Near Ram Hospital, Sultanpur",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Sneha Gupta",
    image: doc6,
    speciality: "ENT Specialist",
    degree: "MBBS, MS",
    experience: "4 Years",
    about:
      "Dr. Sneha Gupta is an expert in diagnosing and treating ear, nose, and throat conditions.",
    fees: 250,
    address: {
      line1: "Vikas Nagar",
      line2: "Opposite PVR Complex, Sultanpur",
    },
  },
  {
    _id: "doc31",
    name: "Dr. Arun Kumar",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "8 Years",
    about:
      "Dr. Arun Kumar is a renowned physician in Sultanpur, specializing in preventive care and holistic health solutions.",
    fees: 300,
    address: {
      line1: "Civil Lines",
      line2: "Near District Hospital, Sultanpur",
    },
  },
  {
    _id: "doc32",
    name: "Dr. Priya Singh",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Priya Singh provides expert gynecological care and counseling for women in Sultanpur.",
    fees: 400,
    address: {
      line1: "Amhat Road",
      line2: "Opposite City Mall, Sultanpur",
    },
  },
  {
    _id: "doc33",
    name: "Dr. Rajesh Verma",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "5 Years",
    about:
      "Dr. Rajesh Verma is a trusted dermatologist treating skin conditions with precision and care.",
    fees: 350,
    address: {
      line1: "Lal Diggi",
      line2: "Near SBI Branch, Sultanpur",
    },
  },
  {
    _id: "doc34",
    name: "Dr. Kavita Sharma",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Kavita Sharma is dedicated to providing comprehensive healthcare for children in Sultanpur.",
    fees: 300,
    address: {
      line1: "Chowk",
      line2: "Near Saraswati Vidya Mandir, Sultanpur",
    },
  },
  {
    _id: "doc35",
    name: "Dr. Anil Tiwari",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM",
    experience: "10 Years",
    about:
      "Dr. Anil Tiwari specializes in neurological disorders, providing advanced care and treatment.",
    fees: 500,
    address: {
      line1: "Bara Road",
      line2: "Near Ram Hospital, Sultanpur",
    },
  },
  {
    _id: "doc36",
    name: "Dr. Sneha Gupta",
    image: doc6,
    speciality: "ENT Specialist",
    degree: "MBBS, MS",
    experience: "4 Years",
    about:
      "Dr. Sneha Gupta is an expert in diagnosing and treating ear, nose, and throat conditions.",
    fees: 250,
    address: {
      line1: "Vikas Nagar",
      line2: "Opposite PVR Complex, Sultanpur",
    },
  },
  {
    _id: "doc16",
    name: "Dr. Amit Yadav",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "5 Years",
    about:
      "Dr. Amit Yadav is committed to offering comprehensive healthcare services in Sultanpur.",
    fees: 350,
    address: {
      line1: "Station Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc17",
    name: "Dr. Neelam Tiwari",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Neelam Tiwari specializes in high-risk pregnancies and women’s health.",
    fees: 450,
    address: {
      line1: "Civil Lines",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc18",
    name: "Dr. Shubham Gupta",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "7 Years",
    about:
      "Dr. Shubham Gupta is renowned for his expertise in skin care and acne treatments.",
    fees: 400,
    address: {
      line1: "Market Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc19",
    name: "Dr. Suman Mishra",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "8 Years",
    about:
      "Dr. Suman Mishra provides compassionate care to children and supports their overall health.",
    fees: 250,
    address: {
      line1: "Naya Bazar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc20",
    name: "Dr. Ritesh Kumar",
    image: doc5,
    speciality: "Orthopedic",
    degree: "MBBS, MS (Ortho)",
    experience: "12 Years",
    about:
      "Dr. Ritesh Kumar specializes in joint replacement surgery and treatment of bone fractures.",
    fees: 600,
    address: {
      line1: "Hospital Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc21",
    name: "Dr. Simran Yadav",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "9 Years",
    about:
      "Dr. Simran Yadav provides expert neurological treatments for various disorders.",
    fees: 750,
    address: {
      line1: "Kacheri Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc22",
    name: "Dr. Nitin Verma",
    image: doc7,
    speciality: "ENT Specialist",
    degree: "MBBS, MS (ENT)",
    experience: "6 Years",
    about:
      "Dr. Nitin Verma is a skilled ENT specialist helping patients with ear, nose, and throat problems.",
    fees: 300,
    address: {
      line1: "Subhash Nagar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc23",
    name: "Dr. Harshita Singh",
    image: doc8,
    speciality: "Cardiologist",
    degree: "MBBS, DM (Cardiology)",
    experience: "12 Years",
    about:
      "Dr. Harshita Singh is an expert in diagnosing and treating heart diseases.",
    fees: 900,
    address: {
      line1: "Rajendra Nagar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc24",
    name: "Dr. Aditya Prasad",
    image: doc9,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Aditya Prasad provides personalized healthcare solutions for everyday health issues.",
    fees: 200,
    address: {
      line1: "City Center",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc25",
    name: "Dr. Priya Kumari",
    image: doc10,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Priya Kumari specializes in pregnancy care, infertility treatments, and women’s health.",
    fees: 500,
    address: {
      line1: "New Colony",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc26",
    name: "Dr. Gaurav Yadav",
    image: doc11,
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "15 Years",
    about:
      "Dr. Gaurav Yadav is known for his expertise in treating heart diseases and offering preventive care.",
    fees: 1000,
    address: {
      line1: "M.G. Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc27",
    name: "Dr. Rupal Verma",
    image: doc12,
    speciality: "Dentist",
    degree: "BDS",
    experience: "5 Years",
    about:
      "Dr. Rupal Verma offers dental treatments, including cleaning, filling, and root canal therapy.",
    fees: 300,
    address: {
      line1: "Durgapuri",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc28",
    name: "Dr. Poonam Kumar",
    image: doc13,
    speciality: "Urologist",
    degree: "MBBS, MS (Urology)",
    experience: "10 Years",
    about:
      "Dr. Poonam Kumar specializes in kidney care, urinary tract disorders, and male infertility.",
    fees: 550,
    address: {
      line1: "Chakranpur",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc29",
    name: "Dr. Rajesh Mishra",
    image: doc14,
    speciality: "Psychiatrist",
    degree: "MBBS, MD (Psychiatry)",
    experience: "13 Years",
    about:
      "Dr. Rajesh Mishra provides psychological counseling and psychiatric treatment.",
    fees: 650,
    address: {
      line1: "Sadar Bazaar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc30",
    name: "Dr. Shalini Singh",
    image: doc15,
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS (Ortho)",
    experience: "14 Years",
    about:
      "Dr. Shalini Singh provides advanced treatments for orthopedic problems, including fractures and joint pain.",
    fees: 500,
    address: {
      line1: "Sarojini Nagar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc40",
    name: "Dr. Rajesh Kumar",
    image: doc15,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "6 Years",
    about:
      "Dr. Rajesh Kumar specializes in providing preventive care and early diagnosis to his patients.",
    fees: 300,
    address: {
      line1: "Station Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc41",
    name: "Dr. Sameer Khan",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Sameer Khan offers personalized care for general health concerns.",
    fees: 250,
    address: {
      line1: "City Center",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc42",
    name: "Dr. Priya Tiwari",
    image: doc2,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "5 Years",
    about:
      "Dr. Priya Tiwari is dedicated to ensuring her patients receive the best healthcare services.",
    fees: 280,
    address: {
      line1: "Hospital Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc43",
    name: "Dr. Priya Sharma",
    image: doc3,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Priya Sharma is known for her compassionate care and expertise in gynecology.",
    fees: 400,
    address: {
      line1: "Civil Lines",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc44",
    name: "Dr. Komal Yadav",
    image: doc4,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about: "Dr. Komal Yadav specializes in women’s health and maternity care.",
    fees: 350,
    address: {
      line1: "New Colony",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc45",
    name: "Dr. Anjali Desai",
    image: doc5,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Anjali Desai is highly experienced in dealing with complex gynecological conditions.",
    fees: 450,
    address: {
      line1: "Market Area",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc46",
    name: "Dr. Arvind Mishra",
    image: doc6,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "5 Years",
    about:
      "Dr. Arvind Mishra provides expert treatment for skin and hair-related issues.",
    fees: 350,
    address: {
      line1: "Chowk Area",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc47",
    name: "Dr. Neha Kapoor",
    image: doc7,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "4 Years",
    about:
      "Dr. Neha Kapoor offers advanced solutions for all skin-related problems.",
    fees: 320,
    address: {
      line1: "City Mall Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc48",
    name: "Dr. Kavita Sen",
    image: doc8,
    speciality: "Dermatologist",
    degree: "MBBS, DDVL",
    experience: "6 Years",
    about:
      "Dr. Kavita Sen has extensive experience in treating dermatological disorders.",
    fees: 400,
    address: {
      line1: "Rajendra Nagar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc69",
    name: "Dr. Neha Singh",
    image: doc9,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "7 Years",
    about: "Dr. Neha Singh specializes in child healthcare and vaccinations.",
    fees: 250,
    address: {
      line1: "Market Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc60",
    name: "Dr. Ramesh Verma",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "6 Years",
    about:
      "Dr. Ramesh Verma is dedicated to providing comprehensive care for children.",
    fees: 300,
    address: {
      line1: "Hospital Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc61",
    name: "Dr. Sneha Dixit",
    image: doc11,
    speciality: "Pediatrician",
    degree: "MBBS, DCH",
    experience: "5 Years",
    about:
      "Dr. Sneha Dixit is highly skilled in pediatric care and ensures children receive the best treatment.",
    fees: 280,
    address: {
      line1: "Civil Lines",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc52",
    name: "Dr. Sneha Verma",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "12 Years",
    about: "Dr. Sneha Verma offers expert care for neurological conditions.",
    fees: 700,
    address: {
      line1: "Main Square",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc53",
    name: "Dr. Anil Malhotra",
    image: doc13,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "10 Years",
    about:
      "Dr. Anil Malhotra is known for his expertise in treating complex neurological issues.",
    fees: 650,
    address: {
      line1: "City Plaza",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc54",
    name: "Dr. Preeti Rao",
    image: doc14,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "8 Years",
    about:
      "Dr. Preeti Rao ensures her patients receive personalized neurological care.",
    fees: 620,
    address: {
      line1: "Chowk Area",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc55",
    name: "Dr. Rahul Agarwal",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastro)",
    experience: "10 Years",
    about:
      "Dr. Rahul Agarwal provides advanced treatment for digestive system disorders.",
    fees: 800,
    address: {
      line1: "Civil Lines",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc56",
    name: "Dr. Pooja Saxena",
    image: doc1,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastro)",
    experience: "7 Years",
    about:
      "Dr. Pooja Saxena specializes in diagnosing and treating gastrointestinal diseases.",
    fees: 750,
    address: {
      line1: "Market Area",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc57",
    name: "Dr. Akshay Gupta",
    image: doc2,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastro)",
    experience: "9 Years",
    about:
      "Dr. Akshay Gupta is known for his expertise in endoscopic procedures and digestive care.",
    fees: 780,
    address: {
      line1: "Station Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc50",
    name: "Dr. Rajesh Kumar",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "6 Years",
    about:
      "Dr. Rajesh Kumar specializes in providing preventive care and early diagnosis to his patients in Sultanpur.",
    fees: 300,
    address: {
      line1: "Station Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc51",
    name: "Dr. Sameer Khan",
    image: doc2,
    speciality: "General physician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Sameer Khan offers personalized care for general health concerns.",
    fees: 250,
    address: {
      line1: "City Center",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc52",
    name: "Dr. Priya Tiwari",
    image: doc3,
    speciality: "General physician",
    degree: "MBBS",
    experience: "5 Years",
    about:
      "Dr. Priya Tiwari is known for her empathetic approach and preventive treatments.",
    fees: 280,
    address: {
      line1: "Hospital Road",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },
  {
    _id: "doc53",
    name: "Dr. Arvind Patel",
    image: doc4,
    speciality: "General physician",
    degree: "MBBS",
    experience: "10 Years",
    about:
      "Dr. Arvind Patel is an expert in treating chronic conditions and general health management.",
    fees: 350,
    address: {
      line1: "Civil Lines",
      line2: "Near Railway Station, Sultanpur",
    },
  },
  {
    _id: "doc54",
    name: "Dr. Kavita Sharma",
    image: doc5,
    speciality: "General physician",
    degree: "MBBS",
    experience: "7 Years",
    about:
      "Dr. Kavita Sharma is highly skilled in handling general ailments and providing quality healthcare services.",
    fees: 300,
    address: {
      line1: "Chowk Bazaar",
      line2: "Sultanpur, Uttar Pradesh",
    },
  },

  {
    _id: "doc70",
    name: "Dr. Swati Mishra",
    image: doc2, // Replace with actual image variable or path
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "10 Years",
    about:
      "Dr. Swati Mishra specializes in treating heart-related conditions and provides comprehensive cardiac care.",
    fees: 500,
    address: {
      line1: "Super Market",
      line2: "Sultanpur, Uttar Pradesh",
    },
    contact: "08460380081",
  },
  {
    _id: "doc71",
    name: "Dr. Ravi Kumar",
    image: doc1, // Replace with actual image variable or path
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "8 Years",
    about:
      "Dr. Ravi Kumar is dedicated to delivering excellent cardiac treatment and personalized patient care.",
    fees: 600,
    address: {
      line1: "Heart Care Clinic",
      line2: "Sultanpur City, Uttar Pradesh",
    },
    contact: "08932342342",
  },
  {
    _id: "doc72",
    name: "Dr. Ashok Gupta",
    image: doc1, // Replace with actual image variable or path
    speciality: "Cardiologist",
    degree: "MBBS, DM (Cardiology)",
    experience: "15 Years",
    about:
      "Dr. Ashok Gupta provides advanced care for cardiovascular diseases with a patient-centered approach.",
    fees: 700,
    address: {
      line1: "Cardio Health",
      line2: "Civil Line, Sultanpur, Uttar Pradesh",
    },
    contact: "08432432223",
  },

    {
        _id: 'doc70',
        name: 'Dr. Priya Sharma',
        image: 'doc70', // Replace with actual image variable or path
        speciality: 'Obstetrician and Gynecologist',
        degree: 'MBBS, MD (Obstetrics & Gynecology)',
        experience: '10 Years',
        about: 'Dr. Priya Sharma is dedicated to providing expert care for women during pregnancy and childbirth.',
        fees: 500,
        address: {
            line1: 'Women’s Health Clinic',
            line2: 'Sultanpur, Uttar Pradesh'
        },
        contact: '09123456789'
    },
    {
        _id: 'doc71',
        name: 'Dr. Neha Patel',
        image: 'doc71', // Replace with actual image variable or path
        speciality: 'Obstetrician and Gynecologist',
        degree: 'MBBS, MS (Obstetrics & Gynecology)',
        experience: '8 Years',
        about: 'Dr. Neha Patel specializes in high-risk pregnancies and ensures the best care for both mother and baby.',
        fees: 600,
        address: {
            line1: 'Sultanpur Women’s Hospital',
            line2: 'Sultanpur, Uttar Pradesh'
        },
        contact: '08765432100'
    },
    {
        _id: 'doc72',
        name: 'Dr. Aarti Soni',
        image: 'doc72', // Replace with actual image variable or path
        speciality: 'Obstetrician and Gynecologist',
        degree: 'MBBS, DGO',
        experience: '15 Years',
        about: 'Dr. Aarti Soni has extensive experience in managing complex pregnancies and gynecological issues.',
        fees: 700,
        address: {
            line1: 'Soni Women’s Care',
            line2: 'Near Civil Line, Sultanpur'
        },
        contact: '09012345678'
    },
    {
        _id: 'doc73',
        name: 'Dr. Manisha Dubey',
        image: 'doc73', // Replace with actual image variable or path
        speciality: 'Obstetrician and Gynecologist',
        degree: 'MBBS, MS (Obstetrics & Gynecology)',
        experience: '12 Years',
        about: 'Dr. Manisha Dubey provides comprehensive care for women, with a focus on safe pregnancies and childbirth.',
        fees: 650,
        address: {
            line1: 'Mother’s Care Clinic',
            line2: 'Sultanpur, Uttar Pradesh'
        },
        contact: '08567891234'
    },
    {
        _id: 'doc74',
        name: 'Dr. Ritu Kapoor',
        image: 'doc74', // Replace with actual image variable or path
        speciality: 'Obstetrician and Gynecologist',
        degree: 'MBBS, DNB (Obstetrics & Gynecology)',
        experience: '9 Years',
        about: 'Dr. Ritu Kapoor is known for her compassionate approach to maternity care and her expertise in high-risk pregnancies.',
        fees: 550,
        address: {
            line1: 'Kapoor Maternity Hospital',
            line2: 'Sultanpur, Uttar Pradesh'
        },
        contact: '08345678901'
    }


];
