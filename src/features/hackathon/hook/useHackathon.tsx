const useHackathon = () => {

  const videoUrl = "https://www.youtube.com/watch?v=6sEAe2aC9xM";

  const relatedArticles = [
      {
          id: 1,
          title: "Kinh nghiệm xương máu khi tham gia Hackathon cho người mới bắt đầu",
          date: "20/04/2026",
          link: "/blog/kinh-nghiem-hackathon",
      },
      {
          id: 2,
          title: "Tổng hợp các dự án công nghệ đột phá đạt giải cao nhất năm ngoái",
          date: "15/04/2026",
          link: "/blog/du-an-dot-pha",
      },
      {
          id: 3,
          title: "Hướng dẫn tối ưu hóa hiệu suất ứng dụng Next.js trong 24 giờ",
          date: "10/04/2026",
          link: "/blog/toi-uu-nextjs",
      },
  ];

  return { videoUrl, relatedArticles };
};
export default useHackathon;