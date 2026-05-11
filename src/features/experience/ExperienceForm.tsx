import React from "react";
import { Calendar, Briefcase, CheckCircle2, Code2 } from "lucide-react";

export type ExperienceProps = {
    id: string;
    project: string;
    period: string;
    role: string;
    responsibilities: string[];
    technologies: string[];
}

type ExperienceFormProps = {
    t: (key: string) => string;
    experienceData: ExperienceProps[];
}

export default function ExperienceForm({ t, experienceData }: ExperienceFormProps) {
    return (
        <section className="py-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center sm:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl flex items-center justify-center sm:justify-start gap-3">
                        <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        {t("workExperience.title")}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        A summary of my professional projects and key
                        contributions.
                    </p>
                </div>

                <div className="space-y-8">
                    {experienceData.map((exp) => (
                        <div
                            key={exp.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-full opacity-50 pointer-events-none blur-2xl"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {exp.project}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-3 py-1.5 rounded-full text-sm font-medium w-fit">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Code2 className="w-4 h-4" />
                                        {t("workExperience.description")}
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map(
                                            (task, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start text-gray-600 dark:text-gray-300"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">
                                                        {task}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    {exp.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
