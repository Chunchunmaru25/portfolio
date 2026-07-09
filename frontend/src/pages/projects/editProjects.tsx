
import { FieldLabel } from "../../components/twcss/FieldLabel";
import { Tag, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import useTheme from "../../components/hooks/useTheme";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { updateProjectApi } from "../../components/services/projects";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { WebRoute } from "../../routes/web.route";
import { getSingleProject } from "../../components/services/projects";
import { useNavigate } from "react-router-dom";

export default function EditProject() {
    const isDarkMode = useTheme();
    const [submitted, setSubmitted] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await getSingleProject(projectId);

                if (response.status === "success") {
                    setFormData((prev) => ({ ...prev, title: response.data.title, description: response.data.description }));
                } else {
                    toast.error(response.message);
                }
            } catch {
                navigate(WebRoute.LOGIN);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    const handleSubmit = async () => {
        setLoading(true);

        try {
            const response = await updateProjectApi(projectId, {
                title: formData.title,
                description: formData.description,
            });
            if (response.status === "error") {
                toast.error("Failed to update");
            }
            toast.success(response.message);
            setSubmitted(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setSubmitted(false);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${isDarkMode
                ? "bg-[#050505]"
                : "bg-gray-100"
                }`}
        >
            <section
                className={`w-full max-w-2xl rounded-2xl border p-8 shadow-lg transition-colors ${isDarkMode
                    ? "bg-[#0A0A0A] text-white border-white/10"
                    : "bg-gray-50 text-black border-gray-200"
                    }`}
            >
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={WebRoute.LOGIN}>Login</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={WebRoute.CONTROL_PANEL}>Control Panel</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>Edit Project</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mb-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div
                            className={`rounded-full p-3 ${isDarkMode
                                ? "bg-cyan-500/10 text-cyan-400"
                                : "bg-cyan-100 text-cyan-600"
                                }`}
                        >
                            <Tag size={24} />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold">Edit Project</h2>

                    <p
                        className={`mt-2 text-sm ${isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                            }`}
                    >
                        Update the title and description
                    </p>
                </div>

                <FieldLabel hint="">
                    <span className="inline-flex items-center gap-2">
                        <Tag size={14} />
                        Project
                    </span>
                </FieldLabel>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <Label
                            htmlFor="title"
                            className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                            Title
                        </Label>
                        <Input
                            id="title"
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                            required
                            autoComplete="email"
                            placeholder="you@domain.com"
                            className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="description"
                            className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                            required
                            placeholder="DESCRIPTION"
                            className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                        />
                    </div>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={submitted}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-200
                        ${submitted
                                ? "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-600"
                                : isDarkMode
                                    ? "bg-cyan-500 text-white hover:bg-cyan-400 active:scale-[0.98]"
                                    : "bg-cyan-600 text-white hover:bg-cyan-700 active:scale-[0.98]"
                            }`}
                    >
                        {loading ?
                            (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Saving ...
                                </>
                            ) :
                            (
                                <>
                                    Save
                                </>
                            )}
                    </Button>
                </form>

            </section >
        </div >
    );
}