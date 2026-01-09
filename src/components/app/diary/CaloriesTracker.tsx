'use client'

export default function CaloriesTracker() {
    return (
        <div className="flex justify-between items-center gap-6 mt-16 p-6 rounded-xl text-2xl text-center">
            <div className="sm:flex gap-2">
                <h3 className="text-muted">
                    Calorias consumidas:
                </h3>
                <p className="font-bold text-primary">3000</p>
            </div>
            <div className="sm:flex gap-2">
                <h3 className="text-muted">
                    Calorias restantes
                </h3>
                <p className="font-bold dark:text-blue-600 text-amber-500">
                    300
                </p>
            </div>
        </div>
    )
}