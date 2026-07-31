import { Header } from '@/app/sections/header';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Awards as AwardsSection } from '@/app/sections/awards';
import { Volunteering as VolunteeringSection } from '@/app/sections/volunteering';
import { Hobbies as HobbiesSection } from '@/app/sections/hobbies';
import { Tabs } from '@/components/tabs';

export default function Home() {
    return (
        <main className="font-mono lg:py-8 py-4 lg:max-w-7xl max-w-full mx-auto flex flex-1 flex-col lg:px-8 px-4 pb-16 overflow-x-hidden">
            <Header />
            <Tabs
                tabs={[
                    {
                        id: 'experience',
                        label: '💼 Experience',
                        content: <ExperienceSection />,
                    },
                    {
                        id: 'projects',
                        label: '🚀 Projects',
                        content: <ProjectsSection />,
                    },
                    {
                        id: 'awards',
                        label: '🏆 Awards & Volunteering',
                        content: (
                            <>
                                <AwardsSection />
                                <VolunteeringSection />
                            </>
                        ),
                    },
                    {
                        id: 'hobbies',
                        label: '🎨 Hobbies & Interests',
                        content: <HobbiesSection />,
                    },
                ]}
            />
        </main>
    );
}
