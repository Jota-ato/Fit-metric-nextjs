export type GenderType = "Male" | "Female"
export type ActivityFactorType = "Sedentary" | "Light" | "Moderate" | "Very" | "Extreme"
export type GoalType = "Lose Weight" | "Maintain Weight" | "Gain Weight"
export type MacronutrientType = "Protein" | "Carbohydrate" | "Fat"
export type PurposeType = "Gain Muscle" | "Maintain Muscle" | "Lose Fat"
export type RegistrationInputType = {
    label: string
    name: string
    placeholder: string
    type?: string
}

export type RegistrationFields = {
    name: string
    age: number
    weight: number
    height: number
    sex: GenderType
}

export type MacronutrientBreakdown = {
    protein: number
    carbohydrate: number
    fat: number
}

export type PatientBasicInfo = {
    name: string
    weight: number
    height: number
    age: number
    sex: GenderType
}

export type PatientAdvancedInfo = {
    activityFactor: ActivityFactorType
    goal: GoalType
    purpose: PurposeType
}

export type MealTime = 'breakfast' | 'lunch' | 'dinner' | 'snacks'