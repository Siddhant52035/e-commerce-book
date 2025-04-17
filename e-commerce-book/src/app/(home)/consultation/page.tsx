import PageHeader from "@/components/PageHeader";
import Contact from "@/sections/Contact";

export default function Consultation() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
            
                title="Contact Us"
            />
            <Contact
                className="pt-0 py-16"
            />
        </main>
    )
}