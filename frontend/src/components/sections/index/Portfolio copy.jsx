import { useEffect, useState } from 'react';
import MorphingCard from "../../twcss/MorphingCard"
import useProject from '../../hooks/useProjects';
// import { div } from 'three/src/nodes/math/OperatorNode';
export default function Portfolio() {
    const { Projects, loading } = useProject();

    return (
        <>
            <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {Projects.map((item) => (
                            <MorphingCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.description}
                                techstack={item.projectStacks.map((tech) => ({
                                    key: tech.id,
                                    techstack: tech.name,
                                }))}
                                images={item.source?.map((img) => ({
                                    key: img.id,
                                    caption: img.title,
                                    src: img.imgUrl,
                                    description: img.description,
                                }))}
                            />
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}