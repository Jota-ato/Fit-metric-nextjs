'use client'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for landing page demo
const caloriesData = [
    { day: 'Lun', consumed: 1800, target: 2000 },
    { day: 'Mar', consumed: 2100, target: 2000 },
    { day: 'Mié', consumed: 1950, target: 2000 },
    { day: 'Jue', consumed: 2200, target: 2000 },
    { day: 'Vie', consumed: 1850, target: 2000 },
    { day: 'Sáb', consumed: 2300, target: 2000 },
    { day: 'Dom', consumed: 1900, target: 2000 },
]

const macrosData = [
    { name: 'Proteínas', value: 30, color: '#3b82f6' },
    { name: 'Carbohidratos', value: 45, color: '#10b981' },
    { name: 'Grasas', value: 25, color: '#f59e0b' },
]

const progressData = [
    { week: 'Sem 1', weight: 75 },
    { week: 'Sem 2', weight: 74.5 },
    { week: 'Sem 3', weight: 74 },
    { week: 'Sem 4', weight: 73.8 },
    { week: 'Sem 5', weight: 73.2 },
    { week: 'Sem 6', weight: 72.8 },
]

export default function Reports() {
    return (
        <section className="w-full min-h-screen">
            <div className="container space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold">
                        Informes detallados de tu dieta
                    </h2>
                    <p className="text-xl md:text-2xl text-muted  mx-auto">
                        Visualiza tu progreso con gráficas interactivas y toma decisiones informadas sobre tu salud
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:px-4">
                    <article className="rounded-xl shadow-custom p-6 bg-surface border border-border-muted">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8">Calorías Semanales</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={caloriesData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="day" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="consumed"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    name="Consumidas"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="target"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    name="Objetivo"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </article>

                    {/* Macros Distribution */}
                    <article className="rounded-xl shadow-custom p-6 bg-surface border border-border-muted">
                        <h3 className=" text-2xl md:text-3xl font-bold mb-4">Distribución de Macronutrientes</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={macrosData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => {
                                        if (!percent) return;
                                        return `${name} ${(percent * 100).toFixed(0)}%`
                                    }}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {macrosData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </article>

                    {/* Weight Progress */}
                    <article className="rounded-xl shadow-custom p-6 bg-surface border border-border-muted lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8">Progreso de Peso</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={progressData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="week" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" domain={[70, 76]} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px'
                                    }}
                                    formatter={(value?: number) => {
                                        if (value === undefined) return ['--', 'Peso'];
                                        return [`${value} kg`, 'Peso'];
                                    }}
                                />
                                <Bar
                                    dataKey="weight"
                                    fill="#8b5cf6"
                                    radius={[8, 8, 0, 0]}
                                    name="Peso (kg)"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </article>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-custom cursor-pointer">
                        Comienza a trackear tu progreso
                    </button>
                </div>
            </div>
        </section>
    )
}