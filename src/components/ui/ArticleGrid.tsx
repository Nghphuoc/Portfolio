import Link from "next/link";

export interface ArticleItem {
    id: string | number;
    title: string;
    date: string;
    link: string;
}

interface CommonArticleGridProps {
    articles: ArticleItem[];
    readMoreText?: string;
    wrapperClassName?: string;
}

export default function CommonArticleGrid({
    articles,
    readMoreText,
    wrapperClassName = "grid grid-cols-1 md:grid-cols-3 gap-4",
}: CommonArticleGridProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <div className={wrapperClassName}>
            {articles.map((article) => (
                <Link
                    key={article.id}
                    href={article.link}
                    className="group block bg-gray-900/30 border border-gray-800 p-4 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                    <p className="text-sm mb-2">{article.date}</p>
                    <h3 className="leading-snug group-hover:text-blue-400 transition-colors">
                        {article.title}
                    </h3>

                    {/* Nút "Đọc thêm" nhỏ xuất hiện khi hover */}
                    <div className="mt-3 text-sm text-blue-400 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {readMoreText}
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </div>
                </Link>
            ))}
        </div>
    );
}
