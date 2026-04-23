import ImageHackathon from "@/assets/hackathon_myteam.jpg";
const useProfile = (t: (key: string) => string) => {

    const stackCategories = [
        {
            id: "frontend",
            title: "Frontend Development",
            bgColor: "bg-[#bbf7d0]",
            techs: [
                { name: "React", color: "bg-sky-500" },
                { name: "Next.js", color: "bg-zinc-500" },
                { name: "Type Script", color: "bg-blue-500" },
                { name: "HTML", color: "bg-orange-500" },
                { name: "Tailwind CSS", color: "bg-teal-500" },
            ],
        },
        {
            id: "backend",
            title: "Backend & Core",
            bgColor: "bg-[#fed7aa]",
            techs: [
                { name: "Java", color: "bg-orange-600" },
                { name: "C#", color: "bg-purple-600" },
                { name: "Python", color: "bg-teal-600 " },
            ],
        },
        {
            id: "architecture",
            title: "Architecture & Cloud",
            bgColor: "bg-[#e9d5ff]",
            techs: [
                { name: "Microservices", color: "bg-indigo-600" },
                { name: "AWS", color: "bg-yellow-600" },
                { name: "Redis", color: "bg-red-500" },
                { name: "Eureka", color: "bg-emerald-600" },
                { name: "API Gateway", color: "bg-blue-600" },
                { name: "Load Balancer", color: "bg-gray-600" },
            ],
        },
    ];

    const competitionParticipated = [
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
            linkHref: "/profile/hackathon",
            linkText: "Visit Global Hackathon",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
        {
            title: t("profile.hackathon.title"),
            description: t("profile.hackathon.description"),
            imageSrc: ImageHackathon,
            imageAlt: "global hackathon 2024",
            className: "",
        },
    ];

    return { stackCategories, competitionParticipated };
};

export default useProfile;
