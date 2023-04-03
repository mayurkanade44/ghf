import b from "../images/slider/slider-2.jpeg";
import c from "../images/slider/slider-3.jpeg";
import a from "../images/slider/slider-1.jpeg";
import d from "../images/events/slider-7.jpeg";
import childIndia from "../images/events/image_08.jpg";
import childAfrica from "../images/events/image_06.jpg";
import childMum from "../images/events/image_03.jpg";
import childDelhi from "../images/events/image_01.jpg";
import stq from "../images/team/1.jpg";
import man from "../images/team/man.png";
import woman from "../images/team/woman.png";
import manger from "../images/team/manager.png";
import insta from "../images/social/instagram.png";
import fb from "../images/social/facebook.png";
import ln from "../images/social/linkedin.png";

export const homeImages = [
  {
    id: 2,
    image: b,
    title: "Mumbai Team",
    desc: "Worked during 2019 floods",
  },
  {
    id: 3,
    image: c,
    title: "Kolhapur Team",
    desc: "Worked during 2019 floods",
  },
];

export const socialMedia = [
  {
    id: 1,
    image: fb,
    link: "https://www.facebook.com/Giving-Hope-Foundation-100304929513483/",
    name: "fb",
  },
  {
    id: 2,
    image: ln,
    link: "https://www.linkedin.com/company/giving-hope-foundation-india/about/",
    name: "linkedin",
  },
  {
    id: 3,
    image: insta,
    link: "https://www.instagram.com/givinghope.foundation/",
    name: "insta",
  },
];

export const pageLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/AboutUs",
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/Gallery",
  },
  {
    id: 5,
    name: "Blogs",
    link: "/Blogs",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/ContactUs",
  },
];

export const services = [
  {
    id: 1,
    title: "EPCORN",
    image: childIndia,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    raised: "100",
    total: "10,000",
    projects: [
      {
        id: 1,
        name: "Kolhapur Flood",
        image: childIndia,
        description: "",
      },
    ],
  },
  {
    id: 2,
    title: "SARS",
    image: childAfrica,
    raised: "500",
    total: "50,000",
  },
  {
    id: 3,
    title: "Shanti Dham",
    image: childMum,
    raised: "1000",
    total: "50,000",
  },
  {
    id: 4,
    title: "Sport Support",
    image: childDelhi,
    raised: "5000",
    total: "10,000",
  },
  {
    id: 5,
    title: "Seva",
    image: childIndia,
    raised: "10000",
    total: "1,00,000",
  },
];

export const team = [
  {
    id: 1,
    image: stq,
    name: "Stelson Quadros",
    title: "Founder",
  },
  {
    id: 2,
    image: woman,
    name: "Stella Quadros",
    title: "Co-Founder",
  },
  {
    id: 3,
    image: woman,
    name: "Flavian Quadros",
    title: "Co-Founder",
  },
  {
    id: 4,
    image: manger,
    name: "Sayalee Kudtarkar",
    title: "Volunteer",
  },
  {
    id: 5,
    image: man,
    name: "Mayur Kanade",
    title: "Volunteer",
  },
  {
    id: 6,
    image: woman,
    name: "Aparna Bhere",
    title: "Volunteer",
  },
];

export const gallery = [
  {
    id: 1,
    category: "Kolhapur",
    image: a,
  },
  {
    id: 2,
    category: "Mumbai",
    image: b,
  },
  {
    id: 3,
    category: "Pune",
    image: c,
  },
  {
    id: 4,
    category: "Pune",
    image: d,
  },
];

export const blogs = [
  {
    id: 1,
    bannerImg: a,
    image: d,
    title: "Kolhapur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe repellat sit, perspiciatis amet eaque consequuntur libero! Ea commodi Dicta, explicabo odio?",
    images: [
      {
        id: 1,
        img: d,
      },
      {
        id: 2,
        img: b,
      },
      {
        id: 3,
        img: d,
      },
      {
        id: 4,
        img: d,
      },
    ],
  },
  {
    id: 2,
    bannerImg: b,
    image: c,
    title: "Mumabi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe repellat sit, perspiciatis amet eaque consequuntur libero! Ea commodi Dicta, explicabo odio?",
    images: [
      {
        id: 1,
        img: d,
      },
      {
        id: 2,
        img: b,
      },
      {
        id: 3,
        img: d,
      },
      {
        id: 4,
        img: d,
      },
    ],
  },
  {
    id: 3,

    bannerImg: c,
    title: "Pune",
    image: c,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe repellat sit, perspiciatis amet eaque consequuntur libero! Ea commodi Dicta, explicabo odio?",
    images: [
      {
        id: 1,
        img: d,
      },
      {
        id: 2,
        img: b,
      },
      {
        id: 3,
        img: d,
      },
      {
        id: 4,
        img: d,
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "EPCRON",
  },
];
