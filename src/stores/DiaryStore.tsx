import { create } from "zustand";
import { devtools } from 'zustand/middleware'

interface useDiaryStoreType {
    
}

const useDiaryStore = create()(
    devtools(
        (set) => {

        }
    )
)