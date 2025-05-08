import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
          <p>What&apos;s Up Everyone, I&apos;m Ethan Caldwell from Austin, TX.</p>
          <p>So, my story&apos;s kinda wild. Started coding in 2017, got swept up in the blockchain wave around late 2020. I ended up working on a few ambitious NFT projects—launching tokens, designing smart contracts, and watching the numbers skyrocket. The hype was unreal, and at one point, I felt like I was on top of the world.
          </p>
          <p>But then burnout hit me like a runaway train.
          </p>
          <p>I was stuck, spinning my wheels, buried under the weight of deadlines and expectations. So I hit pause, sold most of my stuff, and took off backpacking for almost two years—Thailand, Vietnam, Japan, Nepal, you name it. I dove into meditation retreats, rituals, plant medicine, you name it—trying to piece myself back together and find that spark I&apos;d lost.
          </p>
          <p>Eventually, I realized I still had this passion for building things that change people&apos;s lives. So here I am, stepping back on the scene with a whole new perspective.
          </p>
          <p>Now I’m back in the game, juggling multiple hats:
          </p>
          <ul className="list-disc pl-6">
              <li>Full-Stack Blockchain Developer</li>
              <li>Live Stream Coding (Building in Public)</li>
              <li>UI/UX Designer</li>
              <li>AI Tinkerer & Hacker</li>
              <li>Creative Problem Solver</li>
            </ul>
          <p>My mission is to fuse blockchain, user empathy, and AI-powered solutions into projects that aren&apos;t just technically cutting-edge but also genuinely human-centric. I’m here to push boundaries—whether it’s the future of Web3, next-gen AI, or whatever else fuels our collective innovation.
          </p>
          <p>Always down to connect with fellow builders, thinkers, and dreamers.
          </p>
          <p>Let&apos;s build the future together.</p>
            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Wholeness & Balanced Vibrations 🙏
              </div>
            </div>
            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">Caldwell</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image src={AquaWolfPFP} alt="AquaWolf PFP" />
              </div>
              <div className="lg:ml-4">
                <div className="text-xl font-semibold text-white lg:text-2xl">
                Caldwell
                </div>
                <div className="text-[12px] lg:text-lg">
                  Senior Full-Stack Software Engineer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
