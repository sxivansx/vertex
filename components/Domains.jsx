import { Marquee } from "@/components/ui/marquee"
import {
  FiMusic,
  FiCamera,
  FiCpu,
  FiEdit3,
  FiClipboard,
  FiActivity,
} from "react-icons/fi"

function Domains() {
  return (
    <section className="max-w-[1200px]">
      <div className="flex flex-col mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

        {/* Left Content */}
        <div className="justify-center gap-6 p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight pb-4 text-white sm:text-4xl">
            The many sides of Vertex — one community.
          </h2>

          <p className="text-white/70 leading-relaxed max-w-xl">
            Vertex is built around diverse domains that shape a complete student
            experience. From creativity and technology to leadership and sports,
            each domain empowers students to explore interests, build skills, and
            collaborate beyond classrooms. Every vertical plays a role in making
            Vertex active, inclusive, and impactful — together forming the backbone
            of the club.
          </p>
        </div>

        {/* Right Marquee */}
        <div className="justify-center gap-4 relative overflow-hidden">
          <Marquee pauseOnHover className="gap-4 py-4">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiMusic className="text-purple-400" />
              <span className="text-white font-medium">Cultural</span>
            </span>

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiCamera className="text-pink-400" />
              <span className="text-white font-medium">Media</span>
            </span>

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiCpu className="text-cyan-400" />
              <span className="text-white font-medium">Technical</span>
            </span>

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiEdit3 className="text-yellow-400" />
              <span className="text-white font-medium">Content</span>
            </span>

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiClipboard className="text-orange-400" />
              <span className="text-white font-medium">Organizing</span>
            </span>

            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#08070E]">
              <FiActivity className="text-green-400" />
              <span className="text-white font-medium">Sports</span>
            </span>
          </Marquee>
        </div>

      </div>
    </section>
  )
}

export default Domains
