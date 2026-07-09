import type { ProjectCategory } from "./type";
import type { ReactNode } from "react";
// INDEX PROJECT INTERFACE
interface SourceRecord {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

interface TypeRecord {
    id: string;
    type: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

interface StackRecord {
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectRecord {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    source: SourceRecord[];
    type: TypeRecord[];
    projectStacks: StackRecord[];
}


// addProjects
export interface SourceItem {
    id: string;
    title: string;
    description: string;
    imgFile: File | null;
    previewUrl: string | null;
}

// portfolio
interface ProjectSource {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

interface ProjectType {
    id: string;
    type: ProjectCategory;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

interface ProjectStack {
    id: string;
    name: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    source: ProjectSource[];
    type: ProjectType[];
    projectStacks: ProjectStack[];
}

// login
export interface AuthRegisterProps {
    modal?: boolean;
    className?: string;
    trigger?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export interface AuthLoginProps {
    modal?: boolean;
    className?: string;
    trigger?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}