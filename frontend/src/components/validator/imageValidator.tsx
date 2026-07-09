import toast from "react-hot-toast";

interface SourceItem {
    id: string;
    title: string;
    description: string;
    imgFile: File | null;
    previewUrl: string | null;
}
const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/avif",
    "image/png",
];

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export function SingleImage(patch: Partial<SourceItem>) {
    if (patch.imgFile) {
        if (!ALLOWED_IMAGE_TYPES.includes(patch.imgFile.type)) {
            toast.error("Only JPG, JPEG, WEBP, and AVIF images are allowed.");
            return false;
        }

        if (patch.imgFile.size > MAX_FILE_SIZE) {
            toast.error("Image size must not exceed 2 MB.");
            return false;
        }
    }
    return true;
}