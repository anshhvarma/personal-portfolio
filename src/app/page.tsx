// import { HackathonCard } from "@/components/hackathon-card";
// import BlurFade from "@/components/magicui/blur-fade";
// import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { ProjectCard } from "@/components/project-card";
// import { ResumeCard } from "@/components/resume-card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { DATA } from "@/data/resume";
// import Link from "next/link";
// import Markdown from "react-markdown";

// import Navbar from "@/components/navbar";
// import { Button } from "@/components/ui/button";
import React from "react";

import Hackathon from '@/modules/home/index'
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function Page() {
  return (
    <section className="md:flex md:flex-col md:items-center md:justify-center min-h-screen">
  <div className="flex flex-1 mt-32 mb-32 items-center justify-center w-full">
    <p className="text-[4.5rem] md:text-[7.4rem] font-semibold leading-tight text-left selection:bg-yellow-200">
      Are you prepared to turn your idea into reality within weeks?
    </p>
  </div>
  {/* <Link href="https://docs.google.com/document/d/1BHUvXBchDyGD6IYDeEELA6fu5bq1Ad1ukPDEa8yAD0M/edit?usp=sharing" target="_blank" >
  <Button variant={"outline"} className="text-2xl ">
    RESUME
  </Button>
  </Link> */}
  <Hackathon />
  
</section>


    // <main className="flex flex-col min-h-[100dvh] space-y-10">
    //   <section id="hero">
    //     <div className="mx-auto w-full max-w-2xl space-y-8">
    //       <div className="gap-2 flex justify-between">
    //         <div className="flex-col flex flex-1 space-y-1.5">
    //           <BlurFadeText
    //             delay={BLUR_FADE_DELAY}
    //             className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
    //             yOffset={8}
    //             text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
    //           />
    //           <BlurFadeText
    //             className="max-w-[600px] md:text-xl"
    //             delay={BLUR_FADE_DELAY}
    //             text={DATA.description}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="about">
    //     <BlurFade delay={BLUR_FADE_DELAY * 3}>
    //       <h2 className="text-xl font-bold">About</h2>
    //     </BlurFade>
    //     <BlurFade delay={BLUR_FADE_DELAY * 4}>
    //       <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
    //         {DATA.summary}
    //       </Markdown>
    //     </BlurFade>
    //   </section>
    //   <section id="work">
    //     <div className="flex min-h-0 flex-col gap-y-3">
    //       <BlurFade delay={BLUR_FADE_DELAY * 5}>
    //         <h2 className="text-xl font-bold">Work Experience</h2>
    //       </BlurFade>
    //       {DATA.work.map((work, id) => (
    //         <BlurFade
    //           key={work.company}
    //           delay={BLUR_FADE_DELAY * 6 + id * 0.05}
    //         >
    //           <ResumeCard
    //             key={work.company}
    //             logoUrl={work.logoUrl}
    //             altText={work.company}
    //             title={work.company}
    //             subtitle={work.title}
    //             href={work.href}
    //             badges={work.badges}
    //             period={`${work.start} - ${work.end ?? "Present"}`}
    //             description={work.description}
    //           />
    //         </BlurFade>
    //       ))}
    //     </div>
    //   </section>
    //   <section id="education">
    //     <div className="flex min-h-0 flex-col gap-y-3">
    //       <BlurFade delay={BLUR_FADE_DELAY * 7}>
    //         <h2 className="text-xl font-bold">Education</h2>
    //       </BlurFade>
    //       {DATA.education.map((education, id) => (
    //         <BlurFade
    //           key={education.school}
    //           delay={BLUR_FADE_DELAY * 8 + id * 0.05}
    //         >
    //           <ResumeCard
    //             key={education.school}
    //             href={education.href}
    //             logoUrl={education.logoUrl}
    //             altText={education.school}
    //             title={education.school}
    //             subtitle={education.degree}
    //             period={`${education.start} - ${education.end}`}
    //           />
    //         </BlurFade>
    //       ))}
    //     </div>
    //   </section>
    //   <section id="skills">
    //     <div className="flex min-h-0 flex-col gap-y-3">
    //       <BlurFade delay={BLUR_FADE_DELAY * 9}>
    //         <h2 className="text-xl font-bold">Skills</h2>
    //       </BlurFade>
    //       <div className="flex flex-wrap gap-1">
    //         {DATA.skills.map((skill, id) => (
    //           <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
    //             <Badge key={skill}>{skill}</Badge>
    //           </BlurFade>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    //   <section id="projects">
    //     <div className="space-y-12 w-full py-12">
    //       <BlurFade delay={BLUR_FADE_DELAY * 11}>
    //         <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //           <div className="space-y-2">
    //             <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
    //               My Projects
    //             </div>
    //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
    //               Check out my latest work
    //             </h2>
    //             <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //               I&apos;ve worked on a variety of projects, from simple
    //               websites to complex web applications. Here are a few of my
    //               favorites.
    //             </p>
    //           </div>
    //         </div>
    //       </BlurFade>
    //       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
    //         {DATA.projects.map((project, id) => (
    //           <BlurFade
    //             key={project.title}
    //             delay={BLUR_FADE_DELAY * 12 + id * 0.05}
    //           >
    //             <ProjectCard
    //               href={project.href}
    //               key={project.title}
    //               title={project.title}
    //               description={project.description}
    //               dates={project.dates}
    //               tags={project.technologies}
    //               image={project.image}
    //               video={project.video}
    //               links={project.links}
    //             />
    //           </BlurFade>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    //   <section id="hackathons">
    //     <div className="space-y-12 w-full py-12">
    //       <BlurFade delay={BLUR_FADE_DELAY * 13}>
    //         <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //           <div className="space-y-2">
    //             <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
    //               Hackathons
    //             </div>
    //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
    //               I like building things
    //             </h2>
    //             <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //               {/* During my time in university, I attended{" "}
    //               {DATA.hackathons.length}+ */}

    //               While at university, I participated in {DATA.hackathons.length}+ hackathons, where people from across the states gathered to create amazing projects within just 2-3 days. It was inspiring to witness how driven, passionate individuals could bring so many innovative ideas to life.
    //             </p>
    //           </div>
    //         </div>
    //       </BlurFade>
    //       <BlurFade delay={BLUR_FADE_DELAY * 14}>
    //         <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
    //           {DATA.hackathons.map((project, id) => (
    //             <BlurFade
    //               key={project.title + project.dates}
    //               delay={BLUR_FADE_DELAY * 15 + id * 0.05}
    //             >
    //               <HackathonCard
    //                 title={project.title}
    //                 description={project.description}
    //                 location={project.location}
    //                 dates={project.dates}
    //                 image={project.image}
    //                 links={project.links}
    //               />
    //             </BlurFade>
    //           ))}
    //         </ul>
    //       </BlurFade>
    //     </div>
    //   </section>
    //   <section id="contact">
    //     <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
    //       <BlurFade delay={BLUR_FADE_DELAY * 16}>
    //         <div className="space-y-3">
    //           <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
    //             Contact
    //           </div>
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
    //             Get in Touch
    //           </h2>
    //           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //             Let's Connect? Just shoot me a dm{" "}
    //             <Link
    //               href={DATA.contact.social.X.url}
    //               className="text-blue-500 hover:underline"
    //             >
    //               on Linkedin
    //             </Link>{" "}
    //             and I&apos;ll respond whenever I can. I will ignore all
    //             soliciting.
    //           </p>
    //         </div>
    //       </BlurFade>
    //     </div>
    //   </section>
    // </main>
  );
}