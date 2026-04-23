"use client";
import ArticleGrid from "@/components/ui/ArticleGrid";
import VideoPlayer from "@/components/ui/VideoPlayer";

type HackathonFormProps = {
    videoUrl: string;
    t: (key: string) => string;
};

export default function HackathonForm({ videoUrl, t }: HackathonFormProps) {

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

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
                {t("profile.hackathon.introduction")}
            </h1>
            <VideoPlayer
                videoUrl={videoUrl}
                playing={false}
                muted={false}
                loop={false}
                wrapperClassName="w-full max-w-6xl mx-auto"
            />

            {/* Vùng chứa Mô tả (Description) nằm ngay dưới */}
            <div className="w-full max-w-6xl mx-auto mt-6 dark:bg-gray-900/50 p-6 rounded-xl border dark:border-gray-800">
                <h2 className="text-xl font-semibold mb-3">
                    {t("profile.hackathon.descriptionTitle")}
                </h2>

                <div className="leading-relaxed whitespace-pre-line">
                    {t("profile.hackathon.descriptionContent")}
                </div>
            </div>

            {/* NEW: Vùng chứa Bài viết liên quan (Related Articles) */}
            <div className="w-full max-w-6xl mx-auto mt-6">

                <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">
                    {t("profile.hackathon.relatedArticles")}
                </h2>

                <ArticleGrid
                    articles={relatedArticles}
                    readMoreText={t("common.readMore")}
                />

            </div>
        </div>
    );
}
