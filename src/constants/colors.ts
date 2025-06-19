export const COLORS = {
    /** #25231C, rgb(37, 35, 28) */
    BLACK: "#25231C",

    /** #EFCD63, rgb(239, 205, 99) */
    YELLOW: "#EFCD63",

    /** #FDFEFE, rgb(253, 254, 254) */
    WHITE: "#FDFEFE",
} as const;

export type ColorKey = keyof typeof COLORS;
