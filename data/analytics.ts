import { AnalyticsItem, CommentsItem } from "@/types/analytics";

const analyticsData: AnalyticsItem[] = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    uv: 3500,
    pv: 1300,
    amt: 2210,
  },
  {
    name: "Oct",
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nov",
    uv: 2000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Dec",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const commentsData: CommentsItem[] = [
  {
    name: "Post 1",
    uv: 400,
    pv: 240,
  },
  {
    name: "Post 2",
    uv: 300,
    pv: 139,
  },
  {
    name: "Post 3",
    uv: 200,
    pv: 90,
  },
  {
    name: "Post 4",
    uv: 278,
    pv: 38,
  },
  {
    name: "Post 5",
    uv: 189,
    pv: 40,
  },
  {
    name: "Post 6",
    uv: 238,
    pv: 30,
  },
  {
    name: "Post 7",
    uv: 349,
    pv: 40,
  },
];

const authorPostData = {
  labels: ["Ava Johnson", "James Taylor", "Emma Davis"],
  datasets: [
    {
      label: "posts",
      data: [250, 75, 80],
      backgroundColor: [
        "rgb(71, 85, 105)",
        "rgb(148, 163, 184)",
        "rgb(226, 232, 240)",
      ],
      hoverOffset: 4,
    },
  ],
};

const categoriesData = {
  labels: [
    "Artificial Intelligence (AI)",
    "Quantum Computing",
    "Blockchain",
    "Augmented Reality (AR)",
    "Internet of Things (IoT)",
    "Cybersecurity",
    "Cloud Computing",
  ],
  datasets: [
    {
      label: "Post 1",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(51, 65, 85, 0.2)",
      borderColor: "rgb(51, 65, 85)",
      pointBackgroundColor: "rgb(51, 65, 85)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Post 2",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(100, 116, 139 0.2)",
      borderColor: "rgb(100, 116, 139)",
      pointBackgroundColor: "rgb(100, 116, 139)",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      label: "Post 3",
      data: [45, 23, 56, 69, 56, 67, 10],
      fill: true,
      backgroundColor: "rgba(148, 163, 184, 0.2)",
      borderColor: "rgb(148, 163, 184)",
      pointBackgroundColor: "rgb(148, 163, 184)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

export { analyticsData, commentsData, authorPostData, categoriesData };
