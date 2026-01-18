import { GenderType } from "../types";

export function translateSex(sex: GenderType): string {
    return sex === 'Male' ? 'Masculino' : 'Femenino'
}

export function translateFoodDescription(foodDescription: string): string {

    const parts = foodDescription.split(' - ');
    const servingPart = parts[0];
    const nutrientsPart = parts[1];

    const servingTranslated = servingPart.includes('g') 
        ? servingPart.replace(/Per (\d+\s*g)/, 'Por $1')
        : servingPart.replace(/Per (\d+\s\w+)/, 'Por $1');

    const nutrientsTranslated = nutrientsPart
        .replace('Calories:', 'Calorías:')
        .replace('Fat:', 'Grasas:')
        .replace('Carbs:', 'Carbohidratos:')
        .replace('Protein:', 'Proteína:');

    return `${servingTranslated} - ${nutrientsTranslated}`;
}