import { colors } from "../../utils/colors";
import { facts } from "../../utils/facts";
import { fonts } from "../../utils/fonts";
import {
  Trophy,
  Users,
  CalendarDays,
  Goal,
} from "lucide-react";

const icons = [
  <Trophy size={28} />,
  <Users size={28} />,
  <CalendarDays size={28} />,
  <Goal size={28} />,
];

const Facts = () => {
  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(180deg, ${colors.pitchDark} 0%, ${colors.pitch} 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold uppercase"
            style={{
              fontFamily: fonts.display,
              color: colors.chalk,
            }}
          >
            League Stats
          </h2>

          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              color: colors.chalkDim,
              fontFamily: fonts.body,
            }}
          >
            Every Sunday we play, compete, and create unforgettable football
            memories together.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: colors.line,
              }}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-40
                  transition-all
                  duration-500
                "
                style={{
                  background: colors.lime,
                }}
              />

              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-6
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  group-hover:scale-110
                "
                style={{
                  background: colors.lime,
                  color: colors.pitchDark,
                }}
              >
                {icons[index]}
              </div>

              {/* Number */}
              <h3
                className="
                  text-5xl
                  font-bold
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
                style={{
                  color: colors.lime,
                  fontFamily: fonts.mono,
                  textShadow: "0 0 20px rgba(215,255,92,.45)",
                }}
              >
                {fact.num}
              </h3>

              {/* Label */}
              <p
                className="mt-3 uppercase tracking-[0.2em] text-xs"
                style={{
                  color: colors.chalkDim,
                  fontFamily: fonts.mono,
                }}
              >
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;