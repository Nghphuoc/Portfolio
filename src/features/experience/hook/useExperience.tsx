import { ExperienceProps } from "@/features/experience/ExperienceForm";

const useExperience = () => {

  const experienceData: ExperienceProps[] = [
      {
          id: "tuna-jafic",
          project: "Tuna-jafic | Fishing Vessel Information Management System",
          period: "April 2025 - April 2026",
          role: "Full-stack Developer",
          responsibilities: [
              "Developed and optimized robust file upload/export features to efficiently handle large datasets.",
              "Implemented RESTful APIs using Java (Spring Boot), effectively structuring Entities, DTOs, Repositories, and Services for seamless frontend-backend integration.",
              "Implemented secure password reset functionality leveraging Amazon Web Services (AWS).",
              "Created responsive user interfaces using Next.js (utilizing SSR/SSG), React Hooks, React Query, and Tailwind CSS.",
              "Wrote comprehensive unit tests for both backend and frontend components, actively resolving bugs and SonarQube vulnerabilities to maintain high code quality.",
              "Collaborated closely with the QA team to test, debug, and ensure overall system stability and performance.",
          ],
          technologies: [
              "Java",
              "Spring Boot",
              "Next.js",
              "React Query",
              "Tailwind CSS",
              "AWS",
              "PostgreSQL",
          ],
      },
      {
          id: "sbps",
          project: "Software Banking Post Service (SBPS)",
          period: "January 2025 - March 2025",
          role: "Full-stack Developer",
          responsibilities: [
              "Participate in developing functions for SBPS transactions.",
              "Support in optimizing database queries, contributing to a 2/3 reduction in processing time.",
              "Modify and improve UX/UI to enhance user experience.",
          ],
          technologies: [
              "Database Optimization",
              "UX/UI Design",
              "Transaction Processing",
          ],
      },
  ];

  return { experienceData };
  
}

export default useExperience;