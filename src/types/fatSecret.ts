export interface foodInSearchFoodResult {
    brand_name?: string,
    food_description: string,
    food_id: string,
    food_name: string,
    food_type: string,
    food_url: string
}

export interface fatSecretSearchFoodResult {
    foods: {
        food: foodInSearchFoodResult[];
        max_results: string;
        page_number: string;
        total_results: string;
    };
}

export interface fatSecretGetFoodResult {
    food: {
        food_id: string
        food_name: string
        food_type: string
        servings: {
            serving: serving[]
        }
    }
}

export interface serving {
    serving_id: string
    serving_description: string
    measurement_description: string
    calories: string
    carbohydrate: string
    protein: string
    fat: string
}