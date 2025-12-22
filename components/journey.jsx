import React from "react"
import { Timeline } from "@/components/ui/timeline"

function Journey() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white/70 md:text-sm">
            Vertex evolves into a multi-domain student club, uniting technology,
            culture, media, and sports under one growing community.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/journey/inaug3.jpeg"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="/images/journey/inaug1.jpeg"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="/images/journey/inaug2.jpeg"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            <img
              src="/images/journey/inaug4.jpeg"
              alt="Vertex Sports Meet"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white/70 md:text-sm">
            Vertex begins as a departmental initiative within the Electronics
            and Telecommunication Engineering department.
          </p>

          <p className="mb-8 text-xs font-normal text-white/70 md:text-sm">
            The early phase focused on learning, collaboration, and forming a
            core team driven by curiosity and innovation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/journey/early.jpeg"
              alt="Early Workshops"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Milestones",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/70 md:text-sm">
            Key moments that shaped Vertex into an active student-led community.
          </p>

          <div className="mb-8 space-y-2">
            <div className="text-xs md:text-sm text-white/70">
              ✅ Formation of the core Vertex team
            </div>
            <div className="text-xs md:text-sm text-white/70">
              ✅ Launch of technical and cultural initiatives
            </div>
            <div className="text-xs md:text-sm text-white/70">
              ✅ Expansion into media, content, and sports domains
            </div>
            <div className="text-xs md:text-sm text-white/70">
              ✅ Growing participation and student involvement
            </div>
            <div className="text-xs md:text-sm text-white/70">
              ✅ Building a strong and inclusive campus community
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/journey/milestone.jpeg"
              alt="Vertex Team"
              width={2000}
              height={2000}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
            </div>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 border-l border-r border-b border-white/10 p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          From an idea to a growing community
        </h2>
        <p className="text-white/70">
          Vertex started as a simple idea — to give students a space beyond
          academics. Over time, it grew into a collaborative club bringing
          together technology, culture, sports, and leadership through shared
          experiences and learning.
        </p>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  )
}

export default Journey
