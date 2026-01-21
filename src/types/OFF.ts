export interface ProductNutrition {
  energyKcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MappedProduct {
  code: string;
  name: string;
  brand: string;
  imageUrl: string;
  nutrition: ProductNutrition;
  found: boolean;
}