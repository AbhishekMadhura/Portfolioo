import WorkshopCertificateCard from "@/components/workshop-card";
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function Workshops() {
    return (
        <div className="container mx-auto p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <WorkshopCertificateCard
                        companyName="BVS Infotech Pvt Ltd"
                        recipientName="Abhishek Madhura"
                        courseName="AI Research & Development Intern"
                        isworkshop={false}
                        startDate={new Date('2025-09-01')}
                        endDate={new Date()}
                        certificateId=""
                        certLink=""
                    />
                </div>

                <div className="relative">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <WorkshopCertificateCard
                        companyName="IBM SkillsBuild"
                        recipientName="Abhishek Madhura"
                        courseName="Artificial Intelligence And Machine Learning"
                        isworkshop={false}
                        startDate={new Date()}
                        endDate={new Date()}
                        certificateId=""
                        certLink="https://drive.google.com/file/d/14ETJuFLN7tDXgO2OT9bVYmnRY7o8Wc3N/preview"
                    />
                </div>

                <div className="relative">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <WorkshopCertificateCard
                        companyName="Aacharya"
                        recipientName="Abhishek Madhura"
                        courseName="Core Python"
                        isworkshop={false}
                        startDate={new Date()}
                        endDate={new Date()}
                        certificateId=""
                        certLink="https://drive.google.com/file/d/14LNIV4Dycyo5PcT2LUKtJyuTgjuucmF5/preview"
                    />
                </div>

                <div className="relative">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <WorkshopCertificateCard
                        companyName="GJ Solutions Pvt Ltd"
                        recipientName="Abhishek Madhura"
                        courseName="Customer Care Executive"
                        isworkshop={false}
                        startDate={new Date('2023-01-01')}
                        endDate={new Date('2023-04-30')}
                        certificateId=""
                        certLink=""
                    />
                </div>
            </div>
        </div>
    );
}