import CertificateCard from "@/components/certificate-card";
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function Certificates() {
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
                    <CertificateCard
                        companyName="ServiceNow"
                        recipientName="Abhishek Madhura"
                        courseName="Certified System Administrator"
                        issueDate={new Date('2025-07-29')}
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
                    <CertificateCard
                        companyName="ServiceNow"
                        recipientName="Abhishek Madhura"
                        courseName="Certified Application Developer"
                        issueDate={new Date('2025-08-06')}
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
                    <CertificateCard
                        companyName="Oracle"
                        recipientName="Abhishek Madhura"
                        courseName="AI Foundation Associate"
                        issueDate={new Date('2025-05-16')}
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
                    <CertificateCard
                        companyName="Infosys"
                        recipientName="Abhishek Madhura"
                        courseName="Software Engineering and Agile software development"
                        issueDate={new Date('2024-07-21')}
                        certificateId=""
                        certLink="https://drive.google.com/file/d/1Y9_PSdzn8M0lvULe9kCV1zOMbN7wLUSt/preview"
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
                    <CertificateCard
                        companyName="Infosys"
                        recipientName="Abhishek Madhura"
                        courseName="Continuous Integration and Delivery - DevOps"
                        issueDate={new Date('2024-07-21')}
                        certificateId=""
                        certLink="https://drive.google.com/file/d/1Y9_PSdzn8M0lvULe9kCV1zOMbN7wLUSt/preview"
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
                    <CertificateCard
                        companyName="Oracle"
                        recipientName="Abhishek Madhura"
                        courseName="Java Fundamentals Cummutative"
                        issueDate={new Date('2024-07-21')}
                        certificateId=""
                        certLink="https://drive.google.com/file/d/10ApFV6Ye7r-cMGvgfzf8ffCZqZ8o3hlX/preview"
                    />
                </div>
            </div>
        </div>
    );
}