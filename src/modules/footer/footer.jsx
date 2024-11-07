import React from 'react'
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from 'next/link';
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;


const footer = () => {
  return (
      <section id="contact">
        <div className=" items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's Connect? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  on Linkedin
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
              <p className="text-muted-foreground">
              © anshhvarma 2024. All Rights Reserved
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
  )
}

export default footer