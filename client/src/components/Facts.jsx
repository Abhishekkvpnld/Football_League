import { colors } from "../utils/colors"
import { facts } from "../utils/facts"
import { fonts } from "../utils/fonts"

const Facts = () => {
  return (
       <div className="border-t border-b" style={{ borderColor: colors.line, background: colors.pitch }}>
           <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4">
             {facts?.map((f, i) => (
               <div key={f.label} className="text-center py-7 px-3" style={{ borderLeft: i === 0 ? "none" : `1px solid ${colors.line}` }}>
                 <div style={{ fontFamily: fonts.mono, fontSize: 28, color: colors.lime }}>{f.num}</div>
                 <div className="mt-1 text-[11px] uppercase tracking-wide" style={{ fontFamily: fonts.mono, color: colors.chalkDim }}>
                   {f.label}
                 </div>
               </div>
             ))}
           </div>
         </div>
  )
}

export default Facts