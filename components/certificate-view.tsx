interface CertificateViewerProps {
    link: string;
}
export default function CertificateViewer({link} : CertificateViewerProps) {
    return (
        <div className="flex justify-center items-center">
            <iframe
                src={link}
                className="w-auto h-[400px] md:w-[400px] md:h-[500px]"
            ></iframe>
        </div>
    );
}
