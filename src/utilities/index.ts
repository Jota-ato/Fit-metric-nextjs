import { GenderType } from "../types";

export function translateSex(sex: GenderType) {
    return sex === 'Male' ? 'Masculino' : 'Femenino'
}