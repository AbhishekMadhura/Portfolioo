
import WorkshopCertificateCard from "@/components/workshop-card";

export default function Workshops() {
    return (
        <div className="container mx-auto p-4 sm:p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

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
        </div>
    );
}