export interface ExperienceDescription {
    id: string;
    description: string | null;
    educationId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Experience {
    id: string;
    company: string,
    branch: string,
    position: string,
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    experienceDescriptions: ExperienceDescription[];
}

export type AllowedDateFormat = "day" | "month";

export type ExperienceCardProps = {
    dateFormat: AllowedDateFormat;
    title: string;
};

export interface ExperienceEntryCardProps {
    dateFormat: AllowedDateFormat;
    record: Experience;
    isDarkMode: boolean;
    onUpdateHeader: (fields: { company: string; position: string; branch: string; startDate: string; endDate: string }) => void;
    onDeleteRecord: () => void;
    onAddDescription: (description: string) => void;
    onUpdateDescription: (descriptionId: string, description: string) => void;
    onDeleteDescription: (descriptionId: string) => void;
}


export interface AddExperiencePayload {
    company: string;
    branch: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export interface DescriptionItem {
    id: string;
    text: string;
}
export interface AddExperienceFormProps {
    onSuccess?: (payload: AddExperiencePayload) => void;
}