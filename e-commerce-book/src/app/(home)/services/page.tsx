import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import servicesImage from '@/assets/images/heroBackground.jpg';
import ServiceCard from "@/components/ServiceCard";

const ourServices = [
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/studentcounselling"
    },
    {
        image: servicesImage,
        title: 'University Admission',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/destination/universityadmission"
    },
    {
        image: servicesImage,
        title: 'Visa Assistance',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/visa-acceptance"
    },
    {
        image: servicesImage,
        title: 'Test Preparation',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/test-list"
    },
    {
        image: servicesImage,
        title: 'Career Guidance',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/career-counselling"
    },
    {
        image: servicesImage,
        title: 'Scholarship Assistance',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.',
        link:"/scholarship-assistance"
    },
]

export default function Services() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/services"
                title="Services"
            />
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Our Services"
                    title="At AI Global Education, we are committed to guiding students towards academic success by providing expert education consulting and migration services. Since 2006, we have helped students pursue their dreams of studying abroad by offering ethical, insightful, and transparent guidance tailored to their career aspirations."
                />
                <div className="grid grid-cols-3 w-full gap-8 gap-y-16">
                    {
                        ourServices.map((service, index) => {
                            return (
                                <ServiceCard
                                link={service.link}
                                    key={index}
                                    image={service.image}
                                    title={service.title}
                                    miniDescription={service.miniDescription}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}