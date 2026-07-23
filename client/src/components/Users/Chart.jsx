import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const data = [
    {
        name: "Abhishek",
        goals: 18,
        image: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Alan",
        goals: 15,
        image: "https://i.pravatar.cc/100?img=13",
    },
    {
        name: "Rahul",
        goals: 13,
        image: "https://i.pravatar.cc/100?img=14",
    },
    {
        name: "Nikhil",
        goals: 10,
        image: "https://i.pravatar.cc/100?img=15",
    },
    {
        name: "Abhishek",
        goals: 18,
        image: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Alan",
        goals: 15,
        image: "https://i.pravatar.cc/100?img=13",
    },
    {
        name: "Rahul",
        goals: 13,
        image: "https://i.pravatar.cc/100?img=14",
    },
    {
        name: "Nikhil",
        goals: 10,
        image: "https://i.pravatar.cc/100?img=15",
    },
    {
        name: "Abhishek",
        goals: 18,
        image: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Alan",
        goals: 15,
        image: "https://i.pravatar.cc/100?img=13",
    },
    {
        name: "Rahul",
        goals: 13,
        image: "https://i.pravatar.cc/100?img=14",
    },
    {
        name: "Nikhil",
        goals: 10,
        image: "https://i.pravatar.cc/100?img=15",
    },

];

const AvatarTick = ({ x, y, payload }) => {
    const player = data.find((p) => p.name === payload.value);

    return (
        <g transform={`translate(${x},${y})`}>
            <foreignObject x={-18} y={0} width={36} height={36}>
                <img
                    src={player.image}
                    alt={player.name}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: "999px",
                        border: "2px solid #84cc16",
                        objectFit: "cover",
                    }}
                />
            </foreignObject>

            <text
                x={0}
                y={52}
                textAnchor="middle"
                fill="#fff"
                fontSize="12"
            >
                {player.name}
            </text>
        </g>
    );
};

export default function GoalChart() {
    return (
        <div className="bg-slate-900 rounded-3xl p-8 h-[500px]">

            <h2 className="text-3xl font-bold text-white mb-8">
                Top Goal Scorers
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 0,
                        bottom: 80,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        interval={0}
                        tick={<AvatarTick />}
                    />

                    <YAxis stroke="#94a3b8" />

                    <Tooltip
                        cursor={{ fill: "rgba(37,99,235,0.1)" }}
                        contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #2563eb",
                            borderRadius: "16px",
                            padding: "12px",
                            color: "#fff",
                            boxShadow: "0 10px 30px rgba(37,99,235,.35)",
                        }}
                        labelStyle={{
                            color: "#60a5fa",
                            fontWeight: "bold",
                            marginBottom: "8px",
                        }}
                        itemStyle={{
                            color: "#ffffff",
                            fontWeight: "600",
                        }}
                    />

                    <Bar
                        dataKey="goals"
                        radius={[12, 12, 0, 0]}
                    >
                        {data.map((_, i) => (
                            <Cell
                                key={i}
                                fill="red"
                            />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}