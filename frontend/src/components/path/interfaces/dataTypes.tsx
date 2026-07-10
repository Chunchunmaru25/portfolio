export interface SkillRecord {
    id: string;
    skills: string;
    description: string;
    progress: string;
}

export interface EducationDescription {
    id: string;
    description: string;
}

export interface EducationRecord {
    program: string;
    branch: string;
    startDate: string;
    endDate: string;
    educationDescriptions: EducationDescription[];
}

export interface AchievementRecord {
    id: string;
    title: string;
    year: string | number;
    description: string;
}

export interface SoftSkillApiItem {
    stack?: string;
    progress?: number | string;
    [key: string]: unknown;
}

export function getErrorMessage(err: unknown): string {
    if (err instanceof Error) return err.message;
    if (typeof err === "object" && err !== null && "response" in err) {
        const response = (err as { response?: { data?: { message?: string } } }).response;
        return response?.data?.message ?? "Request failed";
    }
    return "Unknown error";
}

export function personalValue(
    data: { key: string; value: string | number }[],
    key: string,
    fallback = ""
): string {
    const value = data.find((p) => p.key === key)?.value ?? fallback;
    return String(value);
}

export function personalNumber(
    data: { key: string; value: string | number }[],
    key: string,
    fallback = 0
): number {
    const value = data.find((p) => p.key === key)?.value ?? fallback;
    return typeof value === "number" ? value : Number(value) || fallback;
}
