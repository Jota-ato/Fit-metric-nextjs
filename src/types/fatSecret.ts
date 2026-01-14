export interface FatSecretFood {
  food_id: string
  food_name: string
  food_type: string
  food_description: string
  food_url?: string
  servings?: {
    serving: FatSecretServing[]
  }
}

export interface FatSecretServing {
  serving_id: string
  serving_description: string
  metric_serving_amount?: string
  metric_serving_unit?: string
  calories: string
  carbohydrate: string
  protein: string
  fat: string
  saturated_fat?: string
  polyunsaturated_fat?: string
  monounsaturated_fat?: string
  cholesterol?: string
  sodium?: string
  potassium?: string
  fiber?: string
  sugar?: string
}