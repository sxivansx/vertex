import {
  FiMusic,
  FiCamera,
  FiCpu,
  FiEdit3,
  FiClipboard,
  FiActivity,
} from "react-icons/fi"

const domains = [
  {
    icon: FiCpu,
    name: "Technical",
    description: "Hackathons, workshops, and projects pushing the boundaries of technology.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: FiMusic,
    name: "Cultural",
    description: "Events and initiatives celebrating art, music, and student expression.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    icon: FiCamera,
    name: "Media",
    description: "Photography, videography, and storytelling that captures every moment.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    glow: "group-hover:shadow-pink-500/10",
  },
  {
    icon: FiEdit3,
    name: "Content",
    description: "Writing, design, and digital content that gives Vertex its voice.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    glow: "group-hover:shadow-yellow-500/10",
  },
  {
    icon: FiClipboard,
    name: "Organizing",
    description: "The backbone behind every successful event and initiative.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "group-hover:shadow-orange-500/10",
  },
  {
    icon: FiActivity,
    name: "Sports",
    description: "Competitions and activities that build teamwork, fitness, and spirit.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    glow: "group-hover:shadow-green-500/10",
  },
]

function Domains() {
  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The many sides of Vertex —<br className="hidden sm:block" /> one community.
          </h2>
          <p className="mt-4 leading-relaxed text-white/50">
            From creativity and technology to leadership and sports, each domain
            empowers students to explore interests, build skills, and collaborate
            beyond classrooms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(({ icon: Icon, name, description, color, bg, border, glow }) => (
            <div
              key={name}
              className={`group rounded-2xl border ${border} bg-white/[0.03] p-6 shadow-lg transition-all duration-300 hover:bg-white/[0.06] hover:shadow-xl ${glow}`}
            >
              <div className={`mb-4 inline-flex rounded-xl ${bg} p-3`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{name}</h3>
              <p className="text-sm leading-relaxed text-white/50">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Domains
